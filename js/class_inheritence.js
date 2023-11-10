class Animal {
    constructor(name, speed) {
        this.name = name;
        this.speed = 0;
    }
    run(speed) {
        this.speed = speed;
        return `${this.name} runs with speed ${this.speed}`;
    }
    stop() {
        this.speed = 0;
        return `${this.name} stands still`;
    }
}
let a1 = new Animal("white rabbit", 89);
console.log(a1.run(78));

// inheriting the class animal
class bird extends Animal {
    fly() {
        return `${this.name} can fly`;
    }
}

let parrot = new bird("parrot");
console.log(parrot.fly());

// overriding a class
class dog extends Animal {
    hide() {
        return "hide";
    }
    stop() {
        console.log(super.stop());//in this way we call the parent method directly.
        console.log(this.hide());//this is used to call the method itself
    }
}
let d = new dog("sheru");
d.stop();

// overriding constructor
class cow extends Animal {
    constructor(name, speed, height) {
        // we have to call super method to run the code well
        super(name, speed);
        this.height = height;
    }
    showHeight() {
        return this.height;
    }
}

var co = new cow("radhika", "12 km/h", '5'); //creating an object of type cow and passing value '5' as parameter in its constructor function
console.log(co.showHeight());


// static properties
/*

Static methods are used for the functionality that belongs to the class “as a whole”. It doesn’t relate to a concrete class instance.

For example, a method for comparison Article.compare(article1, article2) or a factory method Article.createTodays().

They are labeled by the word static in class declaration.

Static properties are used when we’d like to store class-level data, also not bound to an instance.

The syntax is:

class MyClass {
  static property = ...;

  static method() {
    ...
  }
}
Technically, static declaration is the same as assigning to the class itself:

MyClass.property = ...
MyClass.method = ...
Static properties and methods are inherited.

For class B extends A the prototype of the class B itself points to A: B.[[Prototype]] = A. So if a field is not found in B, the search continues in A
*/

class Human {
    static age = 89;
    constructor(name) {
        this.name = name;
    }
    static show() {
        return `${this.age} and name ${this.name}`
        // can not access not static members
    }
}

Human.age = 78;
let h1 = new Human('harry');
console.log(h1.age);//static property can not be accessed using the object
console.log(Human.show());
