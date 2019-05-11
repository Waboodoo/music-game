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
    
    // Background music
    Assets.music = AssetLoader.getSound('music.mp3');
}

/* Canvas initialization */
function setup() {
    MusicPlayer.init(Assets.music);
    GameUI.init((eventName) => {
        console.log(`UI event: ${eventName}`);
        switch (eventName) {
            case 'toggleMusic': {
                MusicPlayer.toggle();
                break;
            }
            case 'toggleGame': {
                Game.togglePaused();
                break;
            }
            case 'nextLevel': {
                Game.transitionToNextLevel();
                break;
            }
            case 'correctOptionSelected': {
                Game.onCorrectOptionSelected();
                break;
            }
        };
    });
    
	const canvas = createCanvas(Config.canvas.width, Config.canvas.height);
    canvas.parent('canvasContainer');
    frameRate(Config.frameRate);
    
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
    GameUI.drawScore(Game.getScore());
    
    // Draw static musical elements
    MusicDrawings.drawStaffs(Game.hasTrebleClef(), Game.hasBassClef());
    
    // Draw animated musical elements
    if (Game.isRunning()) {
        const currentNote = Game.getCurrentNote();
        const drawNoteOnBottomStaff = currentNote.clef == Clef.BASS && Game.hasTrebleClef();
        MusicDrawings.drawNote(currentNote, drawNoteOnBottomStaff, Game.getNoteProgress());
    }
}
