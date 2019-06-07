import {Game} from "./Core/game";

let canvas = document.querySelector("canvas");
console.log('FROM I4ndex');

let game: Game = new Game({
    canvas : canvas,
    width : 500,
    height: 500,
    speed: 100,
    cellSize: 20, // кратный 500
    snakeSize: 30,
});

// game.height =200;

console.log('5 - FROM I4ndex', game.props.ctx);
console.log('5 - FROM I4ndex', undefined == true);
console.log('5 - FROM I4ndex', undefined === false);

let matrix : number[][];
createMatrix();

function createMatrix () {
    let x: [number] = [0];
    let y: [number] = [5];

    for (let i = 0; i < 10; i++) {
        x.push(i) }

    for (let i = 0; i < 10; i++) {
        y.push(i) }

    matrix = [ x, y]
}

console.log(matrix);
