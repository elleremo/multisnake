import enumerate = Reflect.enumerate;

type Color = {
    color: string;
}

class Cell {

    size: number;
    x: number;
    y: number;
    color: Color;
    turn: boolean = false;

    constructor(size: number, x: number, y: number, turn: boolean, color: Color) {
        this.size = size;
        this.x = x;
        this.y = y;
        this.color = color;
        this.turn = turn;
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

}


export class Rect extends Vector {
}


export type Props = {
    canvas: any;

    ctx?: CanvasRenderingContext2D;
    gridSize?: number;
    step?: number;
    speed?: number;
    // cellSize?: number;
    snakeSize?: number;
    width? :  number;
    height? :  number;
}
