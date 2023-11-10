// When we write our code using objects to represent entities, that’s called object-oriented programming, in short: “OOP”.
// The value of this is evaluated during the run-time, depending on the context
// console.log(this);
// Constructor functions technically are regular functions. There are two conventions though:

// They are named with capital letter first.
// They should be executed only with "new" operator.
// For instance:

/*
Let’s note once again – technically, any function (except arrow functions, as they don’t have this) can be used as a constructor. It can be run with new, and it will execute the algorithm above. The “capital letter first” is a common agreement, to make it clear that a function is to be run with new.
 */

function User(name) {
    if (!new.target) {
        return new User(name);
    }
    this.name = name;
    this.isAdmin = false;
}

let user = User("Jack");

// console.log(user.name); // Jack
// console.log(user.isAdmin); // false
// When a function is executed with new, it does the following steps:

// A new empty object is created and assigned to this.
// The function body executes. Usually it modifies this, adds new properties to it.
// The value of this is returned.user1console.log
// In other words, new User(...) does something like:

function User(name) {
    // this = {};  (implicitly)

    // add properties to this
    this.name = name;
    this.isAdmin = false;

    // return this;  (implicitly)
}
// So let user = new User("Jack") gives the same result as:

let user1 = {
    name: "Jack",
    isAdmin: false
};

// create a function and immediately call it with new
let user2 = new function () {
    this.name = "John";
    this.isAdmin = false;

    // ...other code for user creation
    // maybe complex logic and statements
    // local variables etc
};
console.log(user2.name);

// making an object iterable
let obj = {
    from: 1,
    to: 12,
    [Symbol.iterator]() {
        for (let i = this.from; i < this.to; i++) {
            console.log(i);
        }
    }
}
obj[Symbol.iterator]();