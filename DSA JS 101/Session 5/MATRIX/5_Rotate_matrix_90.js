/*
Problem Description
You are given an n x n 2D matrix representing an image.
Rotate the image by 90 degrees (clockwise).

Note:
You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
DO NOT allocate another 2D matrix and do the rotation.

Input format
There are N+1 lines of input.
First line contains one integer N.
Next N line contains N space separated integers

Output format
Print the NxN rotated matrix.

Sample Input 1
3
1 2 3
4 5 6
7 8 9

Sample Output 1
7 4 1
8 5 2
9 6 3

Sample Input 2
4
5 1 9 11
2 4 8 10
13 3 6 7
15 14 12 16

Sample Output 2
15 13 2 5
14 3 4 1
12 6 8 9
16 7 10 11

Constraints
1 <= n <= 100
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

function print(x) {
    process.stdout.write(x + "");
}


/**
 * @param {number} n
 * @param {number[][]} matrix
 * @return {number[][]} 
 */
function transpose(n, matrix) {
    // Run a loop over all the rows starting from 0 till end
    //Run the a loop over columns 
    //swap the the value(row, col) => (col, row)
    //number should be swawpped only once, that why we will run the loop over indices above the diagnal.

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
}

function reverseRows(n, matrix) {

    for (let i = 0; i < n; i++) {
        let l = 0, r = n - 1;
        for (let j = 0; j < Math.floor(n / 2); j++) {
            let temp = matrix[i][l];
            matrix[i][l] = matrix[i][r];
            matrix[i][r] = temp;
            l++;
            r--;
        }
    }

}

function rotateImage(n, matrix) {
    //STEP 1: Call the function transpose and it will convert all the rows to column and column to rows
    //STEP 2: Call the function to reverse each row in the transposed matrix

    transpose(n, matrix);
    reverseRows(n, matrix);
    return matrix;
}



function main() {
    let n = parseInt(readLine());
    let matrix = [];

    for (let i = 0; i < n; i++) {
        matrix.push(readIntArr());
    }

    let rotatedImage = rotateImage(n, matrix);
    let resultStr = "";

    for (let i in rotatedImage) {
        for (let j in rotatedImage[i]) {
            resultStr += rotatedImage[i][j] + " ";
        }
        resultStr += '\n';
    }

    print(resultStr);
}