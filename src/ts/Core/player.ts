import {Props} from "./Types"

// Snake должен уметь двигаться
// Возможносто стоит создать вектор движения
// и поворачивать его на 90гр по нажатию клавиши
//

class Snake {

    props: Props;

    static CountSnakes: number = 0;
    id: number = -1; // Чтобы первый snake имел id = 0
    length: number = 5;

    constructor(props: Props) {
        Snake.CountSnakes += 1;
        this.id += 1;
        this.props = props;
    }

}
