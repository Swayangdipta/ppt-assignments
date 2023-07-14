## Q.1 Explain Hoisting in JavaScript
> Answer

Hoisting in JavaScript is a behavioral feature where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the actual execution of the code. This means that regardless of where declarations are made in the code, they are effectively "hoisted" to the top of their scope.

Hoisting applies to both variables and function declarations but behaves differently for each.

1. Variable Hoisting:
   When a variable is hoisted, only the declaration is moved to the top, not the initialization. This means that the variable is recognized throughout its scope but is assigned the value `undefined` until the line where it is actually assigned a value.

   Example:
   ```javascript
   console.log(x); // undefined
   var x = 5;
   ```

   In the above code, the variable `x` is hoisted, so it is accessible within its scope. However, at the point of the `console.log` statement, `x` has not yet been assigned a value, resulting in `undefined` being printed.

2. Function Hoisting:
   Function declarations are entirely hoisted, including both the name and the body of the function. This allows you to call a function before it appears in the code.

   Example:
   ```javascript
   foo(); // "Hello, World!"

   function foo() {
     console.log("Hello, World!");
   }
   ```

   In this example, the function `foo` is hoisted, so it can be called before its actual declaration in the code.

## Q.2 Explain Temporal Dead Zone?
> Answer

The Temporal Dead Zone is a JavaScript behavior where accessing a `let` or `const` variable before its declaration throws a `ReferenceError`. It occurs because the variable exists within its scope but is not yet initialized. 

Example:
```javascript
console.log(x); // ReferenceError
let x = 5;
```

In the code above, trying to access the variable `x` before its declaration triggers the Temporal Dead Zone , resulting in a `ReferenceError`. Once `x` is declared, the Temporal Dead Zone ends, and the variable can be accessed and assigned a value. The Temporal Dead Zone helps catch potential bugs caused by using variables before they are properly initialized.

## Q.3 Difference between var & let?
> Answer

The main differences between `var` and `let` in JavaScript are:

1. Scope:
   - `var` is function-scoped or globally scoped.
   - `let` is block-scoped.

2. Hoisting:
   - `var` variables are hoisted and initialized with `undefined`.
   - `let` variables are hoisted but remain in the Temporal Dead Zone until declared.

3. Re-Declaration:
   - `var` variables can be re-declared in the same scope.
   - `let` variables cannot be re-declared in the same scope.

4. Block Scope Behavior:
   - `var` variables do not have block scope.
   - `let` variables have block scope.

## Q.4 What are the major features introduced in ECMAScript 6?
> Answer

ECMAScript 6 (ES6), also known as ECMAScript 2015, introduced several major features to JavaScript, including:

1. `let` and `const` for block-scoped variables.
2. Arrow functions (`=>`) for concise function syntax.
3. Template literals for improved string interpolation.
4. Default function parameters and the rest parameter syntax (`...`) for handling variable-length arguments.
5. Destructuring assignment for easy extraction of values from arrays and objects.
6. Promises for handling asynchronous operations.
7. `class` syntax and `extends` for object-oriented programming.
8. Iterators and `for...of` loops for iterable objects.
9. `Map`, `Set`, and `WeakMap`/`WeakSet` for efficient data structures.
10. Symbol data type for creating unique identifiers.
11. `async` and `await` keywords for writing asynchronous code in a synchronous style.

## Q.5 What is the difference between let and const ?
> Answer

The main differences between `let` and `const` in JavaScript are:

1. Mutability:
   - `let` variables are mutable and can be reassigned or modified.
   - `const` variables are immutable and cannot be reassigned once assigned.

2. Initialization:
   - `let` variables can be declared without an initial value and assigned later.
   - `const` variables must be initialized with a value at the time of declaration.

## Q.6  What is template literals in ES6 and how do you use them?
> Answer

Template literals, introduced in ES6, use backticks (\`) for string creation. They allow for embedded expressions using `${}` syntax and support multiline strings. Example:

```javascript
const name = "John";
const age = 30;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // Hello, my name is John and I am 30 years old.
```

## Q.7 What’s difference between map & forEach?
> Answer

The main differences between `map` and `forEach` in JavaScript are:

1. Return Value:
   - `map` returns a new array based on the provided function.
   - `forEach` does not return anything.

2. Usage:
   - Use `map` when you want to transform each element and create a new array.
   - Use `forEach` when you want to perform an action on each element without creating a new array.

3. Modifying the Original Array:
   - `map` does not modify the original array.
   - `forEach` can modify the original array.

`map` Example:
```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6]
```
`forEach` Example:
```javascript
const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2)); // Output: 2, 4, 6
```

## Q.8 How can you destructure objects and arrays in ES6?
> Answer
 
In ES6, we can destructure objects and arrays using concise syntax. 

Destructuring Objects:
```javascript
const { property1, property2 } = object;
```
This assigns the values of `property1` and `property2` from `object` to variables of the same name.

Destructuring Arrays:
```javascript
const [element1, element2] = array;
```
This assigns the values of `element1` and `element2` from `array` to variables of the same name.

Destructuring allows you to extract specific values from objects or arrays and assign them to variables, providing a more concise way to access and use the individual elements.

## Q.9 How can you define default parameter values in ES6 functions?
> Answer

In ES6, we can define default parameter values for function parameters using the following syntax:

Example:
```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!
greet("John"); // Output: Hello, John!
```
By assigning a default value to a parameter, you provide a fallback value that will be used if no argument is passed for that parameter when the function is called.

## Q.10 What is the purpose of the spread operator (...) in ES6?
> Answer

The spread operator (`...`) in ES6 allows us to expand or spread elements from an iterable (such as an array or object) into another array, object, or function call.

Key uses of the spread operator:

1. Array Manipulation:
   - Expanding an array: `[...array]` creates a new array with the elements of the original array.
   - Concatenating arrays: `[...array1, ...array2]` combines multiple arrays into a single array.
   - Adding elements: `[element, ...array]` adds an element at the beginning of an array.

2. Object Manipulation:
   - Creating new objects: `{ ...object }` creates a new object with the properties of the original object.
   - Merging objects: `{ ...object1, ...object2 }` combines properties from multiple objects into a new object.

3. Function Calls:
   - Spreading arguments: `function(...args)` passes individual elements of an array as arguments to a function.
   - Function parameter default values: `function(param1, param2, ...rest)` captures remaining arguments in an array.