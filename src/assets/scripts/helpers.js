const AssetLoader = {
    
    _getPath(file, type) {
        return `assets/${type}/${file}`;
    },
    
    getImage(file) {
        return loadImage(this._getPath(file, 'images'));
    },
    
    getSound(file) {
        return loadSound(this._getPath(file, 'sounds'));
    },
    
};