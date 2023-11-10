function sayhi(params) {
    console.log("hello world");
    console.log(innerHeight);
    console.log(innerWidth);
    document.body.style.background = "cyan";
    // setInterval(() => {
    //     document.body.style.background = "";

    // }, 2000);
    // console.log(navigator);
    // console.log(document.body.innerHTML);
    // console.log(document.body.innerText);
    // console.log(document.body.offsetWidth);
    // let battery=navigator.getBattery();
    // battery.then(b=>{
    //     console.log(b.level *100);
    // })//api to get the battery level
    // console.log(document.documentElement);
    // b.style.background = "red";
    //id can be targetted without getting it using querselctor or document.getelement by id but u should not prefer it

}
window.sayhi();
// let outer=document.getElementById("t");
// outer.setAttribute("class","hello")
let div = document.createElement("div");
let textNode = document.createTextNode("this is a div created by the javascript engine");
div.innerHTML = textNode.data;
div.className = "d";
div.id = "divJs";
div.innerText = "this is a div created by the javascript engine";
// document.body.append(div);//adds in last
// document.body.prepend(div);//adds in start
// setTimeout(() => {
//     div.remove();//used to remove the dynamically create div 
// }, 2000);
let create = document.getElementById("create");
// create.before("hello")
// create.after("hello")
// create.replaceWith("how are u")


// inserting adjacenthtml
// create.insertAdjacentHTML("afterend",div)
// create.insertAdjacentHTML("afterend",div)
// create.insertAdjacentHTML("beforebegin",div)
// create.insertAdjacentHTML("afterbegin",div)

/*
document.createElement(tag) – creates an element with the given tag,
document.createTextNode(value) – creates a text node (rarely used),
elem.cloneNode(deep) – clones the element, if deep==true then with all descendants.
Insertion and removal:

node.append(...nodes or strings) – insert into node, at the end,
node.prepend(...nodes or strings) – insert into node, at the beginning,
node.before(...nodes or strings) –- insert right before node,
node.after(...nodes or strings) –- insert right after node,
node.replaceWith(...nodes or strings) –- replace node.
node.remove() –- remove the node.
Text strings are inserted “as text”.

There are also “old school” methods:

parent.appendChild(node)
parent.insertBefore(node, nextSibling)
parent.removeChild(node)
parent.replaceChild(newElem, node)
All these methods return node.

Given some HTML in html, elem.insertAdjacentHTML(where, html) inserts it depending on the value of where:

"beforebegin" – insert html right before elem,
"afterbegin" – insert html into elem, at the beginning,
"beforeend" – insert html into elem, at the end,
"afterend" – insert html right after elem.
Also there are similar methods, elem.insertAdjacentText and elem.insertAdjacentElement, that insert text strings and elements, but they are rarely used.

To append HTML to the page before it has finished loading:

document.write(html)

*/
// console.log(create.id);
// adding classes to a particular div
create.classList.add("vikas", "abhay");
create.classList.remove("vikas");
create.classList.toggle("vikas");
create.classList.toggle("vikas");
console.log(create.classList.contains("abhay"));
console.log(document.getElementsByClassName("abhay"));




