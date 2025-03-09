/*
Write a function that, given a grid containing the numbers 1 - 9, determines whether it's a magic square. Use whatever format you want for the grid, such as a 2-dimensional array, or a 1-dimensional array of length 9, or a function that takes 9 arguments. You do not need to parse the grid from the program's input, but you can if you want to.You don't need to check that each of the 9 numbers appears in the grid: assume this to be true.

1.Define a function with a parameter of array
2.define a variable  sum and initialize it to 15;
3.define 2 variables wich will hold the sum of the diagonals;
4.check if the diagonals are not equal to the sum if true return false; 
5.checf if the sum of the rows is 15
5.loop though the array from index 0 untill index 6 ;
6 check if the sum of the rows is not 15 than true,  return false;
7.checf if the sum on the columns is 15
8.loop through the array from index 0 untill index 2 and check if the sum of the columns is not 15, true,return false;
9.otherwise return true;
call the function and test it with different values;
*/

function magicSquare(arr) {
  const sum = 15;

  //check diagonals sum
  let diagonal1 = arr[0] + arr[4] + arr[8];
  let diagonal2 = arr[2] + arr[4] + arr[6];
  if (diagonal1 !== sum || diagonal2 !== sum) {
      console.log(false);
      return;
  }

// check rows sum
  for (let i = 0; i < 9; i += 3) {
    if (arr[i] + arr[i + 1] + arr[i + 2] !== sum) {
      console.log(false);
      return;
    }
  }

    // check columns sum
  for (let i = 0; i < 3; i++) {
    if (arr[i] + arr[i + 3] + arr[i + 6] !== sum) {
      console.log(false);
      return;
    }
  }

  console.log(true);
}

magicSquare([8, 1, 6,
             7, 5, 3,
             4, 9, 2]);//false
