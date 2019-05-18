const GameUI = {
    
    _eventListener: null,
    
    _state: {
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
    
    drawLevelNumber(levelNumber) {
        this._drawMainText(`Level ${levelNumber}`);
    },
    
    drawCompleteState() {
        this._drawMainText('Game Over');
    },
    
    setOptions(options) {
        for (let i = 1; i <= 6; i++) {
            select(`#option${i}`).html(options[i-1]);
        }
    },
    
    _drawMainText(message) {
        fill(0, 0, 0);
        textSize(36);
        textAlign(CENTER);
        text(message, width / 2, 80);
    },
    
    setScore(score) {
        this._state.score = score;
        this._drawScore(score);

        // TODO: If score changes from internal state, draw with animation
        // -> Will require to add a tick() function that gets called from main.js on every tick, similar to game.js
    },
    
    _drawScore(score) {
        fill(255, 255, 255);
        textSize(30);
        textAlign(CENTER);
        text(`${score}`, width / 2, 130);
    },
    
};