/*
Problem Description
Given an array arr with n objects colored red, white or blue,sort them in-place so that objects of the same color are adjacent,
with the colors in the order red, white and blue.
Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
Note: You are not supposed to use the library's sort function for this problem.

Input format
First-line will contain the number of objects n.
Next line will have n space-separated integers, specifically array arr.

Output format
A single line that contains the numbers in the sorted order.
You don't need to return any vector or array just sort the given array it in-place.

Sample Input 1
6
1 1 1 2 2 0

Sample Output 1
0 1 1 1 2 2

Explanation
After sorting the given colored array arr we get 0 1 1 1 2 2.

Constraints
1 <= n <= 100000
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
 * @param {number[]} nums
 * @return {void}
 */
function sortColors(arr) {
    let n = arr.length;
    let low = 0;
    let mid = 0;
    let high = n - 1;

    while (mid <= high) {
        if (arr[mid] === 0) {
            [arr[mid], arr[low]] = [arr[low], arr[mid]];
            mid++;
            low++;
        } else if (arr[mid] === 1) {
            mid++;
        } else {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }


    return arr;
}
function main() {
    let n = parseInt(readLine(), 10);
    let nums = readIntArr();
    sortColors(nums);
    console.log(...nums);
}