import {Game} from "./Core/main";

let canvase = document.querySelector("canvas");

let game = new Game({
    canvas : canvase,
    width : 500,
    height: 500,
    speed: 100,
});

