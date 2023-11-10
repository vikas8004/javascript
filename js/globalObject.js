/*
In a browser, global functions and variables declared with var (not let/const!) become the property of the global object:
*/
var gVar = 5;

console.log(window.gVar);

// If we used let instead, such thing wouldn’t happen

// If a value is so important that you’d like to make it available globally, write it directly as a property
// make current user information global, to let all scripts access it
window.currentUser = {
    name: "John"
};

// somewhere else in code
alert(currentUser.name);  // John

// or, if we have a local variable with the name "currentUser"
// get it from window explicitly (safe!)
alert(window.currentUser.name); // John// make current user information global, to let all scripts access it
window.currentUser = {
  name: "John"
};

// somewhere else in code
alert(currentUser.name);  // John

// or, if we have a local variable with the name "currentUser"
// get it from window explicitly (safe!)
alert(window.currentUser.name); // John
