/*
Problem Description
Given an integer n, you have to find the nth fibonacci number. The fibonacci sequence is given by 0,1,1,2,3,5,8,... where 0 and 1 are the 0th and 1st fibonacci numbers respectively and every consecutive number is the sum of the previous two numbers in the sequence.

Input format
There is one line of input, containing an integer n.

Output format
Print the nth fibonacci number.

Sample Input 1
3
Sample Output 1
2

Explanation 1
3rd fibonacci number is equal to the sum of 1st and 2nd fibonacci numbers i.e. 1 + 1 = 2.

Constraints
0 <= n <= 20

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



// TODO: Implement this method
function nthFibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let value = nthFibonacci(n - 1) + nthFibonacci(n - 2);    
    return value;
}
// NOTE: Please do not modify this function
function main() {
    let n = parseInt(readLine(), 10);
    const result = nthFibonacci(n);
    console.log(result);
}
