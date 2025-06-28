/*
Given an array num containing n + 1 integers, where each integer is between 1 and n (inclusive), 
hence at least one duplicate number must exist. Assume that there is only one duplicate number which is repeated only once, 
find the duplicate one.
*/

function findDuplicate(arr, n){
    let xor = 0;
    for(let i=0; i<=n; i++){
        xor = xor^arr[i]
    };

    for(let i=1; i<=n; i++){
        xor = xor^i;
    }

    return xor;
}

console.log(findDuplicate([1,2,3,3,4,5,6], 6));
