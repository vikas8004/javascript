/*
The maximal number of nested calls (including the first one) is called recursion depth. In our case, it will be exactly n.

The maximal recursion depth is limited by JavaScript engine. We can rely on it being 10000, some engines allow more, but 100000 is probably out of limit for the majority of them. There are automatic optimizations that help alleviate this (“tail calls optimizations”), but they are not yet supported everywhere and work only in simple cases.

That limits the application of recursion, but it still remains very wide. There are many tasks where recursive way of thinking gives simpler code, easier to maintain.
*/
function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

console.log(pow(2, 3)); // 8
// If n == 1, then everything is trivial. It is called the base of recursion, because it immediately produces the obvious result: pow(x, 1) equals x.

//Otherwise, we can represent pow(x, n) as x * pow(x, n - 1). In maths, one would write xn = x * xn-1. This is called a recursive step: we transform the task into a simpler action (multiplication by x) and a simpler call of the same task (pow with lower n). Next steps simplify it further and further until n reaches 1.


/*
The execution context and stack
Now let’s examine how recursive calls work. For that we’ll look under the hood of functions.

The information about the process of execution of a running function is stored in its execution context.

The execution context is an internal data structure that contains details about the execution of a function: where the control flow is now, the current variables, the value of this (we don’t use it here) and few other internal details.

One function call has exactly one execution context associated with it.

When a function makes a nested call, the following happens:

The current function is paused.
The execution context associated with it is remembered in a special data structure called execution context stack.
The nested call executes.
After it ends, the old execution context is retrieved from the stack, and the outer function is resumed from where it stopped.

*/ 

// using for loop
function f(){
    let sum=0;
    for(let i=1;i<=100;i++){
        sum+=i;
    }
    return sum;
}

function af(n){
    // console.log(arguments[0]);
    return (n*(n+1))/2;
}

function recur(n){
    if(n==1){
        return n;
    }
    else{
        return n+recur(n-1);
    }

}

console.log(f(),af(100),recur(100));