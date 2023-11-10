/*
mousedown/mouseup
Mouse button is clicked/released over an element.
mouseover/mouseout
Mouse pointer comes over/out from an element.
mousemove
Every mouse move over an element triggers that event.
click
Triggers after mousedown and then mouseup over the same element if the left mouse button was used.
dblclick
Triggers after two clicks on the same element within a short timeframe. Rarely used nowadays.
contextmenu
Triggers when the right mouse button is pressed.
*/

let c = document.getElementById("custom");
c.addEventListener("click", (e) => {
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);
    console.log(e.altKey);
})
// let nonSelect = document.getElementById("nonSelect");
// nonSelect.addEventListener("dblclick", (e) => {

// })