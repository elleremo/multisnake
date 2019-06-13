export class Cell {
    constructor(x, y, color) {
        this.pos = new Vector(0, 0);
        this.color = '#000';
        this.turn = false;
        this.pos = new Vector(x, y);
        this.color = color;
    }
    off(ctx, size) {
        ctx.clearRect(this.pos.x, this.pos.y, size, size);
    }
    on(ctx, size) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.pos.x, this.pos.y, size, size);
    }
}
class VGrid {
    constructor(pxSize, amountX, amountY) {
        this.pxSize = pxSize;
        this.amountX = amountX;
        this.amountY = amountY;
        this.createMatrix();
    }
    createMatrix() {
        let x;
        let y;
        for (let i = 0; i < this.amountX; i++) {
            x.push(i);
        }
        for (let i = 0; i < this.amountY; i++) {
            y.push(i);
        }
        this.matrix = [x, y];
    }
}
class OV {
}
export class Vector {
    constructor(x, y) {
        this._length = 0;
        this.x = x;
        this.y = y;
        this.length = this.length;
    }
    set length(value) {
        this._length = value;
    }
    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
    up() {
        this.x = 0;
        this.y = -1;
    }
    down() {
        this.x = 0;
        this.y = 1;
    }
    left() {
        this.x = -1;
        this.y = 0;
    }
    right() {
        this.x = 1;
        this.y = 0;
    }
}
export class Rect extends Vector {
}
