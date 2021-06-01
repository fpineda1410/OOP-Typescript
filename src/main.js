"use strict";
exports.__esModule = true;
var help_1 = require("./help");
var BasicClass = /** @class */ (function () {
    function BasicClass(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
    BasicClass.prototype.completeName = function () {
        return this.name + this.lastName;
    };
    return BasicClass;
}());
var first_numbers, last_numbers;
first_numbers = [1, 2, 3, 4, 5];
last_numbers = [1, 2, 3, 4, 5];
var myName = new BasicClass('el', 'bicho');
var parallelTask = new help_1["default"](first_numbers, last_numbers);
parallelTask.run();
console.log(myName.completeName());
