let user = {
  name: "vikas"
}
let admin = user;
user = null;
// console.log(admin.name);
// console.log(user.name);
/*
GARBAGE COLLECTOR ALGORITHM

The basic garbage collection algorithm is called “mark-and-sweep”.

The following “garbage collection” steps are regularly performed:

The garbage collector takes roots and “marks” (remembers) them.
Then it visits and “marks” all references from them.
Then it visits marked objects and marks their references. All visited objects are remembered, so as not to visit the same object twice in the future.
…And so on until every reachable (from the roots) references are visited.
All objects except marked ones are removed.
 */
let user1 = { name: "John" };
let admin1 = { name: "Admin" };

function sayHi() {
  console.log(this.name);
}

// use the same function in two objects
user1.f = sayHi;
admin1.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user1.f(); // John  (this == user)
admin1.f(); // Admin  (this == admin)

admin1['f'](); // Admin (dot or square brackets access the method – doesn't matter)

// let num=0;
let num = new Number(0);//this is not recommended
if (num) {
  console.log(num);

}
// 1e3 === 1 * 1000; // e3 means *1000
// 1.23e6 === 1.23 * 1000000; // e6 means *1000000
// 1e-3 === 1 / 1000; // 0.001
//  console.log(Object.is(NaN,NaN))
//  console.log(NaN===NaN)

// console.log(0===-0);
// console.log(Object.is(0,-0));

// console.log(Number("899px"))//could not convert when an number contain string
// console.log(parseInt("899px"));//this work in the contrast of the above line.
// console.log( parseInt('100px') ); // 100
// console.log( parseFloat('12.5em') ); // 12.5

// console.log( parseInt('12.3') ); // 12, only the integer part is returned
// console.log( parseFloat('12.3.4') ); // 12.3, the second point stops the reading

// console.log(parseInt("33", 8));//second argument is the base of the number which u want to be in the result.

console.log("12" > "2");
let arr = [45, 67, 89, 21, 3, 6];

let reducedArr = arr.reduce((acc, item) => {
  debugger;
  return acc + item
}
)
// console.log(reducedArr);
let obj3 = {
  name: "vishal",
  id: 78
}
console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(Object.entries(obj3));

let arr1 = [[1, 'banana', "hello"], [3, "vikas"]];
let form = Object.fromEntries(arr1);
// console.log(form);
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
let sumSalaries = (sal => {
  let sum = 0;

  if (sal) {
    for (const val of Object.values(salaries)) {
      sum += val;
    }
    return sum;
  }
  else {
    return 0;
  }
})

console.log(sumSalaries(salaries));
let a = function (name, age) {

}
// console.log(typeof a);
a.rollNo = 89;
console.log(a.rollNo);
let func = new Function("a","b","return a+b");
console.log(func(6,7,7));