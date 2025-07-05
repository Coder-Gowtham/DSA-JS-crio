/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_STACK_QUEUE_HASH_MOCK/ME_DSA_STACK_QUEUE_HASH_MOCK_MODULE_REMOVEADJACENTDUPLICATES/
You are given a string s, consisting of lowercase letters. You need to make duplicate removal on s until you no longer can.

A duplicate removal consists of choosing two adjacent equal characters and removing both of them.
Return the final string after all such duplicate removals have been made.
Input format
The first line contains a single string s.

Output format
Print the final string after duplicate removals.

Function definition
You have to complete the given function. It accepts one argument -the input string, and returns the updated string.

Sample Input 1
abbaca
Sample Output 1
ca

Explanation
Initial String: abbaca
After removing "bb" : aaca
After removing "aa" : ca (There are no more duplicates)

Constraints
1 <= |s| <= 10^5
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

/**
 * @param {String} s
 * @return {String}
 */
function removeAdjacentDuplicates(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
            stack.pop();
        } else {
            stack.push(s[i])
        }
    }
    return stack.join('');
}

function main() {
    let s = readLine();
    let result = removeAdjacentDuplicates(s);
    console.log(result);
}

