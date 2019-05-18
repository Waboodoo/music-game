const MusicUtils = {
    
    getNoteFromName(name) {
        return this._notes.find(note => note.name === name);
    },
    
    getNoteName(note, useSimpleName) {
        return useSimpleName ? (note.simpleName || note.name) : note.name;
    },
    
    _notes: [
        {
            name: "Ges'",
            offset: -10,
            clef: Clef.BASS,
            modifier: NoteModifier.FLAT,
        },
        {
            name: "G'",
            offset: -10,
            clef: Clef.BASS,
        },
        {
            name: "Gis'",
            offset: -10,
            clef: Clef.BASS,
            modifier: NoteModifier.SHARP,
        },
        {
            name: "As'",
            offset: -9,
            clef: Clef.BASS,
            modifier: NoteModifier.FLAT,
        },
        {
            name: "A'",
            offset: -9,
            clef: Clef.BASS,
        },
        {
            name: "Ais'",
            offset: -9,
            clef: Clef.BASS,
            modifier: NoteModifier.SHARP,
        },
        {
            name: "B'",
            offset: -8,
            clef: Clef.BASS,
            modifier: NoteModifier.FLAT,
        },
        {
            name: "H'",
            offset: -8,
            clef: Clef.BASS,
        },
        {
            name: "His'",
            offset: -8,
            clef: Clef.BASS,
            modifier: NoteModifier.SHARP,
        },
        {
            name: "Ces",
            offset: -7,
            clef: Clef.BASS,
            modifier: NoteModifier.FLAT,
        },
        {
            name: "C",
            offset: -7,
            clef: Clef.BASS,
        },
        {
            name: "Cis",
            offset: -7,
            clef: Clef.BASS,
            modifier: NoteModifier.SHARP,
        },
        {
            name: "Des",
            offset: -6,
            clef: Clef.BASS,
            modifier: NoteModifier.FLAT,
        },
        {
            name: "D",
            offset: -6,
            clef: Clef.BASS,
        },
        {
            name: "Dis",
            offset: -6,
            clef: Clef.BASS,
            modifier: NoteModifier.SHARP,
        },
        {
            name: "Es",
            offset: -5,
            clef: Clef.BASS,
            modifier: NoteModifier.FLAT,
        },
        {
            name: "E",
            offset: -5,
            clef: Clef.BASS,
        },
        {
            name: "Eis",
            offset: -5,
            clef: Clef.BASS,
            modifier: NoteModifier.SHARP,
        },
        {
            name: "Fes",
            offset: -4,
            clef: Clef.BASS,
            modifier: NoteModifier.FLAT,
        },
        {
            name: "F",
            offset: -4,
            clef: Clef.BASS,
        },
        {
            name: "Fis",
            offset: -4,
            clef: Clef.BASS,
            modifier: NoteModifier.SHARP,
        },
        {
            name: "Ges",
            offset: -3,
            clef: Clef.BASS,
            modifier: NoteModifier.FLAT,
        },
        {
            name: "G",
            offset: -3,
            clef: Clef.BASS,
        },
        {
            name: "Gis",
            offset: -3,
            clef: Clef.BASS,
            modifier: NoteModifier.SHARP,
        },
        {
            name: "As",
            offset: -2,
            clef: Clef.BASS,
            modifier: NoteModifier.FLAT,
        },
        {
            name: "A",
            offset: -2,
            clef: Clef.BASS,
        },
        {
            name: "Ais",
            offset: -2,
            clef: Clef.BASS,
            modifier: NoteModifier.SHARP,
        },
        {
            name: "B",
            offset: -1,
            clef: Clef.BASS,
            modifier: NoteModifier.FLAT,
        },
        {
            name: "H",
            offset: -1,
            clef: Clef.BASS,
        },
        {
            name: "His",
            offset: -1,
            clef: Clef.BASS,
            modifier: NoteModifier.SHARP,
        },
        {
            name: "ces",
            offset: 0,
            clef: Clef.BASS,
            modifier: NoteModifier.FLAT,
        },
        {
            name: "c",
            offset: 0,
            clef: Clef.BASS,
        },
        {
            name: "cis",
            offset: 0,
            clef: Clef.BASS,
            modifier: NoteModifier.SHARP,
        },
        {
            name: "des",
            offset: 1,
            clef: Clef.BASS,
            modifier: NoteModifier.FLAT,
        },
        {
            name: "d",
            offset: 1,
            clef: Clef.BASS,
        },
        {
            name: "dis",
            offset: 1,
            clef: Clef.BASS,
            modifier: NoteModifier.SHARP,
        },
        {
            name: "es",
            offset: 2,
            clef: Clef.BASS,
            modifier: NoteModifier.FLAT,
        },
        {
            name: "e",
            offset: 2,
            clef: Clef.BASS,
        },
        {
            name: "eis",
            offset: 2,
            clef: Clef.BASS,
            modifier: NoteModifier.SHARP,
        },
        {
            name: "fes",
            offset: 3,
            clef: Clef.BASS,
            modifier: NoteModifier.FLAT,
        },
        {
            name: "f",
            offset: 3,
            clef: Clef.BASS,
        },
        {
            name: "fis",
            offset: 3,
            clef: Clef.BASS,
            modifier: NoteModifier.SHARP,
        },
        {
            name: "ges",
            offset: 4,
            clef: Clef.BASS,
            modifier: NoteModifier.FLAT,
        },
        {
            name: "g",
            offset: 4,
            clef: Clef.BASS,
        },
        {
            name: "gis",
            offset: 4,
            clef: Clef.BASS,
            modifier: NoteModifier.SHARP,
        },
        {
            name: "as",
            offset: 5,
            clef: Clef.BASS,
            modifier: NoteModifier.FLAT,
        },
        {
            name: "a",
            offset: 5,
            clef: Clef.BASS,
        },
        {
            name: "ais",
            offset: 5,
            clef: Clef.BASS,
            modifier: NoteModifier.SHARP,
        },
        {
            name: "b",
            offset: 6,
            clef: Clef.BASS,
            modifier: NoteModifier.FLAT,
        },
        {
            name: "h",
            offset: 6,
            clef: Clef.BASS,
        },
        {
            name: "his",
            offset: 6,
            clef: Clef.BASS,
            modifier: NoteModifier.SHARP,
        },
        {
            name: "ces'",
            offset: -5,
            clef: Clef.TREBLE,
            modifier: NoteModifier.FLAT,
        },
        {
            name: "c'",
            simpleName: "c",
            offset: -5,
            clef: Clef.TREBLE,
        },
        {
            name: "cis'",
            offset: -5,
            clef: Clef.TREBLE,
            modifier: NoteModifier.SHARP,
        },
        {
            name: "des'",
            offset: -4,
            clef: Clef.TREBLE,
            modifier: NoteModifier.FLAT,
        },
        {
            name: "d'",
            simpleName: "d",
            offset: -4,
            clef: Clef.TREBLE,
        },
        {
            name: "dis'",
            offset: -4,
            clef: Clef.TREBLE,
            modifier: NoteModifier.SHARP,
        },
        {
            name: "es'",
            offset: -3,
            clef: Clef.TREBLE,
            modifier: NoteModifier.FLAT,
        },
        {
            name: "e'",
            simpleName: "e",
            offset: -3,
            clef: Clef.TREBLE,
        },
        {
            name: "eis'",
            offset: -3,
            clef: Clef.TREBLE,
            modifier: NoteModifier.SHARP,
        },
        {
            name: "fes'",
            offset: -2,
            clef: Clef.TREBLE,
            modifier: NoteModifier.FLAT,
        },
        {
            name: "f'",
            simpleName: "f",
            offset: -2,
            clef: Clef.TREBLE,
        },
        {
            name: "fis'",
            offset: -2,
            clef: Clef.TREBLE,
            modifier: NoteModifier.SHARP,
        },
        {
            name: "ges'",
            offset: -1,
            clef: Clef.TREBLE,
            modifier: NoteModifier.FLAT,
        },
        {
            name: "g'",
            simpleName: "g",
            offset: -1,
            clef: Clef.TREBLE,
        },
        {
            name: "gis'",
            offset: -1,
            clef: Clef.TREBLE,
            modifier: NoteModifier.SHARP,
        },
        {
            name: "as'",
            offset: 0,
            clef: Clef.TREBLE,
            modifier: NoteModifier.FLAT,
        },
        {
            name: "a'",
            simpleName: "a",
            offset: 0,
            clef: Clef.TREBLE,
        },
        {
            name: "ais'",
            offset: 0,
            clef: Clef.TREBLE,
            modifier: NoteModifier.SHARP,
        },
        {
            name: "b'",
            offset: 1,
            clef: Clef.TREBLE,
            modifier: NoteModifier.FLAT,
        },
        {
            name: "h'",
            simpleName: "h",
            offset: 1,
            clef: Clef.TREBLE,
        },
        {
            name: "his'",
            offset: 1,
            clef: Clef.TREBLE,
            modifier: NoteModifier.SHARP,
        },
        {
            name: "ces''",
            offset: 2,
            clef: Clef.TREBLE,
            modifier: NoteModifier.FLAT,
        },
        {
            name: "c''",
            simpleName: "c",
            offset: 2,
            clef: Clef.TREBLE,
        },
        {
            name: "cis''",
            offset: 2,
            clef: Clef.TREBLE,
            modifier: NoteModifier.SHARP,
        },
        {
            name: "des''",
            offset: 3,
            clef: Clef.TREBLE,
            modifier: NoteModifier.FLAT,
        },
        {
            name: "d''",
            simpleName: "d",
            offset: 3,
            clef: Clef.TREBLE,
        },
        {
            name: "dis''",
            offset: 3,
            clef: Clef.TREBLE,
            modifier: NoteModifier.SHARP,
        },
        {
            name: "es''",
            offset: 4,
            clef: Clef.TREBLE,
            modifier: NoteModifier.FLAT,
        },
        {
            name: "e''",
            simpleName: "e",
            offset: 4,
            clef: Clef.TREBLE,
        },
        {
            name: "eis''",
            offset: 4,
            clef: Clef.TREBLE,
            modifier: NoteModifier.SHARP,
        },
        {
            name: "fes''",
            offset: 5,
            clef: Clef.TREBLE,
            modifier: NoteModifier.FLAT,
        },
        {
            name: "f''",
            simpleName: "f",
            offset: 5,
            clef: Clef.TREBLE,
        },
        {
            name: "fis''",
            offset: 5,
            clef: Clef.TREBLE,
            modifier: NoteModifier.SHARP,
        },
        {
            name: "ges''",
            offset: 6,
            clef: Clef.TREBLE,
            modifier: NoteModifier.FLAT,
        },
        {
            name: "g''",
            offset: 6,
            clef: Clef.TREBLE,
        },
        {
            name: "gis''",
            offset: 6,
            clef: Clef.TREBLE,
            modifier: NoteModifier.SHARP,
        },
        {
            name: "as''",
            offset: 7,
            clef: Clef.TREBLE,
            modifier: NoteModifier.FLAT,
        },
        {
            name: "a''",
            offset: 7,
            clef: Clef.TREBLE,
        },
        {
            name: "ais''",
            offset: 7,
            clef: Clef.TREBLE,
            modifier: NoteModifier.SHARP,
        },
        {
            name: "b''",
            offset: 8,
            clef: Clef.TREBLE,
            modifier: NoteModifier.FLAT,
        },
        {
            name: "h''",
            offset: 8,
            clef: Clef.TREBLE,
        },
        {
            name: "his''",
            offset: 8,
            clef: Clef.TREBLE,
            modifier: NoteModifier.SHARP,
        },
        {
            name: "ces'''",
            offset: 9,
            clef: Clef.TREBLE,
            modifier: NoteModifier.FLAT,
        },
        {
            name: "c'''",
            offset: 9,
            clef: Clef.TREBLE,
        },
        {
            name: "cis'''",
            offset: 9,
            clef: Clef.TREBLE,
            modifier: NoteModifier.SHARP,
        },
    ],
    
};