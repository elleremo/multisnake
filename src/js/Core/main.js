import { Level } from "../level";
console.log('hi');
class Game {
    constructor(props) {
        this._width = 500;
        this._height = 500;
        this.speed = 100;
        this.cellSize = 20;
        this.canvas = props.canvas;
        this.ctx = this.canvas.getContext("2d");
        this.speed = props.speed;
        this.cellSize = props.cellSize;
        this.height = props.height;
        this.width = props.width;
    }
    newGame() {
        this.level = new Level({});
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
    resizeCanvas(width, height) {
        this.width = width;
        this.height = height;
    }
}
export { Game };
//# sourceMappingURL=main.js.map