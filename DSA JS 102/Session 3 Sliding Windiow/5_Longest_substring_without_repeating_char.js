/*
Problem Description
Given a string, find the length of the longest substring which has no repeating characters.

Input format
Input is a string.

Output format
Output is an integer representing the longest substring with no repeating characters.

Sample Input 1
aabcccbcb
Sample Output 1
3
Explanation 1
"abc" is the longest substring with no repeating characters.

Sample Input 2
cdddddd
Sample Output 2
2
Explanation 2
"cd" is the longest substring with no repeating characters.
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
 * @return {number}
 */
function longestSubstringWithoutRepeatingCharacter(s) {
    let left = 0, right = 0;
    let mp = new Map();
    let ans = 0;

    while (right < s.length) {
        let prev = mp.get(s[right]);

        if (prev !== undefined && prev >= left) {
            left = prev + 1;
        }

        mp.set(s[right], right);
        ans = Math.max(ans, right - left + 1);
        right++;
    }
    return ans;
    //     How This Works:
    // mp stores the last seen index of each character.
    // If a character is seen again within the current window (prev >= left), then we move the left pointer past its last occurrence.
    // We then update ans to track the max window size.
}


function main() {
    let s = readLine();
    let result = longestSubstringWithoutRepeatingCharacter(s);
    console.log(result);
}