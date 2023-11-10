/*
In programming, we often want to take something and extend it.

For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.

Prototypal inheritance is a language feature that helps in that.

[[Prototype]]
In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object. That object is called “a prototype”

When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”. And soon we’ll study many examples of such inheritance, as well as cooler language features built upon it.

The property [[Prototype]] is internal and hidden, but there are many ways to set it.

=> There are only two limitations:

The references can’t go in circles. JavaScript will throw an error if we try to assign __proto__ in a circle.
The value of __proto__ can be either an object or null. Other types are ignored.
=>No matter where the method is found: in an object or its prototype. In a method call, this is always the object before the dot.

In JavaScript, all objects have a hidden [[Prototype]] property that’s either another object or null.
We can use obj.__proto__ to access it (a historical getter/setter, there are other ways, to be covered soon).
The object referenced by [[Prototype]] is called a “prototype”.
If we want to read a property of obj or call a method, and it doesn’t exist, then JavaScript tries to find it in the prototype.
Write/delete operations act directly on the object, they don’t use the prototype (assuming it’s a data property, not a setter).
If we call obj.method(), and the method is taken from the prototype, this still references obj. So methods always work with the current object even if they are inherited.
The for..in loop iterates over both its own and its inherited properties. All other key/value-getting methods only operate on the object itself.

Values null and undefined have no object wrappers
Special values null and undefined stand apart. They have no object wrappers, so methods and properties are not available for them. And there are no corresponding prototypes either.
*/
let obj = {
    name: "vikas",
    age: 20
}
let newObj = {
    college: "ks saket pg college ayodhya",
    location: "ayodhya"
}
// console.log(obj.college);
obj.__proto__ = newObj;
// console.log(obj.__proto__);


let animal = {
    eats: true
};
//   let rabbit = {
//     jumps: true
//   };

// rabbit.__proto__ = animal; // (*)
//   the above line can be also written as
let rabbit = {
    jumps: true,
    __proto__: animal
};
// we can find both properties in rabbit now:
console.log(rabbit.eats); // true (**)
console.log(rabbit.jumps); // true


let employee = {
    firstName: "vikas",
    secondName: "kumar",
    set fullName(value) {
        [this.firstName, this.secondName] = value.split(" ");
    },
    get fullName() {
        return `${this.firstName} ${this.secondName}`;//this is just a property not a method
    }
}
Object.prototype.show = function () {
    console.log(this.firstName, this.secondName);
}
//we should not change the prototype of the global object it is a bad practice always chage the prototye of your own created object.
// In modern programming, there is only one case where modifying native prototypes is approved. That’s polyfilling.

// Polyfilling is a term for making a substitute for a method that exists in the JavaScript specification, but is not yet supported by a particular JavaScript engine.
console.log(employee.show());
// console.log(employee);
let fullName = employee.fullName;
employee.fullName = "salaj singh";
// console.log(fullName);


function f() { }
// console.log(f.__proto__ == Function.prototype);