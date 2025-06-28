/* 
Problem Description : https://www.crio.do/learn/PSDS/ME_DSA_BASIC_RECURSION_LEVEL1/ME_DSA_BASIC_RECURSION_LEVEL1_MODULE_NATURALSUMRECDSA/
You are given a positive integer 'N' and you are required to implement a recursive function that calculates the sum of the first 'N' natural numbers.

Input format
First line contains an integer - N.

Output format
Print the sum of first N natural numbers.

Sample Input 1
10
Sample Output 1
55
Explanation
1+2+3+4+5+6+7+8+9+10 = 55

Sample Input 2
3
Sample Output 2
6
Explanation
1+2+3 = 6

Constraints
1 <= N <= 10^3
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

function naturalSum(N) {
    if (N === 1) {
        return 1;
    }
    let sum = N + naturalSum(N - 1);
    return sum;

    //T.C.= No. of fn calls in Recursive tree * TC of one function
    //S.C.= height of the call stack.( Hidden SC)

    //TC = O(n)
    //SC = O(n)
}

function main() {
    let N = parseInt(readLine());
    let res = naturalSum(N);
    console.log(res);
}
