/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_LEVEL1_SORTING/ME_DSA_LEVEL1_SORTING_MODULE_MINDIFF/
GFG: https://www.geeksforgeeks.org/dsa/find-minimum-difference-pair/
Find the minimum difference possible between any two elements in the given array.

Input format
There are 2 lines of input.
First line will contain a single integer n representing the size of the array.
Second line will contain n space separated integers representing the array.

Output format
Output the answer in single line.

Sample Input 1
3
1 2 4
Sample Output 1
1
Explanation 1
2 - 1 = 1 minimum difference

Constraints
2<=n<=100000
1<=A[i]<=1000000000
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
function minDiff(n, arr) {

    arr.sort((a, b) => a - b);
    let minDiff = Infinity;

    for (let i = 0; i < n - 1; i++) {
        let currDiff = arr[i + 1] - arr[i];
        minDiff = Math.min(minDiff, currDiff);
    }

    return minDiff;
}

function main() {
    let n = parseInt(readLine());
    let arr = readIntArr();

    let minimumDifference = minDiff(n, arr);
    print(minimumDifference)
}