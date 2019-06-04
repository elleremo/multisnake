console.log('hi');

interface IProps {
    canvas : HTMLElement;
    width: number;
    height: number;
    speed: number;
}

class Game {

    canvas : HTMLElement;
    width: number;
    height: number;
    speed: number;

    constructor(props : IProps){
        this.canvas = props.canvas;
        this.width = props.width;
        this.height = props.height;
        this.speed = props.speed;
    }
}


export {Game}
