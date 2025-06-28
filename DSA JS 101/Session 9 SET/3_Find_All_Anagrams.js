/*
Problem Description
You are given a string str consisting of non-repeating lowercase English letters.
Additionally, you have an array arr of strings, each containing non-repeating characters.
Your task is to create a program that identifies and returns the strings from the arr that are anagrams of the given string str.
The resulting array of strings should be in lexicographically sorted order.

Input format
The first line contains a string str (1 <= |str| <= 26), representing a sequence of non-repeating lowercase English letters.
The second line contains an integer N (1 <= N <= 10^5), representing the number of strings in the arr.
The next N lines each contain a string of non-repeating characters, representing the elements of the arr.

Output format
Return a array of strings containing only those strings from the input array that are anagrams of the given string str.

Resultant array of string should be in sorted order.

Sample Input 1
abc
3
cab
bac
xyz

Sample Output 1
bac
cab

Explanation
Strings "cab" and "bac" are anagrams of the given string "abc".

Sample Input 2
crio
4
iocr
croi
irco
mxyn

Sample Output 2
croi
iocr
irco
Explanation
Strings "croi" , "iocr" and "irco" are anagrams of the given string "crio".

Constraints
1 <= |str| <= 2
1 <= N <= 10^
1 <= arr[i].length <= 26 where 0 <= i < N (0 based indexing
|str| == arr[i].length
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

/**
 * @param {string} str
 * @param {number[]} arr
 * @return {number}
 */
// function findAllAnagrams(str, arr) {
//     let myMap = new Set()
//     let sortedStr = str.split('').sort().join('');

//     for(let word of arr){
//         if(word.length !== str.length) continue;
//         let sortedWord = word.split('').sort().join('');

//         if(sortedWord === sortedStr){
//             myMap.add(word);
//         }
//     }
//     return Array.from(myMap);
// }


function getFreqMap(str) {
    let freqMap = new Map();
    for (let ch of str) {
        freqMap.set(ch, (freqMap.get(ch) || 0) + 1)
    }
    return freqMap;
}

function isMapEqual(m1, m2) {
    for (let [key, value] of m1.entries()) {
        if (m2.get(key) !== value) return false;
    }

    return true;
}

function findAllAnagrams(str, arr) {

    let result = [];
    let freqmap1 = getFreqMap(str);

    for (let word of arr) {
        if (word.length !== str.length) continue;

        let freqMap2 = getFreqMap(word);

        if (isMapEqual(freqmap1, freqMap2)) {
            result.push(word)
        }
    }
    //TC: O(n*m)

    result = result.sort(); //TC O(NlogN + N + N*M) total TC

    return result;
}

function main() {
    let str = readLine();
    let n = parseInt(readLine());
    let arr = [];
    for (let i = 0; i < n; i++) {
        let s = readLine();
        arr.push(s);
    }

    let result = findAllAnagrams(str, arr);

    for (let s of result) {
        console.log(s);
    }
}