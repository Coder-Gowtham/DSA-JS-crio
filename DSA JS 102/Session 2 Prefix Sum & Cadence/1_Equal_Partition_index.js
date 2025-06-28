/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_ARRAY_PREFIX_SUM/ME_DSA_ARRAY_PREFIX_SUM_MODULE_EQUALPARTITION/
https://www.geeksforgeeks.org/find-element-array-sum-left-array-equal-sum-right-array/
Partitioning an array means to split an array along an element, such that it divides the array into two parts with some specific property. 
The element that partitions the array is called the partitioning element.

Given an array, find the element, partitioning along which, the sum of elements to its left, equals the sum of elements to its right. 
The partition element itself is to be excluded from both sums.
Return the index of the partitioning element. If no such element exists, return -1.

Input format
There are N+1 lines of input.
First line will contain a single integer N.
Second line will contain n space separated integer representing array elements.

Output format
Output the index of the partitioning element.

Constraints
2 <= N <= 10^6
1 <= Arr[i] <= 10^9

Sample Input 1
4
1 4 2 5
Sample Output 1
2

Explanation 1
Since 1 + 4 = 5 where 2 is such an element.
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


function equalPartition(n, arr) {
    if (n < 3) return -1; // at least 3 elements are needed

    const prefixSum = new Array(n);
    const suffixSum = new Array(n);

    // Build prefix sum
    prefixSum[0] = arr[0];
    for (let i = 1; i < n; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i];
    }

    // Build suffix sum
    suffixSum[n - 1] = arr[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        suffixSum[i] = suffixSum[i + 1] + arr[i];
    }

    // Check for partitioning element
    for (let i = 1; i < n - 1; i++) {
        if (prefixSum[i - 1] === suffixSum[i + 1]) {
            return i;
        }
    }

    //TC: O(n)
    //SC: O(n)

    return -1; // No partitioning index found
}

//BETTER SPACE COMPLEXITY
// function equalPartition(n, arr) {
//     let totalSum = 0;

//     for (let num of arr) {
//         totalSum += num;
//     }

//     let leftSum = 0;
//     for (let i = 0; i < n; i++) {
//         let rightSum = totalSum - leftSum - arr[i];
//         if (leftSum === rightSum) {
//             return i; // Partitioning element found
//         }
//         leftSum += arr[i];
//     }
//TC: O(n)
//SC: O(1)

//     return -1; // No partitioning element found
// }


function main() {
    let n = parseInt(readLine());
    let arr = readIntArr();

    let partitionIndex = equalPartition(n, arr);
    print(partitionIndex);
}