/*
Problem Description
Given coordinates of a point (x,y) in 2D plane, Find in which quadrant does this point lie.

Input format
First line contains 2 space separated real numbers - x coordinate, y coordinate.

Output format
Print 1, 2, 3 or 4 depending on in which quadrant does the point lie.

Sample Input 1
-5.5 2
Sample Output 1
2

Explanation
The x-coordinate is negative and the y-coordinate is positive which means the point lies in the 2nd quadrant.

Explanation
The x-coordinate is positive and the y-coordinate is negative which means the point lies in the 4th quadrant.

Constraints
-100 < x,y < 100
Neither x nor y is 0.

function : findQuadrant()
*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.replace(/\s+/g, " ").trim();
    });
    main();
});

function readLine() {
    return inputString[currentLine++];
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
 * @param {number} x
 * @param {number} y
 * @return {number}
 */


// TODO: Implement this method
function findQuadrant(x,y) {
    if(x>0 && y>0) return 1;
    else if(x<0 && y>0) return 2;
    else if(x<0 && y<0) return 3;
    else return 4
}

// NOTE: Please do not modify this function
function main() {
   let arr = readLine().split(" ")
   let [x,y] = arr.map(i => parseFloat(i))
   const result = findQuadrant(x,y)
   console.log(result) 
}

