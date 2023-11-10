/*
=>contextmenu – when the mouse right-clicks on an element.
=>transitionend – when a CSS-animation finishes.
=>To react on events we can assign a handler – a function that runs in case of an event.
=>Handlers are a way to run JavaScript code in case of user actions

==>there are three ways to attach an event to an button or anything.
HTML attribute: onclick="...".
DOM property: elem.onclick = function.
Methods: elem.addEventListener(event, handler[, phase]) to add, removeEventListener to remove.
*/

let bt = document.getElementById("btn");
// bt.onclick = function (params) {
//     console.log("clicked");
// }//if we want to add more handlers on the same btn the previous one will be replaced with the new one that's the problem using the this kind of event handlers.
// =>to overcome the above problem we should use addeventlistner and removeeventlistner

// element.addEventListener(event, handler, [options]); syntax

// bt.addEventListener("click", () => {
//     alert("handler 1");
// })
// bt.addEventListener("click", () => {
//     alert("handler 2");
// })

// let num = 0;
// function handler() {
//     num++;
//     alert(num);
// }
// bt.addEventListener("click", handler);

// setTimeout(() => {
//     bt.removeEventListener("click", handler);
// }, 2000);

// document.addEventListener("DOMContentLoaded",()=>{
//     console.log("dom content loaded");
// })

// Event object
bt.addEventListener("click", (e) => {
    // console.log(e.type);
    // console.log(e.preventDefault());
    // console.log(e.target);
    // console.log(e.currentTarget);
    console.log(e.offsetX);//
    console.log(e.offsetY);//tell the offset relative to the cliked element
})

// creating mousedown and mouse up
// let m = document.getElementById("mouse");
// class ev {
//     handleEvent(e) {
//         switch (e.type) {
//             case "mouseover":
//                 console.log("mouseover");
//                 break;
//             case "mousedown":
//                 console.log("mousedown");
//                 break;
//             case "mouseup":
//                 console.log("mouse released");
//                 break;
//             case "mouseleave":
//                 console.log("mouse leaved");
//                 break;
//             case "mouseenter":
//                 console.log("mouse entered");
//                 break;
//             case "mouseout":
//                 console.log("mouse out");
//                 break;
//             case "mousemove":
//                 console.log("mouse moved");
//                 break;


//         }
//     }
// }

// let obj = new ev;
// m.addEventListener("mouseover", obj)
// m.addEventListener("mousedown", obj)
// m.addEventListener("mouseup", obj)
// m.addEventListener("mouseleave", obj)
// m.addEventListener("mouseenter", obj)
// m.addEventListener("mouseout", obj)
// m.addEventListener("mousemove", obj)