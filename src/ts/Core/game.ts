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
        gridSize: 20,
        step: 20,
        speed: 100,
        snakeSize: 20
     };


    level : Level;
    render : Render;

    // levelManager = new LevelManager();
    // objectManager = new ObjectManager();

    constructor(props: Props) {

        this.props = props;
        this.props.ctx = this.props.canvas.getContext("2d");



        // this.level = new Level(this.props);
        this.render = new Render(this.props);

        this.resizeCanvas(this.props.gridSize, this.props.step);

        this.render.drawGrid();
        // console.log( 'PROPS: ', this.props );

    }

    // newGame() {
    //     this.level = new Level();
    // }

    set gridSize(value: number) {
        this.props.gridSize = value; // 20

        this.props.width = value * this.props.step;
        this.props.height = value * this.props.step;

        this.props.canvas.width = this.props.width;
        this.props.canvas.height = this.props.height;

    }

    set step(value: number) {
        this.props.step = value;

        this.props.width = value * this.props.gridSize;
        this.props.height = value * this.props.gridSize;

        this.props.canvas.width = this.props.width;
        this.props.canvas.height = this.props.height;
    }

    // Решить проблему с типизацией undefined
    public resizeCanvas(gridSize: number, step: number) {
        this.step = step ;
        this.gridSize = gridSize;

        console.log("resizeCanvas");
    }
}


export {Game}
