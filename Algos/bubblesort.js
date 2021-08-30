function bubbleSort(arr) {
    // starts off at the end of the array and decrments
    for (var i = arr.length-1; i > 0; i--) {
        //this loop starts at the begining of the array and increments
        for (var x = 0; x < arr.length; x++) {
            //for each interation as the loop increments it will check if the index is greater then the on next to it 
            if (arr[x] > arr[x + 1]) {
                //if that current value is greater it will store it in the temp variable
                var temp = arr[x]
                //current value of the index to the next value
                arr[x] = arr[x + 1]
                //store that value in to the temp
                arr[x + 1] = temp

                
            }
        }
    }
    return arr
}


console.log(bubbleSort([1998, 122, 1, 252, 2, 3, 4, 55]));

console.log(bubbleSort([23, 12, 18, 22, 21, 1, 13, 25]));

console.log(bubbleSort([65, 123, 198, 99, 150, 1, 689, 0]));