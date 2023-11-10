// map supports all the datatypes as key

/*
WEAKMAP
all the keys are objects in the weakmap
WeakMap does not support iteration and methods keys(), values(), entries(), so there’s no way to get all keys or values from it.

WeakMap has only the following methods:

weakMap.set(key, value)
weakMap.get(key)
weakMap.delete(key)
weakMap.has(key)
if we use an object as the key in it, and there are no other references to that object – it will be removed from memory (and from the map) automatically.
*/

let map = new Map();
map.set(NaN, "no number");
map.set(true, "boolean");
map.set(45, "Number");
// console.log(map.size);
// console.log(map.get(true));
let obj = {};
map.set(obj, "object");
// console.log(map.get(obj));
// console.log(map.delete(45));
// console.log(map.get(45));

// map.forEach(num=>{
//     console.log(num);
// })
console.log(map.values());
for (let val of map.values()) {
    console.log(val);
}

console.log(map.entries());
for (const en of map.entries()) {
    console.log(en);
}

console.log(map.clear());
console.log(map);

function unique(arr) {
    let set = new Set([...arr])
    let arrr = [];
    set.forEach(ele => {
        arrr.push(ele)
    })
    return arrr;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

// console.log(unique(values));
let john = { name: "John" };

let array = [john];

john = null;
// console.log(array[0].name);

// WEAKMAP
let wObj = {

}
let wmap = new WeakMap();
wmap.set(wObj, "not a number");
// console.log(wmap.get(wObj));
wObj = null;
console.log(wmap.get(wObj));//looses all the reference to the wObj object but this would not be the case in the in the simple map fucntion


// WEAKSET
/*
WeakSet behaves similarly:

It is analogous to Set, but we may only add objects to WeakSet (not primitives).
An object exists in the set while it is reachable from somewhere else.
Like Set, it supports add, has and delete, but not size, keys() and no iterations.
Being “weak”, it also serves as additional storage. But not for arbitrary data, rather for “yes/no” facts. A membership in WeakSet may mean something about the object
*/
let visitedSet = new WeakSet();

let john1 = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john1); // John1 visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(john1); // John1 again

// visitedSet has 2 users now

// check if John visited?
console.log(visitedSet.has(john)); // true

// check if Mary visited?
console.log(visitedSet.has(mary)); // false

john1 = null;
console.log(visitedSet.has(john1));
// if the reference is lost that oject no more exist in the set that's why this is called weakset.

/*
Summary
WeakMap is Map-like collection that allows only objects as keys and removes them together with associated value once they become inaccessible by other means.

WeakSet is Set-like collection that stores only objects and removes them once they become inaccessible by other means.

Their main advantages are that they have weak reference to objects, so they can easily be removed by garbage collector.

That comes at the cost of not having support for clear, size, keys, values…

WeakMap and WeakSet are used as “secondary” data structures in addition to the “primary” object storage. Once the object is removed from the primary storage, if it is only found as the key of WeakMap or in a WeakSet, it will be cleaned up automatically*/
