class Vector {
    constructor(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }
    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
    static distance(a, b) {
        return new Vector(b.x - a.x, b.y - a.y);
    }
}
class Point extends Vector {
    constructor(pos, size) {
        super(pos.x, pos.y);
        this.typ = 'Point';
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
    constructor(pos, size) {
        super(pos, size);
        this.typ = 'DyPoint';
        this.size = 10;
        this.grav = new Vector(0, 0.1);
        this.vel = new Vector();
        this.acc = new Vector(0, 0);
        this.size = size || 5;
    }
    move() {
        let distance = Vector.distance(this, this.par);
        this.acc.y = distance.length - this.acc.y;
        this.acc.x = distance.length - this.acc.x;
        this.vel.x += this.acc.x;
        this.vel.y += this.acc.y;
        this.x += this.vel.x;
        this.y += this.vel.y;
    }
    animate() {
        this.draw();
        this.move();
    }
}
class Render {
    constructor() {
        this.arrStatic = [];
        this.arrDyn = [];
    }
    add(point) {
        if (point.typ == 'Point') {
            this.arrStatic.push(point);
        }
        if (point.typ == 'DyPoint') {
            this.arrDyn.push(point);
        }
    }
    draw() {
        this.set.ctx.clearRect(0, 0, this.set.canvas.width, this.set.canvas.height);
        this.set.ctx.beginPath();
        this.set.ctx.lineWidth = 1;
        this.set.ctx.strokeStyle = '#7a9bee';
        this.set.ctx.moveTo(this.arrStatic[0].x, this.arrStatic[0].y);
        this.set.ctx.lineTo(this.arrDyn[0].x, this.arrDyn[0].y);
        this.set.ctx.closePath();
        this.set.ctx.stroke();
    }
    animate() {
        let o = this;
        let id = setInterval(function () {
            o.draw();
            o.arrDyn[0].animate();
        }, 300);
    }
}
class Game {
    constructor(set) {
        this.set = set;
        let ctx = set.canvas.getContext("2d");
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
        this.render.animate();
    }
}
export { Game };
