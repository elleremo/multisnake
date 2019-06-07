
class OV {

}

export class Vector {

    _length: number =0 ;
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
    speed?: number;
    width?: number;
    height?: number;
    cellSize?: number;
    snakeSize?: number;
}
