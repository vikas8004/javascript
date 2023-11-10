function user(name, birthDate) {
    this.name = name;
    this.birthDate = birthDate;
    Object.defineProperty(this, "age", {//this is used to set the property in the obeject
        get() {
            let date = new Date().getFullYear();
            return date - this.birthDate.getFullYear();
        }
    })
}

let obj = new user("salaj", new Date(2002, 5, 23));
console.log(obj.name);
console.log(obj.birthDate.toLocaleDateString());
// console.log(obj);
obj.name = "ashish";
// maiking property non writable
Object.defineProperty(obj, "name", {
    writable: false
})
obj.name = "vikas";
let descriptor = Object.getOwnPropertyDescriptor(obj, "name");
console.log(descriptor);



let user1 = {};

Object.defineProperty(user1, "name", {
    value: "John",
    // for new properties we need to explicitly list what's true
    enumerable: true,
    configurable: true,
    writable: true
});

Object.defineProperty(user1, "age", {
    value: "78",
    // for new properties we need to explicitly list what's true
    enumerable: true,
    configurable: true,
    writable: true
});
console.log(user1.name); // John
user1.name = "Pete"; // Error
// console.log(user1.name); // John

for (const key in user1) {
    console.log(user1[key]);
}

// making any property non iterable
// Object.defineProperty(user1, "name", {
//     enumerable: false
// })
console.log("logging the object afeter making it non-iterable only one property should be seen");
// now we would not be able to iterate the object using the for in loop.
delete user1.age;//it is deleteable;
for (const key in user1) {
    console.log(user1[key]);
}

// The non-configurable flag (configurable:false) is sometimes preset for built-in objects and properties.

// A non-configurable property can’t be deleted, its attributes can’t be modified.
Object.defineProperty(user1, "birthdate", {
    value: "december",
    // enumerable: false,
    configurable: true

})
console.log(user1);

// DEFINING MANY PROPERTIES AT ONCE
// There’s a method Object.defineProperties(obj, descriptors) that allows to define many properties at once.
Object.defineProperties(user, {
    name: { value: "John", writable: false },
    surname: { value: "Smith", writable: false },
    // ...
});
console.log(user);

// Object.getOwnPropertyDescriptors
// To get all property descriptors at once, we can use the method Object.getOwnPropertyDescriptors(obj).

/*
Sealing an object globally
Property descriptors work at the level of individual properties.

There are also methods that limit access to the whole object:

Object.preventExtensions(obj)
Forbids the addition of new properties to the object.
Object.seal(obj)
Forbids adding/removing of properties. Sets configurable: false for all existing properties.
Object.freeze(obj)
Forbids adding/removing/changing of properties. Sets configurable: false, writable: false for all existing properties.
And also there are tests for them:

Object.isExtensible(obj)
Returns false if adding properties is forbidden, otherwise true.
Object.isSealed(obj)
Returns true if adding/removing properties is forbidden, and all existing properties have configurable: false.
Object.isFrozen(obj)
Returns true if adding/removing/changing properties is forbidden, and all current properties are configurable: false, writable: false.
These methods are rarely used in practice*/ 

let o={
    name:"salaj",
    age:20
}
// Object.preventExtensions(o);
// delete o["name"];
// o.birth=new Date();
// console.log(o);

// Object.seal(o);
// o.add=89;
// o["age"]=56;//can update
// delete o["name"];
// console.log(o);

Object.freeze(o);
delete o['name'];
console.log(o);
console.log(Object.isExtensible(o));
console.log(Object.isFrozen(o));
console.log(Object.isSealed(o));