const GameUI = {
    
    _eventListener: null,
    
    init(eventListener) {
        this._eventListener = eventListener;
        this._bindUIElements();
    },
    
    _bindUIElements() {
        select('#musicToggle').mouseClicked(() => {
            this._triggerEvent('toggleMusic');
        });
        select('#gameToggle').mouseClicked(() => {
            this._triggerEvent('toggleGame');
        });
        select('#nextLevel').mouseClicked(() => {
            this._triggerEvent('nextLevel');
        });
        
        // TODO
        select('#correctOption').mouseClicked(() => {
            this._triggerEvent('correctOptionSelected');
        });
    },
    
    _triggerEvent(eventName) {
        this._eventListener(eventName);
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
    
    _drawMainText(message) {
        fill(0, 0, 0);
        textSize(36);
        textAlign(CENTER);
        text(message, width / 2, 80);
    },
    
    drawScore(score) {
        fill(255, 255, 255);
        textSize(30);
        textAlign(CENTER);
        text(`${score}`, width / 2, 130);
    },
    
};