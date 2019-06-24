import { Game } from "./Core/game";
let canvas = document.querySelector("canvas");
let game = new Game({
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
