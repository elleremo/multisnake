"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('hi');
var Game = /** @class */ (function () {
    function Game(props) {
        this.canvas = props.canvas;
        this.width = props.width;
        this.height = props.height;
        this.speed = props.speed;
    }
    return Game;
}());
exports.Game = Game;
