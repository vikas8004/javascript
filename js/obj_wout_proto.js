/*
Setting or reading the prototype with obj.__proto__ is considered outdated and somewhat deprecated (moved to the so-called “Annex B” of the JavaScript standard, meant for browsers only).

The modern methods to get/set a prototype are:

Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.
Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto.
The only usage of __proto__, that’s not frowned upon, is as a property when creating a new object: { __proto__: ... }.

Although, there’s a special method for this too:

Object.create(proto, [descriptors]) – creates an empty object with given proto as [[Prototype]] and optional property descriptors
*/ 
let obj={
    name:"ashish"
}
let s=Object.create(obj,{});//the prototype of s is set to obj
// console.log(s.__proto__);
// console.log(s.name);
console.log(Object.getPrototypeOf(s));


// alternative method to do the same
Object.setPrototypeOf(obj,{
    age:22,
    college:"ks saket pg college ayodhya"
});
console.log(Object.getPrototypeOf(obj));
console.log(Object.getPrototypeOf(s));
