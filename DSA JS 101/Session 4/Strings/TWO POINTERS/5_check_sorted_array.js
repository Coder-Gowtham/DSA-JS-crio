const { log } = require("node:console");

function isSorted(arr) {
    let l = 0;
    let r = 1;
    let n = arr.length;

    while(r<n){
        if(arr[l]> arr[r]) return false;
        l++;
        r++;
    }
    return true;
}

console.log(isSorted([1,2,3,4,5,6]));
console.log(isSorted([1,2,3,4,7,6]));

