import { Vector, Cell } from "./Types";
export class Snake {
    constructor(props) {
        this.id = -1;
        this.bodyColor = '#c976c1';
        this.headColor = '#87212f';
        this.snakeLength = 5;
        this.pos = new Vector(5, 1);
        this.dir = new Vector(1, 0);
        this.body = [];
        console.log(this);
        Snake.CountSnakes += 1;
        this.id += 1;
        this.props = props;
        this.size = this.props.step;
        this.speed = 400 - props.speed;
        this.snakeLength = props.snakeLength;
        Cell.prototype.props = this.props;
        this.generate();
        console.log('snlength', props.snakeLength);
        console.log('dir', this.pos);
        console.log('body = ', this.body);
        this.addKeyEvent();
    }
    generate() {
        for (let i = 0; i < this.snakeLength; i++) {
            let x = this.pos.x - this.snakeLength + i;
            let y = this.pos.y;
            let color = this.bodyColor;
            if (i == this.snakeLength - 1)
                color = this.headColor;
            let o = new Cell(x, y, color).on();
            this.body.push(o);
        }
        console.log('Proto: ', this.body);
    }
    draw() {
        let last = this.body.length - 1;
        let color = this.bodyColor;
        let headcell = this.body[last];
        headcell.color(color);
        this.body[this.body.length - this.snakeLength].off();
        let o = new Cell(this.pos.x, this.pos.y, this.headColor);
        this.body.push(o.on());
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
        }, this.speed);
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
}
Snake.CountSnakes = 0;
