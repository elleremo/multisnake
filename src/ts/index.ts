import {Game} from "./Core/game";

let canvas = document.querySelector("canvas");
 let game: Game = new Game({
    canvas : canvas,
    gridSize : 30,
    step: 15, // размер клетки
    speed: 350,
    snakeLength: 10,

});

// game.setting.newStep = 30;

// canvas.width= 500;
// canvas.height= 500;

// game.resizeCanvas(2, 50);

// console.log("CTX after : " , game.setting.ctx);
// game.render.drawGrid();
// console.log('5 - FROM I4ndex', game.setting);
//



let matrix : number[][] = [] ;
// matrix[] = 5;


for (var x=0; x< 20; x++) {
    matrix[x]=[];
    for (var y=0; y<20; y++){
        matrix[x][y]=0;
    }
}
matrix[5][15]=5;

// createMatrix();
console.log('Matrix', matrix );

// function createMatrix () {
//     // let x: [number] = [0];
//     // let y: [number] = [0];
//
//     for (let i = 0; i < 10; i++) {
//         matrix[i][] = 0;
//         for (let j = 0; j < 10; j++) {
//             y.push(i) }
//     }
//
//
//
//     matrix.x = x;
//     matrix.y = y;
//
// }


