import {Level} from "../level";

console.log('hi');

interface IProps {
    canvas : any;
    width: number;
    height: number;
    speed: number;
    cellSize: number
}

class Game {

    private _width: number = 500;
    private _height: number = 500;

    ctx: CanvasRenderingContext2D;
    canvas : any;
    speed: number = 100;
    cellSize : number = 20;
    level : Level;

    constructor(props : IProps){
        this.canvas = props.canvas;
        this.ctx = this.canvas.getContext("2d");
        this.speed = props.speed ;
        this.cellSize = props.cellSize;
        this.height = props.height ;
        this.width = props.width ;

    }



    newGame() {
        this.level = new Level({});
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

    resizeCanvas (width: number, height: number) {
        this.width = width;
        this.height = height;
    }
}


export {Game}
