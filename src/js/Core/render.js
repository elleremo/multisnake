export class Render {
    constructor(props) {
        this.props = props;
    }
    clearGrid() {
        this.props.ctx.clearRect(0, 0, this.props.width, this.props.height - 2);
        console.log("clearGrid");
    }
    drawGrid() {
        this.clearGrid();
        let step = this.props.cellSize;
        let ctx = this.props.ctx;
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#d3d1d0';
        for (var i = 1; i < this.props.width; i += step) {
            ctx.moveTo(i, 0);
            ctx.lineTo(i, this.props.height);
            ctx.stroke();
            console.log('i = ', i);
        }
        for (var i = 1; i < this.props.height; i += step) {
            ctx.moveTo(0, i);
            ctx.lineTo(this.props.width, i);
            ctx.stroke();
        }
        ctx.strokeStyle = '#000000';
        ctx.strokeRect(1, 1, this.props.width - 2, this.props.height - 2);
        console.log("DrawGrid");
    }
}
