/* Assets */
const Assets = {
    images: {},
    music: {},
};

/* Asset loading */
function preload() {
    // Backgrounds
    Assets.images.background1 = AssetLoader.getImage('backgrounds/background1.png');
    Assets.images.background2 = AssetLoader.getImage('backgrounds/background2.png');
    Assets.images.background3 = AssetLoader.getImage('backgrounds/background3.png');
    Assets.images.background4 = AssetLoader.getImage('backgrounds/background4.png');
    Assets.images.background5 = AssetLoader.getImage('backgrounds/background5.png');
    
    // Musical elements
    Assets.images.trebleClef = AssetLoader.getImage('treble-clef.png');
    Assets.images.bassClef = AssetLoader.getImage('bass-clef.png');
    Assets.images.timeSignature = AssetLoader.getImage('time-signature.png');
    Assets.images.bottomNote = AssetLoader.getImage('bottom-note.svg');
    Assets.images.topNote = AssetLoader.getImage('top-note.svg');
    Assets.images.sharpSign = AssetLoader.getImage('sharp-sign.png');
    Assets.images.flatSign = AssetLoader.getImage('flat-sign.png');
    
    // Background music
    Assets.music = AssetLoader.getSound('music.mp3');
}

/* Canvas initialization */
function setup() {
    // Set up canvas
    const canvas = createCanvas(Config.canvas.width, Config.canvas.height);
    canvas.parent('canvasContainer');
    frameRate(Config.frameRate);
    
    // Controller logic
    MusicPlayer.init(Assets.music);
    GameUI.init((eventName, data) => {
        console.log(`UI event: ${eventName}`);
        switch (eventName) {
            case GameUIEvent.TOGGLE_MUSIC: {
                MusicPlayer.toggle();
                break;
            }
            case GameUIEvent.TOGGLE_GAME: {
                Game.togglePaused();
                break;
            }
            case GameUIEvent.NEXT_LEVEL: {
                Game.transitionToNextLevel();
                break;
            }
            case GameUIEvent.OPTION_SELECTED: {
                Game.onOptionSelected(data.index);
                break;
            }
        }
    });
    Game.init((eventName) => {
        switch (eventName) {
            case GameEvent.OPTIONS_CHANGED: {
                GameUI.setOptions(
                    Game.getSelectableOptions()
                        .map(option => option.name)
                );
                break;
            }
        }
    });
    
    Game.start();
}

/* Canvas drawing */
function draw() {
    // Iterate game & animation state
    Game.tick();
    
    // Draw UI
    GameUI.resetCanvas(Game.getBackgroundName());
    if (Game.isComplete()) {
        GameUI.drawCompleteState();
    } else {
        GameUI.drawLevelNumber(Game.getLevelNumber());
    }
    GameUI.setScore(Game.getScore());
    
    // Draw static musical elements
    MusicDrawings.drawStaffs(Game.hasTrebleClef(), Game.hasBassClef());
    
    // Draw animated musical elements
    if (Game.isRunning()) {
        MusicDrawings.drawNote(Game.getCurrentNote(), Game.getClefPositionForCurrentNote(), Game.getNoteProgress());
    }
}
