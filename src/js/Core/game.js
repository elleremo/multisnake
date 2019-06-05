import { Level } from "./level";
console.log('From Game');
class Game {
    constructor(props) {
        this.props = {
            canvas: 500,
            width: 500,
            height: 500,
            speed: 100,
            cellSize: 20,
            snakeSize: 20
        };
        this.level = new Level(this.props);
        this.props = props;
        this.props.ctx = this.props.canvas.getContext("2d");
    }
    set height(value) {
        this.props.height = value;
        this.props.canvas.height = value;
    }
    set width(value) {
        this.props.width = value;
        this.props.canvas.width = value;
    }
    resizeCanvas(width, height) {
        this.width = width;
        this.height = height;
    }
}
export { Game };
//# sourceMappingURL=game.js.map