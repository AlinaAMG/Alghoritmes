//  1)Define a function factorial with the parameter n
// 2) if the parameter n is less then 0 then stop
// 3) if the parameter n equal to 0 or 1 it returns 1;
// 4) define a variable wich holds the value of 1;
// 5) loop through the numbers and calculate the factorial
// 6)return the variable that holds the factorial
// 7) call the function and log it to the console with different values;

function factorial(n) {
    if (n < 0) return 'Factorial is not defined for negative numbers';
    if (n === 0 || n === 1) {
      return 1;
    }
  
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
      factorial *= i;
    }
    return factorial;
  }
  console.log(factorial(5));