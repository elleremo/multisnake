import {Props} from "./Types"
// Надо написать менеджер уровней

class Vector {

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


class Rect extends Vector {
}

class Level {
    props = {};

    constructor(props: {} ) {
        this.props = props;
        console.log('From LEVEL');
    }
}
export { Level }
