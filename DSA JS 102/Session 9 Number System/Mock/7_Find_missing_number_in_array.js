/*
Problem Description
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Input format
The first line of input contains N, which denotes the number of elements in the array.

The next line of input contains N distinct array elements in the range [0, n].

Output format
Return the only number in the range that is missing from the array.

Sample Input 1
4

3 0 2 4

Sample Output 1
1

Explanation
n = 4 since there are 4 numbers, so all numbers are in the range [0,4].

1 is the missing number in the range since it does not appear in nums.

Constraints
1 <= n <= 10000

0 <= nums[i] <= n

All the numbers of nums are unique.
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
 * @param {number[]} A
 * @param {number} N
 * @return {number}
 */
function singleMissingNumber(N, A) {
    const expectedSum = (N * (N + 1) / 2);
    const actualSum = A.reduce((a, b) => a + b, 0);
    return expectedSum - actualSum;
}

function main() {
    const [N] = readLine().split(" ").map(Number);
    const A = readIntArr();
    console.log(singleMissingNumber(N, A));
}
