//tims algo
const dedupeNoIncludes = string => {

    // new string for output sinmce strings are immutable
    let output = "";

    // for loop to loop through the string, starting at the end
    for (let i = string.length - 1; i >= 0; i--) {
        let inUse = false;
        // check if the character is not in use
        // for loop to iterate through the output
        for (let j = 0; j < output.length; j++) {
            
            // if the character is found, flag inUse as true
            if (output[j] == string[i]) {
                inUse = true;
            }
        }
        // if the character was not found in the output, add it to the front of the output
        if (inUse == false){
            output = string[i] + output;
        }
    }
    return output;
}

console.log(dedupeNoIncludes("Snaps Crackles Pops!")); // "SnCrackle Pops!"
console.log(dedupeNoIncludes("poop")); 