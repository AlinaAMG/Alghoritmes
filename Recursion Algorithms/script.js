// MONDAY

// Solve the Factorialize algorithm. First, find an iterative solution and then a recursive solution.
// rFactorial vs iFactorial

// DEfine a function with a parameter of number
// check if the number is less than 0 then stop the execution
// check if the number = to 0 or 1 then return 1;
// define a variable and set it to 1;
// loop through the numbers beginning from index 2 up to the the index of number
// calculate the factorial of the given number
// return the result
// call the function and test it with different values;
function iFactorial(n) {
  if (n < 0) {
    console.log('The number have to be a positive number');
    return;
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let factorial = 1;
  for (let i = 2; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}
console.log(iFactorial(10));



// With recursion Method
// the same principe only that is shorter and cleaner and use the recusive method(this is a method that  call itself to solve a problem) to return the result 
function rFactorial(n) {
  if (n < 0) {
    console.log('The number have to be a positive number');
    return;
  }
  if (n === 0 || n === 1) {
    return 1;
  }
    return n * rFactorial(n - 1);
    
}
console.log(rFactorial(10));
 
// TUESDAY

/*
Bunny Ears
We have a number of bunnies and each bunny has two big floppy ears. We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

*/
function bunnyEars(bunnies) {
    if (bunnies === 0) {//no bunnies left
        return 0;
    }
    return 2 + bunnyEars(bunnies - 1);//recursive method
}

console.log(bunnyEars(1));

// WEDNESDAY

/*
First solve this algorithm iteratively, then recursively.

Given base and n that are both 1 or more, compute recursively (no loops) the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

*/
// Iterative approach
// function powerN(base, exponent) {
//   let result = 1;
//   for (let i = 0; i < exponent; i++) {
//     result *= base;
//   }
//   return result;
// }

// console.log(powerN(3, 1));

// Recursive approach
function powerN(base, exponent) {
  if (exponent === 0) return 1;
  else 
  return base * powerN(base, exponent - 1);
}
console.log(powerN(3, 3));
 
/*
THURSDAY

iFib vs rFib

The Fibonacci sequence is a famous bit of mathematics, and it happens to have a recursive definition. The first two values in the sequence are 1 and 1 (essentially 2 base cases). Each subsequent value is the sum of the previous two values, so the whole sequence is 1, 1, 2, 3, 5, 8, 13, 21 and so on. Define a recursive fibonacci(n) method that returns the nth Fibonacci number, with n=1 representing the start of the sequence.

*/

function fibonacci(n) {
  if (n <= 2) {
    return 1;
  }

  let array = [1, 1];
  let previousNr = 1;
  let currentNr = 1;
  
  for (let i = 2; i <= n; i++) {
    let nextNr = previousNr + currentNr;
    previousNr = currentNr;
    currentNr = nextNr;
    array.push(currentNr);
  }
  return currentNr;
}
console.log(fibonacci(3));

function fibonacci(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1); 
    
  }
}
console.log(fibonacci(7));//returns 13  not 21 how it is mentioned on the platform

/*
FRIDAY

We have a triangle made of blocks. The topmost row has 1 block, the next row down has 2 blocks, the next row has 3 blocks, and so on. Compute recursively (no loops or multiplication) the total number of blocks in such a triangle with the given number of rows.

*/
const rTriangle = function (rows) {
  if (rows === 0) {
    return 0;
  } else {
    return rows + rTriangle(rows - 1);
  }
}
console.log(rTriangle(2));