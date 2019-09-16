"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Render = /** @class */ (function () {
    function Render(setting) {
        this.setting = setting;
    }
    Render.prototype.clearGrid = function () {
        this.setting.ctx.clearRect(0, 0, this.setting.width, this.setting.height);
        console.log("clearGrid");
    };
    Render.prototype.drawGrid = function () {
        this.clearGrid();
        var step = this.setting.step;
        var ctx = this.setting.ctx;
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#aec2dc';
        // кол-во клеток
        for (var i_1 = 0; i_1 < this.setting.gridSize; i_1++) {
            ctx.moveTo(i_1 * step, 0);
            ctx.lineTo(i_1 * step, this.setting.height);
            ctx.stroke();
            // console.log ('i = ', i);
        }
        for (var i = 0; i < this.setting.gridSize; i++) {
            ctx.moveTo(0, i * step);
            ctx.lineTo(this.setting.width, i * step);
            ctx.stroke();
        }
        ctx.strokeStyle = '#000000';
        // ctx.fillRect(250,50,50,50);
        ctx.strokeRect(0, 0, this.setting.width, this.setting.height);
        // ctx.stroke();
        // ctx.fill();
        // ctx.fillRect(0,0,200,1);
        console.log("DrawGrid");
    };
    return Render;
}());
exports.Render = Render;
