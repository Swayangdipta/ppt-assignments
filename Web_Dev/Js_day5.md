## Q.1 What’s difference between Synchronous and Asynchronous?
> Answer

The main difference between synchronous and asynchronous operations is in how they handle the flow of execution:

1. Synchronous:
   - In synchronous operations, tasks are executed in sequential order, one after the other.
   - Each task must complete before the next one can start.
   - The program waits for a task to finish before moving on to the next task.

2. Asynchronous:
   - In asynchronous operations, tasks can overlap and execute independently of one another.
   - Tasks are initiated and allowed to run in the background.
   - The program does not wait for a task to complete before moving on to the next task.

## Q.2 What are Web Apis ?
> Answer

Web APIs, or Web Application Programming Interfaces, are sets of rules and protocols that enable different software applications to communicate and interact with each other over the internet. Here are some examples of Web APIs:

1. Browser APIs: APIs provided by web browsers to access browser-specific features. For example, the Geolocation API allows web applications to access the user's location information. The Fetch API enables making HTTP requests from a web application. The Web Storage API provides local storage for client-side data.

2. Payment Gateway APIs: APIs provided by payment service providers like PayPal or Stripe. These APIs enable web applications to securely process online payments by integrating payment functionality into the application.

3. RESTful APIs: Representational State Transfer (REST) APIs are widely used for communication between client-side and server-side applications. They enable exchanging data over HTTP using standard methods like GET, POST, PUT, and DELETE.

## Q.3 Explain SetTimeOut and setInterval ?
> Answer

`setTimeout` and `setInterval` are functions in JavaScript used for scheduling tasks to be executed after a certain delay or at regular intervals, respectively.

1. setTimeout:
   - `setTimeout` is a function that executes a specified function or evaluates an expression after a specified delay.
   - Example:
     ```javascript
     setTimeout(() => {
       console.log("Delayed task");
     }, 2000);
     ```
     In the above code, the function `console.log("Delayed task")` will be executed after a delay of 2000 milliseconds (2 seconds).

2. setInterval:
   - `setInterval` is a function that repeatedly executes a specified function or evaluates an expression at fixed time intervals.
   - Example:
     ```javascript
     setInterval(() => {
       console.log("Repeated task");
     }, 1000);
     ```
     In the above code, the function `console.log("Repeated task")` will be executed every 1000 milliseconds (1 second) in an ongoing manner until `clearInterval` is called.

## Q.4 how can you handle Async code in JavaScript ?
> Answer

In JavaScript, we can handle asynchronous code using various techniques:

1. Callbacks:
   - Use callbacks to specify code that should run after an asynchronous operation completes.
   - Callback functions are passed as arguments to asynchronous functions and are invoked when the operation is complete.

2. Promises:
   - Promises provide a more structured way to handle asynchronous code.
   - Promises represent the result of an asynchronous operation and allow chaining of success and error handlers using `.then()` and `.catch()`.

3. Async/await:
   - Async/await is a modern syntax introduced in ES2017 (ES8) for handling asynchronous code.
   - It allows writing asynchronous code in a more synchronous-like manner using the `async` and `await` keywords.

## Q.5 What are Callbacks &  Callback Hell ?
> Answer

Callbacks are functions passed as arguments to other functions, allowing them to be executed after a particular task or operation completes. They enable asynchronous programming and can handle the results or errors of the asynchronous operation.

Callback Hell refers to a situation where multiple nested callbacks are used, leading to code that becomes difficult to read, understand, and maintain. It arises when there are many asynchronous operations dependent on each other, resulting in deeply nested callbacks within callbacks. This can make code difficult to follow, introduce indentation issues, and make error handling more complex.

To escape from callback hell, other techniques like Promises or async/await can be used to write more structured and readable asynchronous code.

## Q.6 What are Promises & Explain Some Three Methods of Promise
> Answer

Promises are objects in JavaScript used for handling asynchronous operations. They represent the eventual completion (or failure) of an asynchronous task and allow chaining of success and error handlers.

Three methods of promises:

1. `then()`: Attaches a callback function to handle the successful fulfillment of a promise. It takes two optional arguments: `onFulfilled` for handling the resolved value, and `onRejected` for handling any errors.

2. `catch()`: Attaches a callback function to handle any errors that occur during the promise chain. It is used to catch and handle rejected promises in the chain.

3. `finally()`: Attaches a callback function to be executed regardless of whether the promise is fulfilled or rejected. It is useful for performing cleanup or final actions, such as closing resources, after the promise completes.

## Q.7 What’s async & await Keyword in JavaScript
> Answer

The `async` and `await` keywords in JavaScript are used for handling asynchronous code in a more synchronous-like manner.

- `async`: The `async` keyword is used to define an asynchronous function. It allows the function to use the `await` keyword inside it.

- `await`: The `await` keyword is used to pause the execution of an asynchronous function until a promise is resolved. It can only be used inside an `async` function.

By using `async` and `await` together, you can write asynchronous code that appears more sequential and easier to read, without the need for nested callbacks or complex promise chains. The `await` keyword allows you to wait for promises to resolve before moving on to the next line of code, similar to blocking behavior in synchronous code.

## Q.8 Explain Purpose of Try and Catch Block & Why do we need it?
> Answer

The purpose of the try-catch block in JavaScript is to handle and manage potential errors or exceptions that may occur during the execution of a block of code.

Key points about try-catch blocks:

1. Error Handling: The try block contains the code that might potentially throw an error or raise an exception.

2. Exception Handling: If an error occurs within the try block, the catch block is executed, allowing you to handle the error easoliy.

3. Prevent Program Termination: Using try-catch blocks prevents the sudden termination of the program when an error occurs. It allows you to catch and handle errors, providing an opportunity for easier recovery or displaying meaningful error messges to users.

## Q.9 Explain fetch
> Answer

`fetch` is a built-in JavaScript function used for making HTTP requests and fetching resources from a server. It returns a Promise that resolves to the server's response. With `fetch`, you can easily retrieve data from a URL and handle the response using Promises.

Example: 
```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Handle the response data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that got returnde
    console.error('Error:', error);
  });
```
## Q.10 How do you define an asynchronous function in JavaScript using async/await?
> Answer

To define an asynchronous function using `async/await` in JavaScript:

1. Use the `async` keyword before the function declaration.
2. Inside the function, use the `await` keyword before any asynchronous operation, such as a promise.
3. The `await` keyword pauses the function execution until the promise is resolved, and then it returns the resolved value.

Example:
```javascript
async function myFunction() {
  const result = await someAsyncOperation();
  return result;
}
```

Defining functions as `async` allows you to use `await` to write asynchronous code in a more synchronous-like manner, making it easier to read and maintain.