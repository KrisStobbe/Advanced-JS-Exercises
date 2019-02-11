//Solve these problems:

//#1 Create a one line function that adds adds two parameters
const add = (a,b) => a+b;

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3) //This will return 3, as y = 10 and x = 3;

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1) //This will return 31; 30 is passed to A, 1 is passed to B, A+B


//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12) //This will equal 17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const addd1 = (num) => num + 1;
const addd5 = (num) => num + 5;
compose(addd1, add5)(10)
// This will equal 16


//What are the two elements of a pure function?
/*
1) First condition: A function can be pure if and only if the only thing it uses to calculate its output are the arguments you pass it, 
and local variables declared inside of the function itself.

2) A function can be pure if and only if it only if it does not change state outside of its own scope.

