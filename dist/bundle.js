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
/*! exports provided: Vector, Rect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return Vector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rect", function() { return Rect; });
﻿class Cell {
    constructor(size, x, y, turn, color) {
        this.turn = false;
        this.size = size;
        this.x = x;
        this.y = y;
        this.color = color;
        this.turn = turn;
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
        this.snakeSize = 20;
        this.canvas = setting.canvas;
        this.ctx = setting.canvas.getContext("2d");
        this.step = setting.step;
        this.gridSize = setting.gridSize;
        this.snakeSize = setting.snakeSize;
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
        this.length = 5;
        this.color = '#c976c1';
        this.head = '#553887';
        this.pos = new _Types__WEBPACK_IMPORTED_MODULE_0__["Vector"](this.length + 1, 1);
        Snake.CountSnakes += 1;
        this.id += 1;
        this.props = props;
        this.size = this.props.snakeSize;
        this.speed = props.speed;
    }
    draw() {
        let ctx = this.props.ctx;
        ctx.fillStyle = this.color;
        let size = this.size;
        for (let i = this.pos.x; i > this.pos.x - this.length; i--) {
            let x = this.pos.x * size;
            let y = this.pos.y * 20;
            console.log(x);
            ctx.fillRect(x + 3, this.pos.y + 3, size - 6, size - 6);
        }
    }
    move() {
        this.pos.x += 1;
    }
    animate() {
        let o = this;
        let id = setInterval(function () {
            o.draw();
            o.move();
        }, 250);
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
    speed: 100,
    snakeSize: 20
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0NvcmUvVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0NvcmUvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQ29yZS9sZXZlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQ29yZS9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0NvcmUvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7Ozs7Ozs7Ozs7Ozs7QUM5Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQWlDO0FBQ0M7QUFDRDtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDRDQUFLO0FBQzlCLDBCQUEwQiw4Q0FBTTtBQUNoQztBQUNBLDBCQUEwQiw2Q0FBSztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2dCOzs7Ozs7Ozs7Ozs7O0FDbERoQjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDaUI7Ozs7Ozs7Ozs7Ozs7QUNQakI7QUFBQTtBQUFBO0FBQUEsQ0FBa0M7QUFDM0I7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDZDQUFNO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDhCQUE4QjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFBO0FBQUEsQ0FBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDJCQUEyQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwyQkFBMkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFBQSxDQUFvQztBQUNwQztBQUNBLGVBQWUsK0NBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvaW5kZXguanNcIik7XG4iLCLvu79jbGFzcyBDZWxsIHtcbiAgICBjb25zdHJ1Y3RvcihzaXplLCB4LCB5LCB0dXJuLCBjb2xvcikge1xuICAgICAgICB0aGlzLnR1cm4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLnR1cm4gPSB0dXJuO1xuICAgIH1cbn1cbmNsYXNzIFZHcmlkIHtcbiAgICBjb25zdHJ1Y3RvcihweFNpemUsIGFtb3VudFgsIGFtb3VudFkpIHtcbiAgICAgICAgdGhpcy5weFNpemUgPSBweFNpemU7XG4gICAgICAgIHRoaXMuYW1vdW50WCA9IGFtb3VudFg7XG4gICAgICAgIHRoaXMuYW1vdW50WSA9IGFtb3VudFk7XG4gICAgICAgIHRoaXMuY3JlYXRlTWF0cml4KCk7XG4gICAgfVxuICAgIGNyZWF0ZU1hdHJpeCgpIHtcbiAgICAgICAgbGV0IHg7XG4gICAgICAgIGxldCB5O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYW1vdW50WDsgaSsrKSB7XG4gICAgICAgICAgICB4LnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFtb3VudFk7IGkrKykge1xuICAgICAgICAgICAgeS5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWF0cml4ID0gW3gsIHldO1xuICAgIH1cbn1cbmNsYXNzIE9WIHtcbn1cbmV4cG9ydCBjbGFzcyBWZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICAgICAgdGhpcy5fbGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5sZW5ndGggPSB0aGlzLmxlbmd0aDtcbiAgICB9XG4gICAgc2V0IGxlbmd0aCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9sZW5ndGggPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh0aGlzLngsIDIpICsgTWF0aC5wb3codGhpcy55LCAyKSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFJlY3QgZXh0ZW5kcyBWZWN0b3Ige1xufVxuIiwi77u/aW1wb3J0IHsgTGV2ZWwgfSBmcm9tIFwiLi9sZXZlbFwiO1xuaW1wb3J0IHsgUmVuZGVyIH0gZnJvbSBcIi4vcmVuZGVyXCI7XG5pbXBvcnQgeyBTbmFrZSB9IGZyb20gXCIuL3BsYXllclwiO1xuY2xhc3MgU2V0dGluZyB7XG4gICAgY29uc3RydWN0b3Ioc2V0dGluZykge1xuICAgICAgICB0aGlzLmdyaWRTaXplID0gMjA7XG4gICAgICAgIHRoaXMuc3RlcCA9IDIwO1xuICAgICAgICB0aGlzLnNwZWVkID0gMTAwO1xuICAgICAgICB0aGlzLnNuYWtlU2l6ZSA9IDIwO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IHNldHRpbmcuY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IHNldHRpbmcuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5zdGVwID0gc2V0dGluZy5zdGVwO1xuICAgICAgICB0aGlzLmdyaWRTaXplID0gc2V0dGluZy5ncmlkU2l6ZTtcbiAgICAgICAgdGhpcy5zbmFrZVNpemUgPSBzZXR0aW5nLnNuYWtlU2l6ZTtcbiAgICB9XG4gICAgc2V0IG5ld0dyaWRTaXplKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZ3JpZFNpemUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICB9XG4gICAgc2V0IG5ld1N0ZXAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdGVwID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgfVxuICAgIGdldCB3aWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZFNpemUgKiB0aGlzLnN0ZXA7XG4gICAgfVxuICAgIGdldCBoZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWRTaXplICogdGhpcy5zdGVwO1xuICAgIH1cbn1cbmNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKHNldCkge1xuICAgICAgICB0aGlzLnNldHRpbmcgPSBuZXcgU2V0dGluZyhzZXQpO1xuICAgICAgICB0aGlzLmxldmVsID0gbmV3IExldmVsKHRoaXMuc2V0dGluZyk7XG4gICAgICAgIHRoaXMucmVuZGVyID0gbmV3IFJlbmRlcih0aGlzLnNldHRpbmcpO1xuICAgICAgICB0aGlzLnJlc2l6ZUNhbnZhcyh0aGlzLnNldHRpbmcuZ3JpZFNpemUsIHRoaXMuc2V0dGluZy5zdGVwKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgU25ha2UodGhpcy5zZXR0aW5nKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuZHJhdygpO1xuICAgICAgICB0aGlzLnBsYXllci5hbmltYXRlKCk7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgIH1cbiAgICByZXNpemVDYW52YXMoZ3JpZFNpemUsIHN0ZXApIHtcbiAgICAgICAgdGhpcy5zZXR0aW5nLm5ld1N0ZXAgPSBzdGVwO1xuICAgICAgICB0aGlzLnNldHRpbmcubmV3R3JpZFNpemUgPSBncmlkU2l6ZTtcbiAgICAgICAgdGhpcy5yZW5kZXIuZHJhd0dyaWQoKTtcbiAgICB9XG59XG5leHBvcnQgeyBHYW1lIH07XG4iLCLvu79jbGFzcyBMZXZlbCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHt9O1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIGNvbnNvbGUubG9nKCdGcm9tIExFVkVMJyk7XG4gICAgfVxufVxuZXhwb3J0IHsgTGV2ZWwgfTtcbiIsIu+7v2ltcG9ydCB7IFZlY3RvciB9IGZyb20gXCIuL1R5cGVzXCI7XG5leHBvcnQgY2xhc3MgU25ha2Uge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHRoaXMuaWQgPSAtMTtcbiAgICAgICAgdGhpcy5sZW5ndGggPSA1O1xuICAgICAgICB0aGlzLmNvbG9yID0gJyNjOTc2YzEnO1xuICAgICAgICB0aGlzLmhlYWQgPSAnIzU1Mzg4Nyc7XG4gICAgICAgIHRoaXMucG9zID0gbmV3IFZlY3Rvcih0aGlzLmxlbmd0aCArIDEsIDEpO1xuICAgICAgICBTbmFrZS5Db3VudFNuYWtlcyArPSAxO1xuICAgICAgICB0aGlzLmlkICs9IDE7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5zaXplID0gdGhpcy5wcm9wcy5zbmFrZVNpemU7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBwcm9wcy5zcGVlZDtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMucHJvcHMuY3R4O1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgbGV0IHNpemUgPSB0aGlzLnNpemU7XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnBvcy54OyBpID4gdGhpcy5wb3MueCAtIHRoaXMubGVuZ3RoOyBpLS0pIHtcbiAgICAgICAgICAgIGxldCB4ID0gdGhpcy5wb3MueCAqIHNpemU7XG4gICAgICAgICAgICBsZXQgeSA9IHRoaXMucG9zLnkgKiAyMDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHgpO1xuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KHggKyAzLCB0aGlzLnBvcy55ICsgMywgc2l6ZSAtIDYsIHNpemUgLSA2KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtb3ZlKCkge1xuICAgICAgICB0aGlzLnBvcy54ICs9IDE7XG4gICAgfVxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIGxldCBvID0gdGhpcztcbiAgICAgICAgbGV0IGlkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgby5kcmF3KCk7XG4gICAgICAgICAgICBvLm1vdmUoKTtcbiAgICAgICAgfSwgMjUwKTtcbiAgICB9XG59XG5TbmFrZS5Db3VudFNuYWtlcyA9IDA7XG4iLCLvu79leHBvcnQgY2xhc3MgUmVuZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5nKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZyA9IHNldHRpbmc7XG4gICAgfVxuICAgIGNsZWFyR3JpZCgpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5nLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5zZXR0aW5nLndpZHRoLCB0aGlzLnNldHRpbmcuaGVpZ2h0KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGVhckdyaWRcIik7XG4gICAgfVxuICAgIGRyYXdHcmlkKCkge1xuICAgICAgICB0aGlzLmNsZWFyR3JpZCgpO1xuICAgICAgICBsZXQgc3RlcCA9IHRoaXMuc2V0dGluZy5zdGVwO1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5zZXR0aW5nLmN0eDtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjZDNkMWQwJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNldHRpbmcuZ3JpZFNpemU7IGkrKykge1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyhpICogc3RlcCwgMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKGkgKiBzdGVwLCB0aGlzLnNldHRpbmcuaGVpZ2h0KTtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2V0dGluZy5ncmlkU2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBjdHgubW92ZVRvKDAsIGkgKiBzdGVwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy5zZXR0aW5nLndpZHRoLCBpICogc3RlcCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyMwMDAwMDAnO1xuICAgICAgICBjdHguc3Ryb2tlUmVjdCgwLCAwLCB0aGlzLnNldHRpbmcud2lkdGgsIHRoaXMuc2V0dGluZy5oZWlnaHQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRyYXdHcmlkXCIpO1xuICAgIH1cbn1cbiIsIu+7v2ltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9Db3JlL2dhbWVcIjtcbmxldCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY2FudmFzXCIpO1xubGV0IGdhbWUgPSBuZXcgR2FtZSh7XG4gICAgY2FudmFzOiBjYW52YXMsXG4gICAgZ3JpZFNpemU6IDIwLFxuICAgIHN0ZXA6IDIwLFxuICAgIHNwZWVkOiAxMDAsXG4gICAgc25ha2VTaXplOiAyMFxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9