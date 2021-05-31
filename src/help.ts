
class BasicCalculation {
    
    number1:Array<number>;

    constructor(params: Array<number>){
        this.number1 = params;
        this.sum();
    }

    sum ():number {

        return this.number1[0] + this.number1[1] + this.number1[2];
    }

}

class ParallelTask extends BasicCalculation {


    

}

