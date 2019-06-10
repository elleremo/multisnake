import { Render } from "./render";
class Game {
    constructor(props) {
        this.props = {
            canvas: HTMLCanvasElement,
            gridSize: 20,
            step: 20,
            speed: 100,
            snakeSize: 20
        };
        this.props = props;
        this.props.ctx = this.props.canvas.getContext("2d");
        this.render = new Render(this.props);
        this.resizeCanvas(this.props.gridSize, this.props.step);
        this.render.drawGrid();
    }
    set gridSize(value) {
        this.props.gridSize = value;
        this.props.width = value * this.props.step;
        this.props.height = value * this.props.step;
        this.props.canvas.width = this.props.width;
        this.props.canvas.height = this.props.height;
    }
    set step(value) {
        this.props.step = value;
        this.props.width = value * this.props.gridSize;
        this.props.height = value * this.props.gridSize;
        this.props.canvas.width = this.props.width;
        this.props.canvas.height = this.props.height;
    }
    resizeCanvas(gridSize, step) {
        this.step = step;
        this.gridSize = gridSize;
        console.log("resizeCanvas");
    }
}
export { Game };
