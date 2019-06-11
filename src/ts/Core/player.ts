import {Props, Color, Vector} from "./Types"

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
    pos: Vector = new Vector(this.length + 1, 1);
    speed :number;

    static CountSnakes: number = 0;


    constructor(props: Props) {
        Snake.CountSnakes += 1;
        this.id += 1;
        this.props = props;
        this.size = this.props.snakeSize;
        this.speed = props.speed;
    }

    draw() {
        let ctx = this.props.ctx;
        ctx.fillStyle = this.color;

        let size = this.size;
        // let headpos = (length + 1) * size;

        for (let i = this.pos.x; i > this.pos.x-this.length ; i--) {

            let x = this.pos.x * size;
            let y = this.pos.y *20;
            console.log(x);
            ctx.fillRect(x + 3, this.pos.y+3, size - 6, size - 6);
        }
    }

    move(){

        this.pos.x += 1;
    }

    animate() {
        let o = this;
        let id = setInterval(function () {
             o.draw();
             o.move();
        }, 250)
    }
}
