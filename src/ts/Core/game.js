"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var level_1 = require("./level");
var render_1 = require("./render");
var player_1 = require("./player");
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
var Setting = /** @class */ (function () {
    function Setting(setting) {
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
    Object.defineProperty(Setting.prototype, "newGridSize", {
        set: function (value) {
            this.gridSize = value; // 20
            this.canvas.width = this.width;
            this.canvas.height = this.height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Setting.prototype, "newStep", {
        set: function (value) {
            this.step = value;
            this.canvas.width = this.width;
            this.canvas.height = this.height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Setting.prototype, "width", {
        get: function () {
            return this.gridSize * this.step;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Setting.prototype, "height", {
        get: function () {
            return this.gridSize * this.step;
        },
        enumerable: true,
        configurable: true
    });
    return Setting;
}());
var Game = /** @class */ (function () {
    // levelManager = new LevelManager();
    // objectManager = new ObjectManager();
    function Game(set) {
        this.setting = new Setting(set);
        this.level = new level_1.Level(this.setting);
        this.render = new render_1.Render(this.setting);
        this.resizeCanvas(this.setting.gridSize, this.setting.step);
        this.player = new player_1.Snake(this.setting);
        this.player.draw();
        this.player.animate();
        // console.log( 'set: ', this.setting );
    }
    // newGame() {
    //     this.level = new Level();
    // }
    Game.prototype.start = function () {
    };
    // Получение настроек ->
    // Решить проблему с типизацией undefined
    Game.prototype.resizeCanvas = function (gridSize, step) {
        this.setting.newStep = step;
        this.setting.newGridSize = gridSize;
        this.render.drawGrid();
    };
    return Game;
}());
exports.Game = Game;
