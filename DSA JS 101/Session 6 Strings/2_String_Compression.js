/*
Problem Description
You are given a string S and you have to implement a function to perform basic string compression, using the counts of repeated characters.
If the "compressed" string would not become smaller than the original string, your function should return the original string.
You can assume the string has only uppercase and lowercase letters (a - z).


Input format
A single line that contains the string S.
Output format
A single line that represents the compressed string as specified in the problem.

Sample Input 1
aabccccc
Sample Output 1
a2b1c5
Explanation 1
First 'a' repeats two times, then 'b' repeats once, then 'c' repeats two times.

Constraints
1 <= length(S) <= 100000
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

function print(x) {
    process.stdout.write(x + "");
}

/**
 * @param {string} s
 * @return {string}
 */
function stringCompression(s) {
    let ch = s[0];
    let count = 1;
    let result = '';

    for(let i=1; i<s.length; i++){
        if(ch == s[i]){
            count++;
        } else{
            result += ch;
            result += count;
            ch = s[i];
            count = 1;
        }
    }

    //for the last char
    result += ch;
    result += count;

    if(s.length <= result.length){
        return s;
    }

    return result;
}

function main() {
    let s = readLine();
    let result = stringCompression(s);
    console.log(result);
}