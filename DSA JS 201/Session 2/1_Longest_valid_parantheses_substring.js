/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_STACK_QUEUE/ME_DSA_STACK_QUEUE_MODULE_LONGESTVALIDPARENTHESES/
GFG: https://www.geeksforgeeks.org/dsa/length-of-the-longest-valid-substring/
Given a string S containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

Input format
First line contains a string - The string S.

Output format
Print the length of the longest valid substring.

Sample Input 1
()(()(())

Sample Output 1
6

Explanation
The last 6 characters of the string forms the longest valid substring i.e. "()(())".

Constraints
0 <= length of string <= 10^5
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
function longestValidParentheses(s) {
    const st = [-1]; //base
    let ans = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(')
            st.push(i);
        else
            st.pop();
        if (st.length > 0) {
            ans = Math.max(ans, i - st[st.length - 1])
        } else {
            st.push(i); // resetting the base
        }
    }
    return ans;
}

function main() {
    let S = readLine();
    let ans = longestValidParentheses(S);
    console.log(ans);
}