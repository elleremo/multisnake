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
﻿
class Game {
    constructor(props) {
        this.props = {
            canvas: HTMLCanvasElement,
            gridSize: 20,
            step: 20,
            speed: 100,
            snakeSize: 20
        };
        this.props = props;
        this.props.ctx = this.props.canvas.getContext("2d");
        this.render = new _render__WEBPACK_IMPORTED_MODULE_0__["Render"](this.props);
        this.resizeCanvas(this.props.gridSize, this.props.step);
        this.render.drawGrid();
    }
    set gridSize(value) {
        this.props.gridSize = value;
        this.props.width = value * this.props.step;
        this.props.height = value * this.props.step;
        this.props.canvas.width = this.props.width;
        this.props.canvas.height = this.props.height;
    }
    set step(value) {
        this.props.step = value;
        this.props.width = value * this.props.gridSize;
        this.props.height = value * this.props.gridSize;
        this.props.canvas.width = this.props.width;
        this.props.canvas.height = this.props.height;
    }
    resizeCanvas(gridSize, step) {
        this.step = step;
        this.gridSize = gridSize;
        console.log("resizeCanvas");
    }
}



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
    constructor(props) {
        this.props = props;
    }
    clearGrid() {
        this.props.ctx.clearRect(0, 0, this.props.width, this.props.height);
        console.log("clearGrid");
    }
    drawGrid() {
        this.clearGrid();
        let step = this.props.step;
        let ctx = this.props.ctx;
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#d3d1d0';
        for (let i = 0; i < this.props.gridSize; i++) {
            ctx.moveTo(i * step, 0);
            ctx.lineTo(i * step, this.props.height);
            ctx.stroke();
        }
        for (var i = 0; i < this.props.gridSize; i++) {
            ctx.moveTo(0, i * step);
            ctx.lineTo(this.props.width, i * step);
            ctx.stroke();
        }
        ctx.strokeStyle = '#000000';
        ctx.strokeRect(0, 0, this.props.width, this.props.height);
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
    gridSize: 10,
    step: 30,
    speed: 100,
    snakeSize: 20,
});
console.log("CTX :", game.props.ctx);
console.log("CTX after : ", game.props.ctx);
console.log('5 - FROM I4ndex', game.props);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0NvcmUvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQ29yZS9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUEsQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw4Q0FBTTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2dCOzs7Ozs7Ozs7Ozs7O0FDcENoQjtBQUFBO0FBQUEsQ0FBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHlCQUF5QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5QkFBeUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFBQSxDQUFvQztBQUNwQztBQUNBLGVBQWUsK0NBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvaW5kZXguanNcIik7XG4iLCLvu79pbXBvcnQgeyBSZW5kZXIgfSBmcm9tIFwiLi9yZW5kZXJcIjtcbmNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHRoaXMucHJvcHMgPSB7XG4gICAgICAgICAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LFxuICAgICAgICAgICAgZ3JpZFNpemU6IDIwLFxuICAgICAgICAgICAgc3RlcDogMjAsXG4gICAgICAgICAgICBzcGVlZDogMTAwLFxuICAgICAgICAgICAgc25ha2VTaXplOiAyMFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMucHJvcHMuY3R4ID0gdGhpcy5wcm9wcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLnJlbmRlciA9IG5ldyBSZW5kZXIodGhpcy5wcm9wcyk7XG4gICAgICAgIHRoaXMucmVzaXplQ2FudmFzKHRoaXMucHJvcHMuZ3JpZFNpemUsIHRoaXMucHJvcHMuc3RlcCk7XG4gICAgICAgIHRoaXMucmVuZGVyLmRyYXdHcmlkKCk7XG4gICAgfVxuICAgIHNldCBncmlkU2l6ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnByb3BzLmdyaWRTaXplID0gdmFsdWU7XG4gICAgICAgIHRoaXMucHJvcHMud2lkdGggPSB2YWx1ZSAqIHRoaXMucHJvcHMuc3RlcDtcbiAgICAgICAgdGhpcy5wcm9wcy5oZWlnaHQgPSB2YWx1ZSAqIHRoaXMucHJvcHMuc3RlcDtcbiAgICAgICAgdGhpcy5wcm9wcy5jYW52YXMud2lkdGggPSB0aGlzLnByb3BzLndpZHRoO1xuICAgICAgICB0aGlzLnByb3BzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLnByb3BzLmhlaWdodDtcbiAgICB9XG4gICAgc2V0IHN0ZXAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5zdGVwID0gdmFsdWU7XG4gICAgICAgIHRoaXMucHJvcHMud2lkdGggPSB2YWx1ZSAqIHRoaXMucHJvcHMuZ3JpZFNpemU7XG4gICAgICAgIHRoaXMucHJvcHMuaGVpZ2h0ID0gdmFsdWUgKiB0aGlzLnByb3BzLmdyaWRTaXplO1xuICAgICAgICB0aGlzLnByb3BzLmNhbnZhcy53aWR0aCA9IHRoaXMucHJvcHMud2lkdGg7XG4gICAgICAgIHRoaXMucHJvcHMuY2FudmFzLmhlaWdodCA9IHRoaXMucHJvcHMuaGVpZ2h0O1xuICAgIH1cbiAgICByZXNpemVDYW52YXMoZ3JpZFNpemUsIHN0ZXApIHtcbiAgICAgICAgdGhpcy5zdGVwID0gc3RlcDtcbiAgICAgICAgdGhpcy5ncmlkU2l6ZSA9IGdyaWRTaXplO1xuICAgICAgICBjb25zb2xlLmxvZyhcInJlc2l6ZUNhbnZhc1wiKTtcbiAgICB9XG59XG5leHBvcnQgeyBHYW1lIH07XG4iLCLvu79leHBvcnQgY2xhc3MgUmVuZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgfVxuICAgIGNsZWFyR3JpZCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMucHJvcHMud2lkdGgsIHRoaXMucHJvcHMuaGVpZ2h0KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGVhckdyaWRcIik7XG4gICAgfVxuICAgIGRyYXdHcmlkKCkge1xuICAgICAgICB0aGlzLmNsZWFyR3JpZCgpO1xuICAgICAgICBsZXQgc3RlcCA9IHRoaXMucHJvcHMuc3RlcDtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMucHJvcHMuY3R4O1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyNkM2QxZDAnO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcHMuZ3JpZFNpemU7IGkrKykge1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyhpICogc3RlcCwgMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKGkgKiBzdGVwLCB0aGlzLnByb3BzLmhlaWdodCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BzLmdyaWRTaXplOyBpKyspIHtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oMCwgaSAqIHN0ZXApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLnByb3BzLndpZHRoLCBpICogc3RlcCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyMwMDAwMDAnO1xuICAgICAgICBjdHguc3Ryb2tlUmVjdCgwLCAwLCB0aGlzLnByb3BzLndpZHRoLCB0aGlzLnByb3BzLmhlaWdodCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRHJhd0dyaWRcIik7XG4gICAgfVxufVxuIiwi77u/aW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL0NvcmUvZ2FtZVwiO1xubGV0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjYW52YXNcIik7XG5sZXQgZ2FtZSA9IG5ldyBHYW1lKHtcbiAgICBjYW52YXM6IGNhbnZhcyxcbiAgICBncmlkU2l6ZTogMTAsXG4gICAgc3RlcDogMzAsXG4gICAgc3BlZWQ6IDEwMCxcbiAgICBzbmFrZVNpemU6IDIwLFxufSk7XG5jb25zb2xlLmxvZyhcIkNUWCA6XCIsIGdhbWUucHJvcHMuY3R4KTtcbmNvbnNvbGUubG9nKFwiQ1RYIGFmdGVyIDogXCIsIGdhbWUucHJvcHMuY3R4KTtcbmNvbnNvbGUubG9nKCc1IC0gRlJPTSBJNG5kZXgnLCBnYW1lLnByb3BzKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=