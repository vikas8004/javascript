/*
=>tagged template is the advance form of the template literal.
=>tags allow you to parse template literals with a function.
=>the first argument of the tagged function contains an array of string values.
=>the remaining arguments are related to expressions.
=>in the end your function can return the maniputlate string.
*/

function story(str, first, last) {
  console.log(str);
  console.log(first);
  console.log(last);
}
let fname = "vikas";
let lname = "kumar";
story`my first name is ${fname} and last name is ${lname}`;
//string is passed as array to the first argument and the all as followed.
