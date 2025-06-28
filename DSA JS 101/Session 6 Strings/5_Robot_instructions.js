/*
Problem Description
There is a robot starting at the position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

Input format
You are given a string moves that represents the move sequence of the robot where moves[i] represents its ith move. Valid moves are 'R' (right), 'L' (left), 'U' (up), and 'D' (down).
Output format
Return true if the robot returns to the origin after it finishes all of its moves, or false otherwise.

Sample Input 1
UD
Sample Output 1
true
Explanation
The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.

Sample Input 2
LL
Sample Output 2
false
Explanation
The robot moves left twice. It ends up two "moves" to the left of the origin. We return false because it is not at the origin at the end of its moves.

Constraints
1 <= moves.length <= 10^4
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
    // Automatically run main when 2 lines of input are received
    if (inputLines.length === 2) {
        rl.close(); // triggers rl.on('close')
    }
});

rl.on('close', () => {
    main();
});

function readLine() {
    return inputLines.shift();
}

function print(x) {
    process.stdout.write(x + "");
}


/**
 * @param {string} moves
 * @return {boolean}
 */
function robotReturnToOrigin(moves) {
    let u = 0, d = 0, l = 0, r = 0;
    let movesArr = moves.split("");

    for (let i = 0; i < movesArr.length; i++) {
        if (movesArr[i] == 'U') u += 1;
        else if (movesArr[i] == 'D') d += 1;
        else if (movesArr[i] == 'L') l += 1;
        else if (movesArr[i] == 'R') r += 1;
    }

    if (u == d && l == r) {
        return true;
    } else {
        return false;
    }
}

function main() {
    let moves = readLine();
    let res = robotReturnToOrigin(moves);
    console.log(res);
}