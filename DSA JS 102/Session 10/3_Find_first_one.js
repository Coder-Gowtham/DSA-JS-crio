/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_ARRAY_BINARY_SEARCH/ME_DSA_ARRAY_BINARY_SEARCH_MODULE_ZEROONES/
GFG: https://www.geeksforgeeks.org/dsa/find-index-first-1-sorted-array-0s-1s/
Given a sorted array consisting of 0s and 1s only, find the index of the first 1. If there’s no 1 present in the array, return -1

Input format
There are 2 lines of input
First line will contain a single integer n.
Next line will contain n space separated integers.

Output format
Print the index of first occuring if present, otherwise print -1.

Sample Input 1
4
0 0 1 1
Sample Output 1
2

Constraints
1<=n<=100000
0<=Ai<=1
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
 * @return {number}
 */
function zeroOnes(n, arr) {
    let left = 0, right = n - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === 1) {
            result = mid;
            right = mid - 1; // Look for earlier 1
        } else {
            left = mid + 1;
        }
    }

    return result;
}

function main() {
    let n = parseInt(readLine());
    let arr = readIntArr();

    let firstIndex = zeroOnes(n, arr);
    print(firstIndex);
}