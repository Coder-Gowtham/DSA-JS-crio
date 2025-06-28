
/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_LEVEL2_DEBUGGING_PROBLEMS/ME_DSA_LEVEL2_DEBUGGING_PROBLEMS_MODULE_ARMSTRONGNUMBERDSADEBUG/
For a given 3 digit number, find whether it is an armstrong number or not.
 An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. 
Return true if it is an armstrong number else return false.
Your task is to identify and rectify the issue causing the error to ensure the code properly returns the correct output.

Input format
First and only line contains a single integer n.

Output format
Single line boolean output

Sample Input 1
153
Sample Output 1
true

Explanation
153 is an armstrong number
1^3 + 5^3 + 3^3 = 153

Constraints
100 <= n < 1000
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

function isArmstrong(number) {
    let originalNumber = number;

    let digit1 = number % 10;
    number = Math.floor(number / 10);
    let digit2 = number % 10;
    number = Math.floor(number / 10);
    let digit3 = number;

    let sumOfCubes = Math.pow(digit1, 3) + Math.pow(digit2, 3) + Math.pow(digit3, 3);

    return sumOfCubes == originalNumber;
}

function main() {
    let n = parseInt(readLine());
    let result = isArmstrong(n);
    if (result)
        console.log("true");
    else
        console.log("false");
}