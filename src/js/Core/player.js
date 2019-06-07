class Snake {
    constructor(props) {
        this.id = -1;
        this.length = 5;
        Snake.CountSnakes += 1;
        this.id += 1;
        this.props = props;
    }
}
Snake.CountSnakes = 0;
