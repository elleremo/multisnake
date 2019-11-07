/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// webpack-livereload-plugin
/******/ 	(function() {
/******/ 	  if (typeof window === "undefined") { return };
/******/ 	  var id = "webpack-livereload-plugin-script-a4992d5a7b017cbe";
/******/ 	  if (document.getElementById(id)) { return; }
/******/ 	  var el = document.createElement("script");
/******/ 	  el.id = id;
/******/ 	  el.async = true;
/******/ 	  el.src = "//" + location.hostname + ":35729/livereload.js";
/******/ 	  document.getElementsByTagName("head")[0].appendChild(el);
/******/ 	}());
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Core/Types.js":
/*!******************************!*\
  !*** ./src/js/Core/Types.js ***!
  \******************************/
/*! exports provided: Cell, VGrid, Vector, Direction, Dir, Rect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VGrid", function() { return VGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return Vector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return Direction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dir", function() { return Dir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rect", function() { return Rect; });
// import enumerate = Reflect.enumerate;
class Cell {
    constructor(x, y, color) {
        this.pos = new Vector(0, 0);
        this._color = '#000';
        this.comp = 2;
        this.isTurn = false;
        this.pos = new Vector(x, y);
        this._color = color;
        // this.props = props;
    }
    color(color) {
        this._color = color;
        this.on();
    }
    off() {
        let step = this.props.step;
        let x = this.pos.x * step + 2;
        let y = this.pos.y * step + 2;
        step = step - 4;
        this.props.ctx.clearRect(x, y, step, step);
        this.isTurn = false;
    }
    on() {
        this.props.ctx.fillStyle = this._color;
        let step = this.props.step;
        let x = this.pos.x * step + this.comp;
        let y = this.pos.y * step + this.comp;
        step = step - this.comp * 2;
        this.props.ctx.fillRect(x, y, step, step);
        this.isTurn = true;
        return this;
    }
}
class VGrid {
    constructor(amountX, amountY) {
        this.amountX = amountX;
        this.amountY = amountY;
        this.createMatrix();
    }
    createMatrix() {
        let matrix = [];
        for (var x = 0; x < this.amountX; x++) {
            matrix[x] = [0];
            for (var y = 0; y < this.amountY; y++) {
                matrix[x][y] = 0;
            }
        }
        this.matrix = matrix;
    }
}
class Vector {
    constructor(x, y) {
        this._length = 0;
        this.x = x;
        this.y = y;
        // this.length = this.length; // Проверить как работают сет/гет
    }
    set length(value) {
        this._length = value;
    }
    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}
var Direction;
(function (Direction) {
    Direction["UP"] = "UP";
    Direction["LEFT"] = "LEFT";
    Direction["DOWN"] = "DOWN";
    Direction["RIGHT"] = "RIGHT";
})(Direction || (Direction = {}));
class Dir extends Vector {
    constructor(dir) {
        super(1, 0);
        switch (dir) {
            case Direction.UP:
                this.up();
                break;
            case Direction.DOWN:
                this.down();
                break;
            case Direction.LEFT:
                this.left();
                break;
            case Direction.RIGHT:
                this.right();
                break;
        }
    }
    up() {
        this.status = Direction.UP;
        this.x = 0;
        this.y = -1;
    }
    down() {
        this.status = Direction.DOWN;
        this.x = 0;
        this.y = 1;
    }
    left() {
        this.status = Direction.LEFT;
        this.x = -1;
        this.y = 0;
    }
    right() {
        this.status = Direction.RIGHT;
        this.x = 1;
        this.y = 0;
    }
}
class Rect extends Vector {
}


/***/ }),

/***/ "./src/js/Core/game.js":
/*!*****************************!*\
  !*** ./src/js/Core/game.js ***!
  \*****************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/js/Core/render.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/js/Core/player.js");


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
        this.render = new _render__WEBPACK_IMPORTED_MODULE_0__["Render"](this.setting);
        this.resizeCanvas(this.setting.gridSize, this.setting.step);
        this.player = new _player__WEBPACK_IMPORTED_MODULE_1__["Snake"](this.setting);
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



/***/ }),

/***/ "./src/js/Core/player.js":
/*!*******************************!*\
  !*** ./src/js/Core/player.js ***!
  \*******************************/
/*! exports provided: Snake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Snake", function() { return Snake; });
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Types */ "./src/js/Core/Types.js");

