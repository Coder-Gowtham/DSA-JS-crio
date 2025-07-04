/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_HASH/ME_DSA_HASH_MODULE_LONGESTPALINDROME/
GFG: https://www.geeksforgeeks.org/find-longest-palindrome-formed-by-removing-or-shuffling-chars-from-string/
You are given a string consisting of lower and upper case characters.
You need to find the length of the longest palindrome which you can create by using the characters from the string.
Note: Upper case and lower case characters are different from each other i.e, "Aa" is not a palindrome as 'A' != 'a'.

Input format
There are 2 lines of input
First line contains the size of the string
Second line contains the string.

Output format
Print the length of the longest palindrome possible.

Sample Input 1
4 bbde
Sample Output 1
3

Explanation
The possible 3 size palindrome strings are :- beb and bdb

Constraints
1 <= Size of String <= 10^4
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
 * @param {string} s
 * @return {number}
 */
function longestPalindrome(n, s) {
    const map = new Map();

    for (let i = 0; i < s.length; i++)
        map.set(s[i], (map.get(s[i]) || 0) + 1)

    let ans = 0;
    let hasExtraChar = false;

    for(const [key, value] of map){
        if(value%2===0) //even
            ans += value;
        else{
            ans += value -1 ;
            hasExtraChar = true;
        }
    }
    if(hasExtraChar) ans++;
    return ans;
}

function main() {
    const n = parseInt(readLine())
    const str = readLine()
    const result = longestPalindrome(n, str)
    console.log(result)
}