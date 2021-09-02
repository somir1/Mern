//createe a function that accepts 2 sorted arrays, and combines them into 1 sorted array and returns that sorted array

const combine = (arr1, arr2)=>{
    //your code here
    let result = []
    
    // let i = 0
    // let j = 0
    // while (i < arr1.length && j < arr2.length) {
    //     if (arr1[i] < arr2[j]) {
    //         result.push(arr1[i])
    //         i++
    //     } else {
    //         result.push(arr2[j])
    //         j++
    //     }
    // }
    // while (i < arr1.length) {
    //     result.push(arr1[i])
    //     i++
    // }
    // while (j < arr2.length) {
    //     result.push(arr2[j])
    //     j++
    // }

    while (arr1.length > 0 || arr2.length > 0) {
        if (arr1[0] == arr2[0]) {
            result.push(arr1[0])
            result.push(arr2[0])
            arr1.shift()
            arr2.shift()
        } else if (arr1[0] > arr2[0]) {
            result.push(arr2[0])
            arr2.shift()
        } else if(arr1[0]<arr2[0]) {
            result.push(arr1[0])
            arr1.shift()
        } else{
            if(arr1[0] != undefined){
                result.push(arr1[0])
                arr1.shift()
            }
            if(arr2[0] != undefined){
                result.push(arr2[0])
            arr2.shift()
            }
        }
    }

    return result;
}




console.log(combine([3,6,9,10,11,15,18,19], [2,3,5,14])) //[2,3,3,5, 6, 9, 10, 11,14, 15, 18, 19]
console.log(combine([1,3,5,7,9,11,13], [2,4,6,8,10]))