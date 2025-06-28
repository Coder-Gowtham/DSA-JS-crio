/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_ARRAY_BIT_MANIPULATION/ME_DSA_ARRAY_BIT_MANIPULATION_MODULE_SWAPALLODDANDEVENBITS/
Video: https://www.youtube.com/watch?list=TLGGHEnkmm6absoxODA4MjAyMQ&v=GbH8PcqKosk&feature=youtu.be
Given an unsigned integer N, swap all odd bits with even bits. Every even position bit is swapped with the adjacent bit on the right side and every odd position bit is swapped with adjacent on the left side. Assume a 32 bit integer.

Hint: To avoid negative values caused by integer overflow, utilize BigInt in your JavaScript code for handling large integer computations.BigInt is a JavaScript built-in object used to represent integers larger than the range supported by the Number primitive.

Input format
N which represents an unsigned integer.

Output format
Single output integer after the algorithm has successfully swapped bits of the input.

Constraints
0 <= N <= 2147483647

Sample Input 1
22
Sample Output 1
41
Explanation 1
The given number is 22 (00010110), it should be converted to 41 (00101001).

Sample Input 2
13
Sample Output 2
14
Explanation 2
The given number is 13 (00001101), it should be converted to 14 (00001110).
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
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

function checkSetBit(i, n) {
    let mask = 1n << BigInt(i);
    return (n & mask) !== 0n;
}

function setBit(i, n) {
    let mask = 1n << BigInt(i);
    return n | mask;
}

function swapAllOddAndEvenBits(n) {
    let ans = 0n; // BigInt
    for (let i = 0; i < 32; i++) {
        if (checkSetBit(i, n)) {
            if (i % 2 === 0) {
                ans = setBit(i + 1, ans);
            } else {
                ans = setBit(i - 1, ans);
            }
        }
    }
    return ans;
}

function main() {
    let n = BigInt(readLine());
    let answer = swapAllOddAndEvenBits(n);
    print(answer);
}