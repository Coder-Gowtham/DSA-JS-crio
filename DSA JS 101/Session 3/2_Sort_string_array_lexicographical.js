/*
Problem Description
Given an array of n strings. Sort the array in lexicographical order.

Input format
First line contains integer n.
Next line contains n space separated strings.

Output format
Print the sorted array.

Sample Input 1
4
abc abd ab a

Sample Output 1
a ab abc abd

Explanation
The given array is sorted in lexicographical order.

Constraints
1 <= n <= 10000

Strings contain only lowercase english alphabet.
Each string will have length no more than 15.
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

function readIntArr() {
    return readLine().split(" ").map(Number);
}

function print(x) {
    process.stdout.write(x + "");
}

/**
 * @param {string[]} arr
 * @return {string[]}
 */


// TODO: Implement this method
function sortArray(arr) {
    return arr.sort();
}

// NOTE: Please do not modify this function
function main() {
    let n = parseInt(readLine(), 10);
    let arr = readLine().split(" ");
    let result = sortArray(arr);
    console.log(...result);
}