const Config = {
    frameRate: 30,
    
    secondsPerNote: 7,
    gracePeriodInSeconds: 1,
    pointsPerNote: 10,
    pointDeductionForWrongAnswer: 2,
    pointDeductionForNoAnswer: 1,
    
    canvas: {
        width: 1024,
        height: 768,
    },
    
    clef: {
        horizontalOffset: 20,
    },
    
    staff: {
        verticalOffset: 200,
        verticalLineSpacing: 20,
        verticalSpacing: 100,
    },
    
    note: {
        horizontalOffset: 150,
        verticalOffsets: {
            [Clef.TREBLE]: {
                top: 39,
                bottom: -18,
            },
            [Clef.BASS]: {
                top: 39,
                bottom: -18,
            },
        },
        helperLineRatio: 1.5,
        modifiers: {
            verticalOffsets: {
                [NoteModifier.SHARP]: {
                    top: 28,
                    bottom: 28,
                },
                [NoteModifier.FLAT]: {
                    top: 15,
                    bottom: 15,
                },
            },
            horizontalOffsetToNote: 10,
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
            background: 'background1',
            completionScore: 200,
        },
        /* Level 2 */
        {
            trebleClef: true,
            bassClef: false,
            notes: ["g'", "a'", "h'", "c''", "d''"],
            otherNotes: ["d'", "e'", "f'", "g'", "a'", "h'", "c''"],
            useSimpleNames: true,
            background: 'background1',
            completionScore: 200,
        },
        /* Level 3 */
        {
            trebleClef: true,
            bassClef: false,
            notes: ["f'", "g'", "a'", "h'", "c''", "d''"],
            otherNotes: ["d'", "e'", "f'", "g'", "a'", "h'", "c''"],
            background: 'background1',
            completionScore: 200,
        },
        /* Level 4 */
        {
            trebleClef: true,
            bassClef: false,
            notes: ["e'", "f'", "g'", "a'", "h'", "c''", "d''", "e''", "f''"],
            otherNotes: ["c'", "d'", "e'", "f'", "g'", "a'", "h'", "c''", "d''", "e''", "f''", "g''", "a''", "h''", "c'''"],
            background: 'background1',
            completionScore: 250,
        },
        /* Level 5 */
        {
            trebleClef: true,
            bassClef: false,
            notes: ["d'", "e'", "f'", "g'", "a'", "h'", "c''", "d''", "e''", "f''", "g''"],
            otherNotes: ["c'", "d'", "e'", "f'", "g'", "a'", "h'", "c''", "d''", "e''", "f''", "g''", "a''", "h''", "c'''"],
            background: 'background1',
            completionScore: 250,
        },
        /* Level 6 */
        {
            trebleClef: true,
            bassClef: false,
            notes: ["c'", "d'", "e'", "f'", "g'", "a'", "h'", "c''", "d''", "e''", "f''", "g''", "a''", "h''", "c'''"],
            otherNotes: ["c'", "d'", "e'", "f'", "g'", "a'", "h'", "c''", "d''", "e''", "f''", "g''", "a''", "h''", "c'''"],
            background: 'background1',
            completionScore: 250,
        },
        /* Level 7 */
        {
            trebleClef: false,
            bassClef: true,
            notes: ["g", "a", "h", "c'"],
            otherNotes: ["c", "d", "e", "f", "g", "a", "h", "c'"],
            background: 'background2',
            completionScore: 200,
        },
        /* Level 8 */
        {
            trebleClef: false,
            bassClef: true,
            notes: ["c", "d", "e", "f", "g", "a", "h", "c'"],
            otherNotes: ["c", "d", "e", "f", "g", "a", "h", "c'"],
            background: 'background2',
            completionScore: 200,
        },
        /* Level 9 */
        {
            trebleClef: false,
            bassClef: true,
            notes: ["G", "A", "H", "c", "d", "e", "f", "g", "a", "h", "c'"],
            otherNotes: ["C", "D", "E", "F", "G", "A", "H", "c", "d", "e", "f", "g", "a", "h", "c'"],
            background: 'background2',
            completionScore: 250,
        },
        /* Level 10 */
        {
            trebleClef: false,
            bassClef: true,
            notes: ["C", "D", "E", "F", "G", "A", "H", "c", "d", "e", "f", "g", "a", "h", "c'"],
            background: 'background2',
            completionScore: 250,
        },
        /* Level 11 */
        {
            trebleClef: false,
            bassClef: true,
            notes: ["G'", "A'", "H'", "C", "D", "E", "F", "G", "A", "H"],
            background: 'background2',
            completionScore: 200,
        },
        /* Level 12 */
        {
            trebleClef: false,
            bassClef: true,
            notes: ["G'", "A'", "H'", "C", "D", "E", "F", "G", "A", "H"],
            background: 'background2',
            completionScore: 200,
        },
        /* Level 13 */
        {
            trebleClef: false,
            bassClef: true,
            notes: ["G'", "A'", "H'", "C", "D", "E", "F", "G", "A", "H", "c", "d", "e", "f", "g", "a", "h", "c'"],
            background: 'background2',
            completionScore: 250,
        },
        /* Level 14 */
        {
            trebleClef: true,
            bassClef: true,
            notes: ["G'", "A'", "H'", "C", "D", "E", "F", "G", "A", "H", "c", "d", "e", "f", "g", "a", "h", "c'", "d'", "e'", "f'", "g'", "a'", "h'", "c''", "d''", "e''", "f''", "g''", "a''", "h''", "c'''"],
            background: 'background3',
            completionScore: 300,
        },
        /* Level 15 */
        {
            trebleClef: true,
            bassClef: false,
            notes: ["c'", "cis'", "d'", "dis'", "e'", "eis'", "f'", "fis'", "g'", "gis'", "a'", "ais'", "h'", "his'", "c''", "cis''"],
            background: 'background4',
            completionScore: 250,
        },
        /* Level 16 */
        {
            trebleClef: false,
            bassClef: true,
            notes: ["G'", "Gis'", "A'", "Ais'", "H'", "His'", "C", "Cis", "D", "Dis", "E", "Eis", "F", "Fis", "G", "Gis", "A", "Ais", "H", "His", "c", "cis", "d", "dis", "e", "eis", "f", "fis", "g", "gis", "a", "ais", "h", "his", "c'", "cis'", "d'", "dis'", "e'", "eis'", "f'", "fis'"],
            background: 'background4',
            completionScore: 250,
        },
        /* Level 17 */
        {
            trebleClef: true,
            bassClef: true,
            notes: ["G'", "Gis'", "A'", "Ais'", "H'", "His'", "C", "Cis", "D", "Dis", "E", "Eis", "F", "Fis", "G", "Gis", "A", "Ais", "H", "His", "c", "cis", "d", "dis", "e", "eis", "f", "fis", "g", "gis", "a", "ais", "h", "his", "c'", "cis'", "d'", "dis'", "e'", "eis'", "f'", "fis'", "g'", "gis'", "a'", "ais'", "h'", "his'", "c''", "cis''", "d''", "dis''", "e''", "eis''", "f''", "fis''", "g''", "gis''", "a''", "ais''", "h''", "his''", "c'''", "cis'''"],
            background: 'background3',
            completionScore: 300,
        },
        /* Level 18 */
        {
            trebleClef: true,
            bassClef: false,
            notes: ["ces'", "c'", "des'", "d'", "es'", "e'", "fes'", "f'", "ges'", "g'", "as'", "a'", "b'", "h'", "ces''", "c''", "des''", "d''", "es''", "e''", "fes''", "f''", "ges''", "g''", "as''", "a''", "b''", "h''", "ces'''"],
            background: 'background5',
            completionScore: 250,
        },
        /* Level 19 */
        {
            trebleClef: false,
            bassClef: true,
            notes: ["Ges'", "G'", "As'", "A'", "B'", "H'", "Ces", "C", "Des", "D", "Es", "E", "Fes", "F", "Ges", "G", "As", "A", "B", "H", "ces", "c", "des", "d", "es", "e", "fes", "f", "ges", "g", "as", "a", "b", "h", "ces'", "c'", "des'", "d'", "es'", "e", "fes'"],
            background: 'background5',
            completionScore: 250,
        },
        /* Level 20 */
        {
            trebleClef: true,
            bassClef: true,
            notes: ["G'", "Gis'", "As'", "A'", "Ais'", "B'", "H'", "His'", "Ces", "C", "Cis", "Des", "D", "Dis", "Es", "E", "Eis", "Fes", "F", "Fis", "Ges", "G", "Gis", "As", "A", "Ais", "B", "H", "His", "ces", "c", "cis", "des", "d", "dis", "es", "e", "eis", "fes", "f", "fis", "ges", "g", "gis", "as", "a", "ais", "b", "h", "his", "ces'", "c'", "cis'", "des'", "d'", "dis'", "es'", "e'", "eis'", "fes'", "f'", "fis'", "ges'", "g'", "gis'", "as'", "a'", "ais'", "b'", "h'", "his'", "ces''", "c''", "cis''", "des''", "d''", "dis''", "es''", "e''", "eis''", "fes''", "f''", "fis''", "ges''", "g''", "gis''", "as''", "a''", "ais''", "b''", "h''", "his''", "ces'''", "c'''", "cis'''"],
            background: 'background3',
            completionScore: 300,
        },
        
    ],
};