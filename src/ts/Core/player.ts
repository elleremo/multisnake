import {Cell, Color, Dir, Direction, Props, VGrid, Vector} from "./Types"

// Snake должен уметь двигаться
// Возможносто стоит создать вектор движения
// и поворачивать его на 90гр по нажатию клавиши
//

export class Snake {

    props: Props;
    id = -1; // Чтобы первый snake имел id = 0

    bodyColor: Color = '#5c98c9';
    headColor: Color = '#bd63e4';
    size: number;
    speed: number;
    snakeLength: number;
    pos: Vector = new Vector(5, 1); //позиция головы 6 1
    dir: Dir = new Dir(Direction.RIGHT);
    vgrid: VGrid ;
    body: Cell[] = [];

    static CountSnakes: number = 0;


    constructor(props: Props) {
        console.log(this);
        Snake.CountSnakes += 1;
        this.id += 1;
        this.props = props;

        this.size = this.props.step; // сжимаем отрисовку
        this.speed = 1000 / props.speed;
        this.snakeLength = props.snakeLength;

        // this.pos = new Vector(this.snakeLength, 1);

        Cell.prototype.props = this.props;

        this.vgrid = new VGrid(this.props.gridSize, this.props.gridSize);
        // console.log('VGRIIID', this.vgrid);
        this.generate();
        // console.log('snakeLength', props.snakeLength);
        // console.log('dir', this.pos);

        // this.oldPos = new Vector(1, 1);
        // console.log('body = ', this.body);
        this.addKeyEvent();


    }

    generate() {



        for (let i = 0 ; i < this.snakeLength; i++) {
            let x = this.pos.x - this.snakeLength + i; // 6-5+0
            let y = this.pos.y;

            //
            // if (x < 0 || y<0){
            //
            // }
            // else {
            //     this.vgrid.matrix[y][x] = 1;
            // }

            let color: Color = this.bodyColor;
            if (i == this.snakeLength - 1) color = this.headColor;

            let o = new Cell(x, y, color);

            this.body.push(o);
        }

         this.draw();
         console.log('GEN', this.vgrid);
    }

    draw() {


        for (var cell in this.body){
            this.body[cell].on();

        }


        //
        // let last = this.body.length - 1;
        // let color = this.bodyColor;
        //
        // let headcell = this.body[last]; // -1 ???
        // headcell.color(color);
        //
        //
        // let ass = this.body[this.body.length - this.snakeLength];
        //
        // ass.off();
        // // this.vgrid.matrix[ass.pos.x][ass.pos.y]=0;
        // // this.body.shift(); // удаляем задницу после выключения
        //
        // let o = new Cell(this.pos.x, this.pos.y, this.headColor);
        // // this.vgrid.matrix[this.pos.x][this.pos.y]=1;
        // this.body.push(o.on());



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
        var v;
        // this.isCrash();
        this.pos.x += this.dir.x;
        this.pos.y += this.dir.y;
        console.log('Body: ', this.body);
        // this.oldPos.x += this.dir.x;
        // this.oldPos.y += this.dir.y;
    }

    isCrash() {
        let head = this.body[this.body.length - 1].pos; // head position Vector
        // Если индекс head не равен текущему то чтото делаем

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
            // o.isCrash();
            // o.move();
            o.draw();
            // o.animate()
        }

        setTimeout(f, this.speed)


    }

    addKeyEvent() {
        let o = this;

        enum Keys {
            UP = 'KeyW',
            LEFT = 'KeyA',
            DOWN = 'KeyS',
            RIGHT = 'KeyD'

        }

        let speed = o.speed;

        window.document.addEventListener("keyup", (e) => {
            if (e.code == Keys.DOWN || Keys.UP || Keys.LEFT || Keys.RIGHT) {
                // console.log(o.speed);
                o.speed = speed;
            }
        });

        window.document.addEventListener('keydown', (e) => {


            switch (e.code) {
                case Keys.UP:
                    if (o.dir.status == Direction.DOWN) break;
                    // o.speed = 100;
                    o.dir.up();
                    break;
                case Keys.LEFT:
                    if (o.dir.status == Direction.RIGHT) break;
                    // o.speed = 100;
                    o.dir.left();
                    break;
                case Keys.DOWN:
                    if (o.dir.status == Direction.UP) break;
                    // o.speed = 100;
                    o.dir.down();
                    break;
                case Keys.RIGHT:
                    if (o.dir.status == Direction.LEFT) break;
                    // o.speed = 100;
                    o.dir.right();
                    break;
            }
        })
    }
}
