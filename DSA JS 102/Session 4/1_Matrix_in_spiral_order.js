/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_LEVEL1_ARRAY_IMPLEMENTATION/ME_DSA_LEVEL1_ARRAY_IMPLEMENTATION_MODULE_SPIRALMATRIXII/
GFG: https://www.geeksforgeeks.org/print-a-given-matrix-in-spiral-form/
Given an integer A, generate a square matrix filled with elements from 1 to A*A in spiral order. The spiral order will be clockwise in nature starting from (0,0)

Input format
One line of input, containing a single integer A.

Output format
Print a 2-d matrix of size A x A satisfying the spiral order.

Sample Input 1
3
Sample Output 1
1 2 3
8 9 4
7 6 5
Explanation
As you can see the matrix goes spirally with each next position incremented by one.

Constraints
1<=A<=1000
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

function spiralMatrixII(n) {
    const arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(new Array(n));
    }

    let topmost_row = 0, bottommost_row = n - 1, leftmost_col = 0, rightmost_col = n - 1;
    let value = 1;

    while (value <= n * n) {
        for (let i = leftmost_col; i <= rightmost_col; i++) {
            arr[topmost_row][i] = value;
            value++;
        } topmost_row++;

        for (let i = topmost_row; i <= bottommost_row; i++) {
            arr[i][rightmost_col] = value
            value++
        } rightmost_col--;

        for (let i = rightmost_col; i >= leftmost_col; i--) {
            arr[bottommost_row][i] = value;
            value++;
        } bottommost_row--;

        for (let i = bottommost_row; i >= topmost_row; i--) {
            arr[i][leftmost_col] = value;
            value++
        } leftmost_col++;
    }

    return arr;
}

function main() {
    let n = parseInt(readLine());

    let resultArr = spiralMatrixII(n);

    let resultStr = "";

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            resultStr += resultArr[i][j] + " ";
        }
        resultStr += "\n"
    }

    print(resultStr)
}