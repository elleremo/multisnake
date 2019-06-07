import { Game } from "./Core/game";
let canvas = document.querySelector("canvas");
console.log('FROM I4ndex');
let game = new Game({
    canvas: canvas,
    width: 500,
    height: 500,
    speed: 100,
    cellSize: 20,
    snakeSize: 30,
});
console.log('5 - FROM I4ndex', game.props.ctx);
console.log('5 - FROM I4ndex', undefined == true);
console.log('5 - FROM I4ndex', undefined === false);
let matrix;
createMatrix();
function createMatrix() {
    let x = [0];
    let y = [5];
    for (let i = 0; i < 10; i++) {
        x.push(i);
    }
    for (let i = 0; i < 10; i++) {
        y.push(i);
    }
    matrix = [x, y];
}
console.log(matrix);
