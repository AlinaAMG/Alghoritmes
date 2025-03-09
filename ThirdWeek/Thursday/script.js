/*

Sum all the prime numbers up to and including the provided number.
1.Define a function what takes a number as parameter;
2.Create a variable sum and initialize it to 0;
3.loop through the numbers beginning from the number and decrease it by 1;
4.Create a boolean variable en set this equal to true;;
5.loop again through the numbers from 2 up to square root of the current number and check if the number is divisible  by one on this numbers set the boolean variable to false and break the loop;
6.check if the boolean variable is true than add the number to the sum;
7.return the sum
8.call the function

*/

function sumAllPrimes(n) {
  let sum = 0;
  for (let i = n; i >= 2; i--) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime === true) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumAllPrimes(10));
