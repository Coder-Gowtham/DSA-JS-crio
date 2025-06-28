/*
Problem Description
For an input year N, find whether the year is a leap or not.

Input format
First line contains an integer - N.

Output format
Print "true" if it is a leap year otherwise "false".

Sample Input 1
1600
Sample Output 1
true

Explanation
Year 1600 is a leap year

Sample Input 2
1800

Sample Output 2
false

Explanation
Year 1800 is not a leap year

Constraints
1 <= N <= 9999

function: leapYearDSA()

HINT :
1. Not all the years divisible by 4 are leap years, there are some exceptions.
2. Century years end with 00. Century year is leap only in case they are divisible by 400.
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
 * @param {number} N
 * @return {boolean}
 */

function leapYearDSA(N) {
    
return (N % 4 === 0 && (N % 100 !== 0 || N % 400 === 0));
}

function main() {

    let N = parseInt(readLine());
    let res = leapYearDSA(N);
    if(res)
    console.log("true");
    else
    console.log("false");
    
}