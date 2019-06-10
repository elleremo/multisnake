import { Game } from "./Core/game";
let canvas = document.querySelector("canvas");
let game = new Game({
    canvas: canvas,
    gridSize: 10,
    step: 30,
    speed: 100,
    snakeSize: 20,
});
console.log("CTX :", game.props.ctx);
console.log("CTX after : ", game.props.ctx);
console.log('5 - FROM I4ndex', game.props);
