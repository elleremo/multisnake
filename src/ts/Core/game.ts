import {Level} from "./level"
//, Render, LevelManager, ObjectManager
console.log('From Game');

// Game.level
// Game.render
// Game.levelManager
// Game.objectManager

// Game инитит основные свойства в общий класс
// Создает публичные подкласы для доступа извне
// Имеет методы Stop, Run, Reload

type Props = {
    canvas: any;

    ctx?: CanvasRenderingContext2D;
    speed?: number;
    width?: number;
    height?: number;
    cellSize?: number;
    snakeSize?: number;
}


class Game {

    props: Props = {
        canvas: 500,
        width: 500,
        height: 500,
        speed: 100,
        cellSize: 20,
        snakeSize: 20
    };

    level = new Level(this.props);
    // render = new Render();
    // levelManager = new LevelManager();
    // objectManager = new ObjectManager();

    constructor(props: Props) {
        this.props = props;
        this.props.ctx = this.props.canvas.getContext("2d");
    }

    // newGame() {
    //     this.level = new Level();
    // }

    set height(value: number) {
        this.props.height = value;
        this.props.canvas.height = value;
    }

    set width(value: number) {
        this.props.width = value;
        this.props.canvas.width = value;
    }

    resizeCanvas(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
}


export {Game}
