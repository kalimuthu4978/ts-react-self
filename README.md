# React
- its a framework for building user interfaces
- it is a Javascript library for building user interfaces
- it is used for building single page applications
- it is used for building mobile applications


## Features of React
- IT uses a virtual DOM to improve performance
Virtual DOM is a lightweight copy of the actual DOM. It allows React to update only the parts of the DOM that have changed, rather than re-rendering the entire DOM.
- It uses a component-based architecture
Components are reusable pieces of code that can be used to build complex user interfaces. They can be nested, managed, and handled independently.
- It uses JSX syntax
    JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It makes it easier to create and visualize the structure of your components.
    JSX is optional, you can also use plain JavaScript to create components and manage the DOM. It is JavaScript HTML
    - JavaScript XML - Javascript + HTML
    - Typescript XML - Typescript + HTML
- It has a unidirectional data flow
In React, data flows in one direction, from parent components to child components. This makes it easier to understand how data is being passed and helps to prevent bugs.


## PRops Drilling
- It is a technique for passing data from a parent component to a child component through props.
- It can be a problem when you have a large component tree and you need to pass data through multiple levels of components. This can lead to a lot of boilerplate code and make it difficult to maintain the codebase.
- To solve this problem, you can use state management libraries like Redux or Context API to manage the state of your application and avoid prop drilling. These libraries allow you to store the state in a

-APP
    - Parent Component
        - Child Component 1
            - Child Component 2
                - Child Component 3

### useState Hook
- Reacr Component can be either a class component or a functional component.

### Spread and rest operator
- The spread operator is used to expand an array or object into individual elements. It is denoted by three dots (...). For example, if you have an array of numbers, you can use
- the ... is given at the start of the array or object to expand it, and at the end of the array or object to collect the remaining elements.


- The Rest operator is used to collect the remaining elements of an array or object into a new array or object. It is also denoted by three dots (...). For example, if you have an array of numbers and you want to collect all the numbers except the first one, you can use the rest operator.