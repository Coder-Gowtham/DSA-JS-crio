/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_LEVEL1_ARRAY_IMPLEMENTATION/ME_DSA_LEVEL1_ARRAY_IMPLEMENTATION_MODULE_PERMUTATIONPALINDROME/
GFG: https://www.geeksforgeeks.org/check-characters-given-string-can-rearranged-form-palindrome/
Given a string S which consists of both lowercase and uppercase alphabetical letters, you have to write a function to check if string S is a permutation of a palindrome or not. Note: Characters are case sensitive i.e. ‘a’ is not the same as ‘A’.

Input format
First line contains an integer representing the value of T, the number of test cases.

In next T lines each line contains the string S.

Output format
For each test case, print "True"(without quotes) if it is a permutation of a palindrome and "False" otherwise.

Constraints
1 <= T <= 10
1 <= length(S) <= 100000

Sample Input 1
3
nnaamm
hello
Aab

Sample Output 1
True
False
False

Explanation 1
nnaamm is a permutation of namman, which is a palindrome
hello is not a permutation of any palindrome
Aab is not a permutation of any palindrome
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



/**
 * @param {string} s
 * @return {boolean}
 */

function isPermutationPalidrome(s) {
    const mp = new Map();

    for (let char of s) {
        mp.set(char, (mp.get(char) || 0) + 1);
    }

    let oddFreqCount = 0;

    for (let value of mp.values()) {
        if (value % 2 !== 0) {
            oddFreqCount++;
        }
    }

    return (oddFreqCount <= 1);
}

function main() {
    let t = parseInt(readLine())
    while (t--) {
        const s = readLine()
        const answer = isPermutationPalidrome(s)
        if (answer)
            console.log('True')
        else
            console.log('False')
    }
}


