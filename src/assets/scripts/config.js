const Config = {
    canvas: {
        width: Math.max(window.innerWidth, 1024),
        height: Math.max(window.innerHeight, 768),
    },
    clef: {
        horizontalOffset: 20,
    },
    stave: {
        verticalOffset: 100,
        verticalLineSpacing: 20,
        verticalSpacing: 100,
    },
    
    levels: [
        /* Level 1 */
        {
            violinClef: true,
            bassClef: true,
        },
    ],
};