export class Cell {
    constructor(x, y, color) {
        this.pos = new Vector(0, 0);
        this._color = '#000';
        this.comp = 3;
        this.pos = new Vector(x, y);
        this._color = color;
    }
    color(color) {
        this._color = color;
        this.on();
    }
    off() {
        let step = this.props.step;
        let x = this.pos.x * step + 2;
        let y = this.pos.y * step + 2;
        step = step - 4;
        this.props.ctx.clearRect(x, y, step, step);
    }
    on() {
        this.props.ctx.fillStyle = this._color;
        let step = this.props.step;
        let x = this.pos.x * step + this.comp;
        let y = this.pos.y * step + this.comp;
        step = step - this.comp * 2;
        this.props.ctx.fillRect(x, y, step, step);
        return this;
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
