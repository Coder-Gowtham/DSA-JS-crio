/*
Problem Description
An interval is a range, with a starting value and ending value. [1, 3] indicates elements 1, 2, 3 and so on.

Given a collection of intervals, merge all overlapping intervals. 
The result should only have mutually exclusive intervals - meaning that no number should be common between two intervals, in the result.

Note: The merged intervals should be printed in increasing order of start value.

Input format
There are N+1 lines of input.
First line contains N, the number of intervals
Next N lines contain 2 space separated integers A and B, which represent the start and end of an interval

Output format
For the X merged intervals, print each interval (the start and end being space separated) on a separate line

Constraints
1 <= N <= 50000
0 <= A, B <= 1e9
B >= A

Sample Input 1
4
1 3
2 6
8 10
15 18
Sample Output 1
1 6
8 10
15 18

Explanation 1
Since intervals [1 3] and [2 6] overlap, merge them into [1 6]

Sample Input 2
2
1 4
4 5
Sample Output 2
1 5

Explanation 2
Intervals [1 4] and [4 5] overlap and get merged into [1 5]
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
 * @param {number} n
 * @param {number[][]} intervals
 * @return {number[][]}
 */

function mergeIntervals(n, intervals) {
    //sort intervals by their start values
    intervals.sort((a, b) => a[0] - b[0]);

    let ans = [];
    let startA = intervals[0][0], endA = intervals[0][1];
    let startB, endB;

    for (let i = 1; i < n; i++) {
        startB = intervals[i][0];
        endB = intervals[i][1];

        if (startB <= endA) {
            startA = Math.min(startA, startB);
            endA = Math.max(endA, endB);
        }
        else {
            ans.push([startA, endA]);
            startA = startB;
            endA = endB;
        }
    }
    ans.push([startA, endA]); // remaining last one array emelemnt
    return ans;
}

function main() {
    let n = parseInt(readLine());

    let intervals = [];

    for (let i = 0; i < n; i++) {
        intervals.push(readIntArr());
    }

    let mergedIntervals = mergeIntervals(n, intervals);
    for (let i in mergedIntervals) {
        print(mergedIntervals[i][0] + " " + mergedIntervals[i][1] + "\n");
    }
}