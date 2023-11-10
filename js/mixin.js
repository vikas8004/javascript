/*
=>a mixin is a class containing methods that can be used by other classes without a need to inherit from it.
=>a mixin provides methods that implement a certain behavior, but we do not use it alone, we use it to add the behavior to other classes.
=>Mixin – is a generic object-oriented programming term: a class that contains methods for other classes.

=>Some other languages allow multiple inheritance. JavaScript does not support multiple inheritance, but mixins can be implemented by copying methods into prototype.
*/
let mixin = {
    sayHi() {
        console.log(`hello ${this.name}`);
    },
    sayBye() {
        console.log(`bye ${this.name}`);
    }
}

class User {
    constructor(name) {
        this.name = name;
    }
}
Object.assign(User.prototype, mixin)
let u = new User("ashish");
u.sayBye();