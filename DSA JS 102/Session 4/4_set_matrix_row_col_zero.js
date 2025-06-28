/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_LEVEL1_ARRAY_IMPLEMENTATION/ME_DSA_LEVEL1_ARRAY_IMPLEMENTATION_MODULE_SETMATRIXZEROES/
GFG: https://afteracademy.com/blog/set-matrix-zeros/
Given an m x n matrix, if an element is 0, set its entire row and column to 0.

Do it in-place, that is, modify the same matrix. Do not create a new one.

Input format
First line contains 2 integers m,n - number of rows and columns respectively.
Next m lines contain space separated n integers.

Output format
Output the same matrix.

Sample Input 1
3 3
1 1 1
1 0 1
1 1 1

Sample Output 1
1 0 1
0 0 0
1 0 1

Explanation 1
There is one ‘0’ in the 2nd row and 2nd column, so all the elements in that row and column become 0.

Sample Input 2
3 4
0 1 2 0
3 4 5 2
1 3 1 5

Sample Output 2
0 0 0 0
0 4 5 0
0 3 1 0

Explanation 2
The 1st row, 1st column and 4th column all contain ‘0’, so all the values in these rows & columns become 0.

Constraints
M,N <= 500
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
 * @param {number[][]} matrix
 * @return {number[][]}
 */

function setMatrixZeroes(matrix) {
    let row = [];
    let col = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                row.push(i);
                col.push(j);
            }
        }
    }

    for (let i = 0; i < row.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[row[i]][j] = 0;
        }
    }

    for (let i = 0; i < col.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            matrix[j][col[i]] = 0;
        }
    }
    return matrix;
}

function main() {
    let [m, n] = readIntArr();
    let matrix = [];

    for (let i = 0; i < m; i++) {
        matrix.push(readIntArr());
    }

    let resultMatrix = setMatrixZeroes(matrix);

    let resultStr = "";

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            resultStr += resultMatrix[i][j];
            resultStr += " ";
        }
        resultStr += "\n";
    }

    print(resultStr);
}

//TODO: Better approach 
/*
Create boolean variables firstRowZero and firstColZero to indicate whether the first row and first column need to be zeroed out.

Iterate through the first row to check if it contains any zeroes. Set firstRowZero accordingly.

Iterate through the first column to check if it contains any zeroes. Set firstColZero accordingly.

Iterate through the rest of the matrix, and if a zero is found at position (i, j), set the corresponding values in the first row (matrix[0][j]) and first column (matrix[i][0]) to zero.

Iterate through the matrix starting from the second row and second column.

If the value in the first row (matrix[0][j]) is zero or the value in the first column (matrix[i][0]) is zero, set matrix[i][j] to zero.

If firstRowZero is true, zero out the entire first row.

If firstColZero is true, zero out the entire first column.

Time Complexity (TC): O(m * n), where m is the number of rows and n is the number of columns.

Space Complexity (SC): O(1), as the extra space used is constant regardless of the input size.
*/