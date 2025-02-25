// define a function with a parameter of string
// converts all characters of the string to lowerCase to make the palindrom insensitive and put them in a new variable
// define a empty string to store the reversed version of the string
// loop through the string from the last index back to  index 0 to reverse the string
//  compare the reversed string with the original string;
// if they are equal return true , otherwise false;


function palindromChecker(str) {
    const checkString =str.split(" ").join("").toLowerCase();
    let reversedString = "";
    for (let i = checkString.length - 1; i >= 0; i--){
        reversedString += checkString[i];
    }
    return reversedString === checkString;
}


console.log(palindromChecker("hello"));
console.log(palindromChecker("racecar"));

function palindromChecker (word) { 
    const checkString = word.split(" ").join("").toLowerCase();
    for (let i = 0; i < checkString.length/2; i++) {
        if (checkString[i] !== checkString[checkString.length - i - 1]){
            return false;
            
        }
    }
    return true;
}

console.log(palindromChecker("racecar"));
console.log(palindromChecker("alina"));


const words = ["Beachball", "Rodeo", "Angel",
    "Aardvark", "Xylophone", "November", "Chocolate",
    "Papaya", "Uniform", "Joker", "Clover", "Bali"];
    
const longWords = words.filter(w => w.length > 6).join(", ");
console.log(longWords);