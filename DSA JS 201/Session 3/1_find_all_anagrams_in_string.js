/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_HASH/ME_DSA_HASH_MODULE_FINDALLANAGRAMSINASTRING/
You are given two strings, a main string S, and a pattern P. You have to find the starting indices of the anagrams of P in S.

Anagrams are permutations of a string. For P="abc”, its anagrams are abc,acb,bca,bac,cba,cab.

Note that indexing starts at 0.

Input format
There is one line of input, containing two space-separated strings S and P.

Output format
First-line should contain the number of such starting indices.

Next line should contain the indices in increasing order separated by a space.

Sample Input 1
aaba ab
Sample Output 1
2
1 2

Explanation 1
The anagrams of pattern "ab" are “ab” and “ba”. These are present at indices 1 and 2 of the input string “aaba”.

Sample Input 2
bacdgabcda abcd

Sample Output 2
3
0 5 6

Explanation 2
The anagrams of "abcd" can be seen as “bacd” at index 0, “abcd” at index 5 and “bcda” at index 6.

Constraints
1 <= length(S), length(P) <= 10^6
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
 * @param {string} s 
 * @param {string} p
 * @return {number[]}
 */

function comparemaps(map1, map2) {
    if (map1.size !== map2.size) return false;
    for (const [key, value] of map1) {
        if (map2.get(key) !== value) return false;
    }
    return true;
}

function findAllAnagramsInAString(s, p) {
    const patMap = new Map();
    for (const char of p)
        patMap.set(char, (patMap.get(char) || 0) + 1);

    const ans = [];
    const windowMap = new Map();
    let i = 0, j = 0;
    while (j < s.length) {
        windowMap.set(s[j], (windowMap.get(s[j]) || 0) + 1);
        if (j - i + 1 === p.length) {
            if (comparemaps(windowMap, patMap))
                ans.push(i);

            windowMap.set(s[i], windowMap.get(s[i]) - 1);

            if (windowMap.get(s[i]) === 0) {
                windowMap.delete(s[i]);
            }
            i++;
        }
        j++;
    }
    return ans
}

function main() {
    let [s, p] = readLine().split(" ");
    let result = findAllAnagramsInAString(s, p);

    console.log(result.length);

    console.log(...result);
}