// Snake должен уметь двигаться
// Возможносто стоит создать вектор движения
// и поворачивать его на 90гр по нажатию клавиши
//
class Snake {
    constructor(props) {
        this.id = -1; // Чтобы первый snake имел id = 0
        this.bodyColor = '#5c98c9';
        this.headColor = '#bd63e4';
        this.pos = new _Types__WEBPACK_IMPORTED_MODULE_0__["Vector"](5, 1); //позиция головы 6 1
        this.dir = new _Types__WEBPACK_IMPORTED_MODULE_0__["Dir"](_Types__WEBPACK_IMPORTED_MODULE_0__["Direction"].RIGHT);
        this.body = [];
        console.log(this);
        Snake.CountSnakes += 1;
        this.id += 1;
        this.props = props;
        this.size = this.props.step; // сжимаем отрисовку
        this.speed = 1000 / props.speed;
        this.snakeLength = props.snakeLength;
        // this.pos = new Vector(this.snakeLength, 1);
        _Types__WEBPACK_IMPORTED_MODULE_0__["Cell"].prototype.props = this.props;
        this.vgrid = new _Types__WEBPACK_IMPORTED_MODULE_0__["VGrid"](this.props.gridSize, this.props.gridSize);
        // console.log('VGRIIID', this.vgrid);
        this.generate();
        // console.log('snakeLength', props.snakeLength);
        // console.log('dir', this.pos);
        // this.oldPos = new Vector(1, 1);
        // console.log('body = ', this.body);
        this.addKeyEvent();
    }
    generate() {
        for (let i = 0; i < this.snakeLength; i++) {
            let x = this.pos.x - this.snakeLength + i; // 6-5+0
            let y = this.pos.y;
            //
            // if (x < 0 || y<0){
            //
            // }
            // else {
            //     this.vgrid.matrix[y][x] = 1;
            // }
            let color = this.bodyColor;
            if (i == this.snakeLength - 1)
                color = this.headColor;
            let o = new _Types__WEBPACK_IMPORTED_MODULE_0__["Cell"](x, y, color);
            this.body.push(o);
        }
        this.draw();
        console.log('GEN', this.vgrid);
    }
    draw() {
        for (var cell in this.body) {
            this.body[cell].on();
        }
        //
        // let last = this.body.length - 1;
        // let color = this.bodyColor;
        //
        // let headcell = this.body[last]; // -1 ???
        // headcell.color(color);
        //
        //
        // let ass = this.body[this.body.length - this.snakeLength];
        //
        // ass.off();
        // // this.vgrid.matrix[ass.pos.x][ass.pos.y]=0;
        // // this.body.shift(); // удаляем задницу после выключения
        //
        // let o = new Cell(this.pos.x, this.pos.y, this.headColor);
        // // this.vgrid.matrix[this.pos.x][this.pos.y]=1;
        // this.body.push(o.on());
        // let ctx = this.props.ctx;
        // ctx.fillStyle = this.color;
        //
        // let comp = 3; // compression
        // let size = this.props.step - comp - comp;
        // // let headpos = (length + 1) * size;
        //
        // let x = this.pos.x * this.props.step;
        // let y = this.pos.y * this.props.step;
        //
        // ctx.fillRect(x + comp, y + comp, size, size);
        //
        // // let assX = this.pos.x - this.length ;
        // // let assY = this.pos.y - this.length ;
        // let assX = this.oldPos.x * 20;
        // let assY = this.oldPos.y * 20;
        //
        //
        // ctx.clearRect(assX + comp, assY + comp, size, size);
    }
    move() {
        var v;
        // this.isCrash();
        this.pos.x += this.dir.x;
        this.pos.y += this.dir.y;
        console.log('Body: ', this.body);
        // this.oldPos.x += this.dir.x;
        // this.oldPos.y += this.dir.y;
    }
    isCrash() {
        let head = this.body[this.body.length - 1].pos; // head position Vector
        // Если индекс head не равен текущему то чтото делаем
        for (let index in this.body) {
            let i = +index;
            if (i !== (this.body.length - 1) && this.body[i].isTurn) {
                if (head.x == this.body[i].pos.x && head.y == this.body[i].pos.y) {
                    alert('Столкновение');
                }
            }
        }
    }
    animate() {
        let o = this;
        function f() {
            o.draw();
            // o.isCrash();
            o.move();
            o.animate();
        }
        setTimeout(f, this.speed);
    }
    addKeyEvent() {
        let o = this;
        let Keys;
        (function (Keys) {
            Keys["UP"] = "KeyW";
            Keys["LEFT"] = "KeyA";
            Keys["DOWN"] = "KeyS";
            Keys["RIGHT"] = "KeyD";
        })(Keys || (Keys = {}));
        let speed = o.speed;
        window.document.addEventListener("keyup", (e) => {
            if (e.code == Keys.DOWN || Keys.UP || Keys.LEFT || Keys.RIGHT) {
                // console.log(o.speed);
                o.speed = speed;
            }
        });
        window.document.addEventListener('keydown', (e) => {
            switch (e.code) {
                case Keys.UP:
                    if (o.dir.status == _Types__WEBPACK_IMPORTED_MODULE_0__["Direction"].DOWN)
                        break;
                    // o.speed = 100;
                    o.dir.up();
                    break;
                case Keys.LEFT:
                    if (o.dir.status == _Types__WEBPACK_IMPORTED_MODULE_0__["Direction"].RIGHT)
                        break;
                    // o.speed = 100;
                    o.dir.left();
                    break;
                case Keys.DOWN:
                    if (o.dir.status == _Types__WEBPACK_IMPORTED_MODULE_0__["Direction"].UP)
                        break;
                    // o.speed = 100;
                    o.dir.down();
                    break;
                case Keys.RIGHT:
                    if (o.dir.status == _Types__WEBPACK_IMPORTED_MODULE_0__["Direction"].LEFT)
                        break;
                    // o.speed = 100;
                    o.dir.right();
                    break;
            }
        });
    }
}
Snake.CountSnakes = 0;


