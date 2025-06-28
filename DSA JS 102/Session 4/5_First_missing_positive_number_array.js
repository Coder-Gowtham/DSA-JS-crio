/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_LEVEL1_ARRAY_IMPLEMENTATION/ME_DSA_LEVEL1_ARRAY_IMPLEMENTATION_MODULE_FIRSTMISSINGPOSITIVE/
GFG: https://www.geeksforgeeks.org/find-the-smallest-positive-number-missing-from-an-unsorted-array/
Given an unsorted array of integers, find the smallest missing positive integer. The space complexity need not be O(1),
you can also implement a O(N) space complexity solution.

Input format
There are 2 lines of input.
First line contains 1 integer N - Number of elements in the array.
Second line contains space separated N integers.

Output format
Print the smallest missing positive integer.

Sample Input 1
4
3 4 -1 1
Sample Output 1
2
Explanation 1
2 is the smallest positive integer which is missing as 1 is already present in the array. Note that 0 will not be considered as positive.

Constraints
N <= 200000
-2 ^ 31 <= Range of values <= 2 ^ 31 - 1
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
function firstMissingPositive(n, arr) {
    //3 4 -1 1
    // if arr[i] is within the range 1 to n and arr[i] is
    // not placed at (arr[i]-1)th index in arr
    for (let i = 0; i < n; i++) {

        while (arr[i] > 0 && arr[i] <= n && arr[i] !== arr[arr[i] - 1]) { //swapping
            // then swap arr[i] and arr[arr[i]-1] to place 
            // arr[i] to its corresponding index
            const temp = arr[i]; //3
            arr[i] = arr[arr[i] - 1]; //arr[3-2], arr[2]=-1
            arr[temp - 1] = temp; //rr[2] = 3
        }
    }

    // If all number from 1 to n are present 
    // then n+1 is smallest missing number
    for (let i = 1; i <= n; i++) {
        if (i !== arr[i - 1]) {
            return i;
        }
    }

    return n + 1;
}

function main() {
    let n = parseInt(readLine());

    let arr = [];
    if (n != 0)
        arr = readIntArr();

    let ans = firstMissingPositive(n, arr);
    print(ans);
}