
/*
internally a destructuring assignment works by iterating over the right value. It’s a kind of syntax sugar for calling for..of over the value to the right of = and assigning the values. */
let arr = [1, 5, 6, 23, 87, 2, "vikas"];
let [first, , , , , , last] = arr;//any number of values can be skipped using the comma as much as u want.
console.log(first, last);

// swapping of two values using destructure is very easy and tricky
let a = 90;
let b = 78;
[a, b] = [b, a];
// console.log(a,b);

// extra values are undefined
let arr1 = [23, 56];
// let [fst, second, third, ...rest] = arr1;
// console.log(third, rest);//in this case the rest would be empty array

// OBJECT DESTRUCTURING
let obj = {
    name: "alok",
    id: 89,
    role: "employee",
    workHour: 7
}
let { name, id, role, workHour } = obj;
console.log(name, id, role, workHour);
// one thing is to be kept in the mind that the name of the variable while destructuring the object should be the same as the variable name in the object.

// to give our own name we can follow the 
// destructuring also works with the object
let {name:n,id:i,workHour:wh,...r}=obj;
console.log(n,i,wh,r);

// NESTING DESTRUCTURING
let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };
  
  // destructuring assignment split in multiple lines for clarity
  let {
    size: { // put size here
      width,
      height
    },
    items: [item1, item2], // assign items here
    title = "Menu" // not present in the object (default value is used)
  } = options;
  
  console.log(title);  // Menu
  console.log(width);  // 100
  console.log(height); // 200
  console.log(item1);  // Cake
  console.log(item2);  // Donut

//   destructuring in function call
// we pass object to function
let options1 = {
    title: "My menu",
    items: ["Item1", "Item2"]
  };
  
  // ...and it immediately expands it to variables
  function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
    // title, items – taken from options,
    // width, height – defaults used
    console.log( `${title} ${width} ${height}` ); // My Menu 200 100
    console.log( items ); // Item1, Item2
  }
  
  showMenu(options1);
