/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_ARRAY_PREFIX_SUM/ME_DSA_ARRAY_PREFIX_SUM_MODULE_CONTIGIOUSSEQUENCE/
Given an array, find a non-empty contiguous subarray with the largest sum.

Input format
There are 2 lines of input.
First line contains N, the number of elements in the array.
Second line contains N space separated numbers, representing the array elements.

Output format
A single integer which is the maximum possible contiguous subarray sum

Constraints
1 ≤ N ≤ 10^5
-10^9 ≤ A[i] ≤ 10^9

Sample Input 1
8
-2 -3 4 -1 -2 1 5 -3
Sample Output 1
7

Explanation 1
The subarray [4 -1 -2 1 5] has sum 7, which is the maximum possible.
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
// function contigiousSequence(n, arr) {
//     let max_so_far = -Infinity;
//     let max_ending_here = 0;

//     for (let i = 0; i < n; i++) {
//         max_ending_here += arr[i];

//         if (max_ending_here > max_so_far) {
//             max_so_far = max_ending_here;
//         }

//         if (max_ending_here < 0) {
//             max_ending_here = 0;
//         }
//     }
//     return max_so_far;
// }

// If we also need to print the sub array
function contigiousSequence(n, arr) {
    let currentSum = 0
    let maxSum = -Infinity;
    let start = 0, end = 0, tempStart = 0;

    for (let i = 0; i < n; i++) {
        currentSum += arr[i];
        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }

        if (currentSum < 0) {
            currentSum = 0
            tempStart = i + 1;
        }
    }

    return {
        maxSum,
        subArrray: arr.slice(start, end + 1)
    }
}


function main() {
    let n = parseInt(readLine());
    let arr = readIntArr();

    let largestSum = contigiousSequence(n, arr);
    print(JSON.stringify(largestSum));
}