"use strict";
exports.__esModule = true;
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
var myName = new BasicClass('el', 'bicho');
console.log(myName.completeName());
