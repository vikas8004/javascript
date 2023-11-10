/*
The built-in eval function allows to execute a string of code.
*/

let code = 'console.log("hello buddy")';
eval(code);

// In strict mode, eval has its own lexical environment. So functions and variables, declared inside eval, are not visible outside:

// reminder: 'use strict' is enabled in runnable examples by default

eval("let x = 5; function f() {}");

console.log(typeof x); // undefined (no such variable)
// function f is also not visible

// The eval’ed code is executed in the current lexical environment, so it can see outer variables:

let a = 1;

function f() {
    let a = 2;

    eval('console.log(a)'); // 2
}

f();
// It can change outer variables as well: