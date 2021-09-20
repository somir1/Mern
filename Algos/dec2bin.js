//given an integer, convert to the binary
//https://www.rapidtables.com/convert/number/decimal-to-binary.html

const dec2binary= (num)=>{
    // let bin = 0;
    // let rem, i = 1
    // while (num != 0) {
    //     rem = num % 2;
    //     console.log(
    //        `${num}/2, Remainder = ${rem}, Quotient = ${parseInt(num / 2)}`
    //     );
    //     num = parseInt(num / 2);
    //     bin = bin + rem * i;
    //     i = i * 10;
    // }
    // console.log(`Binary: ${bin}`);

    // result="";
    // let val = num;
    // while (val > 0){
    //     val = Math.floor(val / 2);
    //     result = val % 2 + result
    // }
    // return result
        
}


console.log(dec2binary(13));
console.log(dec2binary(775));
console.log(dec2binary(85));

const decimalToBinary = decimal => {
    // create blank output to store binary
    let output = '';
    // quotient = Math.floor(decimal / 2), run a while loop while the quotient is greater than 0, and once when it is equal to 0 (there is a break once it is 0)
    while (Math.floor(decimal / 2) >= 0){
        // remainder = decimal - 2 * quotient;
        if (decimal - 2 * Math.floor(decimal / 2) != 0){
            // if the remainder is 1, add a 1 to the front of the binary output
            output = "1" + output;
        }
        else{
            // else the output is 0, put a 0 at the beginning of the output
            output = "0" + output;
        }
        // break if the quotient is 0 (we are done and don't need to loop any more)
        if (Math.floor(decimal / 2) == 0){break};
        // update the value of decimal that we are looking at in the loop
        decimal = Math.floor(decimal / 2);
    }
    // convert the output to an integer just in case
    return parseInt(output);
}

console.log(decimalToBinary(75));
console.log(decimalToBinary(174));
console.log(decimalToBinary(2));
console.log(decimalToBinary(1));
console.log(decimalToBinary(0));