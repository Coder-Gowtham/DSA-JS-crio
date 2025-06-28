/*
Problem Description
A matrix and a valid current position (row number and column number) are provided as input. Given a direction (RIGHT is 1, DOWN in 2, LEFT is 3 and UP is 4) and number of steps to move, output the values along the path taken to the new position, including the value at the new position.

If any position during traversal is out of bounds, output [-1] (array with single element -1) and not the values along the path.

Input format
First line contains two space separated integers M and N, representing the number of rows and columns in the matrix, respectively.

Next M lines contain N space separated integers each, which represent the values on each row

Next line contains two space separated integers X and Y, representing the row and column number you are currently at. This is 0 based indexing.

Next line contains two space separated integers A and B, representing the Direction and the Number of steps to move, respectively.

Output format
Output the values along the path, in a space separated way.

Constraints
1 <= M,N,X,Y <= 1000
0 <= Matrix values <= 1e9
1 <= A <= 4
1 <= B <= 1e9

Sample Input 1
3 3 --> Matrix size
1 2 3 --> Input matrix of 3 rows
4 5 6
7 8 9
1 1 --> Current Position
1 1 --> Direction, # of steps; In this case move RIGHT by 1 step

Sample Output 1
6

Explanation 1
We start at the position with value 5 (1 1) and move 1 step right to get to value 6 (at position 1 2), so we print 6.

Sample Input 2
3 4
1 2 3 4
5 6 7 8
9 10 11 12
0 2 --> Current position
2 2 --> Direction, # of steps; In this case move DOWN by 2 steps

Sample Output 2
7 11

Explanation 2
We start at the position with value 3 (0 2) and move 2 steps down going through 7 and getting to 11. So we print out 7 11.
3 3
1 2 3
4 5 6
7 8 9
1 1
1 1

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
        n = parseInt(inputLines[0].split(' ')[0]); // assuming first line is "n m"
    } else if (n !== null && inputLines.length === n + 3) {
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
    process.stdout.write(x + " ");
}

/**
 * @param {number[][]} matrix
 * @param {number} currPosRow
 * @param {number} currPosCol
 * @param {number} dirToMove
 * @param {number} stepsToMove
 * @returns {number[]}
 */
function matrixTraversal(matrix, currPosRow, currPosCol, dirToMove, stepsToMove) {
    let arr = [];

    for (let i = 0; i < stepsToMove; i++) {
        if (dirToMove === 1) currPosCol += 1;       // right
        else if (dirToMove === 2) currPosRow += 1;  // down
        else if (dirToMove === 3) currPosCol -= 1;  // left
        else if (dirToMove === 4) currPosRow -= 1;  // up

        // bounds check
        if (
            currPosRow < 0 || currPosCol < 0 ||
            currPosRow >= matrix.length || currPosCol >= matrix[0].length
        ) {
            return [-1];
        }

        arr.push(matrix[currPosRow][currPosCol]);
    }

    return arr;
}

function main() {
    let [n, m] = readIntArr(); // n rows, m columns
    let grid = [];
    for (let i = 0; i < n; i++) {
        grid.push(readIntArr());
    }

    let [currPosX, currPosY] = readIntArr();        // starting position
    let [dirToMove, stepsToMove] = readIntArr();    // direction and steps

    let result = matrixTraversal(grid, currPosX, currPosY, dirToMove, stepsToMove);
    console.log(...result);
}
