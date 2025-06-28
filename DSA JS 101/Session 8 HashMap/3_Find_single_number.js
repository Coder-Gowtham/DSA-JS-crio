/*
Problem Description
You are given a non-empty array of integers arr, where every element appears twice except for one. Your task is to implement a program that takes the input as an array of integers and returns the element that appears only once.

Input format
The input consists of an array of integers nums (1 <= arr.length <= 3 * 10^4), where each element in the array appears twice except for one element which appears only once. The elements in arr are within the range -3 * 10^4 to 3 * 10^4.
You should use a HashMap-based approach to efficiently identify the element that appears only once in the array.

Output format
Return the integer that appears only once in the given array.

Sample Input 1
3
2 2 1
Sample Output 1
1
Explanation
In the given array, 1 appears only once, so the program should return 1.

Sample Input 2
7
2 2 3 3 1 4 4
Sample Output 2
1
Explanation
In the given array, 1 appears only once, so the program should return 1.

Constraints
1 <= arr.length <= 3 * 10^4

-3 * 10^4 <= arr[i] <= 3 * 10^4
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
    for ( let i = 0; i < str.length; i++ ) {
        arr.push(parseInt(str[i], 10));
    }
    return arr;
}

function readString() {
    return readLine();
}

function print(x) {
    process.stdout.write(x + "");
}
/**
 * @param {number[]} arr
 * @return {number}
 */
function findSingleNumber(arr) {
    let myMap = new Map();

    for (let a of arr) {
        myMap.set(a, (myMap.get(a) || 0) + 1);
    }

    for (let [key, value] of myMap) {
        if (value === 1) return key;
    }

    return -1;
}

function main() {
    let N = parseInt(readLine());
    let arr = readIntArr();
    let res = findSingleNumber(arr);
    console.log(res);
}