/*
SOURCE: https://www.geeksforgeeks.org/check-given-matrix-is-magic-square-or-not/
Problem Description
Given a matrix of dimension nxn having elements 1 to nxn distinct elements. Check whether the matrix is magic square or not.

Magic square is a square that has the same sum of rows, columns and diagonals.

Input format
First line contains integer n.

In next n lines each line contains n elements.

Output format
Print "Yes" if it is a magic square , "No" otherwise.

Sample Input 1
3
4 9 2 
3 5 7 
8 1 6

Sample Output 1
Yes

Explanation
All rows, columns and diagonals have sum 15.

Constraints
1 <= n <= 100
1 <= element of matrix <= n*n
*/

'use strict';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
let n = null;

rl.on('line', (line) => {
    inputLines.push(line.trim());
    if (n === null && inputLines.length === 1) {
        n = parseInt(inputLines[0]); // first line is n
    } else if (n !== null && inputLines.length === n + 1) {
        rl.close(); // all input lines received
    }
});

rl.on('close', () => {
    main();
});

function readLine() {
    return inputLines.shift();
}

function readInt() {
    return parseInt(readLine());
}

function readIntArr() {
    return readLine().split(' ').map(Number);
}

/**
 * @param {number} n
 * @param {number[][]} matrix
 * @return {boolean}
 */


// TODO: Implement this method
function checkMagicSquare(n, matrix) {
    //sum for reference
    let sum = 0;
    for (let j = 0; j < n; j++) {
        sum += matrix[0][j]
    }

    //row wise sum
    for (let i = 0; i < n; i++) {
        let rowSum = 0;
        for (let j = 0; j < n; j++) {
            rowSum += matrix[i][j]
        }
        if (rowSum != sum) return false;
    }

    //column wise sum

    for (let j = 0; j < n; j++) {
        let columnSum = 0;
        for (let i = 0; i < n; i++) {
            columnSum += matrix[i][j]
        }
        if (columnSum != sum) return false;
    }

    //for diagonal 1
    let diagonalSum1 = 0;
    for (let i = 0; i < n; i++) {
        diagonalSum1 += matrix[i][i]
    }

    if (diagonalSum1 != sum) return false;

    //for diagonal 2
    let diagonalSum2 = 0;
    for (let i = 0; i < n; i++) {
        diagonalSum2 += matrix[i][n - i - 1]
    }

    if (diagonalSum2 != sum) return false;

    return true;

    //TC : O(n^2)
    //SC : O(1)

}




// NOTE: Please do not modify this function
function main() {
    let n = parseInt(readLine(), 10);
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix.push(readIntArr());
    }
    let result = checkMagicSquare(n, matrix);
    if (result == true) {
        console.log("Yes");
    }
    else {
        console.log("No");
    }
}