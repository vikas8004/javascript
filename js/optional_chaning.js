/*
OPTIONAL CHAINING
 The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.

Further in this article, for brevity, we’ll be saying that something “exists” if it’s not null and not undefined.

In other words, value?.prop:

works as value.prop, if value exists,
otherwise (when value is undefined/null) it returns undefined.
Here’s the safe way to access user.address.street using ?. 

The optional chaining ?. syntax has three forms:

1-obj?.prop – returns obj.prop if obj exists, otherwise undefined.
2-obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
3-obj.method?.() – calls obj.method() if obj.method exists, otherwise returns undefined.
As we can see, all of them are straightforward and simple to use. The ?. checks the left part for null/undefined and allows the evaluation to proceed if it’s not so.

A chain of ?. allows to safely access nested properties.

Still, we should apply ?. carefully, only where it’s acceptable, according to our code logic, that the left part doesn’t exist. So that it won’t hide programming errors from us, if they occur
 */
let user = {
    name: "vikas",
    address: {
        vill: "matera",
        pinCode: 272302,
        nearby: {
            first: "italy",
            second: "kachoor"
        }
    }
}
let val;
if (user?.address?.nearby?.first) {
    /* the above expression is called optional chaining and this is used to get rid of (user.address.nearby.first) as u know that if u want to run the if block on the previous result as if user.address is true then only u will check user.adddress.nearby and then check user.address.nearby.first and this will lead to the repetition of the code.
   */
    val = true;
}
console.log(val);