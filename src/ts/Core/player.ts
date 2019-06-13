import {Props, Color, Vector, Cell} from "./Types"

// Snake должен уметь двигаться
// Возможносто стоит создать вектор движения
// и поворачивать его на 90гр по нажатию клавиши
//

export class Snake {

    props: Props;
    id = -1; // Чтобы первый snake имел id = 0
    color: Color = '#c976c1';
    head: Color = '#87212f';
    size: number;
    oldPos: Vector;
    body: Cell[] = [];
    startLength = 5;
    pos: Vector = new Vector(10 , 1); //позиция головы
    dir: Vector = new Vector(1, 0);
    speed: number;

    static CountSnakes: number = 0;


    constructor(props: Props) {
        console.log(this);

        Snake.CountSnakes += 1;
        this.id += 1;
        this.props = props;
        this.size = this.props.step;
        this.speed = 300 - props.speed;
        this.startLength = props.snakeLength;
        // this.oldPos = new Vector(this.pos.x-this.length, 1);

        this.generate();
        console.log('snlength', props.snakeLength);
        console.log('dir', this.pos);

        // this.oldPos = new Vector(1, 1);
        console.log('body = ', this.body);

        // this.addKeyEvent()
    }

    addKeyEvent() {
        let o = this;

        enum Keys {
            UP = 'KeyW',
            LEFT = 'KeyA',
            DOWN = 'KeyS',
            RIGHT = 'KeyD'

        }

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

        })
    }

    generate() {
        // 0 1 2 3 4
        // 1x
        for (let i = 0; i < this.startLength; i++) {
            let x = (this.pos.x - this.startLength + i)*20;
            let y = this.pos.y*20;

            let color: Color = this.color;
            if (i == this.startLength-1) color = this.head;

            this.body.push(new Cell(x+3, y+3, color));
            this.body[i].on(this.props.ctx,14);
        }
    }

    draw() {
        let last = this.body.length;
        let color = this.body[last].color;
        this.body.push( new Cell(this.pos.x, this.pos.y, color));
        this.body[0].off(this.props.ctx, 20); // надо исправить

        // let ctx = this.props.ctx;
        // ctx.fillStyle = this.color;
        //
        // let comp = 3; // compression
        // let size = this.props.step - comp - comp;
        // // let headpos = (length + 1) * size;
        //
        // let x = this.pos.x * this.props.step;
        // let y = this.pos.y * this.props.step;
        //
        // ctx.fillRect(x + comp, y + comp, size, size);
        //
        // // let assX = this.pos.x - this.length ;
        // // let assY = this.pos.y - this.length ;
        // let assX = this.oldPos.x * 20;
        // let assY = this.oldPos.y * 20;
        //
        //
        // ctx.clearRect(assX + comp, assY + comp, size, size);

    }

    move() {

        this.pos.x += this.dir.x;
        this.pos.y += this.dir.y;

        // this.oldPos.x += this.dir.x;
        // this.oldPos.y += this.dir.y;
    }

    animate() {
        let o = this;
        let id = setInterval(function () {
            o.move();
            o.draw();
        }, 250)
    }
}
