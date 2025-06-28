/*
Problem Description
You are given a string which comprises lower case alphabets (a-z), upper case alphabets (A-Z), numbers, (0-9) and special characters like !,-.; etc.

You are supposed to find out which character occurs the maximum number of times and the number of its occurrence, in the given string. 
If two characters occur equal number of times, you have to output the character with the lower ASCII value.
For example, if your string was: aaaaAAAA, your output would be: A 4, because A has lower ASCII value than a.

Input format
Input will contain 1 line containing a string S.

Output format
You've to output two things which will be separated by a space: a) The character which occurs the maximum number of times. b) The number of its occurrence.

Sample Input 1
Statements are unique.
Sample Output 1
e 4
Explanation
e occurs 4 times.

Constraints
1 <= |S| <= 100
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
 * @param {string} text
 * @return {[character, number]}
 */

function mostFrequentDSA(text) {
    let myMap = new Map();

    for (let char of text) {
        let freq = myMap.get(char) || 0
        myMap.set(char, freq + 1);
    }    

    let maxChar = "";
    let maxFreq = 0;

    for (let [key, value] of myMap.entries()) {
        if (value > maxFreq) {
            maxFreq = value;
            maxChar = key;
        }

        if (maxFreq === value && key < maxChar) {
            maxChar = key;
        }
    }

    return [maxChar, maxFreq];
}
function main() {
    let text = readLine();
    let result = mostFrequentDSA(text);
    print(result[0] + " " + result[1]);
}