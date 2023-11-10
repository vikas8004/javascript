/*
BUBBLING:
The bubbling principle is simple.
When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

*/
let classes = document.getElementsByClassName("ev");
classes[0].addEventListener("click", (e) => {
    console.log("parent div clicked", e.target);
})
classes[1].addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("inner1 clicked", e.target);
})
classes[2].addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("inner2 clicked", e.target, e.eventPhase);
})

classes[2].addEventListener("contextmenu", () => {
    alert("context menu opened");
})

classes[0].addEventListener("mousedown", (e) => {
    // e.preventDefault();
})

classes[0].addEventListener("selectstart", (e) => {
    e.preventDefault();
})


// The process is called “bubbling”, because events “bubble” from the inner element up through parents like a bubble in the water.
// The most deeply nested element that caused the event is called a target element, accessible as event.target.