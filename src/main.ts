"use strict";

import ParallelTask from "./help"

class BasicClass {
    name: string;
    lastName: string;

    constructor(name: string, lastName: string){
        this.name = name;
        this.lastName = lastName;
    }

    completeName():string{
        return this.name+this.lastName;
    }
}

let first_numbers,last_numbers: Array<number>;

first_numbers = [1,2,3,4,5];
last_numbers = [1,2,3,4,5];

let myName:BasicClass = new BasicClass ('el','bicho');
var parallelTask:ParallelTask = new ParallelTask(first_numbers,last_numbers);

parallelTask.run();
console.log (myName.completeName());


