/*
Problem Description
You are given two strings and an integer k,find whether the given two strings are similar or not. 
Two given strings s1 and s2 are similar if for each character the difference between the frequency of that character in s1 and s2 is at most k. 
If the given strings are similar then print Yes otherwise print No. (Note : Both strings s1 and s2 are in lowercase )

Input format
First line contains an integer T - Number of test cases.

The first line of each test case contains three integers N, M and K where N is the length of the first string, 
M is the length of the second string.
The second line of each test case contains a string s1.
The third line of each test case contains a string s2.

Output format
For each test case, print Yes if the given strings are Similar or No if the given strings are not similar.

Sample Input 1
2
5 3 2
aaabc
abc
12 3 3
xyzzzbbbbbxx
bxy

Sample Output 1
Yes
No

Explanation
In the first test case, the difference between each and every characters frequency in both the strings is at most 2. 
Hence, they are similar strings.
In the second test case, the difference between the frequency of letter b in first string and the frequency of letter b in second string is 4. 
Hence, they are not similar strings.

Constraints
1 <= T <= 100
1 <= N,M <= 100000
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
 * @param {number} n
 * @param {number} m
 * @param {number} k 
 * @param {String} s1
 * @param {String} s2 
 * @return {String}
 * 
 */

function similarString(n, s1, m, s2, k) {
    const mapS1 = new Map();
    const mapS2 = new Map();

    for (const char of s1) {
        mapS1.set(char, (mapS1.get(char) || 0) + 1);
    }
    for (const char of s2) {
        mapS2.set(char, (mapS2.get(char) || 0) + 1);
    }

    for (const [key, value] of mapS1) {

        if (Math.abs((mapS2.get(key) || 0) - value) > k) {
            return "No";
        }
    }

    for (const [key, value] of mapS2) {

        if (Math.abs((mapS1.get(key) || 0) - value) > k) {
            return "No";
        }
    }
    return 'Yes';

}

function main() {
    let t = readLine();

    while (t-- > 0) {
        const [n, m, k] = readIntArr();
        let s1 = readLine();
        let s2 = readLine();

        const res = similarString(n, s1, m, s2, k);
        console.log(res);
    }
}