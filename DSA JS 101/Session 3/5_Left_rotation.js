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

function readIntArr() {
    return readLine().split(" ").map(Number);
}

function leftRotation(arr) {
    let n = arr.length;
    let temp = arr[0];
    for (let i = 1; i < n - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[n-1] = temp;
    return arr;
}

function main() {
    let n = parseInt(readLine(), 10);
    let arr = readIntArr();
    const res = leftRotation(arr);
    console.log(res.join(' '));
}
