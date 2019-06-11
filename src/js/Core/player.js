export class Snake {
    constructor(props) {
        this.id = -1;
        this.length = 5;
        this.color = '#c976c1';
        this.head = '#553887';
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
        }, 300);
    }
}
Snake.CountSnakes = 0;
