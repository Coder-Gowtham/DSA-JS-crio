/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_LEVEL1_ARRAY_IMPLEMENTATION/ME_DSA_LEVEL1_ARRAY_IMPLEMENTATION_MODULE_STRINGPERMUTATIONDSA/
You are given a string, you have to rearrange the characters of the string using a given permutation.

The permutation is in the form of an integer array with size same as that of string in which each integer specifies the new position of the character currently present at that particular place.
For eg. consider the string "abcd" and permutation [2,4,3,1], then the new string will be "dacb".

Input format
First line contains an integer n - The length of string.
Second line contains a string - The given string
Third line contains n space separated integers - The permutation.

Output format
Print the new string after applying the permutation.

Sample Input 1
4
abcd
2 4 3 1
Sample Output 1
dacb
Explanation
According to the permutation 'a' goes to position 2, 'b' to 4, 'c' to 3, 'd' to 1. So we get the new string as "dacb".

Constraints
0 < n < 100
1 <= array elements <= n
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
 * @param {number} n
 * @param {string} s
 * @param {number[]} arr
 * @return {string}
 */




function stringPermutation(n, s, arr) {

    let res = new Array(n);

    for (let i = 0; i < n; i++) {
        res[arr[i] - 1] = s[i];
    }

    res = res.join('');
    return res;
}

// NOTE: Please do not modify this function
function main() {
    let n = parseInt(readLine())
    let s = readLine()
    let arr = readIntArr()
    const result = stringPermutation(n, s, arr)
    console.log(result)
}