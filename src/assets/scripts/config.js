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
    note: {
        horizontalOffset: 100,
        verticalBottomOffset: 82,
        verticalTopOffset: 139,
        helperLineRatio: 1.5,
        animationDuration: 210, // frames at 30 fps
    },
    levels: [
        /* Level 1 */
        {
            violinClef: true,
            bassClef: false,
            notes: [0, 1, 2]
        },
    ],
};