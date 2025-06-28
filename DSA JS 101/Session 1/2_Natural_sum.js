/*
Problem Description
You are given a positive integer 'N'. You have to find the sum of the first 'N' natural numbers.

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

Constraints
1 <= N <= 10^4

naturalSum
*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.replace(/\s+/g, " ").trim();
    });
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function readIntArr() {
    let str = readLine();
    str = str.split(" ");
    let arr = [];
    for ( let i = 0; i < str.length; i++ ) {
        arr.push(parseInt(str[i], 10));
    }
    return arr;
}

function print(x) {
    process.stdout.write(x + "");
}

/**
 * @param {number} n
 * @return {number}
 */

function naturalSum(n) {
    let sum = n*(n+1)/2
    return sum;
}

function main() {
    let n = parseInt(readLine());
    let res = naturalSum(n);
    console.log(res);
}
