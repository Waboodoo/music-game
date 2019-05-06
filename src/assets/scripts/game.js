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

    getRandomNote() {
        arr = Game._getLevelConfig().notes;
        var i = Math.floor(Math.random() * arr.length)
        return arr[i];
    },
};

var currentAnimationFrame = 0;
var currentNote = 0;

/* Asset loading */
function preload() {
    Assets.images.background = AssetLoader.getImage('background1.svg');
    Assets.images.violinClef = AssetLoader.getImage('violin-clef.png');
    Assets.images.bassClef = AssetLoader.getImage('bass-clef.png');
    Assets.images.bottomNote = AssetLoader.getImage('bottom-note.svg');
    Assets.images.topNote = AssetLoader.getImage('top-note.svg');
    // Assets.music = AssetLoader.getSound('Nyan Cat.mp3');
}

/* Canvas initialization */
function setup() {
	createCanvas(Config.canvas.width, Config.canvas.height);
    // Assets.music.play();
    frameRate(30);
    nextNote();
}

/* Canvas drawing */
function draw() {
    resetCanvas();

    currentAnimationFrame++;
    if (currentAnimationFrame >= Config.note.animationDuration) nextNote();
    
    drawLevelNumber();
    drawStave();
    drawNote(currentNote);

}

function resetCanvas() {
    clear();
    background(Assets.images.background);
}

function nextNote() {
    currentAnimationFrame = 0;
    currentNote = Game.getRandomNote();
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
        const clefY = verticalOffset - Config.stave.verticalLineSpacing * 1.5 + 10;
        const clefHeight = Config.stave.verticalLineSpacing * 6.5;
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
        const clefY = verticalOffset - Config.stave.verticalLineSpacing * 1.5 + 28;
        const clefHeight = Config.stave.verticalLineSpacing * 3.6;
        const clefWidth = clefHeight / clef.height * clef.width;
        
        image(clef, clefX, clefY, clefWidth, clefHeight);
    }
}

function drawNote(dist_from_a){
    var noteImg = dist_from_a <= 0 ? Assets.images.bottomNote : Assets.images.topNote;
    var verticalOffset = dist_from_a <= 0 ? Config.note.verticalBottomOffset : Config.note.verticalTopOffset;
    var y_note = verticalOffset - dist_from_a * Config.stave.verticalLineSpacing / 2;
    var animOffset = (width - Config.note.horizontalOffset) * currentAnimationFrame / Config.note.animationDuration;
    var x_note = Config.note.horizontalOffset + animOffset;
    image(noteImg, x_note, y_note);
    
    for (var i = dist_from_a; i < -4; i++) drawHelperLine(i, noteImg.width, animOffset)  // Bottom helper lines (if any)
    for (var i = dist_from_a; i > 6; i--) drawHelperLine(i, noteImg.width, animOffset)  // Top helper lines (if any)
}

function drawHelperLine(dist_from_a, noteWidth, animOffset){
    if (dist_from_a % 2 == 0) return;
    var w = noteWidth * Config.note.helperLineRatio;
    var x_line = Config.note.horizontalOffset - (w - noteWidth) / 2 + animOffset;
    var y_line = Config.stave.verticalOffset - (dist_from_a - 5) * Config.stave.verticalLineSpacing / 2;
    line(x_line, y_line, x_line + w, y_line);
}