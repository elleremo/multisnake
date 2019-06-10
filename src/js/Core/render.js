export class Render {
    constructor(props) {
        this.props = props;
    }
    clearGrid() {
        this.props.ctx.clearRect(0, 0, this.props.width, this.props.height);
        console.log("clearGrid");
    }
    drawGrid() {
        this.clearGrid();
        let step = this.props.step;
        let ctx = this.props.ctx;
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#d3d1d0';
        for (let i = 0; i < this.props.gridSize; i++) {
            ctx.moveTo(i * step, 0);
            ctx.lineTo(i * step, this.props.height);
            ctx.stroke();
        }
        for (var i = 0; i < this.props.gridSize; i++) {
            ctx.moveTo(0, i * step);
            ctx.lineTo(this.props.width, i * step);
            ctx.stroke();
        }
        ctx.strokeStyle = '#000000';
        ctx.strokeRect(0, 0, this.props.width, this.props.height);
        console.log("DrawGrid");
    }
}
