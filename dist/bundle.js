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
﻿class Cell {
    constructor(x, y, color) {
        this.pos = new Vector(0, 0);
        this._color = '#000';
        this.comp = 3;
        this.isTurn = false;
        this.pos = new Vector(x, y);
        this._color = color;
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
            matrix[x] = [];
            for (var y = 0; y < this.amountY; y++) {
                matrix[x][y] = 0;
            }
        }
        console.log(matrix);
    }
}
class Vector {
    constructor(x, y) {
        this._length = 0;
        this.x = x;
        this.y = y;
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
/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ "./src/js/Core/level.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./src/js/Core/render.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/js/Core/player.js");
﻿


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
        this.gridSize = value;
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
    constructor(set) {
        this.setting = new Setting(set);
        this.level = new _level__WEBPACK_IMPORTED_MODULE_0__["Level"](this.setting);
        this.render = new _render__WEBPACK_IMPORTED_MODULE_1__["Render"](this.setting);
        this.resizeCanvas(this.setting.gridSize, this.setting.step);
        this.player = new _player__WEBPACK_IMPORTED_MODULE_2__["Snake"](this.setting);
        this.player.draw();
        this.player.animate();
    }
    start() {
    }
    resizeCanvas(gridSize, step) {
        this.setting.newStep = step;
        this.setting.newGridSize = gridSize;
        this.render.drawGrid();
    }
}



/***/ }),

/***/ "./src/js/Core/level.js":
/*!******************************!*\
  !*** ./src/js/Core/level.js ***!
  \******************************/
