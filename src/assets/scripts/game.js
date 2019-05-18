/* Game Logic */
const Game = {
    
    _eventListener: null,
    
    _state: {
        state: null,
        levelNumber: 0,
        score: 0,
        currentNote: null,
        currentLevel: null,
        selectableOptions: [],
        
        /* Indicates how far the current note has moved (goes from 0 to 1) */
        noteProgress: 0,
    },
    
    init(eventListener) {
        this._eventListener = eventListener;
    },
    
    start() {
        this._state.score = 0;
        this._state.levelNumber = 0;
        this._state.state = GameState.RUNNING;
        this._transitionToNextLevel();
    },
    
    tick() {
        if (!this.isRunning()) {
            return;
        }
        this._advanceProgress();
    },
    
    togglePaused() {
        if (this.isRunning()) {
            this._state.state = GameState.PAUSED;
            console.log("Game is paused");
        } else {
            this._transitionToNextNote();
            this._state.state = GameState.RUNNING;
            console.log("Game is resumed");
        }
    },
    
    isRunning() {
        return this._state.state === GameState.RUNNING;
    },
    
    isComplete() {
        return this._state.state === GameState.COMPLETE;
    },
    
    _advanceProgress() {
        this._state.noteProgress += this._getProgressStepSize();
        if (this._state.noteProgress >= 1) {
            this._transitionToNextNote();
        }
    },
    
    _getProgressStepSize() {
        return 1 / Config.frameRate / Config.secondsPerNote;
    },
    
    transitionToNextLevel() {
        // TODO: Check if allowed
        this._transitionToNextLevel();
    },
    
    _transitionToNextLevel() {
        if (this._state.state === GameState.COMPLETE) {
            this.start();
            return;
        }
        
        this._state.levelNumber++;
        this._state.noteProgress = 0;
        if (this._state.levelNumber > Config.levels.length) {
            this._transitionToCompletedState();
            return;
        }
        this._state.currentLevel = Config.levels[this._state.levelNumber - 1];
        this._transitionToNextNote();
        this._state.state = GameState.RUNNING;
    },
    
    _transitionToNextNote() {
        this._state.currentNote = this._getRandomNote();
        this._state.noteProgress = 0;
        this._state.selectableOptions = this._generateSelectableOptions();
        console.log("Current note: "+this.getCurrentNote().name);
        console.log("Selectable options: "+this._state.selectableOptions.map(option => option.name).join(', '));
        this._triggerEvent(GameEvent.OPTIONS_CHANGED);
    },
    
    _transitionToCompletedState() {
        this._state.state = GameState.COMPLETE;
    },
    
    getLevelNumber() {
        return this._state.levelNumber;
    },
    
    getScore() {
        return this._state.score;
    },
    
    getBackgroundName() {
        return this._getLevelConfig().background;
    },
    
    getCurrentNote() {
        return this._state.currentNote;
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
            console.log("CORRECT");
            this._onCorrectOptionSelected();
        } else {
            console.log("WRONG");
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
        console.log(`Gained ${points} points for correct answer`);
        this._state.score += points;
        this._transitionToNextNote();
    },
    
    _calculatePointsForNote() {
        const secondsTaken = this.getNoteProgress() * Config.secondsPerNote;
        const factor = Math.max(0, Math.min(1, 1 - ((secondsTaken - Config.gracePeriodInSeconds) / (Config.secondsPerNote - Config.gracePeriodInSeconds))));
        return Math.ceil(factor * Config.pointsPerNote);
    },
    
    _onWrongOptionSelected() {
        this._state.score = Math.max(this._state.score - Config.pointDeductionForWrongAnswer, 0);
        this._transitionToNextNote();
    },
    
    _triggerEvent(eventName) {
        this._eventListener(eventName);
    },
    
};