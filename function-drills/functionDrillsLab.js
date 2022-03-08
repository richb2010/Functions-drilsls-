/// Problem 1 ?///
function helloWorld(){
    console.log('Hello World!')
}
helloWorld()
/// Prblem 2 ////

/*
    Write an arrow function called 'jsNinja' that returns the string: 'I am a JavaScript ninja!'
*/

//CODE HERE

const jsNinja = () => 'I am JavaScript Ninja'

////////////////// PROBLEM 3 ////////////////////
/*
  Create a function called printName which takes in a person's name and console logs it.
  Ex. If 'Cameron' were passed in as the argument, Cameron would be console logged.
  Call the function, passing in an argument.
*/

//CODE HERE
function printName(name){
    console.log (name)
}
printName('Cameron')

////////////////// PROBLEM 4 ////////////////////
/*
  Create a function called greeting that
  accepts name as its only parameter.
  Convert the name param into a string.
  greeting should log the string 'Hello, '
  plus the value of the name parameter.
  Ex. If Jake were passed in as the argument, the function would log 'Hello, Jake'
  Make sure to call your function and pass in an argument.
*/

//CODE HERE
function greeting (name){
    names = String(name)
    console.log(`Hello, ${name}`)
}
greeting('Sam')

////////////////// PROBLEM 5 ////////////////////

/*
    Write an arrow function called 'compareNums' that takes in 2 parameters, 
    which will be numbers. 
    The function should return the bigger number. 
    If the numbers are the same, just return the number.

    Brownie points if you use a ternary statement (only spend significant time on this if you have wiggle room)
*/

//CODE HERE

const compareNums = (num1, num2) => {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}
//// Brownie Points 

const compareNums =(num1, num2) => num1 >num2 ? num1 : num2

////////////////// PROBLEM 6 ////////////////////
/*
  Create a function called add that takes in two parameters 
  Inside, convert the arguments to be numbers (just in case strings get sent in)
  The add function should RETURN the two parameters added together.
  Create a variable outside the function called 'sum' and set it equal to add invoked (called), passing in 2 arguments.
*/

//CODE HERE
function add(num, num2) {
    num = +num
    num2 = +num2 
    return num + num2 
}
let sum = add(12, 24)


////////////////// PROBLEM 7 ////////////////////

/*
  Which syntax was used to create the function below?
  Uncomment the answer underneath.
*/

const exclaim = function(str) {
    return str.toUpperCase() + '!!!'
  }
  
  // arrow 
  // declaration
  // expression <----- answer

  ////////////////// PROBLEM 9 ////////////////////

/*
  Which syntax was used to create the function below?
  Uncomment the answer underneath.
*/

function exclaimFour(str) {
    return str.toUpperCase(arrow) + '!!!'
  }
  
  // arrow <----- answer 
  // declaration
  // expression
  
  const exclaimThree = str => `${str.toUpperCase(arrow)}!!!`

  ////////////////// PROBLEM 10 ////////////////////
/*
  Write a function called nameCheck that takes in a name parameter.
  nameCheck should check if the name equals 'Steven'. If it does, return 'What is up Steven?'
  If the name parameter is equal to Bryan, return 'Hey Bryan!'
  If the name parameter is anything else, return 'Cool name, NAMEPARAM' (with NAMEPARAM being the value of the name parameter being passed in).
  Create a variable called 'nameGreeting' and set it equal to your function invoked (called) passing in an argument.
*/

//CODE HERE

function nameCheck(name){
    if (name === "Steve"){
        return "What is up Steven?"
      } else if (name === "Bryan") {
        return "Hey Bryan!"
      } else {
        return `Cool name, ${name}`
      }
    }
    
    let nameGreeting = nameCheck('Steven')
}

