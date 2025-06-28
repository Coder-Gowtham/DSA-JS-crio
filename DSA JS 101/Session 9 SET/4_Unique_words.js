/*
Problem Description
You are given a list of words present in a book. Find out the count of unique words present in that book.

Input format
The first input line has an integer n where n is the number of words.

Further n subsequent lines have word s[i].

Output format
Return the count of unique words in the list.

Sample Input 1
7
Java
is
great
Grails
is
also
great
Sample Output 1
5
Explanation
Unique words present in the list are : Java,is,great,Grails,also

Constraints
1 <= n <= 100
1 <= s[i] <= 15
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

function readString() {
    return readLine();
}

function print(x) {
    process.stdout.write(x + "");
}

/**
 * @param {number} n
 * @param {string[]} s
 * @return {number}
 */
function uniqueWords(n,s) {
    let uniqueSet = new Set(s);
    return uniqueSet;
}

function main() {
    let n = parseInt(readLine());
    let s = [];
    for(let i=0;i<n;i++)
    {
        let x = readLine();
        s.push(x);
    }
    let res = uniqueWords(n,s);
    console.log(res);
} 