let value = true;
console.log(typeof value); // boolean

value = String(value); // now value is a string "true"
console.log(typeof value); // string
let nuStr="123";
console.log(typeof nuStr);
console.log(typeof Number(nuStr));
let num=Number("hello buddy")
console.log(num);
console.log(Number(null));//null is converted into 0 while performing the numeric conversion

console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false

console.log( Boolean("hello") ); // true
console.log( Boolean("") ); // false
console.log( Boolean("  ") ); // true
// alert("Hello")[1, 2].forEach(alert);//produce error becoz of semicolon;