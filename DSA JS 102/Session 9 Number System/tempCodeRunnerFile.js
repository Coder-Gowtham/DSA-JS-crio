function findDuplicate(arr, n){
    let xor = 0;
    for(let i=0; i<n; i++){
        xor = xor^arr[i]
    };

    for(let i=1; i<n; i++){
        xor = xor^i;
    }

    return xor;
}

console.log(findDuplicate([1,2,3,3,4,6], 6));