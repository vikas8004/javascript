/*
try...catch works synchronously
If an exception happens in “scheduled” code, like in setTimeout, then try...catch won’t catch it:
*/
// try {
//     setTimeout(function () {
//         noSuchVariable; // script will die here
//     }, 1000);
// } catch (err) {
//     // console.log("won't work", err);
// }


//  That’s because the function itself is executed later, when the engine has already left the try...catch construct.

// To catch an exception inside a scheduled function, try...catch must be inside that function: 
setTimeout(function () {
    try {
        noSuchVariable; // try...catch handles the error!
    } catch (err) {
        //   console.log( "error is caught here!",err.stack,err.name,err.message,err.number );
        // console.log(err.stack, err.name, err.message, err.number);
    }
}, 1000);

// throwing custom error using throw keyword
let json = ' {"name": "vikas"}'
try {
    let user = JSON.parse(json);
    if (!user.age) {
        throw new Error("age not found");
        // throw new SyntaxError("check if there is age first");
        // it is in our hand that what kind of error we want to throw it may be any primitive value or any object too.
        // throw 89;
        // throw "mention age first";
    }
} catch (error) {
    console.log(error);
}

// try catch and finally
// let num = +prompt("Enter a positive integer number?", 35)

let diff, result;

function fib(n) {
    if (n < 0 || Math.trunc(n) != n) {
        throw new Error("Must not be negative, and also an integer.");
    }
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
    // result = fib(num);
} catch (err) {
    result = 0;
} finally {
    diff = Date.now() - start;
}

console.log(result || "error occurred");

console.log(`execution took ${diff} ms`);

try {
    a = 90;

    balbal;
} catch (error) {
    console.log(error);
}
finally {
    console.log("check your code carefully");
}
let er = new Error("hello");
console.log(er.name, er.message, er.stack);

// stack gives us the whole information about the error object.