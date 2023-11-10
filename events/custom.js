let cus = document.getElementById("custom");
let c = new Event("hello");
cus.addEventListener("hello", (e) => {
    console.log(e.target, "this is a new event");
})
cus.dispatchEvent(c);
//the above line will activate the event.


// we can create custom event using the constructor customEvent the only difference is that the second argument of the customEvent constructor is additonal property detail for the event that we want to execute.

let e = new CustomEvent("good", {
    detail: {
        det() {
            console.log("this is a custom detail shown by the custom event");
        }
    }
})
cus.addEventListener("good", (e) => {
    e.detail.det();
})
cus.dispatchEvent(e);