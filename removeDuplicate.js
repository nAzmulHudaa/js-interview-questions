function removeDuplicate(arr){
    var exists = {},
        outArr = [],
        elements;

    for(var i=0; i<arr.length; i++){
        elements = arr[i];
        if(!exists[elements]){
            outArr.push(elm);
            exists[elm] = true;
        }
    }
    return  outArr;
 
}
console.log(removeDuplicate([1,3,3,3,1,5,6,7,8,1]))
