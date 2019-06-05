// Надо написать менеджер уровней
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.length = this.length; // Проверить как работают сет/гет
    }
    set length(value) {
        this._length = value;
    }
    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}
class Rect extends Vector {
}
class Level {
    constructor(props) {
        this.cellSize = 20;
        this.cellSize = props.cellsize;
        this.height = props.height;
        this.width = props.width;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
        this.canvas.height = value;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
        this.canvas.width = value;
    }
}
export { Level };
//# sourceMappingURL=level.js.map