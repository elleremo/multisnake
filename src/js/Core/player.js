import { Vector, Cell } from "./Types";
export class Snake {
    constructor(props) {
        this.id = -1;
        this.color = '#c976c1';
        this.head = '#87212f';
        this.body = [];
        this.startLength = 5;
        this.pos = new Vector(10, 1);
        this.dir = new Vector(1, 0);
        console.log(this);
        Snake.CountSnakes += 1;
        this.id += 1;
        this.props = props;
        this.size = this.props.step;
        this.speed = 300 - props.speed;
        this.startLength = props.snakeLength;
        this.generate();
        console.log('snlength', props.snakeLength);
        console.log('dir', this.pos);
        console.log('body = ', this.body);
    }
    addKeyEvent() {
        let o = this;
        let Keys;
        (function (Keys) {
            Keys["UP"] = "KeyW";
            Keys["LEFT"] = "KeyA";
            Keys["DOWN"] = "KeyS";
            Keys["RIGHT"] = "KeyD";
        })(Keys || (Keys = {}));
        window.document.addEventListener('keydown', (e) => {
            console.log(e);
            switch (e.code) {
                case Keys.UP:
                    o.dir.up();
                    break;
                case Keys.LEFT:
                    o.dir.left();
                    break;
                case Keys.DOWN:
                    o.dir.down();
                    break;
                case Keys.RIGHT:
                    o.dir.right();
                    break;
            }
        });
    }
    generate() {
        for (let i = 0; i < this.startLength; i++) {
            let x = (this.pos.x - this.startLength + i) * 20;
            let y = this.pos.y * 20;
            let color = this.color;
            if (i == this.startLength - 1)
                color = this.head;
            this.body.push(new Cell(x + 3, y + 3, color));
            this.body[i].on(this.props.ctx, 14);
        }
    }
    draw() {
        let last = this.body.length;
        let color = this.body[last].color;
        this.body.push(new Cell(this.pos.x, this.pos.y, color));
        this.body[0].off(this.props.ctx, 20);
    }
    move() {
        this.pos.x += this.dir.x;
        this.pos.y += this.dir.y;
    }
    animate() {
        let o = this;
        let id = setInterval(function () {
            o.move();
            o.draw();
        }, 250);
    }
}
Snake.CountSnakes = 0;
