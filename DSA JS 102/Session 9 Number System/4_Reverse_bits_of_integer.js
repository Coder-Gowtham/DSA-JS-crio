

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
 * @param {BigInt} n - a positive integer
 * @return {number} - a positive integer
 */
function checkSetBit(i, n) {
    let mask = 1n << BigInt(i);
    return (n & mask) !== 0n;
}

function setBit(n, i) {
    let mask = 1n << BigInt(i);
    return n | mask;
}

function reverseBits(n) {
    let ans = 0n;
    for (let i = 0; i < 32; i++) {
        if (checkSetBit(i, n)) {
            ans = setBit(ans, 31 - i);
        }
    }
    return ans;
}

function main() {
    let t = BigInt(readLine(), 10);
    while (t--) {
        let n = BigInt(readLine(), 10);
        let answer = reverseBits(n);
        print(answer + "\n");
    }
}