/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_ARRAY_TWO_POINTERS/ME_DSA_ARRAY_TWO_POINTERS_MODULE_MEETINGROOMS/
GFG: https://www.geeksforgeeks.org/minimum-halls-required-for-class-scheduling/
VID: https://www.youtube.com/watch?v=PWgFnSygweI&feature=youtu.be
Given a list of meeting time intervals, you have to find the minimum number of rooms required to organize all the meetings.

Input format
First line contains an integer N, indicating the number of meetings.

Next N lines contain two space separated integers S and E, indicating the Starting and Ending time of a meeting, respectively.

Output format
Print the minimum number of rooms required.

Constraints
N <= 100000
0 <= S,E <= 1000000000 (10^9)
Si < Ei

Sample Input 1
3
0 20
5 10
10 15

Sample Output 1
2

Explanation 1
One room can host the 1st meeting (0-20) and the other room can host both the 2nd meeting (5-10) and 3rd meeting (10-15), one after the other.

So, only 2 rooms are required if total for the 3 meetings.
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
 * @param {number[][]} meetings
 * @return {number}
 */
function meetingRooms(meetings) {
    const list = [];

    for (let meeting of meetings) {
        list.push({ timeStamp: meeting[0], roomChange: +1 });
        list.push({ timeStamp: meeting[1], roomChange: -1 });
    }

    list.sort((a, b) => a.timeStamp - b.timeStamp);

    let minRooms = 0;
    let meetingsInProgress = 0;

    for (let e of list) {
        meetingsInProgress += e.roomChange;
        minRooms = Math.max(minRooms, meetingsInProgress);
    }

    return minRooms;
}

function main() {
    let n = parseInt(readLine(), 10);
    let meetings = [];
    for (let i = 0; i < n; i++) {
        let meeting = readIntArr();
        meetings.push(meeting);
    }
    console.log(meetingRooms(meetings));
}