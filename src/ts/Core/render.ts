import {Props} from "./Types"

export class Render {

    props: Props;

    constructor(props: Props) {
        this.props = props;
    }

    run () {
        let step  = this.props.cellSize;
        let ctx : CanvasRenderingContext2D = this.props.ctx;
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 1;

        for (var i = 1; i < this.props.width+1; i += step) {
            ctx.moveTo(i, 0);
            ctx.lineTo(i, this.props.height);
            ctx.stroke();
        }

        for (var i = 1; i < this.props.height+1; i += step) {
            ctx.moveTo(0, i);
            ctx.lineTo(this.props.width, i);
            ctx.stroke();
        }

    }


}
