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

function shuffle(array) {
    const mapped = array.map(element => {
        return {
            key: Math.random(),
            value: element,
        };
    });
    mapped.sort();
    return mapped.map(element => element.value);
}