/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_BASIC_RECURSION_LEVEL1/ME_DSA_BASIC_RECURSION_LEVEL1_MODULE_FACTORIALDSA/
Given a number n, you have to calculate the factorial of that number.

Input format
First line contains an integer - n
Output format
Print the factorial of the given number.

Sample Input 1


Sample Output 1
6
Explanation
3! = 3.2.1 = 6

Constraints
0 <= n <= 10
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


function factorialDSA(n) {
    if (n === 1 || n === 0) return 1;

    let factorial = n * factorialDSA(n - 1);
    return factorial;

}


function main() {
    let n = parseInt(readLine())
    const result = factorialDSA(n);
    console.log(result)

}