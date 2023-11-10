/*
var has function or global level scope not block level scope.
*/
if (true) {
    var test = true; // use "var" instead of "let"
}

console.log(test); // true, the variable lives after if

//  but in case of let undefined 
if (true) {
    let a = 90;
}
// console.log(a);
for (var i = 0; i < 10; i++) {
    var one = 1;
    // ...
}

console.log(i);   // 10, "i" is visible after loop, it's a global variable
console.log(one); // 1, "one" is visible after loop, it's a global variable
//   in the above case if we use let condition would be different.

/*
The declaration is processed at the start of function execution (“hoisted”), but the assignment always works at the place where it appears
*/
function sayHi() {
    var phrase; // declaration works at the start...

    console.log(phrase); // undefined

    phrase = "Hello"; // ...assignment - when the execution reaches it.
}

sayHi();


// Ways to create IIFE

(function() {
    console.log("Parentheses around the function");
  })();
  
  (function() {
    console.log("Parentheses around the whole thing");
  }());
  
  !function() {
    console.log("Bitwise NOT operator starts the expression");
  }();
  
  +function() {
    console.log("Unary plus starts the expression");
  }();
  