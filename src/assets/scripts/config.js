const Config = {
    frameRate: 30,

    secondsPerNote: 7,
    secondsBetweenNotes: 0.5,
    gracePeriodInSeconds: 1,

    pointsPerNote: 10,
    pointDeductionForWrongAnswer: 2,
    pointDeductionForNoAnswer: 1,

    canvas: {
        width: 1024, /* pixels */
        height: 768, /* pixels */
    },

    clef: {
        horizontalOffset: 20, /* pixels */
    },

    staff: {
        verticalOffset: 230, /* pixels */
        verticalLineSpacing: 20, /* pixels */
        verticalSpacing: 80, /* pixels */
    },

    note: {
        horizontalOffset: 150, /* pixels */
        verticalOffsets: {
            [Clef.TREBLE]: {
                top: 39, /* pixels */
                bottom: -18, /* pixels */
            },
            [Clef.BASS]: {
                top: 39, /* pixels */
                bottom: -18, /* pixels */
            },
        },
        helperLineRatio: 1.5,
        modifiers: {
            verticalOffsets: {
                [NoteModifier.SHARP]: {
                    top: 28, /* pixels */
                    bottom: 28, /* pixels */
                },
                [NoteModifier.FLAT]: {
                    top: 15, /* pixels */
                    bottom: 15, /* pixels */
                },
            },
            horizontalOffsetToNote: 10, /* pixels */
        },
    },

    levels: [
        /* Level 1 */
        {
            trebleClef: true,
            bassClef: false,
            notes: ["a'", "h'", "c''"],
            otherNotes: ["d'", "e'", "f'", "g'", "a'", "h'", "c''"],
            useSimpleNames: true,
            colorStyle: 1,
            completionScore: 200,
            theory: 'theory/level01.pdf',
        },
        /* Level 2 */
        {
            trebleClef: true,
            bassClef: false,
            notes: ["g'", "a'", "h'", "c''", "d''"],
            otherNotes: ["d'", "e'", "f'", "g'", "a'", "h'", "c''"],
            useSimpleNames: true,
            colorStyle: 1,
            completionScore: 200,
            theory: 'theory/level02.pdf',
        },
        /* Level 3 */
        {
            trebleClef: true,
            bassClef: false,
            notes: ["f'", "g'", "a'", "h'", "c''", "d''"],
            otherNotes: ["d'", "e'", "f'", "g'", "a'", "h'", "c''"],
            colorStyle: 1,
            completionScore: 200,
            theory: 'theory/level03.pdf',
        },
        /* Level 4 */
        {
            trebleClef: true,
            bassClef: false,
            notes: ["e'", "f'", "g'", "a'", "h'", "c''", "d''", "e''", "f''"],
            otherNotes: ["c'", "d'", "e'", "f'", "g'", "a'", "h'", "c''", "d''", "e''", "f''", "g''", "a''", "h''", "c'''"],
            colorStyle: 1,
            completionScore: 250,
            theory: 'theory/level04.pdf',
        },
        /* Level 5 */
        {
            trebleClef: true,
            bassClef: false,
            notes: ["d'", "e'", "f'", "g'", "a'", "h'", "c''", "d''", "e''", "f''", "g''"],
            otherNotes: ["c'", "d'", "e'", "f'", "g'", "a'", "h'", "c''", "d''", "e''", "f''", "g''", "a''", "h''", "c'''"],
            colorStyle: 1,
            completionScore: 250,
            theory: 'theory/level05.pdf',
        },
        /* Level 6 */
        {
            trebleClef: true,
            bassClef: false,
            notes: ["c'", "d'", "e'", "f'", "g'", "a'", "h'", "c''", "d''", "e''", "f''", "g''", "a''", "h''", "c'''"],
            otherNotes: ["c'", "d'", "e'", "f'", "g'", "a'", "h'", "c''", "d''", "e''", "f''", "g''", "a''", "h''", "c'''"],
            colorStyle: 1,
            completionScore: 250,
            theory: 'theory/level06.pdf',
        },
        /* Level 7 */
        {
            trebleClef: false,
            bassClef: true,
            notes: ["g", "a", "h", "c'"],
            otherNotes: ["c", "d", "e", "f", "g", "a", "h", "c'"],
            colorStyle: 2,
            completionScore: 200,
            theory: 'theory/level07.pdf',
        },
        /* Level 8 */
        {
            trebleClef: false,
            bassClef: true,
            notes: ["c", "d", "e", "f", "g", "a", "h", "c'"],
            otherNotes: ["c", "d", "e", "f", "g", "a", "h", "c'"],
            colorStyle: 2,
            completionScore: 200,
            theory: 'theory/level08.pdf',
        },
        /* Level 9 */
        {
            trebleClef: false,
            bassClef: true,
            notes: ["G", "A", "H", "c", "d", "e", "f", "g", "a", "h", "c'"],
            otherNotes: ["C", "D", "E", "F", "G", "A", "H", "c", "d", "e", "f", "g", "a", "h", "c'"],
            colorStyle: 2,
            completionScore: 250,
            theory: 'theory/level09.pdf',
        },
        /* Level 10 */
        {
            trebleClef: false,
            bassClef: true,
            notes: ["C", "D", "E", "F", "G", "A", "H", "c", "d", "e", "f", "g", "a", "h", "c'"],
            colorStyle: 2,
            completionScore: 250,
            theory: 'theory/level10.pdf',
        },
        /* Level 11 */
        {
            trebleClef: false,
            bassClef: true,
            notes: ["G'", "A'", "H'", "C", "D", "E", "F", "G", "A", "H"],
            colorStyle: 2,
            completionScore: 200,
            theory: 'theory/level11.pdf',
        },
        /* Level 12 */
        {
            trebleClef: false,
            bassClef: true,
            notes: ["G'", "A'", "H'", "C", "D", "E", "F", "G", "A", "H"],
            colorStyle: 2,
            completionScore: 200,
            theory: 'theory/level12.pdf',
        },
        /* Level 13 */
        {
            trebleClef: false,
            bassClef: true,
            notes: ["G'", "A'", "H'", "C", "D", "E", "F", "G", "A", "H", "c", "d", "e", "f", "g", "a", "h", "c'"],
            colorStyle: 2,
            completionScore: 250,
            theory: 'theory/level13.pdf',
        },
        /* Level 14 */
        {
            trebleClef: true,
            bassClef: true,
            notes: ["G'", "A'", "H'", "C", "D", "E", "F", "G", "A", "H", "c", "d", "e", "f", "g", "a", "h", "c'", "d'", "e'", "f'", "g'", "a'", "h'", "c''", "d''", "e''", "f''", "g''", "a''", "h''", "c'''"],
            colorStyle: 3,
            completionScore: 300,
            theory: 'theory/level14.pdf',
        },
        /* Level 15 */
        {
            trebleClef: true,
            bassClef: false,
            notes: ["c'", "cis'", "d'", "dis'", "e'", "eis'", "f'", "fis'", "g'", "gis'", "a'", "ais'", "h'", "his'", "c''", "cis''"],
            colorStyle: 4,
            completionScore: 250,
            theory: 'theory/level15.pdf',
        },
        /* Level 16 */
        {
            trebleClef: false,
            bassClef: true,
            notes: ["G'", "Gis'", "A'", "Ais'", "H'", "His'", "C", "Cis", "D", "Dis", "E", "Eis", "F", "Fis", "G", "Gis", "A", "Ais", "H", "His", "c", "cis", "d", "dis", "e", "eis", "f", "fis", "g", "gis", "a", "ais", "h", "his", "c'", "cis'", "d'", "dis'", "e'", "eis'", "f'", "fis'"],
            colorStyle: 4,
            completionScore: 250,
            theory: 'theory/level16.pdf',
        },
        /* Level 17 */
        {
            trebleClef: true,
            bassClef: true,
            notes: ["G'", "Gis'", "A'", "Ais'", "H'", "His'", "C", "Cis", "D", "Dis", "E", "Eis", "F", "Fis", "G", "Gis", "A", "Ais", "H", "His", "c", "cis", "d", "dis", "e", "eis", "f", "fis", "g", "gis", "a", "ais", "h", "his", "c'", "cis'", "d'", "dis'", "e'", "eis'", "f'", "fis'", "g'", "gis'", "a'", "ais'", "h'", "his'", "c''", "cis''", "d''", "dis''", "e''", "eis''", "f''", "fis''", "g''", "gis''", "a''", "ais''", "h''", "his''", "c'''", "cis'''"],
            colorStyle: 3,
            completionScore: 300,
            theory: 'theory/level17.pdf',
        },
        /* Level 18 */
        {
            trebleClef: true,
            bassClef: false,
            notes: ["ces'", "c'", "des'", "d'", "es'", "e'", "fes'", "f'", "ges'", "g'", "as'", "a'", "b'", "h'", "ces''", "c''", "des''", "d''", "es''", "e''", "fes''", "f''", "ges''", "g''", "as''", "a''", "b''", "h''", "ces'''"],
            colorStyle: 5,
            completionScore: 250,
            theory: 'theory/level18.pdf',
        },
        /* Level 19 */
        {
            trebleClef: false,
            bassClef: true,
            notes: ["Ges'", "G'", "As'", "A'", "B'", "H'", "Ces", "C", "Des", "D", "Es", "E", "Fes", "F", "Ges", "G", "As", "A", "B", "H", "ces", "c", "des", "d", "es", "e", "fes", "f", "ges", "g", "as", "a", "b", "h", "ces'", "c'", "des'", "d'", "es'", "e", "fes'"],
            colorStyle: 5,
            completionScore: 250,
            theory: 'theory/level19.pdf',
        },
        /* Level 20 */
        {
            trebleClef: true,
            bassClef: true,
            notes: ["G'", "Gis'", "As'", "A'", "Ais'", "B'", "H'", "His'", "Ces", "C", "Cis", "Des", "D", "Dis", "Es", "E", "Eis", "Fes", "F", "Fis", "Ges", "G", "Gis", "As", "A", "Ais", "B", "H", "His", "ces", "c", "cis", "des", "d", "dis", "es", "e", "eis", "fes", "f", "fis", "ges", "g", "gis", "as", "a", "ais", "b", "h", "his", "ces'", "c'", "cis'", "des'", "d'", "dis'", "es'", "e'", "eis'", "fes'", "f'", "fis'", "ges'", "g'", "gis'", "as'", "a'", "ais'", "b'", "h'", "his'", "ces''", "c''", "cis''", "des''", "d''", "dis''", "es''", "e''", "eis''", "fes''", "f''", "fis''", "ges''", "g''", "gis''", "as''", "a''", "ais''", "b''", "h''", "his''", "ces'''", "c'''", "cis'''"],
            colorStyle: 3,
            completionScore: 300,
            theory: 'theory/level20.pdf',
        },

    ],
};
