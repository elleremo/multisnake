import enumerate = Reflect.enumerate;

export type Color =  string;

export class Cell {

    pos: Vector = new Vector(0,0);
    color: Color = '#000';
    turn: boolean = false;

    constructor( x: number, y: number,  color: Color) {
        this.pos = new Vector(x ,y);
        this.color = color;
    }

    off (ctx: CanvasRenderingContext2D, size: number){
        ctx.clearRect(this.pos.x, this.pos.y, size,size)
    }
    on (ctx: CanvasRenderingContext2D, size: number){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.pos.x, this.pos.y, size,size)
    }
}

class VGrid { // Виртульная сетка в виде матрицы

    matrix: Number[][];
    pxSize: number;
    amountX: number;
    amountY: number;

    constructor(pxSize: number, amountX: number, amountY: number) {
        this.pxSize = pxSize;
        this.amountX = amountX;
        this.amountY = amountY;

        this.createMatrix();
    }


    createMatrix () {
        let x: [number];
        let y: [number];

        for (let  i = 0; i < this.amountX; i++) {
            x.push(i) }

        for (let i = 0; i < this.amountY; i++) {
            y.push(i) }

        this.matrix = [ x, y]
    }

}

class OV {

}

export class Vector {

    _length: number = 0;
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.length = this.length; // Проверить как работают сет/гет
    }

    set length(value: number) {
        this._length = value;
    }

    get length(): number {
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }

    up() {
        this.x = 0;
        this.y = -1;
    }
    down() {
        this.x = 0;
        this.y = 1;
    }
    left() {
        this.x = -1;
        this.y = 0;
    }
    right() {
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
