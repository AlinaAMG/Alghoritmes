//Define a function thirdHighest with a parameter of number
//Define 3 variables which store the first value, second and third, wich are initialized to 0;
// loop through each number in the array
// Check if the number in the array is greater than first, in this case update third to second, second to first  and first to the current number
// Check again if the num is greater than second ,update third to second and the second to the current num
// Check is the num is greater than third, update third to the current number
// return the third number
// call the function and print it to the console with different values;




function thirdHighest(num) {
    let first = 0;
    let second = 0;
    let third = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] > first) {
            third = second;
            second = first;
            first = num[i];
        } else if (num[i] > second) {
            third = second;
            second = num[i];
        } else if (num[i] > third) {
            third = num[i]
        }
    }
    return third;
}
console.log(thirdHighest([3, 7, 9, 12]))


// // Practicing
// function fourthHighest(num) {
//     let first = 0;
//     let second = 0;
//     let third = 0;
//     let fourth = 0;
//     for (let i = 0; i < num.length; i++){
//         if (num[i] > first) {
//             fourth = third;
//             third = second;
//             second = first;
//             first = num[i];

//         } else if (num[i] > second) {
//             fourth = third;
//             third = second;
//             second = num[i];
//         } else if (num[i] > third) {
//             fourth = third;
//             third = num[i];
//         } else if (num[i] > fourth) {
//             fourth = num[i];
//         }
//     }
//     return fourth;
// }
//  console.log(fourthHighest([2,8,9,12,87,34]));
function titleCase(arr) {
    let array = arr.split(" ");
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > 0) {
            array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase();
        }
    }

    return array.join(" ");

}
 
console.log(titleCase("morgen ga ik naar sport"));


function reversedArray(arr) {
    if (arr.length === 0) {
        console.log("The array is empty");
        return;
    }
    let reversed = [];
   
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
        
    }
    return  reversed;

}
 
console.log(reversedArray([2, 6, 8, 9, 10]));