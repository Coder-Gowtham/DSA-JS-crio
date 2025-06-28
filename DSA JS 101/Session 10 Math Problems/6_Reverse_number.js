/*
Problem Description
Given a number, return the reverse of that number.

Input format
A single integer N.
Output format
Reverse the number and return the number. Note number must start with (1-9) digits only unless it is a single digit number.

Sample Input 1
15
Sample Output 1
51
Explanation
15 when reversed would be converted to 51

Sample Input 2
7
Sample Output 2
7
Explanation
7 when reversed would be converted to 7

Constraints
0 <= N <= 10^12
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

// TODO: Implement this method
function reverseNum(n) {    
    let rev = 0;
    while (n > 0) {
        rev =  n % 10 + rev * 10 ;
        n=Math.floor(n/10);
    }

     return rev;
}

// NOTE: Please do not modify this function
function main() {
    let n = parseInt(readLine(), 10);
    let result = reverseNum(n);
    console.log(result);
}
