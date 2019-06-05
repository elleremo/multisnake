"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("./Core/main");
var canvase = document.querySelector("canvas");
var game = new main_1.Game({
    canvas: canvase,
    width: 500,
    height: 500,
    speed: 100,
});
