import { Render } from "./render";
import { Snake } from "./player";
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
class Setting {
    constructor(setting) {
        this.gridSize = 20;
        this.step = 20;
        this.speed = 1;
        this.snakeLength = 5;
        this.canvas = setting.canvas;
        this.ctx = setting.canvas.getContext("2d");
        this.step = setting.step;
        this.gridSize = setting.gridSize;
        this.snakeLength = setting.snakeLength;
        this.speed = setting.speed;
    }
    set newGridSize(value) {
        this.gridSize = value; // 20
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }
    set newStep(value) {
        this.step = value;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }
    get width() {
        return this.gridSize * this.step;
    }
    get height() {
        return this.gridSize * this.step;
    }
}
class Game {
    // levelManager = new LevelManager();
    // objectManager = new ObjectManager();
    constructor(set) {
        this.setting = new Setting(set);
        // this.level = new Level(this.setting);
        this.render = new Render(this.setting);
        this.resizeCanvas(this.setting.gridSize, this.setting.step);
        this.player = new Snake(this.setting);
        this.player.draw();
        this.player.animate();
        // console.log( 'set: ', this.setting );
    }
    // newGame() {
    //     this.level = new Level();
    // }
    start() {
    }
    // Получение настроек ->
    // Решить проблему с типизацией undefined
    resizeCanvas(gridSize, step) {
        this.setting.newStep = step;
        this.setting.newGridSize = gridSize;
        this.render.drawGrid();
    }
}
export { Game };
