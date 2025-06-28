// your code goes here

function prefixSumArray(arr, n) {
    let prefixSumArr = new Array(n);
    prefixSumArr[0] = arr[0];
    for (let i = 1; i < n; i++) {
        prefixSumArr[i] = arr[i] + prefixSumArr[i - 1];
    }
    return prefixSumArr;
}

// console.log(prefixSumArray([10, 20, 10, 5, 15], 5));

function suffixSumArray(arr, n) {
    let suffixSumArr = new Array(n);
    suffixSumArr[n - 1] = arr[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        suffixSumArr[i] = arr[i] + suffixSumArr[i + 1];
    }
    return suffixSumArr;
}
console.log(suffixSumArray([10, 20, 10, 5, 15], 5));

// TC: O(n), SC: O(n)

