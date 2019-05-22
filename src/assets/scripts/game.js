/* Game Logic */
const Game = {
    
    _eventListener: null,
    
    _state: {
        state: null,
        levelNumber: 0,
        totalScore: 0,
        levelScore: 0,
        currentNote: null,
        currentLevel: null,
        selectableOptions: [],
        theoryVisible: false,
        
        noteState: NoteState.VISIBLE,
        /* Indicates how far the current note has moved (goes from 0 to 1) */
        noteProgress: 0,
    },
    
    init(eventListener) {
        this._eventListener = eventListener;
    },
    
    start() {
        this._setScore(0, 0);
        this._state.levelNumber = 0;
        this.transitionToNextLevel();
        this._setGameState(GameState.RUNNING);
    },
    
    _setGameState(state) {
        this._state.state = state;
        this._triggerEvent(GameEvent.GAME_STATE_CHANGED);
    },
    
    tick() {
        if (!this.isRunning() || this.isTheoryVisible()) {
            return;
        }
        this._advanceProgress();
    },
    
    togglePaused() {
        if (this.isRunning()) {
            this._setGameState(GameState.PAUSED);
        } else {
            this._transitionToNextNote();
            this._setGameState(GameState.RUNNING);
        }
    },
    
    isRunning() {
        return this._state.state === GameState.RUNNING;
    },
    
    isComplete() {
        return this._state.state === GameState.COMPLETE;
    },
    
    _advanceProgress() {
        switch (this._state.noteState) {
            case NoteState.WAITING: {
                this._state.noteProgress += this._getWaitingProgressStepSize();
                if (this._state.noteProgress >= 1) {
                    this._showNote();
                }
                break;
            }
            case NoteState.VISIBLE: {
                this._state.noteProgress += this._getVisibleProgressStepSize();
                if (this._state.noteProgress >= 1) {
                    this._onNoOptionSelected();
                }
                break;
            }
        }
    },
    
    _getVisibleProgressStepSize() {
        return this._secondsToStepProgressStep(Config.secondsPerNote);
    },
    
    _getWaitingProgressStepSize() {
        return this._secondsToStepProgressStep(Config.secondsBetweenNotes);
    },
    
    _secondsToStepProgressStep(seconds) {
        return 1 / Config.frameRate / seconds;
    },
    
    transitionToNextLevel() {
        if (this._state.state === GameState.COMPLETE) {
            this.start();
            return;
        }
        
        this._state.levelNumber++;
        this._state.levelScore = 0;
        this._state.noteProgress = 0;
        if (this._state.levelNumber > Config.levels.length) {
            this._transitionToCompletedState();
            return;
        }
        this._state.currentLevel = Config.levels[this._state.levelNumber - 1];
        this._transitionToNextNote();
        this._setGameState(GameState.RUNNING);
        this._triggerEvent(GameEvent.LEVEL_CHANGED);
    },
    
    _transitionToNextNote() {
        this._state.currentNote = this._getRandomNote();
        this._state.noteProgress = 0;
        this._state.noteState = NoteState.WAITING;
        this._state.selectableOptions = this._generateSelectableOptions();
        this._triggerEvent(GameEvent.OPTIONS_CHANGED);
    },
    
    _showNote() {
        this._state.noteProgress = 0;
        this._state.noteState = NoteState.VISIBLE;
    },
    
    _transitionToCompletedState() {
        this._setGameState(GameState.COMPLETE);
    },
    
    getLevelNumber() {
        return this._state.levelNumber;
    },
    
    getTotalScore() {
        return this._state.totalScore;
    },
    
    getLevelScore() {
        return this._state.levelScore;
    },

    getLevelCompletionScore() {
        return this._getLevelConfig().completionScore;
    },
    
    getColorStyle() {
        return this._getLevelConfig().colorStyle;
    },
    
    getCurrentNote() {
        return this._state.currentNote;
    },
    
    isNoteVisible() {
        return this._state.noteState === NoteState.VISIBLE;
    },
    
    getNoteProgress() {
        return this._state.noteProgress;
    },
    
    getClefPositionForCurrentNote() {
        if (Game.hasTrebleClef() && Game.hasBassClef()) {
            return this.getCurrentNote().clef === Clef.BASS ? ClefLocation.BOTTOM : ClefLocation.TOP;
        }
        return ClefLocation.MIDDLE;
    },
    
    _getLevelConfig() {
        return this._state.currentLevel;
    },
    
    hasTrebleClef() {
        return this._getLevelConfig().trebleClef;
    },
    
    hasBassClef() {
        return this._getLevelConfig().bassClef;
    },

    _getRandomNote() {
        const noteNames = this._getLevelConfig().notes;
        const noteName = noteNames[Math.floor(Math.random() * noteNames.length)];
        return MusicUtils.getNoteFromName(noteName);
    },
    
    _generateSelectableOptions() {
        const currentNote = this.getCurrentNote();
        const currentLevel = this._getLevelConfig();
        const correctOption = MusicUtils.getNoteName(currentNote, currentLevel.useSimpleNames);
        const otherOptions = this._getLevelsOtherNotes(currentLevel)
            .map(note => MusicUtils.getNoteName(note, currentLevel.useSimpleNames))
            .filter(noteName => noteName !== correctOption);
            
        let finalOptions = shuffle(otherOptions).slice(0, 5);
        finalOptions.push(correctOption);
        finalOptions = shuffle(finalOptions);
        
        return finalOptions.map(option => {
            return {
                name: option,
                isCorrect: option === correctOption,
            };
        });
    },
    
    _getLevelsOtherNotes(levelConfig) {
        return (levelConfig.otherNotes || levelConfig.notes)
            .map(noteName => MusicUtils.getNoteFromName(noteName));
    },
    
    getSelectableOptions() {
        return this._state.selectableOptions;
    },
    
    onOptionSelected(index) {
        const option = this._getOptionByIndex(index);
        if (option.isCorrect) {
            this._onCorrectOptionSelected();
        } else {
            this._onWrongOptionSelected();
        }
    },
    
    _getOptionByIndex(index) {
        return this._state.selectableOptions[index];
    },
    
    _onCorrectOptionSelected() {
        if (!this.isRunning()) {
            return;
        }
        const points = this._calculatePointsForNote();
        this._increaseScore(points);
        this._prepareForNextNote();
    },
    
    _calculatePointsForNote() {
        const secondsTaken = this.getNoteProgress() * Config.secondsPerNote;
        const factor = Math.max(0, Math.min(1, 1 - ((secondsTaken - Config.gracePeriodInSeconds) / (Config.secondsPerNote - Config.gracePeriodInSeconds))));
        return Math.ceil(factor * Config.pointsPerNote);
    },
    
    _onWrongOptionSelected() {
        this._decreaseScore(Config.pointDeductionForWrongAnswer);
        this._prepareForNextNote();
    },
    
    _onNoOptionSelected() {
        this._decreaseScore(Config.pointDeductionForNoAnswer);
        this._prepareForNextNote();
    },
    
    _prepareForNextNote() {
        this._state.noteState = NoteState.WAITING;
        this._transitionToNextNote();
    },
    
    _increaseScore(amount) {
        this._setScore(this._state.totalScore + amount, this._state.levelScore + amount);
    },
    
    _decreaseScore(amount) {
        this._increaseScore(-amount);
    },
    
    _setScore(totalScore, levelScore) {
        this._state.totalScore = Math.max(totalScore, 0);
        this._state.levelScore = Math.max(levelScore, 0);
        this._triggerEvent(GameEvent.SCORE_CHANGED);
    },
    
    _triggerEvent(eventName) {
        if (this._state.state) {
            this._eventListener(eventName);
        }
    },
    
    toggleTheory() {
        this._state.theoryVisible = !this._state.theoryVisible;
        this._triggerEvent(GameEvent.THEORY_TOGGLED);
    },
    
    isTheoryVisible() {
        return this._state.theoryVisible;
    },
    
    getTheoryUri() {
        return 'assets/documents/' + this._getLevelConfig().theory;
    },
    
};