type position = {x:number, y:number}

class Vector {
    x: number;
    y: number;

    constructor(x?:number,y?:number){

        this.x = x || 0;
        this.y = y || 0;
    }

    get length(){

        return Math.sqrt(this.x**2 + this.y**2);
    }

    private static distance(a:Vector, b: Vector):Vector{

        return new Vector(b.x-a.x, b.y - a.y);

    }
}

class Point extends Vector{
    size: number;
    ctx: CanvasRenderingContext2D;

    constructor (x:number,y:number, size: number){
        super(pos.x, pos.y);
        // this.pos = new Vector();
        this.size = size;

    }

    draw(){
        this.ctx.fillStyle = '#ee476d';
        let endAngle = 2 * Math.PI;
        this.ctx.ellipse( this.x, this.y, this.size, this.size, 0, 0, endAngle,false);
        this.ctx.fill();
    }
}

class DyPoint extends Point{

    vel:Vector;
    acc:Vector;
    size: number = 20;

    constructor(x:number,y:number, size?:number ){
        super(x,y,size);
        this.vel = new Vector();
        this.acc = new Vector();
        this.size = 20 || size;
    }
}

interface ISet {
    canvas:HTMLCanvasElement;
    staticPoints: {};
}

class Game {

    set: object;

    constructor(set: any){
        this.set = set;
        let ctx:CanvasRenderingContext2D = set.canvas.getContext("2d");
        Point.prototype.ctx = ctx;
     }

     init(){
        this.set.g
     }

}

export {Game}
