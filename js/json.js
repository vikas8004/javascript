/*
JSON.stringify to convert objects into JSON.
JSON.parse to convert JSON back into an object.

JSON supports following data types:
Objects { ... }
Arrays [ ... ]
Primitives:
strings,
numbers,
boolean values true/false,
null.
Besides, JSON does not support comments. Adding a comment to JSON makes it invalid.
*/
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
};

let json = JSON.stringify(student);

console.log(typeof json); // we've got a string!

console.log(json);
//The resulting json string is called a JSON-encoded or serialized or stringified or marshalled object. We are ready to send it over the wire or put into a plain data store.

/*

JSON is data-only language-independent specification, so some JavaScript-specific object properties are skipped by JSON.stringify.

Namely:

Function properties (methods).
Symbolic keys and values.
Properties that store undefined.*/

let user = {
    sayHi() { // ignored
        console.log("Hello");
    },
    [Symbol("id")]: 123, // ignored
    something: undefined // ignored
};

console.log(JSON.stringify(user)); // {} (empty object)

//   The important limitation: there must be no circular references.
let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    participants: ["john", "ann"]
};

meetup.place = room;       // meetup references room
room.occupiedBy = meetup; // room references meetup

// JSON.stringify(meetup); // Error: Converting circular structure to JSON
// define a javascript object
const personalData = {
    name: 'John',
    age: 35,
    occupation: 'Doctor',
    home: 'Australia'
};

// print the object
console.log("The object is:");
console.log(personalData);

// define the replacer array
const replacer = ['name', 'age', 'home'];

// use JSON stringify method to convert the object into a JSON string
const personalData_string = JSON.stringify(personalData, replacer);

// print the JSON string
console.log("The resultant string is:");
console.log(personalData_string);

// replacer as function
// define a javascript object
const personald = {
    name: 'John',
    age: 35,
    occupation: 'Doctor',
    home: 'Australia',
    employed: true
};

// print the object
console.log("The object is:");
console.log(personalData);

// define the replacer function
function repl(key, value){
    if(typeof value === 'string'){
        return undefined;
    }
    return value;
}

// use JSON stringify method to convert the object into a JSON string
const personalData_string1 = JSON.stringify(personald, repl);

// print the JSON string
console.log("The resultant string is:");
console.log(personalData_string);
