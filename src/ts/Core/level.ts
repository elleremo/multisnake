import {Props} from "./Types"
// Надо написать менеджер уровней



class Level {
    props = {};

    constructor(props: {} ) {
        this.props = props;
        console.log('From LEVEL');
    }
}
export { Level }
