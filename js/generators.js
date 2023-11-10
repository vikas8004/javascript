/*
Regular functions return only one, single value (or nothing).

Generators can return (“yield”) multiple values, one after another, on-demand. They work great with iterables, allowing to create data streams with ease.
=>To create a generator, we need a special syntax construct: function*, so-called “generator function”.
=>Generator functions behave differently from regular ones. When such function is called, it doesn’t run its code. Instead it returns a special object, called “generator object”, to manage the execution.
=>last statement should be return keyword
=>* after function* tells that this is a generator function
*/
function* sequence_genrators() {
    yield "hello";
    yield "buddy";
    yield "good";
    yield "morning";

}
let generator = sequence_genrators();//no need to call using new as this is not a constructor
// console.log(generator);
// console.log(generator.next());//next is an object with two values value and done respectively
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// generators are iterable
// for (const i of generator) {
//     console.log(i);//returned statement is not shown here. to see it u must return it with yield
// }

// function* gen(start, end) {
//     for (start; start < end; start++) {
//         yield start;
//     }
// }
// let g=gen(1,9);
// for (const i of g) {
//     console.log(i);
// }

// yield is a two way street
// yield is a two-way street: it not only returns the result to the outside, but also can pass the value inside the generator.
function* gene() {
    let result = yield '2+2=?';
    console.log(result);
}
let g = gene();
let question = g.next().value;
generator.next(4);
g.return("78");


// generator.return(value) finishes the generator execution and return the given value.
function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g1 = gen();

console.log(g1.next());        // { value: 1, done: false }
g1.return('foo'); // { value: "foo", done: true }//used to stop at any position
console.log(g1.next());        // { value: undefined, done: true }

// 
let range = {
    from: 1,
    to: 5,

    *[Symbol.iterator]() { // a shorthand for [Symbol.iterator]: function*()
        for (let value = this.from; value <= this.to; value++) {
            yield value;
        }
    }
};

for (let value of range) {
    console.log(value); // 1, then 2, then 3, then 4, then 5
}