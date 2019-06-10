import {Props} from "./Types"

export class Render {

    props: Props;


    constructor(props: Props) {
        this.props = props;
    }

    clearGrid(){

        this.props.ctx.clearRect(0, 0, this.props.width, this.props.height);
        console.log ("clearGrid");
    }

    drawGrid () {

        this.clearGrid();

        let step: number  = this.props.step;
        let ctx : CanvasRenderingContext2D = this.props.ctx;

        ctx.lineWidth = 1;
        ctx.strokeStyle = '#d3d1d0';

                        // кол-во клеток
        for (let i = 0; i < this.props.gridSize; i++) {
            ctx.moveTo(i*step, 0);
            ctx.lineTo(i*step, this.props.height);
            ctx.stroke();
            // console.log ('i = ', i);
        }

        for (var i = 0; i < this.props.gridSize; i++) {
            ctx.moveTo(0, i*step);
            ctx.lineTo(this.props.width, i*step);
            ctx.stroke();
        }

        ctx.strokeStyle = '#000000';
        // ctx.fillRect(250,50,50,50);
        ctx.strokeRect(0,0,this.props.width,this.props.height);

        // ctx.stroke();
        // ctx.fill();
        // ctx.fillRect(0,0,200,1);

        console.log ("DrawGrid");
    }


}
