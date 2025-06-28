

/*
Given the array of integers nums of size n, you will choose two different indices i and j of that array. 
Return the maximum value of (nums[i]-1)*(nums[j]-1).

Input format
First line contains n, the number of distinct integers.
Second line contains n space separated integers

Output format
Print the maximum product.

Sample Input 1
4
3 4 5 2
Sample Output 1
12
Explanation
If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)(nums[2]-1) = (4-1)(5-1) = 3*4 = 12.

Sample Input 2
4
1 5 4 5
Sample Output 2
16
Explanation
Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.

Constraints
2 <= n <= 50
1 <= nums[i] <= 10^3
*/

'use strict';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
let n = null;

rl.on('line', (line) => {
    inputLines.push(line.trim());
    if (n === null && inputLines.length === 1) {
        n = parseInt(inputLines[0]); // first line is n
    } else if (n !== null && inputLines.length === n + 1) {
        rl.close(); // all input lines received
    }
});

rl.on('close', () => {
    main();
});

function readLine() {
    return inputLines.shift();
}

function readInt() {
    return parseInt(readLine());
}

function readIntArr() {
    return readLine().split(' ').map(Number);
}
/**
 * @param {number} n
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct2(n, nums) {
    let left = 0;
    let right = n - 1;
    let max = 0;

    while (left < right) {
        let currentMax = (nums[left] - 1) * (nums[right] - 1);
        if (currentMax > max) {
            max = currentMax;
        }
        if (nums[left] < nums[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
}

function main() {
    let n = parseInt(readLine());
    let nums = readIntArr();
    let res = maxProduct2(n, nums);
    console.log(res);
}