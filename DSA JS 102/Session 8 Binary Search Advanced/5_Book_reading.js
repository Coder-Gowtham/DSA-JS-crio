/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_ARRAY_BINARY_SEARCH/ME_DSA_ARRAY_BINARY_SEARCH_MODULE_BOOKREADING/
Ujjwal loves to read story books. There are n piles of books, the ith pile has a[i] books. 
His mom has gone to market and will come back in h hours.

Ujjwal can decide his books-per-hour reading speed of k. 
Each hour, he chooses some pile of books and reads k books from that pile. If the pile has less than k books, he reads all of them instead and will not read any more books during this hour.

Ujjwal likes to read slowly but still wants to finish reading all the books before his mom returns.

Return the minimum integer k such that he can read all the books within h hours.

Input format
First line contains n and h.

Second line contains n space integers given by a[i].

Output format
A single integer k.
Sample Input 1
4 8
3 6 7 11
Sample Output 1
4

Explanation
The minimum books-per-hour reading speed is 4 such that ujjwal can read all the books within h hours.

Constraints
1 <= n <= 10^4
n <= h <= 10^9
1 <= a[i] <= 10^9
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

function numHours(mid, n, a) {
    let hours = 0;
    for (let i = 0; i < n; i++) {
        hours += Math.ceil(a[i] / mid);
    }
    return hours;

}

function bookReading(n, h, a) {
    let left = 1, right = Math.max(...a), mid, ans = right;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (numHours(mid, n, a) <= h) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return ans;
}

function main() {
    let [n, h] = readIntArr();
    let a = readIntArr();

    console.log(bookReading(n, h, a));
}