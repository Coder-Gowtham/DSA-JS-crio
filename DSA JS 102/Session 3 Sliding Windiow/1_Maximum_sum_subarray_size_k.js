/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_ARRAY_PREFIX_SUM/ME_DSA_ARRAY_PREFIX_SUM_MODULE_MAXIMUMSUBARRAYSUMSIZEK/
Given an array of integers and a number k, find the maximum sum of a subarray of size k.

Input format
First line of input contains two integers N and K, where N is the size of the array and K is the subarray size.

Second line of input contains N integers denoting the array elements.

Output format
Print the maximum sum of a subarray of size k.

Sample Input 1
4 2
100 200 300 400
Sample Output 1
700

Explanation
We get maximum sum by adding subarray {300,400}
of size 2.

Constraints
1<=K<=N<=100000
0<=abs(arr[i])<=10000
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
 * @param {number} N
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */

function maximumSubarraySumSizeK(N, A, K) {
    let left = 0, right = 0;
    let currSum = 0;
    let ans = -Infinity;;

    while (right < N) {
        currSum += A[right];
        if (right - left + 1 === K) {
            ans = Math.max(ans, currSum);
            currSum -= A[left];
            left++
        }
        right++;
    }

    return ans;
}

function main() {
    const [N, K] = readLine().split(" ").map(Number);
    const A = readIntArr();
    console.log(maximumSubarraySumSizeK(N, A, K));
}
