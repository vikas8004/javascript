outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

        console.log(`Value at coords (${i},${j})`, '');

        // if an empty string or canceled, then break out of both loops
        if (i == 1 && j == 1) break outer; // (*)

        // do something with the value...
    }
}

console.log('Done!');

// hello();//can not call it here in case of function expression
let hello = function () {
    console.log("how are u");
};
sayHi();
function sayHi() {
    console.log("hi");
}