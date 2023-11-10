/*
=>Internal interface – methods and properties, accessible from other methods of the class, but not from the outside.

=>External interface – methods and properties, accessible also from outside the class.

In JavaScript, there are two types of object fields (properties and methods):

=>Public: accessible from anywhere. They comprise the external interface. Until now we were only using public properties and methods.

=>Private: accessible only from inside the class. These are for the internal interface.
*/

// making calss with protected members
class coffeeMachine {
    _waterAmount = 0;
    set waterAmount(val) {
        if (val < 0) {
            val = 0
        }
        this._waterAmount = val;
    }
    get waterAmount() {
        return this._waterAmount;
    }
    constructor(power) {
        this._power = power;
    }
}

let machine = new coffeeMachine(45);
machine._waterAmount = -34;
// console.log(machine._waterAmount, machine._power);

// making read only power
class coffeeMachine1 {
    _waterAmount = 0;
    get waterAmount() {
        return this._waterAmount;
    }
    constructor(power) {
        this._power = power;
    }
    // set power(val) {
    //     this._power = val;
    // }//you can not set power because there is no setter
    get power() {
        return this._power;
    }
}
let machine1 = new coffeeMachine1(34);
machine1.power = 78;
// console.log(machine1);

// making private member
/*
# is a special sign that the field is private. We can’t access it from outside or from inheriting classes.
Private fields do not conflict with public ones. We can have both private #waterAmount and public waterAmount fields at the same time.
Private fields are not available as this[name]
Private fields are special.

As we know, usually we can access fields using this[name]:
*/
class grinder {
    #mug_depth = 0;
    constructor() {
        this.#mug_depth = 67;
    }
    get showDpeth() {
        // return this[#mug_depth];this is not correct syntax
        return this.#mug_depth;
    }
}

let g = new grinder();
console.log(g.showDpeth);


console.log(g instanceof grinder);
let arr=[];
console.log(arr instanceof Array);

let obj={};
console.log(obj instanceof Object);