import {Game} from "./Core/main";

let canvas= document.querySelector("canvas");


let game: Game = new Game({
    canvas : canvas,
    width : 500,
    height: 500,
    speed: 100,
    cellSize: 20
});

