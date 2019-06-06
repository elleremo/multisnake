import { Level } from "./level";
import { Render } from "./render";
class Game {
    constructor(props) {
        this.props = {
            canvas: HTMLCanvasElement,
            width: 500,
            height: 500,
            speed: 100,
            cellSize: 20,
            snakeSize: 20
        };
        this.props = props;
        this.props.ctx = this.props.canvas.getContext("2d");
        this.resizeCanvas(props.width, props.height);
        this.level = new Level(this.props);
        this.render = new Render(this.props);
        this.render.run();
    }
    set width(value) {
        this.props.width = value;
        this.props.canvas.width = value;
    }
    set height(value) {
        this.props.height = value;
        this.props.canvas.height = value;
    }
    resizeCanvas(width, height) {
        this.width = width;
        this.height = height;
    }
}
export { Game };
