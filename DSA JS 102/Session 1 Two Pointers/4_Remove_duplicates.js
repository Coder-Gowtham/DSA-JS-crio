/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_ARRAY_TWO_POINTERS/ME_DSA_ARRAY_TWO_POINTERS_MODULE_REMOVEDUPLICATESFROMSORTEDARRAYII/
Given a sorted array, remove the duplicates in-place, such that each element in the array appears at most twice, and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Input format
There are two lines of input.
First line contains an integer n - Number of elements.
Second line contains n space separated integers - The array nums.

Output format
Print the new length in the first line.
In the second line print the nums array upto the new length.

Sample Input 1
7
2 2 2 3 4 4 9

Sample Output 1
6
2 2 3 4 4 9

Explanation 1
Your function should return 6 as the element 2 can only be present at most 2 times. So the first 6 elements of array nums should be modified to [2, 2, 3, 4, 4, 9].

Constraints
1 <= n <= 10^5
0 <= nums[i] <= 10^6
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

function removeDuplicatesFromSortedArrayII(n, arr) {
    let j = 0;

    for (let i = 0; i < n; i++) {
        if (j >= 2 && arr[i] === arr[j - 1] && arr[i] === arr[j - 2]) continue;

        arr[j++] = arr[i]
    }

    return j;
}

function main() {
    let n = parseInt(readLine());
    let arr = readIntArr();

    let res = removeDuplicatesFromSortedArrayII(n, arr);

    console.log(res);

    for (let i = 0; i < res; i++)
        process.stdout.write(arr[i] + " ");
}