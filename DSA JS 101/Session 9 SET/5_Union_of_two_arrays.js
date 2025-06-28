/*
Problem Description
You are given two arrays A and B of size n and m respectively. You need to find the resultant array of the union between these two arrays.

Elements are not necessarily distinct.
Note:-Union of the two arrays can be defined as the set containing distinct elements from both the arrays. If there are repetitions, then only one occurrence of element should be printed in the union.
Resultant Array should be in sorted order

Input format
Line 1: Two integers n and m denoting the size of the array A and B.
Line 2: An array of integers A separated by space.
Line 3: An array of integers B separated by space.

Output format
Return resultant list denoting the the union between these two arrays in sorted order.

Sample Input 1
5 3
1 2 3 4 5
1 2 3
Sample Output 1
1 2 3 4 5
Explanation
1, 2, 3, 4 and 5 are the elements which comes in the union set of both arrays.

Sample Input 2
3 4
5 8 7
1 7 8 5
Sample Output 2
1 5 7 8
Explanation
1, 5, 7 and 8 are the elements which comes in the union set of both arrays.

Constraints
1 ≤ n, m ≤ 10^5
0 ≤ A[i], B[i] < 10^5
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
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */

function unionOfTwoArrays(A, B) {
    let unionSet = new Set();

    for (let a of A) {
        unionSet.add(a);
    }

    for (let b of B) {
        unionSet.add(b);
    }

    let unionArr = Array.from(unionSet).sort((a, b) => a - b);
    return unionArr;
}

function main() {
    let input_line = readLine().split(" ");
    let n = parseInt(input_line[0]);
    let m = parseInt(input_line[1]);

    let A = readIntArr();
    let B = readIntArr();
    let result = unionOfTwoArrays(A, B);

    console.log(result.join(' '));
}