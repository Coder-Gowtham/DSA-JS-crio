/*

Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_ARRAY_PREFIX_SUM/ME_DSA_ARRAY_PREFIX_SUM_MODULE_LONGESTSUBSTRINGWITHATMOSTKDISTINCTCHARACTER/
Given a string, find the length of the longest substring that contains at most K distinct characters.

Note:
Uppercase and Lowercase characters should be considered as different characters.
There can be numbers and special characters as well.

Input format
There are 2 lines of input.
First-line contains two space-separated integers representing the value of N and K.
The next line contains the string S of length N.

Output format
The length of the longest substring T that contains at most K distinct characters.

Constraints
1 <= N <= 10^5
0 <= K <= 256

Sample Input 1
5 3
abacd
Sample Output 1
4

Explanation 1
The longest substring that has 3 distinct characters, "abac", is of length 4.

Sample Input 2
6 3
Xyyzya
Sample Output 2
5

Explanation
There are 2 substrings, "Xyyzy" and “yyzya” which are the longest ones having 3 distinct characters and their length is 5.
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
 * @param {number} k
 * @return {number}
 */


function lengthOfLongestSubstringKDistinct(s, k) {
    let left = 0, right = 0, ans = 0;
    let mp = new Map();

    while (right < s.length) {
        mp.set(s[right], (mp.get(s[right]) || 0) + 1);

        while (mp.size > k) {
            mp.set(s[left], mp.get(s[left]) - 1);
            if (mp.get(s[left]) === 0) mp.delete(s[left]);
            left++;
        }
        ans = Math.max(ans, right - left + 1);
        right++;
    }
    return ans;
}

function main() {
    let [n, k] = readIntArr();
    const s = readLine();

    const result = lengthOfLongestSubstringKDistinct(s, k);
    console.log(result);
}