/*
In object-oriented programming, a class is an extensible program-code-template for creating objects, providing initial values for state (member variables) and implementations of behavior (member functions or methods).
*/

/*
What is a class?
So, what exactly is a class? That’s not an entirely new language-level entity, as one might think.

Let’s unveil any magic and see what a class really is. That’ll help in understanding many complex aspects.

In JavaScript, a class is a kind of function.
*/

class User {
    constructor(name) { this.name = name; }
    sayHi() { return (this.name); }
}

// proof: User is a function
console.log(typeof User); // function
let user = new User("vikas");
console.log(user.sayHi());


class Employee {
    // name = "ashish";
    // age = 18;
    // role = "salesman";

    // the above three declarations are called calss fields and are not stored in the object's prototype.

    // constructor(name, age, role) {
    //     this.name = name;
    //     this.age = age;
    //     this.role = role;
    // }
    showdetails() {
        return `Name : ${this.name}, Age:${this.age}, Role:${this.role}`;
    }
}

let e1 = new Employee();
let details = e1.showdetails();
console.log(details);