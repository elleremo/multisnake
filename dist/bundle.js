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
        this.comp = 2;
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
            o.isCrash();
            o.move();
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
                    if (o.dir.y == 1)
                        break;
                    o.dir.up();
                    break;
                case Keys.LEFT:
                    if (o.dir.x == 1)
                        break;
                    o.dir.left();
                    break;
                case Keys.DOWN:
                    if (o.dir.y == -1)
                        break;
                    o.dir.down();
                    break;
                case Keys.RIGHT:
                    if (o.dir.x == 1)
                        break;
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
    gridSize: 30,
    step: 15,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0NvcmUvVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0NvcmUvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQ29yZS9sZXZlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQ29yZS9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0NvcmUvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2luZGV4LmpzXCIpO1xuIiwi77u/ZXhwb3J0IGNsYXNzIENlbGwge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIGNvbG9yKSB7XG4gICAgICAgIHRoaXMucG9zID0gbmV3IFZlY3RvcigwLCAwKTtcbiAgICAgICAgdGhpcy5fY29sb3IgPSAnIzAwMCc7XG4gICAgICAgIHRoaXMuY29tcCA9IDI7XG4gICAgICAgIHRoaXMuaXNUdXJuID0gZmFsc2U7XG4gICAgICAgIHRoaXMucG9zID0gbmV3IFZlY3Rvcih4LCB5KTtcbiAgICAgICAgdGhpcy5fY29sb3IgPSBjb2xvcjtcbiAgICB9XG4gICAgY29sb3IoY29sb3IpIHtcbiAgICAgICAgdGhpcy5fY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5vbigpO1xuICAgIH1cbiAgICBvZmYoKSB7XG4gICAgICAgIGxldCBzdGVwID0gdGhpcy5wcm9wcy5zdGVwO1xuICAgICAgICBsZXQgeCA9IHRoaXMucG9zLnggKiBzdGVwICsgMjtcbiAgICAgICAgbGV0IHkgPSB0aGlzLnBvcy55ICogc3RlcCArIDI7XG4gICAgICAgIHN0ZXAgPSBzdGVwIC0gNDtcbiAgICAgICAgdGhpcy5wcm9wcy5jdHguY2xlYXJSZWN0KHgsIHksIHN0ZXAsIHN0ZXApO1xuICAgICAgICB0aGlzLmlzVHVybiA9IGZhbHNlO1xuICAgIH1cbiAgICBvbigpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5jdHguZmlsbFN0eWxlID0gdGhpcy5fY29sb3I7XG4gICAgICAgIGxldCBzdGVwID0gdGhpcy5wcm9wcy5zdGVwO1xuICAgICAgICBsZXQgeCA9IHRoaXMucG9zLnggKiBzdGVwICsgdGhpcy5jb21wO1xuICAgICAgICBsZXQgeSA9IHRoaXMucG9zLnkgKiBzdGVwICsgdGhpcy5jb21wO1xuICAgICAgICBzdGVwID0gc3RlcCAtIHRoaXMuY29tcCAqIDI7XG4gICAgICAgIHRoaXMucHJvcHMuY3R4LmZpbGxSZWN0KHgsIHksIHN0ZXAsIHN0ZXApO1xuICAgICAgICB0aGlzLmlzVHVybiA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbmNsYXNzIFZHcmlkIHtcbiAgICBjb25zdHJ1Y3RvcihweFNpemUsIGFtb3VudFgsIGFtb3VudFkpIHtcbiAgICAgICAgdGhpcy5weFNpemUgPSBweFNpemU7XG4gICAgICAgIHRoaXMuYW1vdW50WCA9IGFtb3VudFg7XG4gICAgICAgIHRoaXMuYW1vdW50WSA9IGFtb3VudFk7XG4gICAgICAgIHRoaXMuY3JlYXRlTWF0cml4KCk7XG4gICAgfVxuICAgIGNyZWF0ZU1hdHJpeCgpIHtcbiAgICAgICAgbGV0IHg7XG4gICAgICAgIGxldCB5O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYW1vdW50WDsgaSsrKSB7XG4gICAgICAgICAgICB4LnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFtb3VudFk7IGkrKykge1xuICAgICAgICAgICAgeS5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWF0cml4ID0gW3gsIHldO1xuICAgIH1cbn1cbmNsYXNzIE9WIHtcbn1cbmV4cG9ydCBjbGFzcyBWZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICAgICAgdGhpcy5fbGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5sZW5ndGggPSB0aGlzLmxlbmd0aDtcbiAgICB9XG4gICAgc2V0IGxlbmd0aCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9sZW5ndGggPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh0aGlzLngsIDIpICsgTWF0aC5wb3codGhpcy55LCAyKSk7XG4gICAgfVxuICAgIHVwKCkge1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAtMTtcbiAgICB9XG4gICAgZG93bigpIHtcbiAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgdGhpcy55ID0gMTtcbiAgICB9XG4gICAgbGVmdCgpIHtcbiAgICAgICAgdGhpcy54ID0gLTE7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgfVxuICAgIHJpZ2h0KCkge1xuICAgICAgICB0aGlzLnggPSAxO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBSZWN0IGV4dGVuZHMgVmVjdG9yIHtcbn1cbiIsIu+7v2ltcG9ydCB7IExldmVsIH0gZnJvbSBcIi4vbGV2ZWxcIjtcbmltcG9ydCB7IFJlbmRlciB9IGZyb20gXCIuL3JlbmRlclwiO1xuaW1wb3J0IHsgU25ha2UgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmNsYXNzIFNldHRpbmcge1xuICAgIGNvbnN0cnVjdG9yKHNldHRpbmcpIHtcbiAgICAgICAgdGhpcy5ncmlkU2l6ZSA9IDIwO1xuICAgICAgICB0aGlzLnN0ZXAgPSAyMDtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDEwMDtcbiAgICAgICAgdGhpcy5zbmFrZUxlbmd0aCA9IDU7XG4gICAgICAgIHRoaXMuY2FudmFzID0gc2V0dGluZy5jYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gc2V0dGluZy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLnN0ZXAgPSBzZXR0aW5nLnN0ZXA7XG4gICAgICAgIHRoaXMuZ3JpZFNpemUgPSBzZXR0aW5nLmdyaWRTaXplO1xuICAgICAgICB0aGlzLnNuYWtlTGVuZ3RoID0gc2V0dGluZy5zbmFrZUxlbmd0aDtcbiAgICB9XG4gICAgc2V0IG5ld0dyaWRTaXplKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZ3JpZFNpemUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICB9XG4gICAgc2V0IG5ld1N0ZXAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdGVwID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgfVxuICAgIGdldCB3aWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZFNpemUgKiB0aGlzLnN0ZXA7XG4gICAgfVxuICAgIGdldCBoZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWRTaXplICogdGhpcy5zdGVwO1xuICAgIH1cbn1cbmNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKHNldCkge1xuICAgICAgICB0aGlzLnNldHRpbmcgPSBuZXcgU2V0dGluZyhzZXQpO1xuICAgICAgICB0aGlzLmxldmVsID0gbmV3IExldmVsKHRoaXMuc2V0dGluZyk7XG4gICAgICAgIHRoaXMucmVuZGVyID0gbmV3IFJlbmRlcih0aGlzLnNldHRpbmcpO1xuICAgICAgICB0aGlzLnJlc2l6ZUNhbnZhcyh0aGlzLnNldHRpbmcuZ3JpZFNpemUsIHRoaXMuc2V0dGluZy5zdGVwKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgU25ha2UodGhpcy5zZXR0aW5nKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuZHJhdygpO1xuICAgICAgICB0aGlzLnBsYXllci5hbmltYXRlKCk7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgIH1cbiAgICByZXNpemVDYW52YXMoZ3JpZFNpemUsIHN0ZXApIHtcbiAgICAgICAgdGhpcy5zZXR0aW5nLm5ld1N0ZXAgPSBzdGVwO1xuICAgICAgICB0aGlzLnNldHRpbmcubmV3R3JpZFNpemUgPSBncmlkU2l6ZTtcbiAgICAgICAgdGhpcy5yZW5kZXIuZHJhd0dyaWQoKTtcbiAgICB9XG59XG5leHBvcnQgeyBHYW1lIH07XG4iLCLvu79jbGFzcyBMZXZlbCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHt9O1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIGNvbnNvbGUubG9nKCdGcm9tIExFVkVMJyk7XG4gICAgfVxufVxuZXhwb3J0IHsgTGV2ZWwgfTtcbiIsIu+7v2ltcG9ydCB7IFZlY3RvciwgQ2VsbCB9IGZyb20gXCIuL1R5cGVzXCI7XG5leHBvcnQgY2xhc3MgU25ha2Uge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHRoaXMuaWQgPSAtMTtcbiAgICAgICAgdGhpcy5ib2R5Q29sb3IgPSAnI2M5NzZjMSc7XG4gICAgICAgIHRoaXMuaGVhZENvbG9yID0gJyM4NzIxMmYnO1xuICAgICAgICB0aGlzLnBvcyA9IG5ldyBWZWN0b3IoMTAsIDEpO1xuICAgICAgICB0aGlzLmRpciA9IG5ldyBWZWN0b3IoMSwgMCk7XG4gICAgICAgIHRoaXMuYm9keSA9IFtdO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICAgICAgU25ha2UuQ291bnRTbmFrZXMgKz0gMTtcbiAgICAgICAgdGhpcy5pZCArPSAxO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMucHJvcHMuc3RlcDtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDQwMCAtIHByb3BzLnNwZWVkO1xuICAgICAgICB0aGlzLnNuYWtlTGVuZ3RoID0gcHJvcHMuc25ha2VMZW5ndGg7XG4gICAgICAgIHRoaXMucG9zID0gbmV3IFZlY3Rvcih0aGlzLnNuYWtlTGVuZ3RoLCAxKTtcbiAgICAgICAgQ2VsbC5wcm90b3R5cGUucHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgICB0aGlzLmdlbmVyYXRlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzbmxlbmd0aCcsIHByb3BzLnNuYWtlTGVuZ3RoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2RpcicsIHRoaXMucG9zKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2JvZHkgPSAnLCB0aGlzLmJvZHkpO1xuICAgICAgICB0aGlzLmFkZEtleUV2ZW50KCk7XG4gICAgfVxuICAgIGdlbmVyYXRlKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc25ha2VMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHggPSB0aGlzLnBvcy54IC0gdGhpcy5zbmFrZUxlbmd0aCArIGk7XG4gICAgICAgICAgICBsZXQgeSA9IHRoaXMucG9zLnk7XG4gICAgICAgICAgICBsZXQgY29sb3IgPSB0aGlzLmJvZHlDb2xvcjtcbiAgICAgICAgICAgIGlmIChpID09IHRoaXMuc25ha2VMZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgIGNvbG9yID0gdGhpcy5oZWFkQ29sb3I7XG4gICAgICAgICAgICBsZXQgbyA9IG5ldyBDZWxsKHgsIHksIGNvbG9yKS5vbigpO1xuICAgICAgICAgICAgdGhpcy5ib2R5LnB1c2gobyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ0JvZHk6ICcsIHRoaXMuYm9keSk7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIGxldCBsYXN0ID0gdGhpcy5ib2R5Lmxlbmd0aCAtIDE7XG4gICAgICAgIGxldCBjb2xvciA9IHRoaXMuYm9keUNvbG9yO1xuICAgICAgICBsZXQgaGVhZGNlbGwgPSB0aGlzLmJvZHlbbGFzdF07XG4gICAgICAgIGhlYWRjZWxsLmNvbG9yKGNvbG9yKTtcbiAgICAgICAgdGhpcy5ib2R5W3RoaXMuYm9keS5sZW5ndGggLSB0aGlzLnNuYWtlTGVuZ3RoXS5vZmYoKTtcbiAgICAgICAgbGV0IG8gPSBuZXcgQ2VsbCh0aGlzLnBvcy54LCB0aGlzLnBvcy55LCB0aGlzLmhlYWRDb2xvcik7XG4gICAgICAgIHRoaXMuYm9keS5wdXNoKG8ub24oKSk7XG4gICAgfVxuICAgIG1vdmUoKSB7XG4gICAgICAgIHRoaXMucG9zLnggKz0gdGhpcy5kaXIueDtcbiAgICAgICAgdGhpcy5wb3MueSArPSB0aGlzLmRpci55O1xuICAgIH1cbiAgICBpc0NyYXNoKCkge1xuICAgICAgICBsZXQgaGVhZCA9IHRoaXMuYm9keVt0aGlzLmJvZHkubGVuZ3RoIC0gMV0ucG9zO1xuICAgICAgICBmb3IgKGxldCBpbmRleCBpbiB0aGlzLmJvZHkpIHtcbiAgICAgICAgICAgIGxldCBpID0gK2luZGV4O1xuICAgICAgICAgICAgaWYgKGkgIT09ICh0aGlzLmJvZHkubGVuZ3RoIC0gMSkgJiYgdGhpcy5ib2R5W2ldLmlzVHVybikge1xuICAgICAgICAgICAgICAgIGlmIChoZWFkLnggPT0gdGhpcy5ib2R5W2ldLnBvcy54ICYmIGhlYWQueSA9PSB0aGlzLmJvZHlbaV0ucG9zLnkpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ9Ch0YLQvtC70LrQvdC+0LLQtdC90LjQtScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBhbmltYXRlKCkge1xuICAgICAgICBsZXQgbyA9IHRoaXM7XG4gICAgICAgIGxldCBpZCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG8uaXNDcmFzaCgpO1xuICAgICAgICAgICAgby5tb3ZlKCk7XG4gICAgICAgICAgICBvLmRyYXcoKTtcbiAgICAgICAgfSwgMjAwKTtcbiAgICB9XG4gICAgYWRkS2V5RXZlbnQoKSB7XG4gICAgICAgIGxldCBvID0gdGhpcztcbiAgICAgICAgbGV0IEtleXM7XG4gICAgICAgIChmdW5jdGlvbiAoS2V5cykge1xuICAgICAgICAgICAgS2V5c1tcIlVQXCJdID0gXCJLZXlXXCI7XG4gICAgICAgICAgICBLZXlzW1wiTEVGVFwiXSA9IFwiS2V5QVwiO1xuICAgICAgICAgICAgS2V5c1tcIkRPV05cIl0gPSBcIktleVNcIjtcbiAgICAgICAgICAgIEtleXNbXCJSSUdIVFwiXSA9IFwiS2V5RFwiO1xuICAgICAgICB9KShLZXlzIHx8IChLZXlzID0ge30pKTtcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGUuY29kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgS2V5cy5VUDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKG8uZGlyLnkgPT0gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBvLmRpci51cCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEtleXMuTEVGVDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKG8uZGlyLnggPT0gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBvLmRpci5sZWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgS2V5cy5ET1dOOlxuICAgICAgICAgICAgICAgICAgICBpZiAoby5kaXIueSA9PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBvLmRpci5kb3duKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgS2V5cy5SSUdIVDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKG8uZGlyLnggPT0gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBvLmRpci5yaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuU25ha2UuQ291bnRTbmFrZXMgPSAwO1xuIiwi77u/ZXhwb3J0IGNsYXNzIFJlbmRlciB7XG4gICAgY29uc3RydWN0b3Ioc2V0dGluZykge1xuICAgICAgICB0aGlzLnNldHRpbmcgPSBzZXR0aW5nO1xuICAgIH1cbiAgICBjbGVhckdyaWQoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuc2V0dGluZy53aWR0aCwgdGhpcy5zZXR0aW5nLmhlaWdodCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xlYXJHcmlkXCIpO1xuICAgIH1cbiAgICBkcmF3R3JpZCgpIHtcbiAgICAgICAgdGhpcy5jbGVhckdyaWQoKTtcbiAgICAgICAgbGV0IHN0ZXAgPSB0aGlzLnNldHRpbmcuc3RlcDtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuc2V0dGluZy5jdHg7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnI2FlYzJkYyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZXR0aW5nLmdyaWRTaXplOyBpKyspIHtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oaSAqIHN0ZXAsIDApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyhpICogc3RlcCwgdGhpcy5zZXR0aW5nLmhlaWdodCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNldHRpbmcuZ3JpZFNpemU7IGkrKykge1xuICAgICAgICAgICAgY3R4Lm1vdmVUbygwLCBpICogc3RlcCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMuc2V0dGluZy53aWR0aCwgaSAqIHN0ZXApO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjMDAwMDAwJztcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QoMCwgMCwgdGhpcy5zZXR0aW5nLndpZHRoLCB0aGlzLnNldHRpbmcuaGVpZ2h0KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJEcmF3R3JpZFwiKTtcbiAgICB9XG59XG4iLCLvu79pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vQ29yZS9nYW1lXCI7XG5sZXQgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImNhbnZhc1wiKTtcbmxldCBnYW1lID0gbmV3IEdhbWUoe1xuICAgIGNhbnZhczogY2FudmFzLFxuICAgIGdyaWRTaXplOiAzMCxcbiAgICBzdGVwOiAxNSxcbiAgICBzcGVlZDogMzUwLFxuICAgIHNuYWtlTGVuZ3RoOiAxMCxcbn0pO1xubGV0IG1hdHJpeCA9IFtdO1xuZm9yICh2YXIgeCA9IDA7IHggPCAyMDsgeCsrKSB7XG4gICAgbWF0cml4W3hdID0gW107XG4gICAgZm9yICh2YXIgeSA9IDA7IHkgPCAyMDsgeSsrKSB7XG4gICAgICAgIG1hdHJpeFt4XVt5XSA9IDA7XG4gICAgfVxufVxubWF0cml4WzVdWzE1XSA9IDU7XG5jb25zb2xlLmxvZygnTWF0cml4JywgbWF0cml4KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=