const MusicPlayer = {
    
    _music: null,
    
    init(music) {
        this._music = music;
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
    },
    
};