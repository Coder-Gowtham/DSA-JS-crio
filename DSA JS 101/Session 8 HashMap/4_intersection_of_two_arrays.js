/*
Problem Description
Given two arrays A and B, write a function to compute their intersection.

Note:

Each element in the result should appear as many times as it shows in both arrays.

The result needs to be in sorted order.

Input format
First line contains one integer N denoting the number of elements in array A
Next line contains N integers denoting the elements of array A
Next line contains one integer M denoting the number of elements in array B
Next line contains M integers denoting the elements of array B

Output format
Single line containing the intersection elements of the two arrays in sorted order.

Sample Input 1
4
1 2 2 1
2
2 2
Sample Output 1
2 2

Explanation 1
Since 2 2 are the only elements present in both the arrays.

Constraints
0<=N,M<=10^5

-10^9<=Ai,Bi<=10^9
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

function readString() {
    return readLine();
}

function print(x) {
    process.stdout.write(x + "");
}

/**
 * @param {number} n
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersectionOfTwoArrays(n, nums1, m, nums2) {
    let myMap = new Map();

    let intersectionArr = [];

    for (let num of nums1) {
        myMap.set(num, (myMap.get(num) || 0) + 1)
    }


    for (let e of nums2) {

        let freq = myMap.get(e) || 0;
        if (freq > 0) {
            intersectionArr.push(e);
            myMap.set(e, freq - 1);
        }
    }
    intersectionArr = intersectionArr.sort((a, b) => a - b)

    return intersectionArr;
}

function main() {

    let n = parseInt(readLine())
    let nums1 = readIntArr();
    let m = parseInt(readLine())
    let nums2 = readIntArr();

    let ans = intersectionOfTwoArrays(n, nums1, m, nums2);
    console.log(...ans);
}