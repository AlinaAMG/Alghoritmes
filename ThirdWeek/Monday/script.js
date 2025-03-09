/*
The input is a single number: the number at which the game starts.Write a program that plays the 3s game, and outputs a valid sequence of steps you need to take to get to 1. Each step should be output as the number you start at, followed by either - 1 or 1(if you are adding / subtracting 1 before dividing), or 0(if you are just dividing). The last line should simply be 1.

1.Define a function with a parametr of number;
2.checf if the number is not 1, if the number is divisible by 3, define a new variable and store the value of 0 ,else if the remainder is 1 the value of the new variable is -1 , else is +1;
3.calculate the number ;
4.print the final step to the console
5.call the function and test it with different values

*/

function gameOfThrees(n) {
    while (n !== 1) {
        let newNr = n % 3 === 0 ? 0 : (n % 3 === 1 ? -1 : 1);
        console.log(`${n} ${newNr}`);
        n = ( n + newNr) /3
    }
    console.log("1");
}
gameOfThrees(200);