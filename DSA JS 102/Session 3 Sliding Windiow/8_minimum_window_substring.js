/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_BASIC_MOCK_201/ME_DSA_BASIC_MOCK_201_MODULE_MINIMUMWINDOWSUBSTRINGDSAMOCK/
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Note:
There will always exist such a window.
Input format
First line contains a string 'S'
Second line contains a string 'T'

Output format
Output the substring in 'S' containing all the characters in 'T'

Sample Input 1
ADOBECODEBANC
ABC
Sample Output 1
BANC

Explanation
The substring "BANC" contains all the characters in 'T' ('A', 'B' and 'C')

Constraints
1 <= T.length <= S.length <= 10^5
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
 * @param {string} t
 * @return {string}
 */
function minimumWindowSubstring(s, t) {
    const tMap = new Map();
    for (let char of t) {
        tMap.set(char, (tMap.get(char) || 0) + 1);
    }

    let left = 0, right = 0;
    let required = tMap.size;
    let formed = 0;
    const windowCounts = new Map();
    let ans = [-1, 0, 0];

    while (right < s.length) {

        const char = s[right];
        windowCounts.set(char, (windowCounts.get(char) || 0) + 1);

        if (tMap.has(char) && windowCounts.get(char) === tMap.get(char)) {
            formed++;
        }


        while (left <= right && formed === required) {
            if (ans[0] === -1 || right - left + 1 < ans[0]) {
                ans = [right - left + 1, left, right];
            }

            const charLeft = s[left];
            windowCounts.set(charLeft, windowCounts.get(charLeft) - 1);
            if (tMap.has(charLeft) && windowCounts.get(charLeft) < tMap.get(charLeft)) {
                formed--;
            }
            left++;
        }
        right++;
    }

    return s.slice(ans[1], ans[2] + 1)

}

function main() {
    let s = readLine();
    let t = readLine();
    let ans = minimumWindowSubstring(s, t);
    print(ans);
}