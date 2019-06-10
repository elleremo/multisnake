class Cell {
    constructor(size, x, y, turn, color) {
        this.turn = false;
        this.size = size;
        this.x = x;
        this.y = y;
        this.color = color;
        this.turn = turn;
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
}
export class Rect extends Vector {
}
