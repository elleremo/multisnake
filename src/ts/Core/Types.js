"use strict";
// import enumerate = Reflect.enumerate;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Cell = /** @class */ (function () {
    function Cell(x, y, color) {
        this.pos = new Vector(0, 0);
        this._color = '#000';
        this.comp = 3;
        this.isTurn = false;
        this.pos = new Vector(x, y);
        this._color = color;
        // this.props = props;
    }
    Cell.prototype.color = function (color) {
        this._color = color;
        this.on();
    };
    Cell.prototype.off = function () {
        var step = this.props.step;
        var x = this.pos.x * step + 2;
        var y = this.pos.y * step + 2;
        step = step - 4;
        this.props.ctx.clearRect(x, y, step, step);
        this.isTurn = false;
    };
    Cell.prototype.on = function () {
        this.props.ctx.fillStyle = this._color;
        var step = this.props.step;
        var x = this.pos.x * step + this.comp;
        var y = this.pos.y * step + this.comp;
        step = step - this.comp * 2;
        this.props.ctx.fillRect(x, y, step, step);
        this.isTurn = true;
        return this;
    };
    return Cell;
}());
exports.Cell = Cell;
var VGrid = /** @class */ (function () {
    function VGrid(amountX, amountY) {
        this.amountX = amountX;
        this.amountY = amountY;
        this.createMatrix();
    }
    VGrid.prototype.createMatrix = function () {
        var matrix = [];
        for (var x = 0; x < this.amountX; x++) {
            matrix[x] = [0];
            for (var y = 0; y < this.amountY; y++) {
                matrix[x][y] = 0;
            }
        }
        this.matrix = matrix;
    };
    return VGrid;
}());
exports.VGrid = VGrid;
var Vector = /** @class */ (function () {
    function Vector(x, y) {
        this._length = 0;
        this.x = x;
        this.y = y;
        // this.length = this.length; // Проверить как работают сет/гет
    }
    Object.defineProperty(Vector.prototype, "length", {
        get: function () {
            return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        },
        set: function (value) {
            this._length = value;
        },
        enumerable: true,
        configurable: true
    });
    return Vector;
}());
exports.Vector = Vector;
var Direction;
(function (Direction) {
    Direction["UP"] = "UP";
    Direction["LEFT"] = "LEFT";
    Direction["DOWN"] = "DOWN";
    Direction["RIGHT"] = "RIGHT";
})(Direction = exports.Direction || (exports.Direction = {}));
var Dir = /** @class */ (function (_super) {
    __extends(Dir, _super);
    function Dir(dir) {
        var _this = _super.call(this, 1, 0) || this;
        switch (dir) {
            case Direction.UP:
                _this.up();
                break;
            case Direction.DOWN:
                _this.down();
                break;
            case Direction.LEFT:
                _this.left();
                break;
            case Direction.RIGHT:
                _this.right();
                break;
        }
        return _this;
    }
    Dir.prototype.up = function () {
        this.status = Direction.UP;
        this.x = 0;
        this.y = -1;
    };
    Dir.prototype.down = function () {
        this.status = Direction.DOWN;
        this.x = 0;
        this.y = 1;
    };
    Dir.prototype.left = function () {
        this.status = Direction.LEFT;
        this.x = -1;
        this.y = 0;
    };
    Dir.prototype.right = function () {
        this.status = Direction.RIGHT;
        this.x = 1;
        this.y = 0;
    };
    return Dir;
}(Vector));
exports.Dir = Dir;
var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    function Rect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Rect;
}(Vector));
exports.Rect = Rect;