/*! exports provided: Level */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Level", function() { return Level; });
﻿class Level {
    constructor(props) {
        this.props = {};
        this.props = props;
        console.log('From LEVEL');
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
﻿
class Snake {
    constructor(props) {
        this.id = -1;
        this.bodyColor = '#c976c1';
        this.headColor = '#87212f';
        this.pos = new _Types__WEBPACK_IMPORTED_MODULE_0__["Vector"](10, 1);
        this.dir = new _Types__WEBPACK_IMPORTED_MODULE_0__["Dir"](_Types__WEBPACK_IMPORTED_MODULE_0__["Direction"].RIGHT);
        this.body = [];
        console.log(this);
        Snake.CountSnakes += 1;
        this.id += 1;
        this.props = props;
        this.size = this.props.step;
        this.speed = 1000 / props.speed;
        this.snakeLength = props.snakeLength;
        this.pos = new _Types__WEBPACK_IMPORTED_MODULE_0__["Vector"](this.snakeLength, 1);
        _Types__WEBPACK_IMPORTED_MODULE_0__["Cell"].prototype.props = this.props;
        new _Types__WEBPACK_IMPORTED_MODULE_0__["VGrid"](this.props.gridSize, this.props.gridSize);
        this.generate();
        console.log('snlength', props.snakeLength);
        console.log('dir', this.pos);
        console.log('body = ', this.body);
        this.addKeyEvent();
    }
    generate() {
        for (let i = 0; i < this.snakeLength; i++) {
            let x = this.pos.x - this.snakeLength + i;
            let y = this.pos.y;
            let color = this.bodyColor;
            if (i == this.snakeLength - 1)
                color = this.headColor;
            let o = new _Types__WEBPACK_IMPORTED_MODULE_0__["Cell"](x, y, color).on();
            this.body.push(o);
        }
        console.log('Body: ', this.body);
    }
    draw() {
        let last = this.body.length - 1;
        let color = this.bodyColor;
        let headcell = this.body[last];
        headcell.color(color);
        this.body[this.body.length - this.snakeLength].off();
        let o = new _Types__WEBPACK_IMPORTED_MODULE_0__["Cell"](this.pos.x, this.pos.y, this.headColor);
        this.body.push(o.on());
    }
    move() {
        this.pos.x += this.dir.x;
        this.pos.y += this.dir.y;
    }
    isCrash() {
        let head = this.body[this.body.length - 1].pos;
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
            o.move();
            o.draw();
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
        window.document.addEventListener("keyup", (e) => {
            if (e.code == Keys.DOWN || Keys.UP || Keys.LEFT || Keys.RIGHT) {
                o.speed = 1000;
            }
        });
        window.document.addEventListener('keydown', (e) => {
            switch (e.code) {
                case Keys.UP:
                    if (o.dir.status == _Types__WEBPACK_IMPORTED_MODULE_0__["Direction"].DOWN)
                        break;
                    o.speed = 100;
                    o.dir.up();
                    break;
                case Keys.LEFT:
                    if (o.dir.status == _Types__WEBPACK_IMPORTED_MODULE_0__["Direction"].RIGHT)
                        break;
                    o.speed = 100;
                    o.dir.left();
                    break;
                case Keys.DOWN:
                    if (o.dir.status == _Types__WEBPACK_IMPORTED_MODULE_0__["Direction"].UP)
                        break;
                    o.speed = 100;
                    o.dir.down();
                    break;
                case Keys.RIGHT:
                    if (o.dir.status == _Types__WEBPACK_IMPORTED_MODULE_0__["Direction"].LEFT)
                        break;
                    o.speed = 100;
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
﻿class Render {
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
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#aec2dc';
        for (let i = 0; i < this.setting.gridSize; i++) {
            ctx.moveTo(i * step, 0);
            ctx.lineTo(i * step, this.setting.height);
            ctx.stroke();
        }
        for (var i = 0; i < this.setting.gridSize; i++) {
            ctx.moveTo(0, i * step);
            ctx.lineTo(this.setting.width, i * step);
            ctx.stroke();
        }
        ctx.strokeStyle = '#000000';
        ctx.strokeRect(0, 0, this.setting.width, this.setting.height);
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
﻿
let canvas = document.querySelector("canvas");
let game = new _Core_game__WEBPACK_IMPORTED_MODULE_0__["Game"]({
    canvas: canvas,
    gridSize: 20,
    step: 20,
    speed: 2,
    snakeLength: 11,
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0NvcmUvVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0NvcmUvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQ29yZS9sZXZlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQ29yZS9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0NvcmUvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDJCQUEyQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwyQkFBMkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFBQSxDQUFvQztBQUNwQztBQUNBLGVBQWUsK0NBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvaW5kZXguanNcIik7XG4iLCLvu79leHBvcnQgY2xhc3MgQ2VsbCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBjb2xvcikge1xyXG4gICAgICAgIHRoaXMucG9zID0gbmV3IFZlY3RvcigwLCAwKTtcclxuICAgICAgICB0aGlzLl9jb2xvciA9ICcjMDAwJztcclxuICAgICAgICB0aGlzLmNvbXAgPSAzO1xyXG4gICAgICAgIHRoaXMuaXNUdXJuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wb3MgPSBuZXcgVmVjdG9yKHgsIHkpO1xyXG4gICAgICAgIHRoaXMuX2NvbG9yID0gY29sb3I7XHJcbiAgICB9XHJcbiAgICBjb2xvcihjb2xvcikge1xyXG4gICAgICAgIHRoaXMuX2NvbG9yID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5vbigpO1xyXG4gICAgfVxyXG4gICAgb2ZmKCkge1xyXG4gICAgICAgIGxldCBzdGVwID0gdGhpcy5wcm9wcy5zdGVwO1xyXG4gICAgICAgIGxldCB4ID0gdGhpcy5wb3MueCAqIHN0ZXAgKyAyO1xyXG4gICAgICAgIGxldCB5ID0gdGhpcy5wb3MueSAqIHN0ZXAgKyAyO1xyXG4gICAgICAgIHN0ZXAgPSBzdGVwIC0gNDtcclxuICAgICAgICB0aGlzLnByb3BzLmN0eC5jbGVhclJlY3QoeCwgeSwgc3RlcCwgc3RlcCk7XHJcbiAgICAgICAgdGhpcy5pc1R1cm4gPSBmYWxzZTtcclxuICAgIH1cclxuICAgIG9uKCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuX2NvbG9yO1xyXG4gICAgICAgIGxldCBzdGVwID0gdGhpcy5wcm9wcy5zdGVwO1xyXG4gICAgICAgIGxldCB4ID0gdGhpcy5wb3MueCAqIHN0ZXAgKyB0aGlzLmNvbXA7XHJcbiAgICAgICAgbGV0IHkgPSB0aGlzLnBvcy55ICogc3RlcCArIHRoaXMuY29tcDtcclxuICAgICAgICBzdGVwID0gc3RlcCAtIHRoaXMuY29tcCAqIDI7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jdHguZmlsbFJlY3QoeCwgeSwgc3RlcCwgc3RlcCk7XHJcbiAgICAgICAgdGhpcy5pc1R1cm4gPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBWR3JpZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihhbW91bnRYLCBhbW91bnRZKSB7XHJcbiAgICAgICAgdGhpcy5hbW91bnRYID0gYW1vdW50WDtcclxuICAgICAgICB0aGlzLmFtb3VudFkgPSBhbW91bnRZO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTWF0cml4KCk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVNYXRyaXgoKSB7XHJcbiAgICAgICAgbGV0IG1hdHJpeCA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgdGhpcy5hbW91bnRYOyB4KyspIHtcclxuICAgICAgICAgICAgbWF0cml4W3hdID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgdGhpcy5hbW91bnRZOyB5KyspIHtcclxuICAgICAgICAgICAgICAgIG1hdHJpeFt4XVt5XSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2cobWF0cml4KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgVmVjdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcclxuICAgICAgICB0aGlzLl9sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuICAgIHNldCBsZW5ndGgodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9sZW5ndGggPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIGdldCBsZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh0aGlzLngsIDIpICsgTWF0aC5wb3codGhpcy55LCAyKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IHZhciBEaXJlY3Rpb247XHJcbihmdW5jdGlvbiAoRGlyZWN0aW9uKSB7XHJcbiAgICBEaXJlY3Rpb25bXCJVUFwiXSA9IFwiVVBcIjtcclxuICAgIERpcmVjdGlvbltcIkxFRlRcIl0gPSBcIkxFRlRcIjtcclxuICAgIERpcmVjdGlvbltcIkRPV05cIl0gPSBcIkRPV05cIjtcclxuICAgIERpcmVjdGlvbltcIlJJR0hUXCJdID0gXCJSSUdIVFwiO1xyXG59KShEaXJlY3Rpb24gfHwgKERpcmVjdGlvbiA9IHt9KSk7XHJcbmV4cG9ydCBjbGFzcyBEaXIgZXh0ZW5kcyBWZWN0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoZGlyKSB7XHJcbiAgICAgICAgc3VwZXIoMSwgMCk7XHJcbiAgICAgICAgc3dpdGNoIChkaXIpIHtcclxuICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb24uVVA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb24uRE9XTjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG93bigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLkxFRlQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIERpcmVjdGlvbi5SSUdIVDpcclxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVwKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gRGlyZWN0aW9uLlVQO1xyXG4gICAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgICAgdGhpcy55ID0gLTE7XHJcbiAgICB9XHJcbiAgICBkb3duKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gRGlyZWN0aW9uLkRPV047XHJcbiAgICAgICAgdGhpcy54ID0gMDtcclxuICAgICAgICB0aGlzLnkgPSAxO1xyXG4gICAgfVxyXG4gICAgbGVmdCgpIHtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IERpcmVjdGlvbi5MRUZUO1xyXG4gICAgICAgIHRoaXMueCA9IC0xO1xyXG4gICAgICAgIHRoaXMueSA9IDA7XHJcbiAgICB9XHJcbiAgICByaWdodCgpIHtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IERpcmVjdGlvbi5SSUdIVDtcclxuICAgICAgICB0aGlzLnggPSAxO1xyXG4gICAgICAgIHRoaXMueSA9IDA7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJlY3QgZXh0ZW5kcyBWZWN0b3Ige1xyXG59XHJcbiIsIu+7v2ltcG9ydCB7IExldmVsIH0gZnJvbSBcIi4vbGV2ZWxcIjtcclxuaW1wb3J0IHsgUmVuZGVyIH0gZnJvbSBcIi4vcmVuZGVyXCI7XHJcbmltcG9ydCB7IFNuYWtlIH0gZnJvbSBcIi4vcGxheWVyXCI7XHJcbmNsYXNzIFNldHRpbmcge1xyXG4gICAgY29uc3RydWN0b3Ioc2V0dGluZykge1xyXG4gICAgICAgIHRoaXMuZ3JpZFNpemUgPSAyMDtcclxuICAgICAgICB0aGlzLnN0ZXAgPSAyMDtcclxuICAgICAgICB0aGlzLnNwZWVkID0gMTtcclxuICAgICAgICB0aGlzLnNuYWtlTGVuZ3RoID0gNTtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IHNldHRpbmcuY2FudmFzO1xyXG4gICAgICAgIHRoaXMuY3R4ID0gc2V0dGluZy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIHRoaXMuc3RlcCA9IHNldHRpbmcuc3RlcDtcclxuICAgICAgICB0aGlzLmdyaWRTaXplID0gc2V0dGluZy5ncmlkU2l6ZTtcclxuICAgICAgICB0aGlzLnNuYWtlTGVuZ3RoID0gc2V0dGluZy5zbmFrZUxlbmd0aDtcclxuICAgICAgICB0aGlzLnNwZWVkID0gc2V0dGluZy5zcGVlZDtcclxuICAgIH1cclxuICAgIHNldCBuZXdHcmlkU2l6ZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZ3JpZFNpemUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICB9XHJcbiAgICBzZXQgbmV3U3RlcCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc3RlcCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy53aWR0aDtcclxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuICAgIH1cclxuICAgIGdldCB3aWR0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ncmlkU2l6ZSAqIHRoaXMuc3RlcDtcclxuICAgIH1cclxuICAgIGdldCBoZWlnaHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZFNpemUgKiB0aGlzLnN0ZXA7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgR2FtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzZXQpIHtcclxuICAgICAgICB0aGlzLnNldHRpbmcgPSBuZXcgU2V0dGluZyhzZXQpO1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSBuZXcgTGV2ZWwodGhpcy5zZXR0aW5nKTtcclxuICAgICAgICB0aGlzLnJlbmRlciA9IG5ldyBSZW5kZXIodGhpcy5zZXR0aW5nKTtcclxuICAgICAgICB0aGlzLnJlc2l6ZUNhbnZhcyh0aGlzLnNldHRpbmcuZ3JpZFNpemUsIHRoaXMuc2V0dGluZy5zdGVwKTtcclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBTbmFrZSh0aGlzLnNldHRpbmcpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLmRyYXcoKTtcclxuICAgICAgICB0aGlzLnBsYXllci5hbmltYXRlKCk7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgIH1cclxuICAgIHJlc2l6ZUNhbnZhcyhncmlkU2l6ZSwgc3RlcCkge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZy5uZXdTdGVwID0gc3RlcDtcclxuICAgICAgICB0aGlzLnNldHRpbmcubmV3R3JpZFNpemUgPSBncmlkU2l6ZTtcclxuICAgICAgICB0aGlzLnJlbmRlci5kcmF3R3JpZCgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCB7IEdhbWUgfTtcclxuIiwi77u/Y2xhc3MgTGV2ZWwge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICB0aGlzLnByb3BzID0ge307XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdGcm9tIExFVkVMJyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IHsgTGV2ZWwgfTtcclxuIiwi77u/aW1wb3J0IHsgQ2VsbCwgRGlyLCBEaXJlY3Rpb24sIFZHcmlkLCBWZWN0b3IgfSBmcm9tIFwiLi9UeXBlc1wiO1xyXG5leHBvcnQgY2xhc3MgU25ha2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICB0aGlzLmlkID0gLTE7XHJcbiAgICAgICAgdGhpcy5ib2R5Q29sb3IgPSAnI2M5NzZjMSc7XHJcbiAgICAgICAgdGhpcy5oZWFkQ29sb3IgPSAnIzg3MjEyZic7XHJcbiAgICAgICAgdGhpcy5wb3MgPSBuZXcgVmVjdG9yKDEwLCAxKTtcclxuICAgICAgICB0aGlzLmRpciA9IG5ldyBEaXIoRGlyZWN0aW9uLlJJR0hUKTtcclxuICAgICAgICB0aGlzLmJvZHkgPSBbXTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgICAgICBTbmFrZS5Db3VudFNuYWtlcyArPSAxO1xyXG4gICAgICAgIHRoaXMuaWQgKz0gMTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICAgICAgdGhpcy5zaXplID0gdGhpcy5wcm9wcy5zdGVwO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSAxMDAwIC8gcHJvcHMuc3BlZWQ7XHJcbiAgICAgICAgdGhpcy5zbmFrZUxlbmd0aCA9IHByb3BzLnNuYWtlTGVuZ3RoO1xyXG4gICAgICAgIHRoaXMucG9zID0gbmV3IFZlY3Rvcih0aGlzLnNuYWtlTGVuZ3RoLCAxKTtcclxuICAgICAgICBDZWxsLnByb3RvdHlwZS5wcm9wcyA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbmV3IFZHcmlkKHRoaXMucHJvcHMuZ3JpZFNpemUsIHRoaXMucHJvcHMuZ3JpZFNpemUpO1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnc25sZW5ndGgnLCBwcm9wcy5zbmFrZUxlbmd0aCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RpcicsIHRoaXMucG9zKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnYm9keSA9ICcsIHRoaXMuYm9keSk7XHJcbiAgICAgICAgdGhpcy5hZGRLZXlFdmVudCgpO1xyXG4gICAgfVxyXG4gICAgZ2VuZXJhdGUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNuYWtlTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHggPSB0aGlzLnBvcy54IC0gdGhpcy5zbmFrZUxlbmd0aCArIGk7XHJcbiAgICAgICAgICAgIGxldCB5ID0gdGhpcy5wb3MueTtcclxuICAgICAgICAgICAgbGV0IGNvbG9yID0gdGhpcy5ib2R5Q29sb3I7XHJcbiAgICAgICAgICAgIGlmIChpID09IHRoaXMuc25ha2VMZW5ndGggLSAxKVxyXG4gICAgICAgICAgICAgICAgY29sb3IgPSB0aGlzLmhlYWRDb2xvcjtcclxuICAgICAgICAgICAgbGV0IG8gPSBuZXcgQ2VsbCh4LCB5LCBjb2xvcikub24oKTtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LnB1c2gobyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdCb2R5OiAnLCB0aGlzLmJvZHkpO1xyXG4gICAgfVxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBsZXQgbGFzdCA9IHRoaXMuYm9keS5sZW5ndGggLSAxO1xyXG4gICAgICAgIGxldCBjb2xvciA9IHRoaXMuYm9keUNvbG9yO1xyXG4gICAgICAgIGxldCBoZWFkY2VsbCA9IHRoaXMuYm9keVtsYXN0XTtcclxuICAgICAgICBoZWFkY2VsbC5jb2xvcihjb2xvcik7XHJcbiAgICAgICAgdGhpcy5ib2R5W3RoaXMuYm9keS5sZW5ndGggLSB0aGlzLnNuYWtlTGVuZ3RoXS5vZmYoKTtcclxuICAgICAgICBsZXQgbyA9IG5ldyBDZWxsKHRoaXMucG9zLngsIHRoaXMucG9zLnksIHRoaXMuaGVhZENvbG9yKTtcclxuICAgICAgICB0aGlzLmJvZHkucHVzaChvLm9uKCkpO1xyXG4gICAgfVxyXG4gICAgbW92ZSgpIHtcclxuICAgICAgICB0aGlzLnBvcy54ICs9IHRoaXMuZGlyLng7XHJcbiAgICAgICAgdGhpcy5wb3MueSArPSB0aGlzLmRpci55O1xyXG4gICAgfVxyXG4gICAgaXNDcmFzaCgpIHtcclxuICAgICAgICBsZXQgaGVhZCA9IHRoaXMuYm9keVt0aGlzLmJvZHkubGVuZ3RoIC0gMV0ucG9zO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4IGluIHRoaXMuYm9keSkge1xyXG4gICAgICAgICAgICBsZXQgaSA9ICtpbmRleDtcclxuICAgICAgICAgICAgaWYgKGkgIT09ICh0aGlzLmJvZHkubGVuZ3RoIC0gMSkgJiYgdGhpcy5ib2R5W2ldLmlzVHVybikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhlYWQueCA9PSB0aGlzLmJvZHlbaV0ucG9zLnggJiYgaGVhZC55ID09IHRoaXMuYm9keVtpXS5wb3MueSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCfQodGC0L7Qu9C60L3QvtCy0LXQvdC40LUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFuaW1hdGUoKSB7XHJcbiAgICAgICAgbGV0IG8gPSB0aGlzO1xyXG4gICAgICAgIGZ1bmN0aW9uIGYoKSB7XHJcbiAgICAgICAgICAgIG8ubW92ZSgpO1xyXG4gICAgICAgICAgICBvLmRyYXcoKTtcclxuICAgICAgICAgICAgby5hbmltYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRpbWVvdXQoZiwgdGhpcy5zcGVlZCk7XHJcbiAgICB9XHJcbiAgICBhZGRLZXlFdmVudCgpIHtcclxuICAgICAgICBsZXQgbyA9IHRoaXM7XHJcbiAgICAgICAgbGV0IEtleXM7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChLZXlzKSB7XHJcbiAgICAgICAgICAgIEtleXNbXCJVUFwiXSA9IFwiS2V5V1wiO1xyXG4gICAgICAgICAgICBLZXlzW1wiTEVGVFwiXSA9IFwiS2V5QVwiO1xyXG4gICAgICAgICAgICBLZXlzW1wiRE9XTlwiXSA9IFwiS2V5U1wiO1xyXG4gICAgICAgICAgICBLZXlzW1wiUklHSFRcIl0gPSBcIktleURcIjtcclxuICAgICAgICB9KShLZXlzIHx8IChLZXlzID0ge30pKTtcclxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmNvZGUgPT0gS2V5cy5ET1dOIHx8IEtleXMuVVAgfHwgS2V5cy5MRUZUIHx8IEtleXMuUklHSFQpIHtcclxuICAgICAgICAgICAgICAgIG8uc3BlZWQgPSAxMDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGUuY29kZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBLZXlzLlVQOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvLmRpci5zdGF0dXMgPT0gRGlyZWN0aW9uLkRPV04pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIG8uc3BlZWQgPSAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgby5kaXIudXAoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgS2V5cy5MRUZUOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvLmRpci5zdGF0dXMgPT0gRGlyZWN0aW9uLlJJR0hUKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBvLnNwZWVkID0gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG8uZGlyLmxlZnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgS2V5cy5ET1dOOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvLmRpci5zdGF0dXMgPT0gRGlyZWN0aW9uLlVQKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBvLnNwZWVkID0gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG8uZGlyLmRvd24oKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgS2V5cy5SSUdIVDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoby5kaXIuc3RhdHVzID09IERpcmVjdGlvbi5MRUZUKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBvLnNwZWVkID0gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG8uZGlyLnJpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5TbmFrZS5Db3VudFNuYWtlcyA9IDA7XHJcbiIsIu+7v2V4cG9ydCBjbGFzcyBSZW5kZXIge1xyXG4gICAgY29uc3RydWN0b3Ioc2V0dGluZykge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZyA9IHNldHRpbmc7XHJcbiAgICB9XHJcbiAgICBjbGVhckdyaWQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5zZXR0aW5nLndpZHRoLCB0aGlzLnNldHRpbmcuaGVpZ2h0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNsZWFyR3JpZFwiKTtcclxuICAgIH1cclxuICAgIGRyYXdHcmlkKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJHcmlkKCk7XHJcbiAgICAgICAgbGV0IHN0ZXAgPSB0aGlzLnNldHRpbmcuc3RlcDtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5zZXR0aW5nLmN0eDtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnI2FlYzJkYyc7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNldHRpbmcuZ3JpZFNpemU7IGkrKykge1xyXG4gICAgICAgICAgICBjdHgubW92ZVRvKGkgKiBzdGVwLCAwKTtcclxuICAgICAgICAgICAgY3R4LmxpbmVUbyhpICogc3RlcCwgdGhpcy5zZXR0aW5nLmhlaWdodCk7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNldHRpbmcuZ3JpZFNpemU7IGkrKykge1xyXG4gICAgICAgICAgICBjdHgubW92ZVRvKDAsIGkgKiBzdGVwKTtcclxuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLnNldHRpbmcud2lkdGgsIGkgKiBzdGVwKTtcclxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnIzAwMDAwMCc7XHJcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QoMCwgMCwgdGhpcy5zZXR0aW5nLndpZHRoLCB0aGlzLnNldHRpbmcuaGVpZ2h0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRyYXdHcmlkXCIpO1xyXG4gICAgfVxyXG59XHJcbiIsIu+7v2ltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9Db3JlL2dhbWVcIjtcclxubGV0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjYW52YXNcIik7XHJcbmxldCBnYW1lID0gbmV3IEdhbWUoe1xyXG4gICAgY2FudmFzOiBjYW52YXMsXHJcbiAgICBncmlkU2l6ZTogMjAsXHJcbiAgICBzdGVwOiAyMCxcclxuICAgIHNwZWVkOiAyLFxyXG4gICAgc25ha2VMZW5ndGg6IDExLFxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==