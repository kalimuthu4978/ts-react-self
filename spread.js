// ... spread operator or rest operator
/* 
let numbers = [3,4,5,6]
console.log(numbers) // normal array variable
console.log (...numbers) // SPREAD OPERATOR takes out the values from array and prints them without array format
*/


/* // Expample 2: Joining of 2 or more arrays

let num1 = [1,2,3]
let num2 = [4,5,6]

console.log(num1, num2) // prints 2 arrays as seperate
console.log(...num1, ...num2) // prints 2 arrys as in spread operator example

console.log([...num1, ...num2]) // this joins them as single array */


// ... rest operator
/* // For example, when we create add fucntion declaing variables, the fucntion only takes up 2 variables, even when we declare more than 2, all other varilabes are ignored

function add (x , y) {
    console.log(x+y)
}

add (5,6) // it adds the declared 2 varilabes
add (5,6,7) // here also only first 2 varilabes are added, the next provided variables are ignored */

// so inorder to use all the provided variables in a fucntion we use the rest operator

function add (x ,y , ...rest){
    console.log(x+y)
    console.log(rest)
}

add (5,6) // the first 2 variables are considered for adding the function
add (5,6,7) // in this 3rd variblae is not used for addition since it is the add fucntion is for first 2 vaeialbes, but we could see the funciton takes up the extra varilabes as rest and stores inside a array

