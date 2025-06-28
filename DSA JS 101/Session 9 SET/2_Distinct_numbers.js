/*
Problem Description : https://www.crio.do/learn/PSDS/ME_DSA_BASIC_SET/ME_DSA_BASIC_SET_MODULE_DISTINCTNUMBERSBASICDSA/
You are given a list of n integers, and your task is to calculate the number of distinct values in the list.

Input format
The first input line has an integer n: the number of values.
The second line has n integers x1,x2,…,xn.

Output format
Print number of distinct values in the list.

Sample Input 1
5
2 3 2 2 3
Sample Output 1
2
Explanation
There are two distinct values in the list which are 2 and 3.

Constraints
1 <= n <= 2*10^5

1 <= xi <= 10^9
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

/**
 * @param {number} n
 * @param {number[]} nums
 * @return {number}
 */
function distinctNumbersBasic(n,nums) {
    let mySet = new Set(nums);
    console.log(mySet);
    
    return mySet.size;
    //TC: O(n)
    //SC: O(n)
}

function main() {
    let n = parseInt(readLine());
    let nums = readIntArr();
    let res = distinctNumbersBasic(n,nums);
    console.log(res);
}