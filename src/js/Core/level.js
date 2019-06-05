console.log('From Level');
class Vector {
    constructor(x, y) {
        this._length = 0;
        this.x = x;
        this.y = y;
        this.length = this.length;
    }
    set length(value) {
        this._length = value;
    }
    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}
class Rect extends Vector {
}
class Level {
    constructor(props) {
        this.props = {};
        this.props = props;
    }
}
export { Level };
//# sourceMappingURL=level.js.map