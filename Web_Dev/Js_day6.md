## Q.1 What’s Constructor And Its Purpose?
> Answer

A constructor is a special method in a class that is used to initialize objects of that class. It is called automatically when creating a new instance of the class using the `new` keyword.

The purpose of a constructor is to set the initial state and properties of an object. It allows us to define and assign values to the properties of an object when it is created, providing a way to customize and initialize the object's state.

## Q.2 Explain This Keyword and Its Purpose?
> Answer

The `this` keyword in JavaScript is a reference to the current execution context, which is typically the object that owns or calls the currently executing code. Its purpose is to access and manipulate properties and methods within that context.

The `this` keyword allows us to:

1. Access Object Properties: Use `this` to refer to properties and methods within the current object. It enables us to access and modify the object's state from within its own methods.

2. Define Methods: When creating objects using constructor functions or class syntax, `this` is used to define and reference object methods.

3. Determine Context: The value of `this` can change depending on how a function is invoked. It can refer to the global object (`window` in browsers) or be explicitly bound to a specific object using functions like `bind()`, `call()`, or `apply()`.

4. Create New Instances: In constructor functions, `this` is used to refer to the new instance being created. It allows us to assign values to its properties and set up its initial state.

## Q.3 What’s Call Apply Bind Method & Difference Between them
>Answer

`call`, `apply`, and `bind` are methods in JavaScript used to manipulate the `this` value and invoke functions with a specific context.

1. `call`:
   - The `call` method is used to invoke a function immediately.
   - It sets the `this` value explicitly and accepts individual arguments.
   - Example: `func.call(context, arg1, arg2)`

2. `apply`:
   - The `apply` method is similar to `call` but accepts arguments as an array or array-like object.
   - It sets the `this` value explicitly.
   - Example: `func.apply(context, [arg1, arg2])`

3. `bind`:
   - The `bind` method returns a new function with a bound `this` value and partially applied arguments.
   - It does not immediately invoke the function but allows us to call it later.
   - Example: `const boundFunc = func.bind(context)`

Difference:
- `call` and `apply` invoke the function immediately, while `bind` returns a new function with the bound `this` value.
- `call` accepts arguments individually, `apply` accepts arguments as an array or array-like object, and `bind` allows partial application of arguments.
- `call` and `apply` set the `this` value explicitly, while `bind` creates a new function with a fixed `this` value.

## Q.4 Explain OOPS ?
> Answer

OOPS stands for Object-Oriented Programming System. It is a programming paradigm that focuses on organizing code into objects that contain data (properties) and behavior (methods). The core principles of OOPS include:

1. Encapsulation: Encapsulation involves bundling data and related methods into objects. It allows data to be accessed and modified only through defined interfaces (methods), promoting data privacy and code organization.

2. Inheritance: Inheritance allows objects to inherit properties and methods from other objects, creating a hierarchy of classes. It promotes code reuse and enables the creation of specialized classes based on existing ones.

3. Polymorphism: Polymorphism allows objects of different types to be treated as objects of a common type. It enables the use of a single interface to represent multiple forms or behaviors.

4. Abstraction: Abstraction focuses on representing essential features of objects while hiding unnecessary implementation details. It simplifies complex systems by breaking them down into manageable and understandable units.

## Q.5 Whats Abstraction and Its Purpose?
> Answer

Abstraction, in the context of object-oriented programming, is the process of simplifying complex systems by representing essential features while hiding unnecessary implementation details. 

The purpose of abstraction is to provide a clear and simplified interface for interacting with objects, allowing users to focus on the essential characteristics and behaviors rather than the underlying complexity. It helps in managing complexity, improving code maintainability, and promoting code reusability by creating modular and understandable units.

## Q.6 Whats Polymorphism and Purpose of it?
> Answer

Polymorphism, in object-oriented programming, refers to the ability of objects of different types to be treated as objects of a common type. 

The purpose of polymorphism is to enable code to work with objects of various classes or types through a unified interface. It allows for code reusability and flexibility, as a single interface can be used to interact with multiple related objects. Polymorphism allows for interchangeable usage of objects, providing a way to write more generalized and flexible code.

## Q.7  Whats Inheritance and Purpose of it?
> Answer 

Inheritance, in object-oriented programming, is a mechanism that allows objects to acquire properties and behaviors from a parent or base class. 

The purpose of inheritance is to promote code reuse and create a hierarchy of classes. It enables the creation of specialized classes (derived classes or subclasses) based on existing classes (base classes or superclasses). Derived classes inherit the properties and methods of their parent classes, allowing them to extend or modify the inherited functionality.

By utilizing inheritance, developers can establish relationships between classes, reduce code duplication, and organize code in a hierarchical and structured manner. Inheritance enhances code maintainability, as changes made to the base class propagate to the derived classes, promoting modularity and efficient development.

## Q.8 Whats Encapsulation and Purpose of it ?
> Answer

Encapsulation, in object-oriented programming, is the process of bundling data (properties) and related behavior (methods) into objects, and controlling access to the internal state of objects.

The purpose of encapsulation is to achieve data privacy and code organization. It allows for the hiding of internal implementation details and exposing only necessary interfaces (methods) to interact with the object. Encapsulation ensures that the internal state of an object is protected from direct access and modification by external code, promoting data integrity and preventing unintended manipulation.

## Q.9 Explain Class in JavaScript?
> Answer

In JavaScript, a class is a blueprint for creating objects with shared properties and behaviors. It is declared using the `class` keyword and can have a constructor for initializing object properties. Methods can be defined within the class to define the object's behavior. Inheritance is supported using the `extends` keyword to create a hierarchy of classes. Classes provide a structured and reusable approach to object-oriented programming in JavaScript.

## Q.10 What’s Super Keyword & What it does?
> Answer

The `super` keyword in JavaScript is used to call and access the parent class's constructor and methods from within a subclass. It is used in the context of inheritance to reference and invoke the parent class's functionality.

The main purposes of the `super` keyword are:

1. Accessing the Parent Class Constructor:
   - Inside the constructor of a subclass, `super()` is used to call the constructor of the parent class. It allows the subclass to inherit and initialize properties defined in the parent class.
   - Example: `super(argument1, argument2)`

2. Invoking Parent Class Methods:
   - The `super` keyword can be used to call methods of the parent class from within the subclass. This allows the subclass to extend or override the behavior of the parent class's methods while still having access to the parent's implementation.
   - Example: `super.methodName(arguments)`