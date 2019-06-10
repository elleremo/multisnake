import {Game} from "./Core/game";

let canvas = document.querySelector("canvas");
 let game: Game = new Game({
    canvas : canvas,
    gridSize : 10,
    step: 30, // размер клетки
    speed: 100,
    snakeSize: 20,
});

console.log("CTX :" , game.props.ctx);

// game.resizeCanvas(2, 50);

console.log("CTX after : " , game.props.ctx);



// game.render.drawGrid();
console.log('5 - FROM I4ndex', game.props);




// let matrix : {x:[number],y:[number]} = { x : [0], y : [] };
//
// createMatrix();
// console.log(matrix );
//
// function createMatrix () {
//     let x: [number] = [0];
//     let y: [number] = [0];
//
//     for (let i = 0; i < 10; i++) {
//         x.push(i) }
//
//     for (let i = 0; i < 10; i++) {
//         y.push(i) }
//
//     matrix.x = x;
//     matrix.y = y;
//
// }


