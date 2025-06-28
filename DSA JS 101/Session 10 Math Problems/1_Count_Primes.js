/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_BASIC_MATH_DEBUGGING/ME_DSA_BASIC_MATH_DEBUGGING_MODULE_COUNTPRIMESDSA/
Count the number of prime numbers less than a non-negative number, n.

Input format
Single line containing one integer N

Output format
Single line containing one number denoting the number of prime numbers less than N

Sample Input 1
10
Sample Output 1
4

Explanation
There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

Constraints
1<=N=100000
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

function isPrime(x){
    for(let i=2; i*i<=x;i++){
        if(x%i === 0){
            return false;
        }
    }
    return true;
}

function countPrimes(n) {
    let count =0;

    for(let i=2;i<=n;i++){
        if(isPrime(i)){
            count++;
        }
    }
    return count;
}

function main() {
    let n = parseInt(readLine(), 10);
    let result = countPrimes(n);
    console.log(result);
}
