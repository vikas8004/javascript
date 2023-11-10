/*
=>Focusing on an element generally means: “prepare to accept the data here”
=>The moment of losing the focus (“blur”) can be even more important.
*/

let i = document.querySelector(".view");
// i.addEventListener("focus", () => {
//     console.log("focused on the input");
// })
// i.addEventListener("blur", () => {
//     console.log("input blurred");
// })
// i.addEventListener("input",()=>{
//     console.log("changing...");
// })
i.addEventListener("click", (e) => {
    console.log();
})

// creating an editable div
// let area = null;
//     let view = document.getElementById('view');

//     view.onclick = function() {
//       editStart();
//     };

//     function editStart() {
//       area = document.createElement('textarea');
//       area.className = 'edit';
//       area.value = view.innerHTML;

//       area.onkeydown = function(event) {
//         if (event.key == 'Enter') {
//           this.blur()
//         }
//       };

//       area.onblur = function() {
//         editEnd();
//       };

//       view.replaceWith(area);
//       area.focus();
//     }

//     function editEnd() {
//       view.innerHTML = area.value;
//       area.replaceWith(view);
//     }
let inp = document.querySelector(".in");
inp.addEventListener("cut", (e) => {
    console.log("cutting prohibitted", e.type);
    e.preventDefault();
});
inp.addEventListener("copy", (e) => {
    console.log("copying prohibitted", e.type);
    e.preventDefault();
});
inp.addEventListener("select", (e) => {
    console.log("selecting prohibitted", e.type);
    e.preventDefault();
})

inp.addEventListener("paste", (e) => {
    navigator.clipboard.readText().then(val => {
        console.log("pasting is prohibited", e.type);
    })
    e.preventDefault();
})
window.onbeforeunload = function () {
    alert("do not quit please");
}
alert(_.VERSION);

let sc=document.createElement("script");
sc.src="hello00.js";
document.body.append(sc);
sc.onerror=function(){
    console.log("can not find");
}

