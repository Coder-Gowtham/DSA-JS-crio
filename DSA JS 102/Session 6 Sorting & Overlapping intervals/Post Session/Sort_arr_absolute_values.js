/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_LEVEL1_SORTING/ME_DSA_LEVEL1_SORTING_MODULE_SORTARRAYABSOLUTE/
GFG: https://stackoverflow.com/questions/40695701/sort-the-array-with-absolute-value-only-and-show-real-value
Given an array of integers, sort the array based on the absolute value of the elements.

Input format
First line contains an integer n - The number of elements.
Second line contains n space separated integers - The array nums.

Output format
For each test case print the minimum changes required on a separate line.

Sample Input 1
5
2 -5 1 -2 4
Sample Output 1
1 2 -2 4 -5
Explanation 1
Absolute values of elements are [2,5,1,2,4] respectively, so in the sorted order based on absolute values elements will be [1,2,-2,4,-5] or [1,-2,2,4,-5]. Both are accepted answers.

Constraints
1 <= n <= 10^5
-10^9 <= nums[i] <= 10^9
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
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArrayAbsolute(n, nums) {
    nums.sort((a, b) => Math.abs(a) - Math.abs(b));
    return nums;
}

function main() {
    const n = parseInt(readLine(), 10)
    const nums = readIntArr()
    const result = sortArrayAbsolute(n, nums)
    console.log(result.join(" "))
}