import {foo} from "./exp.js"

class Setting {
    setting: object = { man: 34, var: 'bar'};
}

class Game extends Setting{

}

let z = new Game();
console.log(z);
foo(3);