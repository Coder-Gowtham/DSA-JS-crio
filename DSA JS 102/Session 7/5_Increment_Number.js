/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_LEVEL2_DEBUGGING_PROBLEMS/ME_DSA_LEVEL2_DEBUGGING_PROBLEMS_MODULE_INCREMENTNUMBERDSADEBUG/
Increment a number represented by an arrays A and return the resulting sum in Array. 
Your task is to identify and rectify the issue causing the error to ensure the code properly returns the array

Input format
First line will contain a single integer N .
Next line will contain N space separated integers for Array A.

Output format
Single integer which will be the incremented number.

Sample Input 1
3
1 1 1
Sample Output 1
112

Explanation
111 + 1 = 112

Constraints
0<=Ai<10

Most significant value will be non-zero in the array.

1<=N<=5000
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
 * @param {number} N
 * @param {number[]} A
 * @return {number[]}
 */
function incrementNumber(n, A) {
    let answer = [];
    let carry = 1;

    for (let i = n - 1; i >= 0; i--) {
        carry += A[i];
        answer.push(carry % 10);
        carry = Math.floor(carry / 10);
    }

    if (carry >= 1)
        answer.push(carry);

    answer.reverse();
    return answer;
}


function main() {
    let N = parseInt(readLine(), 10);
    let A = readIntArr();
    let result = incrementNumber(N, A);
    for (const x of result) {
        print(x);
    }
}