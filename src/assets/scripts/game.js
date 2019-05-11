/* Game Logic */
const Game = {
    
    _state: {
        state: null,
        levelNumber: 0,
        score: 0,
        currentNote: null,
        currentLevel: null,
        
        /* Indicates how far the current note has moved (goes from 0 to 1) */
        noteProgress: 0,
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
        console.log("Current note: "+this.getCurrentNote().name);
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
    
    onCorrectOptionSelected() {
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
};