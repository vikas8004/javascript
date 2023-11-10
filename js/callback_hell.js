function sum(num) {
    return function (num1) {
        return function (num2) {
            return function (num3) {
                return num + num1 + num2 + num3;
            }
        }
    }
}
// console.log(sum(1)(2)(3)(4));

function func(add) {
    setTimeout(() => {
        add();
        setTimeout(() => {
            add();
            setTimeout(() => {
                add();
                // and so on this is the example of callback hell or also called pyramid of doom
            }, 1000);
        }, 1000);
    }, 1000);
}
let add = () => { console.log(6 + 9) };
func(add);