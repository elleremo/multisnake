import {Level} from "./level"
import {Render} from "./render"
import {Props} from "./Types"
// import {LevelManager} from "./level_manager"
// import {ObjectManager} from "./object_manager"

//, Render, LevelManager, ObjectManager


// Game.level
// Game.render
// Game.levelManager
// Game.objectManager

// Game инитит основные свойства в общий класс
// Создает публичные подкласы для доступа извне
// Имеет методы Stop, Run, Reload




class Game {
    // Ссылка-объект, доступен для изменения другим классам
    props: Props = {
        canvas: HTMLCanvasElement,
        width: 500,
        height: 500,
        speed: 100,
        cellSize: 20,
        snakeSize: 20
    };
    level : Level;
    render : Render;

    // levelManager = new LevelManager();
    // objectManager = new ObjectManager();

    constructor(props: Props) {

        this.props = props;
        this.props.width +=2; //
        this.props.height +=2; //

        this.props.ctx = this.props.canvas.getContext("2d");

        this.resizeCanvas(props.width,props.height);

        this.level = new Level(this.props);
        this.render = new Render(this.props);
        this.render.drawGrid();
    }

    // newGame() {
    //     this.level = new Level();
    // }

    set width(value: number) {
        this.props.width = value;
        this.props.canvas.width = value;
    }

    set height(value: number) {
        this.props.height = value;
        this.props.canvas.height = value;
    }

    // Решить проблему с типизацией undefined
    resizeCanvas(width: number, height: number) {
        this.width = width ;
        this.height = height;
    }
}


export {Game}
