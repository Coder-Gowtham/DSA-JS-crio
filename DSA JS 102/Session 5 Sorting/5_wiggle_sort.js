/*
Problem Description
Given an unsorted array, sort it in wave form. That is, reorder it such that nums[0] <= nums[1] >= nums[2] <= nums[3]....

Input format
There are 2 lines of input.
First line contains an integer N ,the number of input integers in the array.
Second line contains N space separated integers.

Output format
N space separated elements which satisfy the given condition.

Sample Input 1
6
1 5 1 1 6 4
Sample Output 1
1 4 1 5 1 6
Explanation 1
nums[0] <= nums[1] >= nums[2] <= nums[3] >= nums[4] <= nums[5].

Constraints
1 <= N <= 100000
-10^9 <= A[i] <= 10^9
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
 * @param {number} n
 * @return {number[]}
 */
function wiggleSort(arr, n) {

    for (let i = 0; i < n - 1; i++) {
        if ((i % 2 === 0 && arr[i] > arr[i + 1]) ||
            (i % 2 === 1 && arr[i] < arr[i + 1])) {

            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    }

    return arr;
}

function main() {
    const n = parseInt(readLine(), 10);
    let arr = readIntArr()
    const result = wiggleSort(arr, n)
    console.log(result.join(" "))

}