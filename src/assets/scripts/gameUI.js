const GameUI = {
    
    _eventListener: null,
    
    _state: {
        previousScore: 0,
        score: 0,
    },
    
    init(eventListener) {
        this._eventListener = eventListener;
        this._bindUIElements();
    },
    
    _bindUIElements() {
        select('#musicToggle').mouseClicked(() => {
            this._triggerEvent(GameUIEvent.TOGGLE_MUSIC);
        });
        select('#gameToggle').mouseClicked(() => {
            this._triggerEvent(GameUIEvent.TOGGLE_GAME);
        });
        select('#nextLevel').mouseClicked(() => {
            this._triggerEvent(GameUIEvent.NEXT_LEVEL);
        });
        
        for (let i = 1; i <= 6; i++) {
            const index = i - 1;
            select(`#option${i}`).mouseClicked(() => {
                this._triggerEvent(GameUIEvent.OPTION_SELECTED, {
                    index: index,
                });
            });
        }
    },
    
    _triggerEvent(eventName, data) {
        this._eventListener(eventName, data);
    },
    
    resetCanvas(backgroundName) {
        clear();
        background(this._getBackgroundImage(backgroundName));
    },
    
    _getBackgroundImage(backgroundName) {
        return Assets.images[backgroundName];
    },

    _setNextLevelVisible(isVisible) {
        var display = isVisible ? 'table' : 'none';
        select('#nextLevel').elt.style.display = display;
    },
    
    drawLevelNumber(levelNumber) {
        this._drawMainText(`Level ${levelNumber}`);
    },
    
    drawCompleteState() {
        this._drawMainText('Game Over');
    },
    
    setOptions(options) {
        for (let i = 1; i <= 6; i++) {
            select(`#optionchild${i}`).html(options[i-1]);
        }
    },
    
    _drawMainText(message) {
        fill(0, 0, 0);
        textSize(36);
        textAlign(CENTER);
        text(message, width / 2, 80);
    },
    
    setScore(score) {
        if (score != this._state.score){
            this._state.previousScore = this._state.score;
            this._state.score = score;
        }
    },
    
    drawScore() {
        fill(255, 255, 255);
        textSize(30);
        textAlign(CENTER);
        var score = this._state.score;
        var diff = score - this._state.previousScore;
        stroke(diff >= 0 ? '#00AA00' : "#AA0000");
        strokeWeight(5);
        if (diff > 0) diff = `+${diff}`;
        text(`${score} (${diff})`, width / 2, 130);
        stroke("#000000");
        strokeWeight(1);
    },
    
    setLevelScore(levelScore, levelCompletionScore) {
        this._state.levelScore = levelScore;
        this._state.levelCompletionScore = levelCompletionScore;
    },
    
    drawLevelScore() {
        var levelScore = this._state.levelScore;
        var levelCompletionScore = this._state.levelCompletionScore;
        fill(255, 255, 255);
        textSize(30);
        textAlign(CENTER);
        text(`${levelScore} / ${levelCompletionScore}`, width / 2, 180);
        this._setNextLevelVisible(levelScore >= levelCompletionScore);
    },
    
};