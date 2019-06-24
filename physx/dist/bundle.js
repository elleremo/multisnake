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

/***/ "./src/js/Game.js":
/*!************************!*\
  !*** ./src/js/Game.js ***!
  \************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
﻿class Vector {
    constructor(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }
    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
    static distance(a, b) {
        return new Vector(b.x - a.x, b.y - a.y);
    }
}
class Point extends Vector {
    constructor(pos, size) {
        super(pos.x, pos.y);
        this.typ = 'Point';
        // this.pos = new Vector();
        this.size = size;
        this.draw();
    }
    draw() {
        this.set.ctx.fillStyle = '#ee476d';
        let endAngle = 2 * Math.PI;
        this.set.ctx.ellipse(this.x, this.y, this.size, this.size, 0, 0, endAngle, false);
        this.set.ctx.fill();
    }
}
class DyPoint extends Point {
    constructor(pos, size) {
        super(pos, size);
        this.typ = 'DyPoint';
        this.size = 10;
        this.grav = new Vector(0, 0.1);
        this.vel = new Vector();
        this.acc = new Vector(0, 0);
        this.size = size || 5;
    }
    move() {
        let distance = Vector.distance(this, this.par);
        this.acc.y = distance.length - this.acc.y;
        this.acc.x = distance.length - this.acc.x;
        this.vel.x += this.acc.x;
        this.vel.y += this.acc.y;
        this.x += this.vel.x;
        this.y += this.vel.y;
    }
    animate() {
        this.draw();
        this.move();
        // let o = this;
        // let id = setInterval(function () {
        //     o.draw();
        //     o.move();
        // }, 16.6)
    }
}
class Render {
    constructor() {
        this.arrStatic = [];
        this.arrDyn = [];
    }
    add(point) {
        if (point.typ == 'Point') {
            this.arrStatic.push(point);
        }
        if (point.typ == 'DyPoint') {
            this.arrDyn.push(point);
        }
    }
    draw() {
        this.set.ctx.clearRect(0, 0, this.set.canvas.width, this.set.canvas.height);
        this.set.ctx.beginPath();
        this.set.ctx.lineWidth = 1;
        this.set.ctx.strokeStyle = '#7a9bee';
        this.set.ctx.moveTo(this.arrStatic[0].x, this.arrStatic[0].y); //Point
        this.set.ctx.lineTo(this.arrDyn[0].x, this.arrDyn[0].y);
        this.set.ctx.closePath();
        this.set.ctx.stroke();
    }
    animate() {
        let o = this;
        let id = setInterval(function () {
            o.draw();
            o.arrDyn[0].animate();
        }, 300);
    }
}
class Game {
    constructor(set) {
        this.set = set;
        let ctx = set.canvas.getContext("2d");
        this.set.ctx = ctx;
        Point.prototype.set = set;
        Render.prototype.set = set;
        this.render = new Render();
        this.init();
    }
    init() {
        let a = new Point(this.set.fixedPoints, 5);
        let b = new DyPoint(this.set.point, 5);
        b.par = a;
        this.render.add(a);
        this.render.add(b);
        // this.render.draw();
        this.render.animate();
        // b.animate();
    }
}

//# sourceMappingURL=Game.js.map

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ "./src/js/Game.js");
﻿
console.log('gge');
let canvas = window.document.querySelector('canvas');
canvas.width = 700;
canvas.height = 700;
let width = canvas.width / 2;
let height = canvas.width / 2;
let game = new _Game__WEBPACK_IMPORTED_MODULE_0__["Game"]({
    canvas: canvas,
    fixedPoints: { x: width, y: 0 },
    // fixedPoints  : { x:width, y:20 },
    point: { x: width - 150, y: 50 }
});
//# sourceMappingURL=index.js.map

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNnQjtBQUNoQixnQzs7Ozs7Ozs7Ozs7O0FDN0dBO0FBQUE7QUFBQSxDQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDBDQUFJO0FBQ25CO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQyx1QkFBdUIsZ0JBQWdCO0FBQ3ZDLFlBQVk7QUFDWixDQUFDO0FBQ0QsaUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvaW5kZXguanNcIik7XG4iLCLvu79jbGFzcyBWZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geCB8fCAwO1xuICAgICAgICB0aGlzLnkgPSB5IHx8IDA7XG4gICAgfVxuICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3codGhpcy54LCAyKSArIE1hdGgucG93KHRoaXMueSwgMikpO1xuICAgIH1cbiAgICBzdGF0aWMgZGlzdGFuY2UoYSwgYikge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihiLnggLSBhLngsIGIueSAtIGEueSk7XG4gICAgfVxufVxuY2xhc3MgUG9pbnQgZXh0ZW5kcyBWZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHBvcywgc2l6ZSkge1xuICAgICAgICBzdXBlcihwb3MueCwgcG9zLnkpO1xuICAgICAgICB0aGlzLnR5cCA9ICdQb2ludCc7XG4gICAgICAgIC8vIHRoaXMucG9zID0gbmV3IFZlY3RvcigpO1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5zZXQuY3R4LmZpbGxTdHlsZSA9ICcjZWU0NzZkJztcbiAgICAgICAgbGV0IGVuZEFuZ2xlID0gMiAqIE1hdGguUEk7XG4gICAgICAgIHRoaXMuc2V0LmN0eC5lbGxpcHNlKHRoaXMueCwgdGhpcy55LCB0aGlzLnNpemUsIHRoaXMuc2l6ZSwgMCwgMCwgZW5kQW5nbGUsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5zZXQuY3R4LmZpbGwoKTtcbiAgICB9XG59XG5jbGFzcyBEeVBvaW50IGV4dGVuZHMgUG9pbnQge1xuICAgIGNvbnN0cnVjdG9yKHBvcywgc2l6ZSkge1xuICAgICAgICBzdXBlcihwb3MsIHNpemUpO1xuICAgICAgICB0aGlzLnR5cCA9ICdEeVBvaW50JztcbiAgICAgICAgdGhpcy5zaXplID0gMTA7XG4gICAgICAgIHRoaXMuZ3JhdiA9IG5ldyBWZWN0b3IoMCwgMC4xKTtcbiAgICAgICAgdGhpcy52ZWwgPSBuZXcgVmVjdG9yKCk7XG4gICAgICAgIHRoaXMuYWNjID0gbmV3IFZlY3RvcigwLCAwKTtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZSB8fCA1O1xuICAgIH1cbiAgICBtb3ZlKCkge1xuICAgICAgICBsZXQgZGlzdGFuY2UgPSBWZWN0b3IuZGlzdGFuY2UodGhpcywgdGhpcy5wYXIpO1xuICAgICAgICB0aGlzLmFjYy55ID0gZGlzdGFuY2UubGVuZ3RoIC0gdGhpcy5hY2MueTtcbiAgICAgICAgdGhpcy5hY2MueCA9IGRpc3RhbmNlLmxlbmd0aCAtIHRoaXMuYWNjLng7XG4gICAgICAgIHRoaXMudmVsLnggKz0gdGhpcy5hY2MueDtcbiAgICAgICAgdGhpcy52ZWwueSArPSB0aGlzLmFjYy55O1xuICAgICAgICB0aGlzLnggKz0gdGhpcy52ZWwueDtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMudmVsLnk7XG4gICAgfVxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICB0aGlzLm1vdmUoKTtcbiAgICAgICAgLy8gbGV0IG8gPSB0aGlzO1xuICAgICAgICAvLyBsZXQgaWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vICAgICBvLmRyYXcoKTtcbiAgICAgICAgLy8gICAgIG8ubW92ZSgpO1xuICAgICAgICAvLyB9LCAxNi42KVxuICAgIH1cbn1cbmNsYXNzIFJlbmRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYXJyU3RhdGljID0gW107XG4gICAgICAgIHRoaXMuYXJyRHluID0gW107XG4gICAgfVxuICAgIGFkZChwb2ludCkge1xuICAgICAgICBpZiAocG9pbnQudHlwID09ICdQb2ludCcpIHtcbiAgICAgICAgICAgIHRoaXMuYXJyU3RhdGljLnB1c2gocG9pbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb2ludC50eXAgPT0gJ0R5UG9pbnQnKSB7XG4gICAgICAgICAgICB0aGlzLmFyckR5bi5wdXNoKHBvaW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLnNldC5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuc2V0LmNhbnZhcy53aWR0aCwgdGhpcy5zZXQuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuc2V0LmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5zZXQuY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIHRoaXMuc2V0LmN0eC5zdHJva2VTdHlsZSA9ICcjN2E5YmVlJztcbiAgICAgICAgdGhpcy5zZXQuY3R4Lm1vdmVUbyh0aGlzLmFyclN0YXRpY1swXS54LCB0aGlzLmFyclN0YXRpY1swXS55KTsgLy9Qb2ludFxuICAgICAgICB0aGlzLnNldC5jdHgubGluZVRvKHRoaXMuYXJyRHluWzBdLngsIHRoaXMuYXJyRHluWzBdLnkpO1xuICAgICAgICB0aGlzLnNldC5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIHRoaXMuc2V0LmN0eC5zdHJva2UoKTtcbiAgICB9XG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgbGV0IG8gPSB0aGlzO1xuICAgICAgICBsZXQgaWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBvLmRyYXcoKTtcbiAgICAgICAgICAgIG8uYXJyRHluWzBdLmFuaW1hdGUoKTtcbiAgICAgICAgfSwgMzAwKTtcbiAgICB9XG59XG5jbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihzZXQpIHtcbiAgICAgICAgdGhpcy5zZXQgPSBzZXQ7XG4gICAgICAgIGxldCBjdHggPSBzZXQuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5zZXQuY3R4ID0gY3R4O1xuICAgICAgICBQb2ludC5wcm90b3R5cGUuc2V0ID0gc2V0O1xuICAgICAgICBSZW5kZXIucHJvdG90eXBlLnNldCA9IHNldDtcbiAgICAgICAgdGhpcy5yZW5kZXIgPSBuZXcgUmVuZGVyKCk7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICBsZXQgYSA9IG5ldyBQb2ludCh0aGlzLnNldC5maXhlZFBvaW50cywgNSk7XG4gICAgICAgIGxldCBiID0gbmV3IER5UG9pbnQodGhpcy5zZXQucG9pbnQsIDUpO1xuICAgICAgICBiLnBhciA9IGE7XG4gICAgICAgIHRoaXMucmVuZGVyLmFkZChhKTtcbiAgICAgICAgdGhpcy5yZW5kZXIuYWRkKGIpO1xuICAgICAgICAvLyB0aGlzLnJlbmRlci5kcmF3KCk7XG4gICAgICAgIHRoaXMucmVuZGVyLmFuaW1hdGUoKTtcbiAgICAgICAgLy8gYi5hbmltYXRlKCk7XG4gICAgfVxufVxuZXhwb3J0IHsgR2FtZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9R2FtZS5qcy5tYXAiLCLvu79pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vR2FtZVwiO1xuY29uc29sZS5sb2coJ2dnZScpO1xubGV0IGNhbnZhcyA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcbmNhbnZhcy53aWR0aCA9IDcwMDtcbmNhbnZhcy5oZWlnaHQgPSA3MDA7XG5sZXQgd2lkdGggPSBjYW52YXMud2lkdGggLyAyO1xubGV0IGhlaWdodCA9IGNhbnZhcy53aWR0aCAvIDI7XG5sZXQgZ2FtZSA9IG5ldyBHYW1lKHtcbiAgICBjYW52YXM6IGNhbnZhcyxcbiAgICBmaXhlZFBvaW50czogeyB4OiB3aWR0aCwgeTogMCB9LFxuICAgIC8vIGZpeGVkUG9pbnRzICA6IHsgeDp3aWR0aCwgeToyMCB9LFxuICAgIHBvaW50OiB7IHg6IHdpZHRoIC0gMTUwLCB5OiA1MCB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=