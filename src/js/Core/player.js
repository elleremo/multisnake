import { Vector } from "./Types";
export class Snake {
    constructor(props) {
        this.id = -1;
        this.length = 5;
        this.color = '#c976c1';
        this.head = '#553887';
        this.pos = new Vector(this.length + 1, 1);
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
        for (let i = this.pos.x; i > this.pos.x - this.length; i--) {
            let x = this.pos.x * size;
            let y = this.pos.y * 20;
            console.log(x);
            ctx.fillRect(x + 3, this.pos.y + 3, size - 6, size - 6);
        }
    }
    move() {
        this.pos.x += 1;
    }
    animate() {
        let o = this;
        let id = setInterval(function () {
            o.draw();
            o.move();
        }, 250);
    }
}
Snake.CountSnakes = 0;
