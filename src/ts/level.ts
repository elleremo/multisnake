// Надо написать менеджер уровней
class Vector {

    private _length: number;
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


class Rect extends Vector {
}

class Level {
    _height: number;
    _width: number;
    cellSize: number = 20;

    constructor(props: {}) {

        this.cellSize = props.cellsize;
        this.height = props.height ;
        this.width = props.width ;

    }

    get height(): number {
        return this._height;
    }
    set height(value: number) {
        this._height = value;
        this.canvas.height = value;
    }
    get width(): number {
        return this._width;
    }
    set width(value:number) {
        this._width = value;
        this.canvas.width = value;
    }


}
export {  Level}