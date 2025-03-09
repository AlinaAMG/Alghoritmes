/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
1.define a function with a parameter of number;
2.define 3 variable one for the previous number wich is set to 1, other for the current nr wich is also set to 1 and one  variable sum wich is set to 2;
3.loop through the numbers beginning from the sum of the prev nr and current nr up to the number.
4.check is the nextnumber is an odd number, if yes, then add it to the sum;
5.switch the values opf the previous nr and current nr
6.return the sum 
7.call the function and  test it with different values;


*/
function sumAllOddFibonacci(n) {
    let prevNr = 1;
    let currentNr = 1;
    let sum = 2;

    for (let nextNr = prevNr + currentNr; nextNr <= n; nextNr = prevNr + currentNr) {
        if (nextNr % 2 !== 0) {
            sum += nextNr;
        }
        prevNr = currentNr;
        currentNr = nextNr;
    }
    return sum;
}
console.log(sumAllOddFibonacci(12));