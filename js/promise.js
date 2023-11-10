/*
=>A promise is a special JavaScript object that links the “producing code” and the “consuming code” together. In terms of our analogy: this is the “subscription list”. The “producing code” takes whatever time it needs to produce the promised result, and the “promise” makes that result available to all of the subscribed code when it’s ready.
=>The function passed to new Promise is called the executor.
=>the executor runs automatically and attempts to perform a job. When it is finished with the attempt, it calls resolve if it was successful or reject if there was an error.

=>The promise object returned by the new Promise constructor has these internal properties:

state — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
result — initially undefined, then changes to value when resolve(value) is called or error when reject(error) is called.

=>A promise that is either resolved or rejected is called “settled”, as opposed to an initially “pending” promise

=>The executor should call only one resolve or one reject. Any state change is final.

All further calls of resolve and reject are ignored:

=>The first argument of .then is a function that runs when the promise is resolved and receives the result.
The second argument of .then is a function that runs when the promise is rejected and receives the error.
=>If we’re interested only in errors, then we can use null as the first argument: .then(null, errorHandlingFunction). Or we can use .catch(errorHandlingFunction), which is exactly the same:

=>A finally handler has no arguments. In finally we don’t know whether the promise is successful or not. That’s all right, as our task is usually to perform “general” finalizing procedures.

Please take a look at the example above: as you can see, the finally handler has no arguments, and the promise outcome is handled by the next handler.

A finally handler “passes through” the result or error to the next suitable handler.

=>A finally handler also shouldn’t return anything. If it does, the returned value is silently ignored.
*/
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
});

// resolve runs the first function in .then
promise.then(
    result => console.log(result), // shows "done!" after 1 second
    error => console.log(error) // doesn't run
);
let promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// reject runs the second function in .then
promise1.then(
    result => console.log(result), // doesn't run
    error => console.log(error) // shows "Error: Whoops!" after 1 second
);

// async/await
/*
=>The word “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.
*/

async function name() {
    return "vikas";
}
name().then(e => {
    console.log(e);
});

async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });

    let result = await promise; // wait until the promise resolves (*)

    alert(result); // "done!"
}

f()