//"use strict";
class BasicCalculation {
    
    number1:Array<number>;

    constructor(params: Array<number>){
        this.number1 = params;
        this.sum();
    }

    sum ():number {
        try{
            console.log(this.number1[0] + this.number1[1] + this.number1[2]);
            return this.number1[0] + this.number1[1] + this.number1[2];
        }catch(error:unknown){
            console.log("Arguments are not enough!")
        }
    }

    run ():void {
        console.log("el primer bichito");
    }

}
class ParallelTask extends BasicCalculation {

    more_numbers:Array<number>;

    constructor(params: Array<number>,first_class_values: Array<number>){
        super(first_class_values);
        this.more_numbers=params;
    }

    multiply ():number {
        return this.more_numbers[0]*this.more_numbers[1];
    }

    run ():void {
        console.log ("el segundo bichito")
    }
}


