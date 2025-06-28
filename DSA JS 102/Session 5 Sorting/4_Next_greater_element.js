/*
Problem Description
Given a positive integer n, find the smallest integer which has exactly the same digits existing in the integer n and is greater in value than n. If no such positive integer exists, return -1.

Input format
A 32 bit integer N

Output format
A single integer

Sample Input 1
12/
Sample Output 1
21

Explanation
There is only one number greater than 12 which is composed of 2 and 1 and it is 21.

Constraints
0<= N <= 10^9
This is a classic algorithm problem similar to finding the next lexicographical permutation of the digits of the number. Let's break it down step-by-step and then provide a working JavaScript solution.

Approach
Convert the number to a digit array.
Find the pivot: Traverse from right to left to find the first digit that is smaller than the digit next to it.
If no such pivot is found, return -1.
Find the smallest digit on the right of the pivot that is larger than the pivot, and swap them.
Reverse the digits after the pivot to get the smallest possible value.
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
 * @return {number}
 */
function nextGreaterElementWithSameSetOfDigits(n) {
    let nums = n.toString().split('').map(Number);
    let ln = nums.length;
    let i = ln - 2;

    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    if (i < 0) return -1;

    // Step 4: Find the smallest digit > digits[i] in the right half
    let j = ln - 1;
    while (j > i && nums[j] <= nums[i]) {
        j--;
    }

    // Step 5: Swap arr[i] and arr[j]
    [nums[i], nums[j]] = [nums[j], nums[i]];
    // Step 6: Reverse right half (i+1 to end)
    let left = i + 1, right = ln - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }

    // Step 7: Convert back to number
    const result = parseInt(nums.join(''), 10);
    return result;
}

function main() {
    const n = parseInt(readLine(), 10);
    console.log(nextGreaterElementWithSameSetOfDigits(n));
}

