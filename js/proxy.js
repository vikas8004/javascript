/*
Creates a Proxy object. The Proxy object allows you to create an object that can be used in place of the original object, but which may redefine fundamental Object operations like getting, setting, and defining properties. Proxy objects are commonly used to log property accesses, validate, format, or sanitize inputs.

@param target — A target object to wrap with Proxy.

@param handler — An object whose properties define the behavior of Proxy when an operation is attempted on it.
=>For operations on proxy, if there’s a corresponding trap in handler, then it runs, and the proxy has a chance to handle it, otherwise the operation is performed on target.
*/


let user = {
    name: "vikas kumar",
    degree: "bachlor",
    age: 23,


}

let proxy = new Proxy(user, {
    get(target, prop, receiver) {
        if (prop == "name") {
            console.log(target, receiver);
            return target["name"];
        }
    }
})

// The proxy should totally replace the target object everywhere. No one should ever reference the target object after it got proxied. Otherwise it’s easy to mess up.
let dict = {
    "a": "apple", "b": "banana", "c": "cherry"
};

dict = new Proxy(dict, {
    get(target, prop) {
        try {
            if (prop in target) {
                return target[prop];
            } else {
                throw new Error("no such word found in the dictionary");
            }
        } catch (error) {
            console.log(error.message);
        }
    }
})
// console.log(dict.f);
// using set trap we must return true if successfully written otherwise false.
/*
set(target, property, value, receiver):

target – is the target object, the one passed as the first argument to new Proxy,
property – property name,
value – property value,
receiver – similar to get trap, matters only for setter properties.
*/

let arr = [];
arr = new Proxy(arr, {

    set(target, prop, val, receiver) {
        if (typeof val == "number") {
            target[prop] = val;
            return true;
        }
        else {
            return false;
        }
    },

})
arr.push(4);
// console.log(arr);

// rovocable proxies
// A revocable proxy is a proxy that can be disabled.

// Let’s say we have a resource, and would like to close access to it any moment.

// What we can do is to wrap it into a revocable proxy, without any traps. Such a proxy will forward operations to object, and we can disable it at any moment.

// The syntax is:

let object = {
    name: "vikas"
};
let { pr, revoke } = Proxy.revocable(object, {})

revoke();
console.log(pr);
/*
A call to revoke() removes all internal references to the target object from the proxy, so they are no longer connected.

Initially, revoke is separate from proxy, so that we can pass proxy around while leaving revoke in the current scope.

We can also bind revoke method to proxy by setting proxy.revoke = revoke.
*/ 