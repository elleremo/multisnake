"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Types_1 = require("./Types");
// Snake должен уметь двигаться
// Возможносто стоит создать вектор движения
// и поворачивать его на 90гр по нажатию клавиши
//
var Snake = /** @class */ (function () {
    function Snake(props) {
        this.id = -1; // Чтобы первый snake имел id = 0
        this.bodyColor = '#5c98c9';
        this.headColor = '#bd63e4';
        this.pos = new Types_1.Vector(5, 1); //позиция головы 6 1
        this.dir = new Types_1.Dir(Types_1.Direction.RIGHT);
        this.body = [];
        console.log(this);
        Snake.CountSnakes += 1;
        this.id += 1;
        this.props = props;
        this.size = this.props.step; // сжимаем отрисовку
        this.speed = 1000 / props.speed;
        this.snakeLength = props.snakeLength;
        // this.pos = new Vector(this.snakeLength, 1);
        Types_1.Cell.prototype.props = this.props;
        this.vgrid = new Types_1.VGrid(this.props.gridSize, this.props.gridSize);
        // console.log('VGRIIID', this.vgrid);
        this.generate();
        // console.log('snakeLength', props.snakeLength);
        // console.log('dir', this.pos);
        // this.oldPos = new Vector(1, 1);
        // console.log('body = ', this.body);
        this.addKeyEvent();
    }
    Snake.prototype.generate = function () {
        for (var i = 0; i < this.snakeLength; i++) {
            var x = this.pos.x - this.snakeLength + i; // 6-5+0
            var y = this.pos.y;
            //
            // if (x < 0 || y<0){
            //
            // }
            // else {
            //     this.vgrid.matrix[y][x] = 1;
            // }
            var color = this.bodyColor;
            if (i == this.snakeLength - 1)
                color = this.headColor;
            var o = new Types_1.Cell(x, y, color);
            this.body.push(o);
        }
        this.draw();
        console.log('GEN', this.vgrid);
    };
    Snake.prototype.draw = function () {
        for (var cell in this.body) {
            this.body[cell].on();
        }
        //
        // let last = this.body.length - 1;
        // let color = this.bodyColor;
        //
        // let headcell = this.body[last]; // -1 ???
        // headcell.color(color);
        //
        //
        // let ass = this.body[this.body.length - this.snakeLength];
        //
        // ass.off();
        // // this.vgrid.matrix[ass.pos.x][ass.pos.y]=0;
        // // this.body.shift(); // удаляем задницу после выключения
        //
        // let o = new Cell(this.pos.x, this.pos.y, this.headColor);
        // // this.vgrid.matrix[this.pos.x][this.pos.y]=1;
        // this.body.push(o.on());
        // let ctx = this.props.ctx;
        // ctx.fillStyle = this.color;
        //
        // let comp = 3; // compression
        // let size = this.props.step - comp - comp;
        // // let headpos = (length + 1) * size;
        //
        // let x = this.pos.x * this.props.step;
        // let y = this.pos.y * this.props.step;
        //
        // ctx.fillRect(x + comp, y + comp, size, size);
        //
        // // let assX = this.pos.x - this.length ;
        // // let assY = this.pos.y - this.length ;
        // let assX = this.oldPos.x * 20;
        // let assY = this.oldPos.y * 20;
        //
        //
        // ctx.clearRect(assX + comp, assY + comp, size, size);
    };
    Snake.prototype.move = function () {
        var v;
        // this.isCrash();
        this.pos.x += this.dir.x;
        this.pos.y += this.dir.y;
        console.log('Body: ', this.body);
        // this.oldPos.x += this.dir.x;
        // this.oldPos.y += this.dir.y;
    };
    Snake.prototype.isCrash = function () {
        var head = this.body[this.body.length - 1].pos; // head position Vector
        // Если индекс head не равен текущему то чтото делаем
        for (var index in this.body) {
            var i = +index;
            if (i !== (this.body.length - 1) && this.body[i].isTurn) {
                if (head.x == this.body[i].pos.x && head.y == this.body[i].pos.y) {
                    alert('Столкновение');
                }
            }
        }
    };
    Snake.prototype.animate = function () {
        var o = this;
        function f() {
            // o.isCrash();
            // o.move();
            o.draw();
            // o.animate()
        }
        setTimeout(f, this.speed);
    };
    Snake.prototype.addKeyEvent = function () {
        var o = this;
        var Keys;
        (function (Keys) {
            Keys["UP"] = "KeyW";
            Keys["LEFT"] = "KeyA";
            Keys["DOWN"] = "KeyS";
            Keys["RIGHT"] = "KeyD";
        })(Keys || (Keys = {}));
        var speed = o.speed;
        window.document.addEventListener("keyup", function (e) {
            if (e.code == Keys.DOWN || Keys.UP || Keys.LEFT || Keys.RIGHT) {
                // console.log(o.speed);
                o.speed = speed;
            }
        });
        window.document.addEventListener('keydown', function (e) {
            switch (e.code) {
                case Keys.UP:
                    if (o.dir.status == Types_1.Direction.DOWN)
                        break;
                    // o.speed = 100;
                    o.dir.up();
                    break;
                case Keys.LEFT:
                    if (o.dir.status == Types_1.Direction.RIGHT)
                        break;
                    // o.speed = 100;
                    o.dir.left();
                    break;
                case Keys.DOWN:
                    if (o.dir.status == Types_1.Direction.UP)
                        break;
                    // o.speed = 100;
                    o.dir.down();
                    break;
                case Keys.RIGHT:
                    if (o.dir.status == Types_1.Direction.LEFT)
                        break;
                    // o.speed = 100;
                    o.dir.right();
                    break;
            }
        });
    };
    Snake.CountSnakes = 0;
    return Snake;
}());
exports.Snake = Snake;
