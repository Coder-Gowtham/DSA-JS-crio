/*
Problem Description
Given an array containing N integers and an integer K,

Your task is to identify and rectify the issue causing the error to ensure the code properly returns the length of the longest subarray 
with the sum of the elements equal to the given value K.

Input format
The first line contains two integers N and K, denoting the size of the array and the sum to be formed respectively.
The second line contains N elements, the elements of the array.

Output format
Return a single integer, the size of the longest subarray having sum K.

Sample Input 1
6 15
10 5 2 7 1 9
Sample Output 1
4
Explanation
The longest subarray is [5, 2, 7, 1].

Sample Input 2
6 -5
-5 8 -14 2 4 12
Sample Output 2
5
Explanation
The longest subarray is [-5, 8, -14, 2, 4].

Constraints
1 <= N <= 100000
-100000 <= A[i], K <= 100000
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
 * @param {number} K
 * @param {number[]} nums
 * @return {number}
 */
function longestSubarrayHavingSumK(n, K, A) {

    const um = new Map();
    let sum = 0;
    let ans = 0;
    for (let i = 0; i < n; i++) {
        sum += A[i];
        if (sum === K)
            ans = i + 1;

        if (!um.has(sum))
            um.set(sum, i);

        if (um.has(sum - K)) {
            if (ans < (i - um.get(sum - K)))
                ans = i - um.get(sum - K);
        }
    }
    return ans;
}

function main() {
    const [N, K] = readLine().split(" ").map(Number);
    const nums = readIntArr();
    console.log(longestSubarrayHavingSumK(N, K, nums));
}