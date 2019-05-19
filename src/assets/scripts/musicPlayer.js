const MusicPlayer = {
    
    _eventListener: null,
    
    _music: null,
    
    init(music, eventListener) {
        this._music = music;
        this._eventListener = eventListener;
    },
    
    isPlaying() {
        return this._music.isPlaying();
    },
    
    toggle() {
        if (this.isPlaying()) {
            this._music.pause();
        } else {
            this._music.loop();
        }
        this._triggerEvent(MusicEvent.MUSIC_STATE_CHANGED);
    },
    
    _triggerEvent(eventName) {
        this._eventListener(eventName);
    },
    
};