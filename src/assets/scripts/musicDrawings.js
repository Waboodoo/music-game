const MusicDrawings = {
    
    drawStaffs(withTrebleClef, withBassClef) {
        let verticalOffset = Config.staff.verticalOffset;
        if (withTrebleClef) {
            const clef = Assets.images.trebleClef
            for (let i = 0; i < 5; i++) {
                const y = verticalOffset + i * Config.staff.verticalLineSpacing;
                line(0, y, width, y);
            }
            const clefX = Config.clef.horizontalOffset;
            const clefY = verticalOffset - Config.staff.verticalLineSpacing * 1.5 + 10;
            const clefHeight = Config.staff.verticalLineSpacing * 6.5;
            const clefWidth = clefHeight / clef.height * clef.width;
            
            image(clef, clefX, clefY, clefWidth, clefHeight);
            
            const timeSignature = Assets.images.timeSignature;
            const timeX = clefX + 80;
            const timeY = clefY + 20;
            const timeHeight = Config.staff.verticalLineSpacing * 4;
            const timeWidth = timeHeight / timeSignature.height * timeSignature.width;
            image(timeSignature, timeX, timeY, timeWidth, timeHeight);
            
            verticalOffset += this._getVerticalOffsetBetweenClefs();
        }
        
        if (withBassClef) {
            const clef = Assets.images.bassClef;
            for (let i = 0; i < 5; i++) {
                const y = verticalOffset + i * Config.staff.verticalLineSpacing;
                line(0, y, width, y);
            }
            const clefX = Config.clef.horizontalOffset;
            const clefY = verticalOffset - Config.staff.verticalLineSpacing * 1.5 + 28;
            const clefHeight = Config.staff.verticalLineSpacing * 3.6;
            const clefWidth = clefHeight / clef.height * clef.width;
            
            image(clef, clefX, clefY, clefWidth, clefHeight);
            
            const timeSignature = Assets.images.timeSignature;
            const timeX = clefX + 80;
            const timeY = clefY + 2;
            const timeHeight = Config.staff.verticalLineSpacing * 4;
            const timeWidth = timeHeight / timeSignature.height * timeSignature.width;
            image(timeSignature, timeX, timeY, timeWidth, timeHeight);
        }
    },
    
    _getVerticalOffsetBetweenClefs() {
        return Config.staff.verticalSpacing + Config.staff.verticalLineSpacing * 5;
    },

    drawNote(note, useBottomClef, progress) {
        const yNote = this._getNoteVerticalOffset(note, useBottomClef);
        const noteImage = this._getNoteImage(note);
        const animationOffset = (Config.canvas.width - Config.note.horizontalOffset) * progress;
        const xNote = Config.note.horizontalOffset + animationOffset;
        image(noteImage, xNote, yNote);
        
        this._drawLedgerLines(note, noteImage.width, useBottomClef, xNote);
    },
    
    _getNoteImage(note) {
        return note.offset <= 0 ? Assets.images.bottomNote : Assets.images.topNote;
    },
    
    _getNoteVerticalOffset(note, useBottomClef) {
        let yNote = useBottomClef ? this._getVerticalOffsetBetweenClefs() : 0;
        yNote += Config.staff.verticalOffset;
        const offsets = Config.note.verticalOffsets[note.clef];
        yNote += note.offset <= 0 ? offsets.bottom : offsets.top;
        yNote -= note.offset * Config.staff.verticalLineSpacing / 2;
        return yNote;
    },

    _drawLedgerLines(note, noteWidth, useBottomClef, xOffset) {
        // Bottom helper lines (if any)
        for (let i = note.offset; i < -4; i++) {
            this._drawLedgerLine(i, noteWidth, useBottomClef, xOffset);
        }
        // Top helper lines (if any)
        for (let i = note.offset; i > 6; i--) {
            this._drawLedgerLine(i, noteWidth, useBottomClef, xOffset);
        }
    },

    _drawLedgerLine(offset, noteWidth, useBottomClef, xOffset) {
        if (offset % 2 == 0) {
            return;
        }
        const w = noteWidth * Config.note.helperLineRatio;
        const xLine = xOffset - (w - noteWidth) / 2;
        let yLine = Config.staff.verticalOffset - (offset - 5) * Config.staff.verticalLineSpacing / 2;
        if (useBottomClef) {
            yLine += this._getVerticalOffsetBetweenClefs();
        }
        line(xLine, yLine, xLine + w, yLine);
    },

};