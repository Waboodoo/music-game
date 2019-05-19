const Clef = {
    TREBLE: 'treble',
    BASS: 'bass',
};

const NoteModifier = {
    FLAT: 'flat',
    SHARP: 'sharp',
};

const GameState = {
    RUNNING: 'running',
    PAUSED: 'paused',
    COMPLETE: 'complete',
};

const NoteState = {
    VISIBLE: 'visible',
    WAITING: 'waiting',
};

const ClefLocation = {
    TOP: 'top',
    MIDDLE: 'middle',
    BOTTOM: 'bottom',
};

const GameUIEvent = {
    TOGGLE_MUSIC: 'toggleMusic',
    TOGGLE_GAME: 'toggleGame',
    NEXT_LEVEL: 'nextLevel',
    OPTION_SELECTED: 'optionSelected',
};

const GameEvent = {
    OPTIONS_CHANGED: 'optionsChanged',
    GAME_STATE_CHANGED: 'gameStateChanged',
    SCORE_CHANGED: 'scoreChanged',
};

const MusicEvent = {
    MUSIC_STATE_CHANGED: 'musicStateChanged',
};
