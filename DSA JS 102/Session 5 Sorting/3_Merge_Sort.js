/*
Problem Description
Given an array of n integers. Your task is to sort the array in ascending order using merge sort technique.
Return the sorted array.
Note :- You need to sort array only using merge sort.

Input format
First line contains a single integer n - the number of elements present in the array.
Second line contains n space separated integers.

Output format
Print n space separated integers in sorted order or simply return a sorted array.

Sample Input 1
5
12 8 3 0 7
Sample Output 1
0 3 7 8 12

Explanation
Applying Merge Sort to the array [12, 8, 3, 0, 7] involves dividing it into two halves: [12, 8] and [3, 0, 7]. Recursively sorting each half results in [8, 12] and [0, 3, 7].
The final step merges these sorted halves, creating the sorted array [0, 3, 7, 8, 12].

Constraints
1 <= n <= 10^5
0 <= a[i] <= 10^9
*/

'use strict';
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let inputLines = [];
rl.on('line', (line) => {
    inputLines.push(line.trim());
});
rl.on('close', () => {
    main();
});
function readLine() {
    return inputLines.shift();
}
function readInt() {
    return parseInt(readLine(), 10);
}
function readIntArr() {
    let str = readLine();
    str = str.split(" ");
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(parseInt(str[i], 10));
    }
    return arr;
}
function print(x) {
    process.stdout.write(x + "");
}

/**
 * @param {number} n
 * @param {number[]} arr
 * @return {number[]}
 */
function merge(arr, left, mid, right) {

    let n1 = mid - left + 1 // length of arr1
    let n2 = right - mid; // Length of arr2
    let arr1 = new Array(n1), arr2 = new Array(n2);

    for (let i = 0; i < n1; i++) {
        arr1[i] = arr[left + i];
    }

    for (let i = 0; i < n2; i++) {
        arr2[i] = arr[mid + i + 1];
    }

    //MERGER BOTH ARRAYS
    let idx1 = 0, idx2 = 0;
    let k = left;
    while (idx1 < n1 && idx2 < n2) {
        if (arr1[idx1] <= arr2[idx2]) {
            arr[k] = arr1[idx1];
            idx1++;
        } else {
            arr[k] = arr2[idx2];
            idx2++
        }
        k++;
    };

    while (idx1 < n1) {
        arr[k] = arr1[idx1];
        idx1++;
        k++;
    };

    while (idx2 < n2) {
        arr[k] = arr2[idx2];
        idx2++;
        k++;
    }
}

function mergeSorting(arr, left, right) {

    if (left >= right) return;
    //breaking arr into one element

    let mid = Math.floor((right + left) / 2);

    mergeSorting(arr, left, mid);
    mergeSorting(arr, mid + 1, right);
    merge(arr, left, mid, right);

}
function mergeSort(n, arr) {
    mergeSorting(arr, 0, n - 1);
    return arr;
}

function main() {
    let n = parseInt(readLine());
    let arr = readIntArr();

    let sortedArray = mergeSort(n, arr);
    print(sortedArray.join(' '))
}