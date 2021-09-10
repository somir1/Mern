const decodeString = string => {
    // create blank output, set the letter to check equal to the first letter, and number is blank string
    let output = "";
    let letter = string[0];
    let number = "";
    // array of numbers as strings to check what in the input is a number
    let checkNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    // add 1 to the string.length to capture the last encoded letter/number combo
    for (let i = 1; i < string.length+1; i++) {
        // capture the number after the letter, take each input as a string to account for numbers with multiple digits
        if (checkNum.includes(string[i])) {
            number += string[i];
        }
        // if it is not a number, add the current letter the correct number of times to the output
        else {
            // change the string number to an integer
            let repeats = parseInt(number);
            // for loop to add the letter to the output the correct number of times
            for (let j = 0; j < repeats; j++) {
                output += letter;
            }
            // reset the letter and count
            letter = string[i];
            number = "";
        }
    }
    return output;
}

console.log(decodeString("a6b3g2z12")) //"aaaaaabbbggzzzzzzzzzzzz"
console.log(decodeString("l8n2p2"))
console.log(decodeString("nn9s6d2b3b6j8"))

// encode takes string and puts it into char and number of times it appears

const encodeString = string => {
    // create blank output, set letter equal to teh first letter, letter count starts at 1
    let output = "";
    let letter = string[0];
    let letterCount = 1;
    // add 1 to the string length to capture the last encode letter/number combo
    for (let i = 1; i < string.length +1; i++) {
        // if the letter we are checking is the same, add to the count
        if (string[i] == letter) {
            letterCount++
        }
        // if not, send the letter and count to the output and reset the letter and count
        else {
            output += letter + letterCount;
            letter = string[i];
            letterCount = 1;
        }
    }
    return output;
}

console.log(encodeString("aaaaaabbbggzzzzzzzzzzzz")) //"a6b3g2z12"
console.log(encodeString("bbkkkkkkkkkkkrrqllll"))
console.log(encodeString("abcdefgggghijkkkkkkkkkkkkkkkkkkkkkklmnop"))
console.log(encodeString("sssssssnmbhttttttjffdsdfsdg"))

//emile
let l = "a6b3g2"


const decode1 = (str) => {
    var result = ""
    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i])) {
            var temp = str[i]
        }
        else {
            for (let j = 0; j < str[i]; j++) {
                result += temp
            }
        }
    }
    return result;
}
console.log(decode1(l))