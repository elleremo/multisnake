import { Game } from "./Core/game";
let canvas = document.querySelector("canvas");
let game = new Game({
    canvas: canvas,
    gridSize: 20,
    step: 20,
    speed: 2,
    snakeLength: 11,
});
