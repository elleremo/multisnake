export class Render {
    constructor(props) {
        this.props = props;
    }
    run() {
        let step = this.props.cellSize;
        let ctx = this.props.ctx;
        ctx.strokeStyle = '#ff5b5e';
        ctx.lineWidth = 1;
        for (var i = 0; i < this.props.width; i += step) {
            ctx.moveTo(i, 0);
            ctx.lineTo(i, this.props.height);
            ctx.stroke();
        }
        for (var i = 0; i < this.props.height; i += step) {
            ctx.moveTo(0, i);
            ctx.lineTo(this.props.width, i);
            ctx.stroke();
        }
        ctx.strokeStyle = '#000000';
        ctx.strokeRect(0, 0, 500, 500);
    }
}
