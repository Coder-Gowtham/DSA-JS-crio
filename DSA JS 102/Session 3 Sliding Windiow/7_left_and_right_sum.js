/*
Problem Description
In a land of integers, a challenge arises. You have an array, and you must create another array of the same length. 
Each element in this new array depends on the difference between the sum of elements to its left and the sum of elements to its right. 
If there are no elements to the left or right, consider it as 0. Solve the challenge and return the new array as your answer.

Note: answer.length == nums.length.

answer[i] = |leftSum[i] - rightSum[i]|.

Input format
First line contains one number denoting the number of integers in the array

Next line contains N numbers denoting the ith element of the array

Output format
A single line containing the elements of the required array.

Sample Input 1
5

1 2 3 4 10

Sample Output 1
19 16 11 4 10

Explanation
For each element in the array, we calculate the difference between the sum of elements to its left and the sum of elements to its right:

For the first element 1, we have | 0 - 19 | = 19.

For the second element 2, we have | 1 - 17 | = 16.

For the third element 3, we have | 3 - 14 | = 11.

For the fourth element 4, we have | 6 - 10 | = 4.

For the fifth element 10, we have | 10 - 0 | = 10.

The resulting output array is [19, 16, 11, 4, 10].

Constraints
1 <= nums.length <= 100000

-10^5 <= nums[i] <= 10^5
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
 * @param {number[]} arr
 * @return {number[]}
 */

function leftAndRight(nums) {
    const n = nums.length;
    const leftSum = new Array(n).fill(0);
    const rightSum = new Array(n).fill(0);
    const result = new Array(n).fill(0);

    for (let i = 1; i < n; i++) {
        leftSum[i] = leftSum[i - 1] + nums[i - 1];
    };

    for (let i = n - 2; i >= 0; i--) {
        rightSum[i] = rightSum[i + 1] + nums[i + 1];
    }

    for (let i = 0; i < n; i++) {
        result[i] = Math.abs(leftSum[i] - rightSum[i])
    }

    return result;
}

function main() {
    let n = readLine();
    let nums = readIntArr();
    let ans = leftAndRight(nums);
    console.log(...ans);
}
