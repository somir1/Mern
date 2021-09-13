const intersectArr = (arr1,arr2)=>{
    var results = []
    let i = 0;
    let j = 0;

    // for(var i = 0; i < arr1.length; i++){
    //     for(var j = 0; j < arr2.length; j++){
    //         if(arr1[i] == arr2[j]){
    //             results.push(arr1[i])
    //         }
    //         else if (arr1[i] != arr2[i]){
    //             res.push(arr2[i])
    //         }
    //     }
    // }

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] == arr2[j]){
            results.push(arr1[i])
            i++
            j++
        //first array have the smaller value
        }else if(arr1[i] < arr2[j]){
            i++
        }else{
            j++
        }
    }

    return results;
}

console.log(intersectArr([1,2,3,3,4,4,6], [2,3,4,4,6])) //[2,3,4,4,6]
console.log(intersectArr([1,1,3,3,3,4,9], [1,2,3,6,8,9,9])) //[1,3,9]