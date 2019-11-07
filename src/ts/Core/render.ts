import {Props} from "./Types"

export class Render {

    setting: Props;


    constructor(setting: Props) {
        this.setting = setting;
    }

    clearGrid(){

        this.setting.ctx.clearRect(0, 0, this.setting.width, this.setting.height);
        console.log ("clearGrid");
    }

    drawGrid () {

        this.clearGrid();

        let step: number  = this.setting.step;
        let ctx : CanvasRenderingContext2D = this.setting.ctx;

        ctx.lineWidth = 2;
        ctx.strokeStyle = '#aec2dc';

                        // кол-во клеток
        for (let i = 0; i < this.setting.gridSize; i++) {
            ctx.moveTo(i*step, 0);
            ctx.lineTo(i*step, this.setting.height);
            ctx.stroke();
            // console.log ('i = ', i);
        }

        for (var i = 0; i < this.setting.gridSize; i++) {
            ctx.moveTo(0, i*step);
            ctx.lineTo(this.setting.width, i*step);
            ctx.stroke();
        }

        ctx.strokeStyle = '#000000';
        // ctx.fillRect(250,50,50,50);
        ctx.strokeRect(0,0,this.setting.width,this.setting.height);

        // ctx.stroke();
        // ctx.fill();
        // ctx.fillRect(0,0,200,1);

        console.log ("DrawGrid");
    }


}
