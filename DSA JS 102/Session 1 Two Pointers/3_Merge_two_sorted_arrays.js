/*
Problem Description
Given two sorted arrays of size M and N, merge the two arrays and return the final array, sorted.

Input format
A single Integer M, that contains the number of elements in the first array.
A single Integer N, that contains the number of elements in the second array.
Next Line contains M space Integers of the array nums1.
Next Line contains N space Integers of the array nums2.

Output format
Print the array after merging.

Sample Input 1
3
3
1 2 3
2 5 6
Sample Output 1
1 2 2 3 5 6
Explanation 1
The sorted array is returned after merging.

Constraints
1 <= N,M <= 10^5
|nums1[i] | <= 10^9
|nums2[i] | <= 10^9
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
 * @param {number} m
 * @param {number[]} nums1
 * @param {number} n
 * @param {number[]} nums2
 * @return {number[]} 
 */

function mergeSortedArray(m, nums1, n, nums2) {
    const res = [];

    let i = 0, j =0;

    while(i<m && j<n){
        if(nums1[i] < nums2[j]) res.push(nums1[i++]);
        else res.push(nums2[j++]);
    }

    while(i<m) res.push(nums1[i++]);
    while(j<n) res.push(nums2[j++]);

    return res;

}

function main() {
    let m = parseInt(readLine(), 10);
    let n = parseInt(readLine(), 10);
    let nums1 = readIntArr();
    let nums2 = readIntArr();
    
    let nums = mergeSortedArray(m, nums1, n, nums2);
    console.log(...nums);
}