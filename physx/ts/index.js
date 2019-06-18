import { Game } from "./Game";
console.log('gge');
let canvas = window.document.querySelector('canvas');
let width = canvas.width / 2;
let height = canvas.width / 2;
let game = new Game({
    canvas: canvas,
    fixedPoint: { x: width, y: 5 }
});
//# sourceMappingURL=index.js.map