/*
Perform a search and replace the sentence using the arguments provided and return the new sentence.

The first argument is the sentence to perform the search and replace on.
The second argument is the word that you will be replacing (before).
The third argument is what you will be replacing the second argument with (after).

1.define a functions that takes 3 string parameters string, before, after
2. convert the string into  an array using array methods;
3 loop through the array and check if the current word matches the parameter before 
4.if the first letter of the current tword is in the uppercase, modify  parameter after to be also in uppercase, otherwise the current word will be replaced with the before word
5 converts the array back into a string and  return  the string
6 call the function and test it  with differents values;

*/
function searchandReplace(str, before, after) {
    const array = str.trim().split(" ");

    for (let i = 0; i < array.length; i++) {
        
        if (array[i].toLowerCase() === before.toLowerCase()) {
            // check if the first letter is uppercase
            if (array[i][0] === array[i][0].toUpperCase()) {
                array[i] = after[0].toUpperCase() + after.slice(1);
            } else {
                array[i] = after;
            }

        }
    }
    return array.join(" ");

}
console.log(searchandReplace("A quick brown fox Jumped over the lazy dog", "jumped", "leaped"));