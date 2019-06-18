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
/*! exports provided: Cell, Vector, Rect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return Vector; });
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
    constructor(pxSize, amountX, amountY) {
        this.pxSize = pxSize;
        this.amountX = amountX;
        this.amountY = amountY;
        this.createMatrix();
    }
    createMatrix() {
        let x;
        let y;
        for (let i = 0; i < this.amountX; i++) {
            x.push(i);
        }
        for (let i = 0; i < this.amountY; i++) {
            y.push(i);
        }
        this.matrix = [x, y];
    }
}
class OV {
}
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
    up() {
        this.x = 0;
        this.y = -1;
    }
    down() {
        this.x = 0;
        this.y = 1;
    }
    left() {
        this.x = -1;
        this.y = 0;
    }
    right() {
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
        this.speed = 100;
        this.snakeLength = 5;
        this.canvas = setting.canvas;
        this.ctx = setting.canvas.getContext("2d");
        this.step = setting.step;
        this.gridSize = setting.gridSize;
        this.snakeLength = setting.snakeLength;
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
        this.dir = new _Types__WEBPACK_IMPORTED_MODULE_0__["Vector"](1, 0);
        this.body = [];
        console.log(this);
        Snake.CountSnakes += 1;
        this.id += 1;
        this.props = props;
        this.size = this.props.step;
        this.speed = 400 - props.speed;
        this.snakeLength = props.snakeLength;
        this.pos = new _Types__WEBPACK_IMPORTED_MODULE_0__["Vector"](this.snakeLength, 1);
        _Types__WEBPACK_IMPORTED_MODULE_0__["Cell"].prototype.props = this.props;
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
        let id = setInterval(function () {
            o.move();
            o.isCrash();
            o.draw();
        }, 200);
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
        window.document.addEventListener('keydown', (e) => {
            console.log(e);
            switch (e.code) {
                case Keys.UP:
                    o.dir.up();
                    break;
                case Keys.LEFT:
                    o.dir.left();
                    break;
                case Keys.DOWN:
                    o.dir.down();
                    break;
                case Keys.RIGHT:
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
        ctx.strokeStyle = '#d3d1d0';
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
    speed: 350,
    snakeLength: 10,
});
let matrix = [];
for (var x = 0; x < 20; x++) {
    matrix[x] = [];
    for (var y = 0; y < 20; y++) {
        matrix[x][y] = 0;
    }
}
matrix[5][15] = 5;
console.log('Matrix', matrix);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0NvcmUvVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0NvcmUvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQ29yZS9sZXZlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQ29yZS9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0NvcmUvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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c0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvaW5kZXguanNcIik7XG4iLCLvu79leHBvcnQgY2xhc3MgQ2VsbCB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgY29sb3IpIHtcbiAgICAgICAgdGhpcy5wb3MgPSBuZXcgVmVjdG9yKDAsIDApO1xuICAgICAgICB0aGlzLl9jb2xvciA9ICcjMDAwJztcbiAgICAgICAgdGhpcy5jb21wID0gMztcbiAgICAgICAgdGhpcy5pc1R1cm4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb3MgPSBuZXcgVmVjdG9yKHgsIHkpO1xuICAgICAgICB0aGlzLl9jb2xvciA9IGNvbG9yO1xuICAgIH1cbiAgICBjb2xvcihjb2xvcikge1xuICAgICAgICB0aGlzLl9jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLm9uKCk7XG4gICAgfVxuICAgIG9mZigpIHtcbiAgICAgICAgbGV0IHN0ZXAgPSB0aGlzLnByb3BzLnN0ZXA7XG4gICAgICAgIGxldCB4ID0gdGhpcy5wb3MueCAqIHN0ZXAgKyAyO1xuICAgICAgICBsZXQgeSA9IHRoaXMucG9zLnkgKiBzdGVwICsgMjtcbiAgICAgICAgc3RlcCA9IHN0ZXAgLSA0O1xuICAgICAgICB0aGlzLnByb3BzLmN0eC5jbGVhclJlY3QoeCwgeSwgc3RlcCwgc3RlcCk7XG4gICAgICAgIHRoaXMuaXNUdXJuID0gZmFsc2U7XG4gICAgfVxuICAgIG9uKCkge1xuICAgICAgICB0aGlzLnByb3BzLmN0eC5maWxsU3R5bGUgPSB0aGlzLl9jb2xvcjtcbiAgICAgICAgbGV0IHN0ZXAgPSB0aGlzLnByb3BzLnN0ZXA7XG4gICAgICAgIGxldCB4ID0gdGhpcy5wb3MueCAqIHN0ZXAgKyB0aGlzLmNvbXA7XG4gICAgICAgIGxldCB5ID0gdGhpcy5wb3MueSAqIHN0ZXAgKyB0aGlzLmNvbXA7XG4gICAgICAgIHN0ZXAgPSBzdGVwIC0gdGhpcy5jb21wICogMjtcbiAgICAgICAgdGhpcy5wcm9wcy5jdHguZmlsbFJlY3QoeCwgeSwgc3RlcCwgc3RlcCk7XG4gICAgICAgIHRoaXMuaXNUdXJuID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuY2xhc3MgVkdyaWQge1xuICAgIGNvbnN0cnVjdG9yKHB4U2l6ZSwgYW1vdW50WCwgYW1vdW50WSkge1xuICAgICAgICB0aGlzLnB4U2l6ZSA9IHB4U2l6ZTtcbiAgICAgICAgdGhpcy5hbW91bnRYID0gYW1vdW50WDtcbiAgICAgICAgdGhpcy5hbW91bnRZID0gYW1vdW50WTtcbiAgICAgICAgdGhpcy5jcmVhdGVNYXRyaXgoKTtcbiAgICB9XG4gICAgY3JlYXRlTWF0cml4KCkge1xuICAgICAgICBsZXQgeDtcbiAgICAgICAgbGV0IHk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbW91bnRYOyBpKyspIHtcbiAgICAgICAgICAgIHgucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYW1vdW50WTsgaSsrKSB7XG4gICAgICAgICAgICB5LnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXRyaXggPSBbeCwgeV07XG4gICAgfVxufVxuY2xhc3MgT1Yge1xufVxuZXhwb3J0IGNsYXNzIFZlY3RvciB7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICB0aGlzLl9sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuICAgIH1cbiAgICBzZXQgbGVuZ3RoKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2xlbmd0aCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHRoaXMueCwgMikgKyBNYXRoLnBvdyh0aGlzLnksIDIpKTtcbiAgICB9XG4gICAgdXAoKSB7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IC0xO1xuICAgIH1cbiAgICBkb3duKCkge1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAxO1xuICAgIH1cbiAgICBsZWZ0KCkge1xuICAgICAgICB0aGlzLnggPSAtMTtcbiAgICAgICAgdGhpcy55ID0gMDtcbiAgICB9XG4gICAgcmlnaHQoKSB7XG4gICAgICAgIHRoaXMueCA9IDE7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFJlY3QgZXh0ZW5kcyBWZWN0b3Ige1xufVxuIiwi77u/aW1wb3J0IHsgTGV2ZWwgfSBmcm9tIFwiLi9sZXZlbFwiO1xuaW1wb3J0IHsgUmVuZGVyIH0gZnJvbSBcIi4vcmVuZGVyXCI7XG5pbXBvcnQgeyBTbmFrZSB9IGZyb20gXCIuL3BsYXllclwiO1xuY2xhc3MgU2V0dGluZyB7XG4gICAgY29uc3RydWN0b3Ioc2V0dGluZykge1xuICAgICAgICB0aGlzLmdyaWRTaXplID0gMjA7XG4gICAgICAgIHRoaXMuc3RlcCA9IDIwO1xuICAgICAgICB0aGlzLnNwZWVkID0gMTAwO1xuICAgICAgICB0aGlzLnNuYWtlTGVuZ3RoID0gNTtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBzZXR0aW5nLmNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBzZXR0aW5nLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMuc3RlcCA9IHNldHRpbmcuc3RlcDtcbiAgICAgICAgdGhpcy5ncmlkU2l6ZSA9IHNldHRpbmcuZ3JpZFNpemU7XG4gICAgICAgIHRoaXMuc25ha2VMZW5ndGggPSBzZXR0aW5nLnNuYWtlTGVuZ3RoO1xuICAgIH1cbiAgICBzZXQgbmV3R3JpZFNpemUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5ncmlkU2l6ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgIH1cbiAgICBzZXQgbmV3U3RlcCh2YWx1ZSkge1xuICAgICAgICB0aGlzLnN0ZXAgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICB9XG4gICAgZ2V0IHdpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkU2l6ZSAqIHRoaXMuc3RlcDtcbiAgICB9XG4gICAgZ2V0IGhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZFNpemUgKiB0aGlzLnN0ZXA7XG4gICAgfVxufVxuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3Ioc2V0KSB7XG4gICAgICAgIHRoaXMuc2V0dGluZyA9IG5ldyBTZXR0aW5nKHNldCk7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBuZXcgTGV2ZWwodGhpcy5zZXR0aW5nKTtcbiAgICAgICAgdGhpcy5yZW5kZXIgPSBuZXcgUmVuZGVyKHRoaXMuc2V0dGluZyk7XG4gICAgICAgIHRoaXMucmVzaXplQ2FudmFzKHRoaXMuc2V0dGluZy5ncmlkU2l6ZSwgdGhpcy5zZXR0aW5nLnN0ZXApO1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBTbmFrZSh0aGlzLnNldHRpbmcpO1xuICAgICAgICB0aGlzLnBsYXllci5kcmF3KCk7XG4gICAgICAgIHRoaXMucGxheWVyLmFuaW1hdGUoKTtcbiAgICB9XG4gICAgc3RhcnQoKSB7XG4gICAgfVxuICAgIHJlc2l6ZUNhbnZhcyhncmlkU2l6ZSwgc3RlcCkge1xuICAgICAgICB0aGlzLnNldHRpbmcubmV3U3RlcCA9IHN0ZXA7XG4gICAgICAgIHRoaXMuc2V0dGluZy5uZXdHcmlkU2l6ZSA9IGdyaWRTaXplO1xuICAgICAgICB0aGlzLnJlbmRlci5kcmF3R3JpZCgpO1xuICAgIH1cbn1cbmV4cG9ydCB7IEdhbWUgfTtcbiIsIu+7v2NsYXNzIExldmVsIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICB0aGlzLnByb3BzID0ge307XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgY29uc29sZS5sb2coJ0Zyb20gTEVWRUwnKTtcbiAgICB9XG59XG5leHBvcnQgeyBMZXZlbCB9O1xuIiwi77u/aW1wb3J0IHsgVmVjdG9yLCBDZWxsIH0gZnJvbSBcIi4vVHlwZXNcIjtcbmV4cG9ydCBjbGFzcyBTbmFrZSB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgdGhpcy5pZCA9IC0xO1xuICAgICAgICB0aGlzLmJvZHlDb2xvciA9ICcjYzk3NmMxJztcbiAgICAgICAgdGhpcy5oZWFkQ29sb3IgPSAnIzg3MjEyZic7XG4gICAgICAgIHRoaXMucG9zID0gbmV3IFZlY3RvcigxMCwgMSk7XG4gICAgICAgIHRoaXMuZGlyID0gbmV3IFZlY3RvcigxLCAwKTtcbiAgICAgICAgdGhpcy5ib2R5ID0gW107XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICBTbmFrZS5Db3VudFNuYWtlcyArPSAxO1xuICAgICAgICB0aGlzLmlkICs9IDE7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5zaXplID0gdGhpcy5wcm9wcy5zdGVwO1xuICAgICAgICB0aGlzLnNwZWVkID0gNDAwIC0gcHJvcHMuc3BlZWQ7XG4gICAgICAgIHRoaXMuc25ha2VMZW5ndGggPSBwcm9wcy5zbmFrZUxlbmd0aDtcbiAgICAgICAgdGhpcy5wb3MgPSBuZXcgVmVjdG9yKHRoaXMuc25ha2VMZW5ndGgsIDEpO1xuICAgICAgICBDZWxsLnByb3RvdHlwZS5wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGUoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3NubGVuZ3RoJywgcHJvcHMuc25ha2VMZW5ndGgpO1xuICAgICAgICBjb25zb2xlLmxvZygnZGlyJywgdGhpcy5wb3MpO1xuICAgICAgICBjb25zb2xlLmxvZygnYm9keSA9ICcsIHRoaXMuYm9keSk7XG4gICAgICAgIHRoaXMuYWRkS2V5RXZlbnQoKTtcbiAgICB9XG4gICAgZ2VuZXJhdGUoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbmFrZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgeCA9IHRoaXMucG9zLnggLSB0aGlzLnNuYWtlTGVuZ3RoICsgaTtcbiAgICAgICAgICAgIGxldCB5ID0gdGhpcy5wb3MueTtcbiAgICAgICAgICAgIGxldCBjb2xvciA9IHRoaXMuYm9keUNvbG9yO1xuICAgICAgICAgICAgaWYgKGkgPT0gdGhpcy5zbmFrZUxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgY29sb3IgPSB0aGlzLmhlYWRDb2xvcjtcbiAgICAgICAgICAgIGxldCBvID0gbmV3IENlbGwoeCwgeSwgY29sb3IpLm9uKCk7XG4gICAgICAgICAgICB0aGlzLmJvZHkucHVzaChvKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygnQm9keTogJywgdGhpcy5ib2R5KTtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgbGV0IGxhc3QgPSB0aGlzLmJvZHkubGVuZ3RoIC0gMTtcbiAgICAgICAgbGV0IGNvbG9yID0gdGhpcy5ib2R5Q29sb3I7XG4gICAgICAgIGxldCBoZWFkY2VsbCA9IHRoaXMuYm9keVtsYXN0XTtcbiAgICAgICAgaGVhZGNlbGwuY29sb3IoY29sb3IpO1xuICAgICAgICB0aGlzLmJvZHlbdGhpcy5ib2R5Lmxlbmd0aCAtIHRoaXMuc25ha2VMZW5ndGhdLm9mZigpO1xuICAgICAgICBsZXQgbyA9IG5ldyBDZWxsKHRoaXMucG9zLngsIHRoaXMucG9zLnksIHRoaXMuaGVhZENvbG9yKTtcbiAgICAgICAgdGhpcy5ib2R5LnB1c2goby5vbigpKTtcbiAgICB9XG4gICAgbW92ZSgpIHtcbiAgICAgICAgdGhpcy5wb3MueCArPSB0aGlzLmRpci54O1xuICAgICAgICB0aGlzLnBvcy55ICs9IHRoaXMuZGlyLnk7XG4gICAgfVxuICAgIGlzQ3Jhc2goKSB7XG4gICAgICAgIGxldCBoZWFkID0gdGhpcy5ib2R5W3RoaXMuYm9keS5sZW5ndGggLSAxXS5wb3M7XG4gICAgICAgIGZvciAobGV0IGluZGV4IGluIHRoaXMuYm9keSkge1xuICAgICAgICAgICAgbGV0IGkgPSAraW5kZXg7XG4gICAgICAgICAgICBpZiAoaSAhPT0gKHRoaXMuYm9keS5sZW5ndGggLSAxKSAmJiB0aGlzLmJvZHlbaV0uaXNUdXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhlYWQueCA9PSB0aGlzLmJvZHlbaV0ucG9zLnggJiYgaGVhZC55ID09IHRoaXMuYm9keVtpXS5wb3MueSkge1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgn0KHRgtC+0LvQutC90L7QstC10L3QuNC1Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIGxldCBvID0gdGhpcztcbiAgICAgICAgbGV0IGlkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgby5tb3ZlKCk7XG4gICAgICAgICAgICBvLmlzQ3Jhc2goKTtcbiAgICAgICAgICAgIG8uZHJhdygpO1xuICAgICAgICB9LCAyMDApO1xuICAgIH1cbiAgICBhZGRLZXlFdmVudCgpIHtcbiAgICAgICAgbGV0IG8gPSB0aGlzO1xuICAgICAgICBsZXQgS2V5cztcbiAgICAgICAgKGZ1bmN0aW9uIChLZXlzKSB7XG4gICAgICAgICAgICBLZXlzW1wiVVBcIl0gPSBcIktleVdcIjtcbiAgICAgICAgICAgIEtleXNbXCJMRUZUXCJdID0gXCJLZXlBXCI7XG4gICAgICAgICAgICBLZXlzW1wiRE9XTlwiXSA9IFwiS2V5U1wiO1xuICAgICAgICAgICAgS2V5c1tcIlJJR0hUXCJdID0gXCJLZXlEXCI7XG4gICAgICAgIH0pKEtleXMgfHwgKEtleXMgPSB7fSkpO1xuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5jb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBLZXlzLlVQOlxuICAgICAgICAgICAgICAgICAgICBvLmRpci51cCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEtleXMuTEVGVDpcbiAgICAgICAgICAgICAgICAgICAgby5kaXIubGVmdCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEtleXMuRE9XTjpcbiAgICAgICAgICAgICAgICAgICAgby5kaXIuZG93bigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEtleXMuUklHSFQ6XG4gICAgICAgICAgICAgICAgICAgIG8uZGlyLnJpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5TbmFrZS5Db3VudFNuYWtlcyA9IDA7XG4iLCLvu79leHBvcnQgY2xhc3MgUmVuZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5nKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZyA9IHNldHRpbmc7XG4gICAgfVxuICAgIGNsZWFyR3JpZCgpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5nLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5zZXR0aW5nLndpZHRoLCB0aGlzLnNldHRpbmcuaGVpZ2h0KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGVhckdyaWRcIik7XG4gICAgfVxuICAgIGRyYXdHcmlkKCkge1xuICAgICAgICB0aGlzLmNsZWFyR3JpZCgpO1xuICAgICAgICBsZXQgc3RlcCA9IHRoaXMuc2V0dGluZy5zdGVwO1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5zZXR0aW5nLmN0eDtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjZDNkMWQwJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNldHRpbmcuZ3JpZFNpemU7IGkrKykge1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyhpICogc3RlcCwgMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKGkgKiBzdGVwLCB0aGlzLnNldHRpbmcuaGVpZ2h0KTtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2V0dGluZy5ncmlkU2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBjdHgubW92ZVRvKDAsIGkgKiBzdGVwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy5zZXR0aW5nLndpZHRoLCBpICogc3RlcCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyMwMDAwMDAnO1xuICAgICAgICBjdHguc3Ryb2tlUmVjdCgwLCAwLCB0aGlzLnNldHRpbmcud2lkdGgsIHRoaXMuc2V0dGluZy5oZWlnaHQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRyYXdHcmlkXCIpO1xuICAgIH1cbn1cbiIsIu+7v2ltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9Db3JlL2dhbWVcIjtcbmxldCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY2FudmFzXCIpO1xubGV0IGdhbWUgPSBuZXcgR2FtZSh7XG4gICAgY2FudmFzOiBjYW52YXMsXG4gICAgZ3JpZFNpemU6IDIwLFxuICAgIHN0ZXA6IDIwLFxuICAgIHNwZWVkOiAzNTAsXG4gICAgc25ha2VMZW5ndGg6IDEwLFxufSk7XG5sZXQgbWF0cml4ID0gW107XG5mb3IgKHZhciB4ID0gMDsgeCA8IDIwOyB4KyspIHtcbiAgICBtYXRyaXhbeF0gPSBbXTtcbiAgICBmb3IgKHZhciB5ID0gMDsgeSA8IDIwOyB5KyspIHtcbiAgICAgICAgbWF0cml4W3hdW3ldID0gMDtcbiAgICB9XG59XG5tYXRyaXhbNV1bMTVdID0gNTtcbmNvbnNvbGUubG9nKCdNYXRyaXgnLCBtYXRyaXgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==