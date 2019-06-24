import { Game } from "./Game";
console.log('gge');
let canvas = window.document.querySelector('canvas');
canvas.width = 700;
canvas.height = 700;
let width = canvas.width / 2;
let height = canvas.width / 2;
let game = new Game({
    canvas: canvas,
    fixedPoints: { x: width, y: 0 },
    point: { x: width - 150, y: 50 }
});
