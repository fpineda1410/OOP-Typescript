var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//"use strict";
var BasicCalculation = /** @class */ (function () {
    function BasicCalculation(params) {
        this.number1 = params;
        this.sum();
    }
    BasicCalculation.prototype.sum = function () {
        try {
            console.log(this.number1[0] + this.number1[1] + this.number1[2]);
            return this.number1[0] + this.number1[1] + this.number1[2];
        }
        catch (error) {
            console.log("Arguments are not enough!");
        }
    };
    BasicCalculation.prototype.run = function () {
        console.log("el primer bichito");
    };
    return BasicCalculation;
}());
var ParallelTask = /** @class */ (function (_super) {
    __extends(ParallelTask, _super);
    function ParallelTask(params, first_class_values) {
        var _this = _super.call(this, first_class_values) || this;
        _this.more_numbers = params;
        return _this;
    }
    ParallelTask.prototype.multiply = function () {
        return this.more_numbers[0] * this.more_numbers[1];
    };
    ParallelTask.prototype.run = function () {
        console.log("el segundo bichito");
    };
    return ParallelTask;
}(BasicCalculation));
