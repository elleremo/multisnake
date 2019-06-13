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
        this.color = '#000';
        this.turn = false;
        this.pos = new Vector(x, y);
        this.color = color;
    }
    off(ctx, size) {
        ctx.clearRect(this.pos.x, this.pos.y, size, size);
    }
    on(ctx, size) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.pos.x, this.pos.y, size, size);
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
        this.color = '#c976c1';
        this.head = '#87212f';
        this.body = [];
        this.startLength = 5;
        this.pos = new _Types__WEBPACK_IMPORTED_MODULE_0__["Vector"](10, 1);
        this.dir = new _Types__WEBPACK_IMPORTED_MODULE_0__["Vector"](1, 0);
        console.log(this);
        Snake.CountSnakes += 1;
        this.id += 1;
        this.props = props;
        this.size = this.props.step;
        this.speed = 300 - props.speed;
        this.startLength = props.snakeLength;
        this.generate();
        console.log('snlength', props.snakeLength);
        console.log('dir', this.pos);
        console.log('body = ', this.body);
        this.addKeyEvent();
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
    generate() {
        for (let i = 0; i < this.startLength; i++) {
            let x = (this.pos.x - this.startLength + i) * 20;
            let y = this.pos.y * 20;
            let color = this.color;
            if (i == this.startLength - 1)
                color = this.head;
            this.body.push(new _Types__WEBPACK_IMPORTED_MODULE_0__["Cell"](x + 3, y + 3, color));
            this.body[i].on(this.props.ctx, 14);
        }
    }
    draw() {
        let last = this.body.length;
        let color = this.color;
        this.body.push(new _Types__WEBPACK_IMPORTED_MODULE_0__["Cell"](this.pos.x * 20 + 3, this.pos.y * 20 + 3, this.head));
        this.body[last].on(this.props.ctx, 14);
        this.body[0].off(this.props.ctx, 20);
    }
    move() {
        this.pos.x += this.dir.x;
        this.pos.y += this.dir.y;
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
    snakeLength: 5,
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0NvcmUvVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0NvcmUvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQ29yZS9sZXZlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQ29yZS9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0NvcmUvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7Ozs7Ozs7Ozs7Ozs7QUNwRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQWlDO0FBQ0M7QUFDRDtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDRDQUFLO0FBQzlCLDBCQUEwQiw4Q0FBTTtBQUNoQztBQUNBLDBCQUEwQiw2Q0FBSztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNnQjs7Ozs7Ozs7Ozs7OztBQ2pEaEI7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2lCOzs7Ozs7Ozs7Ozs7O0FDUGpCO0FBQUE7QUFBQTtBQUFBLENBQXdDO0FBQ2pDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDZDQUFNO0FBQzdCLHVCQUF1Qiw2Q0FBTTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG9CQUFvQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDJDQUFJO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwyQ0FBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaEZBO0FBQUE7QUFBQSxDQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMkJBQTJCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDJCQUEyQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFBQTtBQUFBLENBQW9DO0FBQ3BDO0FBQ0EsZUFBZSwrQ0FBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9pbmRleC5qc1wiKTtcbiIsIu+7v2V4cG9ydCBjbGFzcyBDZWxsIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBjb2xvcikge1xuICAgICAgICB0aGlzLnBvcyA9IG5ldyBWZWN0b3IoMCwgMCk7XG4gICAgICAgIHRoaXMuY29sb3IgPSAnIzAwMCc7XG4gICAgICAgIHRoaXMudHVybiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBvcyA9IG5ldyBWZWN0b3IoeCwgeSk7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB9XG4gICAgb2ZmKGN0eCwgc2l6ZSkge1xuICAgICAgICBjdHguY2xlYXJSZWN0KHRoaXMucG9zLngsIHRoaXMucG9zLnksIHNpemUsIHNpemUpO1xuICAgIH1cbiAgICBvbihjdHgsIHNpemUpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvcy54LCB0aGlzLnBvcy55LCBzaXplLCBzaXplKTtcbiAgICB9XG59XG5jbGFzcyBWR3JpZCB7XG4gICAgY29uc3RydWN0b3IocHhTaXplLCBhbW91bnRYLCBhbW91bnRZKSB7XG4gICAgICAgIHRoaXMucHhTaXplID0gcHhTaXplO1xuICAgICAgICB0aGlzLmFtb3VudFggPSBhbW91bnRYO1xuICAgICAgICB0aGlzLmFtb3VudFkgPSBhbW91bnRZO1xuICAgICAgICB0aGlzLmNyZWF0ZU1hdHJpeCgpO1xuICAgIH1cbiAgICBjcmVhdGVNYXRyaXgoKSB7XG4gICAgICAgIGxldCB4O1xuICAgICAgICBsZXQgeTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFtb3VudFg7IGkrKykge1xuICAgICAgICAgICAgeC5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbW91bnRZOyBpKyspIHtcbiAgICAgICAgICAgIHkucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1hdHJpeCA9IFt4LCB5XTtcbiAgICB9XG59XG5jbGFzcyBPViB7XG59XG5leHBvcnQgY2xhc3MgVmVjdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgICAgIHRoaXMuX2xlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gdGhpcy5sZW5ndGg7XG4gICAgfVxuICAgIHNldCBsZW5ndGgodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbGVuZ3RoID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3codGhpcy54LCAyKSArIE1hdGgucG93KHRoaXMueSwgMikpO1xuICAgIH1cbiAgICB1cCgpIHtcbiAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgdGhpcy55ID0gLTE7XG4gICAgfVxuICAgIGRvd24oKSB7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDE7XG4gICAgfVxuICAgIGxlZnQoKSB7XG4gICAgICAgIHRoaXMueCA9IC0xO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgIH1cbiAgICByaWdodCgpIHtcbiAgICAgICAgdGhpcy54ID0gMTtcbiAgICAgICAgdGhpcy55ID0gMDtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUmVjdCBleHRlbmRzIFZlY3RvciB7XG59XG4iLCLvu79pbXBvcnQgeyBMZXZlbCB9IGZyb20gXCIuL2xldmVsXCI7XG5pbXBvcnQgeyBSZW5kZXIgfSBmcm9tIFwiLi9yZW5kZXJcIjtcbmltcG9ydCB7IFNuYWtlIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5jbGFzcyBTZXR0aW5nIHtcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5nKSB7XG4gICAgICAgIHRoaXMuZ3JpZFNpemUgPSAyMDtcbiAgICAgICAgdGhpcy5zdGVwID0gMjA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAxMDA7XG4gICAgICAgIHRoaXMuc25ha2VMZW5ndGggPSA1O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IHNldHRpbmcuY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IHNldHRpbmcuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5zdGVwID0gc2V0dGluZy5zdGVwO1xuICAgICAgICB0aGlzLmdyaWRTaXplID0gc2V0dGluZy5ncmlkU2l6ZTtcbiAgICAgICAgdGhpcy5zbmFrZUxlbmd0aCA9IHNldHRpbmcuc25ha2VMZW5ndGg7XG4gICAgfVxuICAgIHNldCBuZXdHcmlkU2l6ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLmdyaWRTaXplID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgfVxuICAgIHNldCBuZXdTdGVwKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3RlcCA9IHZhbHVlO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgIH1cbiAgICBnZXQgd2lkdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWRTaXplICogdGhpcy5zdGVwO1xuICAgIH1cbiAgICBnZXQgaGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkU2l6ZSAqIHRoaXMuc3RlcDtcbiAgICB9XG59XG5jbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihzZXQpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5nID0gbmV3IFNldHRpbmcoc2V0KTtcbiAgICAgICAgdGhpcy5sZXZlbCA9IG5ldyBMZXZlbCh0aGlzLnNldHRpbmcpO1xuICAgICAgICB0aGlzLnJlbmRlciA9IG5ldyBSZW5kZXIodGhpcy5zZXR0aW5nKTtcbiAgICAgICAgdGhpcy5yZXNpemVDYW52YXModGhpcy5zZXR0aW5nLmdyaWRTaXplLCB0aGlzLnNldHRpbmcuc3RlcCk7XG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFNuYWtlKHRoaXMuc2V0dGluZyk7XG4gICAgICAgIHRoaXMucGxheWVyLmFuaW1hdGUoKTtcbiAgICB9XG4gICAgc3RhcnQoKSB7XG4gICAgfVxuICAgIHJlc2l6ZUNhbnZhcyhncmlkU2l6ZSwgc3RlcCkge1xuICAgICAgICB0aGlzLnNldHRpbmcubmV3U3RlcCA9IHN0ZXA7XG4gICAgICAgIHRoaXMuc2V0dGluZy5uZXdHcmlkU2l6ZSA9IGdyaWRTaXplO1xuICAgICAgICB0aGlzLnJlbmRlci5kcmF3R3JpZCgpO1xuICAgIH1cbn1cbmV4cG9ydCB7IEdhbWUgfTtcbiIsIu+7v2NsYXNzIExldmVsIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICB0aGlzLnByb3BzID0ge307XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgY29uc29sZS5sb2coJ0Zyb20gTEVWRUwnKTtcbiAgICB9XG59XG5leHBvcnQgeyBMZXZlbCB9O1xuIiwi77u/aW1wb3J0IHsgVmVjdG9yLCBDZWxsIH0gZnJvbSBcIi4vVHlwZXNcIjtcbmV4cG9ydCBjbGFzcyBTbmFrZSB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgdGhpcy5pZCA9IC0xO1xuICAgICAgICB0aGlzLmNvbG9yID0gJyNjOTc2YzEnO1xuICAgICAgICB0aGlzLmhlYWQgPSAnIzg3MjEyZic7XG4gICAgICAgIHRoaXMuYm9keSA9IFtdO1xuICAgICAgICB0aGlzLnN0YXJ0TGVuZ3RoID0gNTtcbiAgICAgICAgdGhpcy5wb3MgPSBuZXcgVmVjdG9yKDEwLCAxKTtcbiAgICAgICAgdGhpcy5kaXIgPSBuZXcgVmVjdG9yKDEsIDApO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICAgICAgU25ha2UuQ291bnRTbmFrZXMgKz0gMTtcbiAgICAgICAgdGhpcy5pZCArPSAxO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMucHJvcHMuc3RlcDtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDMwMCAtIHByb3BzLnNwZWVkO1xuICAgICAgICB0aGlzLnN0YXJ0TGVuZ3RoID0gcHJvcHMuc25ha2VMZW5ndGg7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGUoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3NubGVuZ3RoJywgcHJvcHMuc25ha2VMZW5ndGgpO1xuICAgICAgICBjb25zb2xlLmxvZygnZGlyJywgdGhpcy5wb3MpO1xuICAgICAgICBjb25zb2xlLmxvZygnYm9keSA9ICcsIHRoaXMuYm9keSk7XG4gICAgICAgIHRoaXMuYWRkS2V5RXZlbnQoKTtcbiAgICB9XG4gICAgYWRkS2V5RXZlbnQoKSB7XG4gICAgICAgIGxldCBvID0gdGhpcztcbiAgICAgICAgbGV0IEtleXM7XG4gICAgICAgIChmdW5jdGlvbiAoS2V5cykge1xuICAgICAgICAgICAgS2V5c1tcIlVQXCJdID0gXCJLZXlXXCI7XG4gICAgICAgICAgICBLZXlzW1wiTEVGVFwiXSA9IFwiS2V5QVwiO1xuICAgICAgICAgICAgS2V5c1tcIkRPV05cIl0gPSBcIktleVNcIjtcbiAgICAgICAgICAgIEtleXNbXCJSSUdIVFwiXSA9IFwiS2V5RFwiO1xuICAgICAgICB9KShLZXlzIHx8IChLZXlzID0ge30pKTtcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGUuY29kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgS2V5cy5VUDpcbiAgICAgICAgICAgICAgICAgICAgby5kaXIudXAoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBLZXlzLkxFRlQ6XG4gICAgICAgICAgICAgICAgICAgIG8uZGlyLmxlZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBLZXlzLkRPV046XG4gICAgICAgICAgICAgICAgICAgIG8uZGlyLmRvd24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBLZXlzLlJJR0hUOlxuICAgICAgICAgICAgICAgICAgICBvLmRpci5yaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdlbmVyYXRlKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhcnRMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHggPSAodGhpcy5wb3MueCAtIHRoaXMuc3RhcnRMZW5ndGggKyBpKSAqIDIwO1xuICAgICAgICAgICAgbGV0IHkgPSB0aGlzLnBvcy55ICogMjA7XG4gICAgICAgICAgICBsZXQgY29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgICAgICAgaWYgKGkgPT0gdGhpcy5zdGFydExlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgY29sb3IgPSB0aGlzLmhlYWQ7XG4gICAgICAgICAgICB0aGlzLmJvZHkucHVzaChuZXcgQ2VsbCh4ICsgMywgeSArIDMsIGNvbG9yKSk7XG4gICAgICAgICAgICB0aGlzLmJvZHlbaV0ub24odGhpcy5wcm9wcy5jdHgsIDE0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICBsZXQgbGFzdCA9IHRoaXMuYm9keS5sZW5ndGg7XG4gICAgICAgIGxldCBjb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuYm9keS5wdXNoKG5ldyBDZWxsKHRoaXMucG9zLnggKiAyMCArIDMsIHRoaXMucG9zLnkgKiAyMCArIDMsIHRoaXMuaGVhZCkpO1xuICAgICAgICB0aGlzLmJvZHlbbGFzdF0ub24odGhpcy5wcm9wcy5jdHgsIDE0KTtcbiAgICAgICAgdGhpcy5ib2R5WzBdLm9mZih0aGlzLnByb3BzLmN0eCwgMjApO1xuICAgIH1cbiAgICBtb3ZlKCkge1xuICAgICAgICB0aGlzLnBvcy54ICs9IHRoaXMuZGlyLng7XG4gICAgICAgIHRoaXMucG9zLnkgKz0gdGhpcy5kaXIueTtcbiAgICB9XG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgbGV0IG8gPSB0aGlzO1xuICAgICAgICBsZXQgaWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBvLmRyYXcoKTtcbiAgICAgICAgICAgIG8ubW92ZSgpO1xuICAgICAgICB9LCAyNTApO1xuICAgIH1cbn1cblNuYWtlLkNvdW50U25ha2VzID0gMDtcbiIsIu+7v2V4cG9ydCBjbGFzcyBSZW5kZXIge1xuICAgIGNvbnN0cnVjdG9yKHNldHRpbmcpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5nID0gc2V0dGluZztcbiAgICB9XG4gICAgY2xlYXJHcmlkKCkge1xuICAgICAgICB0aGlzLnNldHRpbmcuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnNldHRpbmcud2lkdGgsIHRoaXMuc2V0dGluZy5oZWlnaHQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImNsZWFyR3JpZFwiKTtcbiAgICB9XG4gICAgZHJhd0dyaWQoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJHcmlkKCk7XG4gICAgICAgIGxldCBzdGVwID0gdGhpcy5zZXR0aW5nLnN0ZXA7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLnNldHRpbmcuY3R4O1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyNkM2QxZDAnO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2V0dGluZy5ncmlkU2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBjdHgubW92ZVRvKGkgKiBzdGVwLCAwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8oaSAqIHN0ZXAsIHRoaXMuc2V0dGluZy5oZWlnaHQpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZXR0aW5nLmdyaWRTaXplOyBpKyspIHtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oMCwgaSAqIHN0ZXApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLnNldHRpbmcud2lkdGgsIGkgKiBzdGVwKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnIzAwMDAwMCc7XG4gICAgICAgIGN0eC5zdHJva2VSZWN0KDAsIDAsIHRoaXMuc2V0dGluZy53aWR0aCwgdGhpcy5zZXR0aW5nLmhlaWdodCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRHJhd0dyaWRcIik7XG4gICAgfVxufVxuIiwi77u/aW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL0NvcmUvZ2FtZVwiO1xubGV0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjYW52YXNcIik7XG5sZXQgZ2FtZSA9IG5ldyBHYW1lKHtcbiAgICBjYW52YXM6IGNhbnZhcyxcbiAgICBncmlkU2l6ZTogMjAsXG4gICAgc3RlcDogMjAsXG4gICAgc3BlZWQ6IDEwMCxcbiAgICBzbmFrZUxlbmd0aDogNSxcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==