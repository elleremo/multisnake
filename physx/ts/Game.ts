type Position = { x: number, y: number }

class Vector {
    x: number;
    y: number;

    constructor(x?: number, y?: number) {

        this.x = x || 0;
        this.y = y || 0;
    }

    get length() {

        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    static distance(a: Vector, b: Vector): Vector {

        return new Vector(b.x - a.x, b.y - a.y);

    }
}

class Point extends Vector {
    typ: string = 'Point';
    size: number;
    set: ISet;

    constructor(pos: Position, size: number) {
        super(pos.x, pos.y);
        // this.pos = new Vector();
        this.size = size;
        this.draw();

    }

    draw() {
        this.set.ctx.fillStyle = '#ee476d';
        let endAngle = 2 * Math.PI;
        this.set.ctx.ellipse(this.x, this.y, this.size, this.size, 0, 0, endAngle, false);
        this.set.ctx.fill();
    }


}

class DyPoint extends Point {
    typ: string = 'DyPoint';
    vel: Vector;
    acc: Vector;
    size: number = 10;
    par: Point;
    grav = new Vector(0,0.1);
    dist: number;

    constructor(pos: Position, size?: number) {
        super(pos, size);
        this.vel = new Vector();
        this.acc = new Vector(0,0);
        this.size = size || 5;
    }

    move() {



        let distance = Vector.distance(this, this.par);

        this.acc.y =  distance.length -this.acc.y;
        this.acc.x = distance.length - this.acc.x;

        this.vel.x +=  this.acc.x;
        this.vel.y +=  this.acc.y;

        this.x += this.vel.x;
        this.y += this.vel.y;


    }

    animate() {

        this.draw();
        this.move();

        // let o = this;
        // let id = setInterval(function () {
        //     o.draw();
        //     o.move();
        // }, 16.6)
    }
}

interface ISet {
    canvas: HTMLCanvasElement;
    ctx?: CanvasRenderingContext2D;
    fixedPoints: Position;
    point: Position;
}

class Render {
    set: ISet;
    arrStatic: Point[] = [];
    arrDyn: DyPoint[]=[];
    constructor() {

    }

    add(point: Point | DyPoint) {

        if ( point.typ == 'Point'){
            this.arrStatic.push(point)
        }

        if ( point.typ == 'DyPoint'){
            this.arrDyn.push(point)
        }
    }

    draw() {


        this.set.ctx.clearRect(0, 0, this.set.canvas.width, this.set.canvas.height);

        this.set.ctx.beginPath();
        this.set.ctx.lineWidth =1;
        this.set.ctx.strokeStyle = '#7a9bee';

        this.set.ctx.moveTo(this.arrStatic[0].x,this.arrStatic[0].y); //Point
        this.set.ctx.lineTo(this.arrDyn[0].x,this.arrDyn[0].y);

        this.set.ctx.closePath();
        this.set.ctx.stroke();

    }

    animate() {

        let o = this;
        let id = setInterval(function () {

            o.draw();
            o.arrDyn[0].animate();

        }, 300)
    }
}


class Game {

    set: ISet;
    render: Render;

    constructor(set: ISet) {
        this.set = set;

        let ctx: CanvasRenderingContext2D = set.canvas.getContext("2d");

        this.set.ctx = ctx;
        Point.prototype.set = set;
        Render.prototype.set = set;


        this.render = new Render();
        this.init();
    }

    init() {
        let a = new Point(this.set.fixedPoints, 5);
        let b = new DyPoint(this.set.point, 5);

        b.par = a;

        this.render.add(a);
        this.render.add(b);
        // this.render.draw();

        this.render.animate();
        // b.animate();
    }

}

export {Game}