const GameUI = {
    
    _eventListener: null,
    
    _state: {
        previousScore: 0,
        totalScore: 0,
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
    
    resetCanvas(colorStyle) {
        clear();
        background(this._getBackgroundImage(colorStyle));
        select('#canvasContainer').class(`colorStyle${colorStyle}`);
    },
    
    _getBackgroundImage(colorStyle) {
        return Assets.images[`background${colorStyle}`];
    },

    setNextLevelVisible(isVisible) {
        if (isVisible) {
            select('#nextLevel').addClass('visible');
        } else {
            select('#nextLevel').removeClass('visible');
        }
    },
    
    drawLevelNumber(levelNumber) {
        this._drawMainText(`Level ${levelNumber}`);
    },
    
    drawCompleteState() {
        this._drawMainText('Game Over');
    },
    
    setOptions(options) {
        for (let i = 1; i <= 6; i++) {
            select(`#optionText${i}`).html(options[i-1]);
        }
    },
    
    setOptionsVisibility(isVisible) {
        for (let i = 1; i <= 6; i++) {
            const index = i - 1;
            if (isVisible) {
                select(`#option${i}`).addClass('visible');
            } else {
                select(`#option${i}`).removeClass('visible');
            }
        }
    },
    
    _drawMainText(message) {
        fill(0, 0, 0);
        textSize(36);
        textAlign(CENTER);
        text(message, width / 2, 60);
    },
    
    setTotalScore(totalScore) {
        if (totalScore != this._state.totalScore){
            this._state.previousScore = this._state.totalScore;
            this._state.totalScore = totalScore;
        }
    },
    
    drawScore() {
        fill(255, 255, 255);
        textSize(30);
        textAlign(CENTER);
        const totalScore = this._state.totalScore;
        const diff = totalScore - this._state.previousScore;
        stroke(diff >= 0 ? '#00AA00' : "#AA0000");
        strokeWeight(5);
        const diffText = diff > 0 ? `+${diff}` : `${diff}`;
        text(`${totalScore} (${diffText})`, width / 2, 110);
        stroke("#000000");
        strokeWeight(1);
    },
    
    setLevelScore(levelScore, levelCompletionScore) {
        this._state.levelScore = levelScore;
        this._state.levelCompletionScore = levelCompletionScore;
    },
    
    drawLevelScore() {
        const levelScore = this._state.levelScore;
        const levelCompletionScore = this._state.levelCompletionScore;
        fill(255, 255, 255);
        textSize(30);
        textAlign(CENTER);
        text(`${levelScore} / ${levelCompletionScore}`, width / 2, 160);
    },
    
    setMusicState(isPlaying) {
        if (isPlaying) {
            select(`#musicToggle`).addClass('playing');
        } else {
            select(`#musicToggle`).removeClass('playing');
        }
    },
    
    setGameButtonState(isRunning) {
        if (isRunning) {
            select(`#gameToggle`).removeClass('paused');
        } else {
            select(`#gameToggle`).addClass('paused');
        }
    },
    
};