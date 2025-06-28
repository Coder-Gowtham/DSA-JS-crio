/*
Problem Description
In Tribonacci sequence, the nth term Tn, is defined as follows:

T0 = 0,
T1 = 1,
T2 = 1,

and Tn = Tn-1 + Tn-2 + Tn-3 , for n >= 3.

Overall the sequence looks like this - 0, 1, 1, 2, 4, 7, 13, 24, 44, 81 …
Given n, return the value of Tn.

Input format
A single line containing an Integer, N.
Output format
The Nth integer in the tribonacci sequence.

Constraints
0 <= n <= 15

Sample Input 1
4
Sample Output 1
4

Explanation 1
T3 = T2 + T1 + T0 = 1 + 1 + 0 = 2
T4 = T3 + T2 + T1 = 2 + 1 + 1 = 4
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
    // Automatically run main when 2 lines of input are received
    if (inputLines.length === 2) {
        rl.close(); // triggers rl.on('close')
    }
});

rl.on('close', () => {
    main();
});

function readLine() {
    return inputLines.shift();
}


/**
 * @param {number} n
 * @return {number}
 */

function tribonacci(n) {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    let val = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n -3);
    return val;
}

function main() {
    let n = parseInt(readLine(), 10);
    let result = tribonacci(n);
    console.log(result);
}
