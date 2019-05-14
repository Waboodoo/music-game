const MusicDrawings = {
    
    drawStaffs(withTrebleClef, withBassClef) {
        let verticalOffset = Config.staff.verticalOffset;
        if (!withTrebleClef || !withBassClef) {
            verticalOffset += this._getVerticalOffsetBetweenClefs() / 2;
        }
        
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

    drawNote(note, clefLocation, progress) {
        const noteY = this._getNoteVerticalOffset(note, clefLocation);
        const noteImage = this._getNoteImage(note);
        const animationOffset = (Config.canvas.width - Config.note.horizontalOffset) * progress;
        const noteWidth = noteImage.width;
        const noteHeight = noteImage.height;
        let noteX = Config.note.horizontalOffset + animationOffset;
        
        if (note.modifier) {
            const modifierImage = note.modifier === NoteModifier.SHARP ? Assets.images.sharpSign : Assets.images.flatSign;
            const modifierY = this._getModifierVerticalOffset(note, clefLocation);
            const modifierX = noteX;
            const modifierHeight = noteHeight * 0.6;
            const modifierWidth = modifierHeight / modifierImage.height * modifierImage.width;
            image(modifierImage, modifierX, modifierY, modifierWidth, modifierHeight);
            
            noteX += modifierWidth + Config.note.modifiers.horizontalOffsetToNote;
        }
        
        image(noteImage, noteX, noteY, noteWidth, noteHeight);
        
        this._drawLedgerLines(note, noteImage.width, clefLocation, noteX);
    },
    
    _getNoteImage(note) {
        return note.offset <= 0 ? Assets.images.bottomNote : Assets.images.topNote;
    },
    
    _getNoteVerticalOffset(note, clefLocation) {
        let noteY = this._getBaseClefOffset(clefLocation);
        noteY += Config.staff.verticalOffset;
        const offsets = Config.note.verticalOffsets[note.clef];
        noteY += note.offset <= 0 ? offsets.bottom : offsets.top;
        noteY -= note.offset * Config.staff.verticalLineSpacing / 2;
        return noteY;
    },
    
    _getBaseClefOffset(clefLocation) {
        switch (clefLocation) {
            case ClefLocation.MIDDLE:
                return this._getVerticalOffsetBetweenClefs() / 2;
            case ClefLocation.BOTTOM:
                return this._getVerticalOffsetBetweenClefs();
            default:
                return 0;
        }
    },
    
    _getModifierVerticalOffset(note, clefLocation) {
        let noteY = this._getBaseClefOffset(clefLocation);
        noteY += Config.staff.verticalOffset;
        const offsets = Config.note.modifiers.verticalOffsets[note.modifier];
        noteY += note.offset <= 0 ? offsets.bottom : offsets.top;
        noteY -= note.offset * Config.staff.verticalLineSpacing / 2;
        return noteY;
    },

    _drawLedgerLines(note, noteWidth, clefLocation, offsetX) {
        // Bottom ledger lines (if any)
        for (let i = note.offset; i < -4; i++) {
            this._drawLedgerLine(i, noteWidth, clefLocation, offsetX);
        }
        // Top ledger lines (if any)
        for (let i = note.offset; i > 6; i--) {
            this._drawLedgerLine(i, noteWidth, clefLocation, offsetX);
        }
    },

    _drawLedgerLine(offset, noteWidth, clefLocation, offsetX) {
        if (offset % 2 == 0) {
            return;
        }
        const w = noteWidth * Config.note.helperLineRatio;
        const lineX = offsetX - (w - noteWidth) / 2;
        let lineY = Config.staff.verticalOffset - (offset - 5) * Config.staff.verticalLineSpacing / 2;
        lineY += this._getBaseClefOffset(clefLocation)
        line(lineX, lineY, lineX + w, lineY);
    },

};