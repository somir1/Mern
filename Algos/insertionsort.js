const insertionSort = (arr)=>{

    // for(var i = 1; i < arr.length; i++){
    //     while(arr[i]< arr[i-1]){
    //         [arr[i], arr[i-1]]=[arr[i-1], arr[i]]
    //         i--
    //     }
    // }
    // return arr

    // //for loop to iterate through each item in the array
    // for (let i = 1; i < arr.length; i++) {
    //     // second loop to work backwards from where we are currently looking
    //     for (let j = i; j >=0; j--) {
    //         // check if the value on the right is greater than the value on the left
    //         if (arr[j - 1] > arr[j]) {
    //             // swap the values if they are
    //             [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
    //         }
    //     }
    // }
    // // return the array
    // return arr;

     // iterate through the array
     for (let i = 0; i < arr.length; i++) {

        // keep track of item as "temp"
        var temp = arr[i];
        // keep track of what is left to "temp"
        var before = i - 1

        // while left item is larger than right item
        while (temp < arr[before] && before >= 0) {

            // swap values 
            [arr[before], arr[before + 1]] = [arr[before + 1], arr[before]];

            // decrease before until left item is smaller than temp
            before--;

        }
    }
    return arr
}

// const insertionRecur = (arr, pos = 1) => {
//     if (pos > arr.length - 1){
//         return console.log(arr);
//     }
//     else if (arr[pos] < arr[pos - 1]){
//         [arr[pos-1], arr[pos]] = [arr[pos], arr[pos-1]];
//         return insertionRecur(arr, pos - 1)
//     }
//     else {
//         return insertionRecur(arr, pos + 1)
//     }
// }

console.log(insertionSort([4,7,1,2,5,0,9,6])) 
console.log(insertionSort([555,12,16,2,3,1,99998754478,1]))

// console.log(insertionRecur([555,12,16,2,3,1,99998754478,1]))