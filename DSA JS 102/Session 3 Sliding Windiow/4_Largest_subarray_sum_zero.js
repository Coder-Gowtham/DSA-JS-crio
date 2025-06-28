/*
Problem Description
Given an integer array, find the largest subarray with sum 0 . If there is more than one subarray with the largest length, return the subarray with the lowest starting index.

If there is no such sub-array print -1.

Input format
There are 2 lines of input.
First line contains an integer N.
Next line consists of N integers, the values of the array.

Output format
Print the elements of the sub-array with spaces which have the largest length and sum of elements equal to zero.

Sample Input 1
6
2 3 1 -4 0 6
Sample Output 1
3 1 -4 0
Explanation
The largest subarray with sum zero is (3, 1, -4, 0)

Constraints
1 <= N <= 10^5
-10^4 <= arr[i] <= 10^4
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


function largestSubarraySumZero(n, arr) {
    let pref = new Map();
    let sum = 0;
    let ansLeft = -1, ansRight = -2;

    pref.set(0, -1);

    for (let right = 0; right < n; right++) {
        sum += arr[right];

        if (pref.has(sum)) {
            let left = pref.get(sum) + 1;
            
            if ((right - left + 1) > (ansRight - ansLeft + 1)) {
                ansLeft = left;
                ansRight = right;
            }
        } else {
            pref.set(sum, right);
        }
    }

    if (ansLeft !== -1) {
        const res = arr.slice(ansLeft, ansRight + 1);
        return res;
    }

    return [-1];
}

/*
6
2 3 1 -4 0 6 
*/

function main() {
    const n = parseInt(readLine(), 10)
    const arr = readIntArr()
    const longestSubarray = largestSubarraySumZero(n, arr)
    console.log(longestSubarray.join(" "))
}