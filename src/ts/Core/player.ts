import {Props, Color} from "./Types"

// Snake должен уметь двигаться
// Возможносто стоит создать вектор движения
// и поворачивать его на 90гр по нажатию клавиши
//

export class Snake {

    props: Props;
    id = -1; // Чтобы первый snake имел id = 0
    length = 5;
    color: Color = '#c976c1';
    head: Color = '#553887';
    size: number;

    static CountSnakes: number = 0;


    constructor(props: Props) {
        Snake.CountSnakes += 1;
        this.id += 1;
        this.props = props;
        this.size = this.props.snakeSize;
    }

    draw() {
        let ctx = this.props.ctx;
        ctx.fillStyle = this.color;

        let size = this.size;
        let headpos = (length + 1) * size;

        for (let i = this.length; i > 0; i--) {

            let x = i * size;
            console.log(x);
            ctx.fillRect(x + 2, 2, size - 4, size - 4);
        }
    }

    run() {
        let id = setInterval(function () {

        }, 300)
    }
}
