/* Assets* */
const Assets = {
    images: {},
    music: {},
};

/* Game Logic */
const Game = {
    state: {
        level: 1,
    },
    
    getLevelNumber() {
        return Game.state.level;
    },
    
    _getLevelConfig() {
        return Config.levels[Game.state.level - 1];
    },
    
    hasViolinClef() {
        return Game._getLevelConfig().violinClef;
    },
    
    hasBassClef() {
        return Game._getLevelConfig().bassClef;
    },
};

/* Asset loading */
function preload() {
    Assets.images.background = AssetLoader.getImage('background1.svg');
    Assets.images.cat = AssetLoader.getImage('cat.jpg');
    Assets.images.violinClef = AssetLoader.getImage('violin-clef.png');
    Assets.images.bassClef = AssetLoader.getImage('bass-clef.png');
    Assets.music = AssetLoader.getSound('Nyan Cat.mp3');
}

/* Canvas initialization */
function setup() {
	createCanvas(Config.canvas.width, Config.canvas.height);
    Assets.music.play();
}

/* Canvas drawing */
function draw() {
    resetCanvas();
    
    drawLevelNumber();
    drawStave();
}

function resetCanvas() {
    clear();
    background(Assets.images.background);
	image(Assets.images.cat, Math.random()*Config.canvas.width, Math.random()*Config.canvas.height);
}

function drawLevelNumber() {
    textSize(26);
    textAlign(CENTER);
    text(`Level ${Game.getLevelNumber()}`, width / 2, 50);
}

function drawStave() {
    let verticalOffset = Config.stave.verticalOffset;
    if (Game.hasViolinClef()) {
        const clef = Assets.images.violinClef
        for (var i = 0; i < 5; i++) {
            const y = verticalOffset + i * Config.stave.verticalLineSpacing;
            line(0, y, width, y);
        }
        const clefX = Config.clef.horizontalOffset;
        const clefY = verticalOffset - Config.stave.verticalLineSpacing * 1.5;
        const clefHeight = Config.stave.verticalLineSpacing * 8;
        const clefWidth = clefHeight / clef.height * clef.width;
        
        image(clef, clefX, clefY, clefWidth, clefHeight);
        
        verticalOffset += Config.stave.verticalSpacing + Config.stave.verticalLineSpacing * 5;
    }
    
    if (Game.hasBassClef()) {
        const clef = Assets.images.bassClef;
        for (var i = 0; i < 5; i++) {
            const y = verticalOffset + i * Config.stave.verticalLineSpacing;
            line(0, y, width, y);
        }
        const clefX = Config.clef.horizontalOffset;
        const clefY = verticalOffset - Config.stave.verticalLineSpacing * 1.5;
        const clefHeight = Config.stave.verticalLineSpacing * 8;
        const clefWidth = clefHeight / clef.height * clef.width;
        
        image(clef, clefX, clefY, clefWidth, clefHeight);
    }
}