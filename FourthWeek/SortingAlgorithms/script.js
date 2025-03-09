/*
Sorting Algorithms
Bubble Sort 

1.Define a function wich takes an array as parameter;
2.Define a variable wich stores the length of the array;
3.loop through the array from the last index, decress it by 1 each time;
4.loop through the array from index 1 up to the last index;
5 check if the number by that index is greater than the next number than store the value in a variable and than switch the variables;
6.return the array;
7.call the function and test it with different values; 

*/

// function bubbleSort(arr) {
//     let n = arr.length;
//   for (let i = n - 1; i >= 0; i--) {
//     for (let j = 1; j <= i; j++) {
//       if (arr[j - 1] > arr[j]) {
//         let temp = arr[j - 1];
//         arr[j - 1] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }
// console.log(bubbleSort([12, 9, 5, 3, 1]));

 /*
Selection Sort 
how does it work: This is very simple. Go through the array, find the index of the lowest element swap the lowest element with the first element. Hence first element is the lowest element in the array.
1.Define a function the takes an array as parameter
2.Define a variable to hold the index of the min number in the array
3.Define a variable to swap the values of array s elements
4. loop through the array and set the first element of the array  to be the minimum number
5.Loop again(inner loop) through the  remaining part of the array and update the minimum, if a smaller element is found
6.swap the current element with the smallest element found;
7.repeat the process for the rest of the array until it is sorted
8.return the sorted array;
9.call the function and test it with different values;
*/

function selectionSort(arr) {
  let minimum;//variable to store the index of the smallest element
  let temp; //temporary variable for swapping the elements;
  for (let i = 0; i < arr.length; i++) {
    minimum = i;//the first element of the index is the smallest

    for (let j = i + 1; j < arr.length; j++){
      if (arr[j] < arr[minimum]) {
        minimum = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minimum];
    arr[minimum] = temp;
  }
  return arr;
}
console.log(selectionSort([29, 72, 98, 13, 87, 66, 52, 51, 36]));
/*



Step 2 (i = 0):
 Assume arr[0] = 29 is the smallest → minimum = 0.

Inner loop (j = 1 to j = 8):

Compare 29 with 72,98, 29, 87, 66, 52, 51, 36.
13 is the smallest → minimum = 3 (index of 29).
Swap arr[0] and arr[3].
 [13,72,98,29,87,66,52,51,36]

 */