/***/ }),

/***/ "./src/js/Core/render.js":
/*!*******************************!*\
  !*** ./src/js/Core/render.js ***!
  \*******************************/
/*! exports provided: Render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Render", function() { return Render; });
class Render {
    constructor(setting) {
        this.setting = setting;
    }
    clearGrid() {
        this.setting.ctx.clearRect(0, 0, this.setting.width, this.setting.height);
        console.log("clearGrid");
    }
    drawGrid() {
        this.clearGrid();
        let step = this.setting.step;
        let ctx = this.setting.ctx;
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#aec2dc';
        // кол-во клеток
        for (let i = 0; i < this.setting.gridSize; i++) {
            ctx.moveTo(i * step, 0);
            ctx.lineTo(i * step, this.setting.height);
            ctx.stroke();
            // console.log ('i = ', i);
        }
        for (var i = 0; i < this.setting.gridSize; i++) {
            ctx.moveTo(0, i * step);
            ctx.lineTo(this.setting.width, i * step);
            ctx.stroke();
        }
        ctx.strokeStyle = '#000000';
        // ctx.fillRect(250,50,50,50);
        ctx.strokeRect(0, 0, this.setting.width, this.setting.height);
        // ctx.stroke();
        // ctx.fill();
        // ctx.fillRect(0,0,200,1);
        console.log("DrawGrid");
    }
}


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Core_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Core/game */ "./src/js/Core/game.js");

let canvas = document.querySelector("canvas");
let game = new _Core_game__WEBPACK_IMPORTED_MODULE_0__["Game"]({
    canvas: canvas,
    gridSize: 20,
    step: 20,
    speed: 5,
    snakeLength: 5,
});
// game.setting.newStep = 30;
// canvas.width= 500;
// canvas.height= 500;
// game.resizeCanvas(2, 50);
// console.log("CTX after : " , game.setting.ctx);
// game.render.drawGrid();
// console.log('5 - FROM I4ndex', game.setting);
//
// let matrix : number[][] = [] ;
// // matrix[] = 5;
//
//
// for (var x=0; x< 20; x++) {
//     matrix[x]=[];
//     for (var y=0; y<20; y++){
//         matrix[x][y]=0;
//     }
// }
//
//
// // createMatrix();
// console.log('Matrix', matrix );
// function createMatrix () {
//     // let x: [number] = [0];
//     // let y: [number] = [0];
//
//     for (let i = 0; i < 10; i++) {
//         matrix[i][] = 0;
//         for (let j = 0; j < 10; j++) {
//             y.push(i) }
//     }
//
//
//
//     matrix.x = x;
//     matrix.y = y;
//
// }


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map