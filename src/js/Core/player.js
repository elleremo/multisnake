import { Cell, Dir, Direction, VGrid, Vector } from "./Types";
export class Snake {
    constructor(props) {
        this.id = -1;
        this.bodyColor = '#c976c1';
        this.headColor = '#87212f';
        this.pos = new Vector(10, 1);
        this.dir = new Dir(Direction.RIGHT);
        this.body = [];
        console.log(this);
        Snake.CountSnakes += 1;
        this.id += 1;
        this.props = props;
        this.size = this.props.step;
        this.speed = 1000 / props.speed;
        this.snakeLength = props.snakeLength;
        this.pos = new Vector(this.snakeLength, 1);
        Cell.prototype.props = this.props;
        new VGrid(this.props.gridSize, this.props.gridSize);
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
        console.log('Body: ', this.body);
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
    isCrash() {
        let head = this.body[this.body.length - 1].pos;
        for (let index in this.body) {
            let i = +index;
            if (i !== (this.body.length - 1) && this.body[i].isTurn) {
                if (head.x == this.body[i].pos.x && head.y == this.body[i].pos.y) {
                    alert('Столкновение');
                }
            }
        }
    }
    animate() {
        let o = this;
        function f() {
            o.move();
            o.draw();
            o.animate();
        }
        setTimeout(f, this.speed);
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
        window.document.addEventListener("keyup", (e) => {
            if (e.code == Keys.DOWN || Keys.UP || Keys.LEFT || Keys.RIGHT) {
                o.speed = 1000;
            }
        });
        window.document.addEventListener('keydown', (e) => {
            switch (e.code) {
                case Keys.UP:
                    if (o.dir.status == Direction.DOWN)
                        break;
                    o.speed = 100;
                    o.dir.up();
                    break;
                case Keys.LEFT:
                    if (o.dir.status == Direction.RIGHT)
                        break;
                    o.speed = 100;
                    o.dir.left();
                    break;
                case Keys.DOWN:
                    if (o.dir.status == Direction.UP)
                        break;
                    o.speed = 100;
                    o.dir.down();
                    break;
                case Keys.RIGHT:
                    if (o.dir.status == Direction.LEFT)
                        break;
                    o.speed = 100;
                    o.dir.right();
                    break;
            }
        });
    }
}
Snake.CountSnakes = 0;
