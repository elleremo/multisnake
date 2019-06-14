import {Props, Color, Vector, Cell} from "./Types"

// Snake должен уметь двигаться
// Возможносто стоит создать вектор движения
// и поворачивать его на 90гр по нажатию клавиши
//

export class Snake {

    props: Props;
    id = -1; // Чтобы первый snake имел id = 0

    bodyColor: Color = '#c976c1';
    headColor: Color = '#87212f';
    size: number;
    speed: number;
    snakeLength = 5;
    pos: Vector = new Vector(5 , 1); //позиция головы
    dir: Vector = new Vector(1, 0);

    body: Cell[] = [];

    static CountSnakes: number = 0;


    constructor(props: Props) {
        console.log(this);
        Snake.CountSnakes += 1;
        this.id += 1;
        this.props = props;

        this.size = this.props.step; // сжимаем отрисовку
        this.speed = 400 - props.speed;
        this.snakeLength = props.snakeLength;

        Cell.prototype.props = this.props;

        this.generate();
        console.log('snlength', props.snakeLength);
        console.log('dir', this.pos);

        // this.oldPos = new Vector(1, 1);
        console.log('body = ', this.body);
        this.addKeyEvent();



    }

    generate() {

        for (let i = 0; i < this.snakeLength; i++) {
            let x = this.pos.x - this.snakeLength + i;
            let y = this.pos.y;

            let color: Color = this.bodyColor;
            if (i == this.snakeLength-1) color = this.headColor;

            let o = new Cell( x, y, color).on();
            this.body.push(o);
        }

        console.log('Proto: ',this.body );
    }

    draw() {
        let last = this.body.length-1;
        let color = this.bodyColor;

        let headcell = this.body[last]; // -1 ???
        headcell.color(color);

        this.body[this.body.length-this.snakeLength].off();

        let o = new Cell(this.pos.x, this.pos.y, this.headColor);
        this.body.push(o.on());



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
        }, this.speed)
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
}
