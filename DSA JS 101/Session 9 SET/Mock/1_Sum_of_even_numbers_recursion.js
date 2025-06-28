//You are required to implement a recursive function that calculates the sum of even numbers from 1 to a given positive integer n.


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
/**
 * @param {number} n
 * @return {number}
 */
function sumOfEvenNumbersDSAMOCK(n) {

        if (n < 2) return 0;
        let sum = 0;

        if(n%2 === 0){
            sum = n + sumOfEvenNumbersDSAMOCK(n-2);
        } else{
            sum = sumOfEvenNumbersDSAMOCK(n-1);
        }
        return sum;
}

function main() {
    let n = parseInt(readLine());
    let res = sumOfEvenNumbersDSAMOCK(n);
    console.log(res);
}