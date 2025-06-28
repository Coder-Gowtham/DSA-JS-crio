/*
Problem Description
Given a collection of distinct integers.

Your task is to identify and rectify the issue causing the error to ensure the code properly returns all possible permutations.

Input format
First line contains 1 integer N - Number of integers.
Second line contains N distinct integers.

Output format
Print all the permutations on a separate line.

Sample Input 1
3
1 2 3

Sample Output 1
1 2 3
1 3 2
2 1 3
2 3 1
3 2 1
3 1 2

Constraints
1 <= N <= 8
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
 *  @return {number[][]}
 */
function findPermutations(nums, ans, curr, s) {
    if (curr.length === nums.length) {
        ans.push(curr.slice());
        return;
    }

    const n = nums.length;
    for (let i = 0; i < n; i++) {
        if (!s.has(i)) {
            curr.push(nums[i]);

            s.add(i);
            findPermutations(nums, ans, curr, s);
            curr.pop();
            s.delete(i);
        }
    }
}

function permutation(nums) {
    let ans = [];
    let curr = [];
    let s = new Set();
    findPermutations(nums, ans, curr, s);

    return ans;
}

function main() {
    let n = parseInt(readLine(), 10);
    let nums = [];
    if (n)
        nums = readIntArr();
    let result = permutation(nums);
    for (const perm of result) {
        console.log(...perm);
    }
}