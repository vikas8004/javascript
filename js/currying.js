function curry(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        }
    }
}
let func1 = curry(1);
let func2 = func1(2);
let result = func2(4);
console.log(result);