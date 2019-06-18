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
    constructor(x, y, size) {
        super(pos.x, pos.y);
        // this.pos = new Vector();
        this.size = size;
    }
    draw() {
        this.ctx.fillStyle = '#ee476d';
        let endAngle = 2 * Math.PI;
        this.ctx.ellipse(this.x, this.y, this.size, this.size, 0, 0, endAngle, false);
        this.ctx.fill();
    }
}
class DyPoint extends Point {
    constructor(x, y, size) {
        super(x, y, size);
        this.size = 20;
        this.vel = new Vector();
        this.acc = new Vector();
        this.size = 20 || size;
    }
}
class Game {
    constructor(set) {
        this.set = set;
        let ctx = set.canvas.getContext("2d");
        Point.prototype.ctx = ctx;
    }
    init() {
        this.set.g;
    }
}
export { Game };
//# sourceMappingURL=Game.js.map