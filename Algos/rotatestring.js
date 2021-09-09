// rotating a string to see if it is a rotation of another
    // create a new string rotated by number chars
    // if number > string.length, modulo string.length
// tims solution

    const rotateString = (string, number) => {
        // blank string for output
        let output = "";
        // rotating more than the number of letters in teh string doesn't matter, so use modulo to get the remainder
        let rotations = number%string.length;
        // loop to grab letters from teh back of the word and move to the front based on teh number of rotations
        for (let i = 1; i <= rotations; i++) {
            output = string[string.length-i] + output;
        }
        // loop to add the remainder of the word
        for (let i = 0; i < string.length - rotations; i++) {
            output += string[i];
        }
        // return the output string
        return output;
        }
        
        console.log(rotateString("basketball", 3)); // allbasketb
        console.log(rotateString("Hello", 2)); // loHel
        console.log(rotateString("okay", 7)); // kayo
        console.log(rotateString("crap", 2));

        const rotateStr = (str, number) => {
    newStr = ""

    if(number > str.length){
        number -= str.length;
        // console.log('number is ', number)
    }

    // split the string in 2 parts
    let left = str.substr(0, str.length-number);
    let right = str.substr(str.length-number);
    // console.log(left);
    // console.log(right)
    
    // add the two parts together in backwards order
    newStr = right+left;
    console.log(newStr);
    return newStr;
}

const rotateStr1 = (str, number) => {
    newStr = ""

    if(number > str.length){
        number -= str.length;
        // console.log('number is ', number)
    }

    // split the string in 2 parts
    let left = str.substr(0, str.length-number);
    let right = str.substr(str.length-number);
    // console.log(left);
    // console.log(right)
    
    // add the two parts together in backwards order
    newStr = right+left;
    console.log(newStr);
    return newStr;
}

console.log(rotateStr1("basketball", 3)); // allbasketb
console.log(rotateStr1("hello", 2)); // lohel
console.log(rotateStr1("okay", 7)); // kayo

// console.log(rotateStr("basketball", 3)); // allbasketb
// console.log(rotateStr("hello", 2)); // lohel
// console.log(rotateStr("okay", 7)); // kayo