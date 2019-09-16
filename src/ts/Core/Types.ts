// import enumerate = Reflect.enumerate;

export type Color = string;

export class Cell {

    pos: Vector = new Vector(0, 0);
    _color: Color = '#000';
    props: Props;
    comp: number = 3;
    isTurn: boolean = false;

    constructor(x: number, y: number, color: Color) {
        this.pos = new Vector(x, y);
        this._color = color;
        // this.props = props;

    }

    color(color: Color) {
        this._color = color;
        this.on();
    }

    off() {
        let step = this.props.step;

        let x = this.pos.x * step + 2;
        let y = this.pos.y * step + 2;

        step = step - 4;

        this.props.ctx.clearRect(x, y, step, step);
        this.isTurn = false;

    }

    on() {
        this.props.ctx.fillStyle = this._color;

        let step = this.props.step;

        let x = this.pos.x * step + this.comp;
        let y = this.pos.y * step + this.comp;

        step = step - this.comp * 2;

        this.props.ctx.fillRect(x, y, step, step);

        this.isTurn = true;

        return this;
    }
}

export class VGrid { // Виртульная сетка в виде матрицы

   public matrix: number[][];
    amountX: number;
    amountY: number;

    constructor(amountX: number, amountY: number) {

        this.amountX = amountX;
        this.amountY = amountY;

        this.createMatrix();
    }


    createMatrix() {


        let matrix: number[][] = [];

        for (var x=0; x< this.amountX; x++) {
            matrix[x]=[0];
            for (var y=0; y<this.amountY; y++){
                matrix[x][y]=0;
            }
        }

        this.matrix = matrix;

    }

}


export class Vector {

    _length: number = 0;
    x: number;
    y: number;


    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        // this.length = this.length; // Проверить как работают сет/гет
    }

    set length(value: number) {
        this._length = value;
    }

    get length(): number {
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }



}
export enum Direction {

    UP = "UP",
    LEFT = 'LEFT',
    DOWN = 'DOWN',
    RIGHT = 'RIGHT'

}


export class Dir extends Vector{
    status: Direction;

    constructor(dir: Direction){
        super(1,0);

        switch (dir) {
            case Direction.UP: this.up(); break;
            case Direction.DOWN: this.down(); break;
            case Direction.LEFT: this.left(); break;
            case Direction.RIGHT: this.right(); break;
        }

    }

    up() {
        this.status = Direction.UP;
        this.x = 0;
        this.y = -1;
    }

    down() {
        this.status = Direction.DOWN;

        this.x = 0;
        this.y = 1;
    }

    left() {
        this.status = Direction.LEFT;

        this.x = -1;
        this.y = 0;
    }

    right() {
        this.status = Direction.RIGHT;

        this.x = 1;
        this.y = 0;
    }
}


export class Rect extends Vector {
}


export type Props = {
    canvas?: HTMLCanvasElement | undefined;

    ctx?: CanvasRenderingContext2D | undefined;
    gridSize: number;
    step: number;
    speed: number;
    // cellSize?: number;
    snakeLength: number;

    width?: number;
    height?: number;


}
