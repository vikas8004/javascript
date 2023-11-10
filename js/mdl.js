import "./mdl1.js";
import * as obj from "./mdl2.js"
import num, { square } from "./mdl3.js";


/*
=>As our application grows bigger, we want to split it into multiple files, so called “modules”. A module may contain a class or a library of functions for a specific purpose.
=>A module is just a file. One script is one module. As simple as that.
   ->export keyword labels variables and functions that should be accessible from outside the current module.
   ->import allows the import of functionality from other modules.
MODULE FEATURES
->Modules always work in strict mode.
->Each module has its own top-level scope. In other words, top-level variables and functions from a module are not seen in other scripts.
->If the same module is imported into multiple other modules, its code is executed only once, upon the first import. Then its exports are given to all further importers.
The one-time evaluation has important consequences, that we should be aware of.
->In a module, top-level this is undefined.
*/
let result = obj.greater_bet_three(12, 56, 11);
console.log(result);
console.log(obj.ret());
console.log(square(67));
console.log(num());

/*
You can check yourself by reading them and recalling what they mean:

Before declaration of a class/function/…:
export [default] class/function/variable ...
Standalone export:
export {x [as y], ...}.
Re-export:
export {x [as y], ...} from "module"
export * from "module" (doesn’t re-export default).
export {default [as y]} from "module" (re-export default).
Import:

Importing named exports:
import {x [as y], ...} from "module"
Importing the default export:
import x from "module"
import {default as x} from "module"
Import all:
import * as obj from "module"
Import the module (its code runs), but do not assign any of its exports to variables:
import "module"
We can put import/export statements at the top or at the bottom of a script, that doesn’t matter.

So, technically this code is fine:

sayHi();

// ...

import {sayHi} from './say.js'; // import at the end of the file
In practice imports are usually at the start of the file, but that’s only for more convenience.

Please note that import/export statements don’t work if inside {...}.

A conditional import, like this, won’t work:

if (something) {
  import {sayHi} from "./say.js"; // Error: import must be at top level
}
…But what if we really need to import something conditionally? Or at the right time? Like, load a module upon request, when it’s really needed?


*/ 