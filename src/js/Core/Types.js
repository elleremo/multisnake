// import enumerate = Reflect.enumerate;
export class Cell {
    constructor(x, y, color) {
        this.pos = new Vector(0, 0);
        this._color = '#000';
        this.comp = 2;
        this.isTurn = false;
        this.pos = new Vector(x, y);
        this._color = color;
        // this.props = props;
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
        this.isTurn = false;
    }
    on() {
        this.props.ctx.fillStyle = this._color;
        let step = this.props.step;
        let x = this.pos.x * step + this.comp;
        let y = this.pos.y * step + this.comp;
        step = step - this.comp * 2;
        this.props.ctx.fillRect(x, y, step, step);
        this.isTurn = true;
        return this;
    }
}
export class VGrid {
    constructor(amountX, amountY) {
        this.amountX = amountX;
        this.amountY = amountY;
        this.createMatrix();
    }
    createMatrix() {
        let matrix = [];
        for (var x = 0; x < this.amountX; x++) {
            matrix[x] = [0];
            for (var y = 0; y < this.amountY; y++) {
                matrix[x][y] = 0;
            }
        }
        this.matrix = matrix;
    }
}
export class Vector {
    constructor(x, y) {
        this._length = 0;
        this.x = x;
        this.y = y;
        // this.length = this.length; // Проверить как работают сет/гет
    }
    set length(value) {
        this._length = value;
    }
    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}
export var Direction;
(function (Direction) {
    Direction["UP"] = "UP";
    Direction["LEFT"] = "LEFT";
    Direction["DOWN"] = "DOWN";
    Direction["RIGHT"] = "RIGHT";
})(Direction || (Direction = {}));
export class Dir extends Vector {
    constructor(dir) {
        super(1, 0);
        switch (dir) {
            case Direction.UP:
                this.up();
                break;
            case Direction.DOWN:
                this.down();
                break;
            case Direction.LEFT:
                this.left();
                break;
            case Direction.RIGHT:
                this.right();
                break;
        }
    }
    up() {
        this.status = Direction.UP;
        this.x = 0;
        this.y = -1;
    }
    down() {
        this.status = Direction.DOWN;
        this.x = 0;
        this.y = 1;
    }
    left() {
        this.status = Direction.LEFT;
        this.x = -1;
        this.y = 0;
    }
    right() {
        this.status = Direction.RIGHT;
        this.x = 1;
        this.y = 0;
    }
}
export class Rect extends Vector {
}
