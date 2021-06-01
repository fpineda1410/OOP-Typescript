"use strict";

import {ParallelTask} from "./help"

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


let myName:BasicClass = new BasicClass ('el','bicho');
console.log (myName.completeName());


