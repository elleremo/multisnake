import {Props} from "./Types"

export class Render {

    props: Props;

    constructor(props: Props) {
        this.props = props;
    }

    run () {
        let step  = this.props.cellSize;
        let ctx : CanvasRenderingContext2D = this.props.ctx;




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
        // ctx.fillRect(250,50,50,50);
        ctx.strokeRect(0,0,500,500);
        // ctx.stroke();
        // ctx.fill();
        // ctx.fillRect(0,0,200,1);


    }


}
