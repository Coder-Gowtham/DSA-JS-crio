/*
Problem Description
Given a string comprising only lowercase alphabets, determine whether it qualifies as a palindrome.
A string is considered a palindrome if it reads the same forwards and backwards.

Note:
For the purpose of this problem, we define empty string as valid palindrome.

Input format
The only line contains a string.

Output format
True or False.

Sample Input 1
madam
Sample Output 1
true
Explanation
"madam" spelt backwards is "madam", therefore, it is a palindrome.

Sample Input 2
crio
Sample Output 2
false
Explanation
"crio" spelt backwards is "oirc", therefore, it is not a palindrome.

Constraints
1 <= s.length <= 2 * 10^5
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

function readStringArr() {
    return readLine().split(" ");
}

function print(x) {
    process.stdout.write(x + "");
}
/**
 * @param {string} s
 * @return {string}
 */

function stringPalindrome(str) {
    let left = 0
    let right = str.length - 1;

    while(left<right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}

// function stringPalindrome(str) {
//     let reverseStr = str.split("").reverse().join("");

//     if(reverseStr === str) return true;

//     else return false;
//     // TC: O(n)
//     // SC: O(n)
// }


function main() {
    let str = readLine();
    let result = stringPalindrome(str);
    console.log(result);
}