/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_LEVEL1_ARRAY_IMPLEMENTATION/ME_DSA_LEVEL1_ARRAY_IMPLEMENTATION_MODULE_MATRIXMULTIPLICATION/
You are given two matrices grid1 and grid2. You must multiply the matrices and return the result.

Refer to https://www.mathsisfun.com/algebra/matrix-multiplying.html for matrix multiplication basics.

Note: The number of columns in the first matrix will always be equal to the number of rows in the second matrix.

Input format
The input consists of the dimensions of the first matrix, followed by the values in that matrix. 
The values are input by the rows of the matrix. The same input format is used for the second matrix.

Output format
The output format is a product of the two input matrices.

Sample Input
2 2
1 4
5 9
2 5
1 2 8 8 4
3 3 6 5 2
Sample Output
13 14 32 28 12
32 37 94 85 38

Explanation
The first matrix is a 2 x 2 matrix and the second matrix is a 2 x 5 matrix. Following the matrix multiplication rules, we get the resultant matrix which has the size 2 x 5.

Constraints
0 < n1,m1,n2,m2 < 10 -> number of rows and columns are in this range
0 < grid1[n1][m1] < 10000 -> values stored in the first matrix are in this range
0 < grid2[n2][m2] < 10000 -> values stored in the second matrix are in this range

The number of columns in the first matrix must be equal to the number of rows in the second matrix.
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
 * @param {number} n1
 * @param {number} m1
 * @param {number} n2
 * @param {number} m2
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number[][]}
 */


function matrixMultiplication(n1, m1, n2, m2, grid1, grid2) {

    let grid3 = new Array(n1);

    for (let i = 0; i < n1; i++) {
        grid3[i] = new Array(m2).fill(0);
    }

    for (let r = 0; r < n1; r++) {

        for (let c = 0; c < m2; c++) {

            for (let k = 0; k < m1; k++) {
                grid3[r][c] += grid1[r][k] * grid2[k][c];
            }
        }
    }

    return grid3;
}


function main() {
    let [n1, m1] = readIntArr();
    let grid1 = [];
    for (let i = 0; i < n1; i++) {
        grid1.push(readIntArr());
    }
    let [n2, m2] = readIntArr();
    let grid2 = [];
    for (let i = 0; i < n2; i++) {
        grid2.push(readIntArr());
    }

    let res = matrixMultiplication(n1, m1, n2, m2, grid1, grid2);

    for (const row of res) {
        console.log(...row);
    }
}

