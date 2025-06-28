/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_BASIC_MATH_DEBUGGING/ME_DSA_BASIC_MATH_DEBUGGING_MODULE_COPRIMENUMBERSDSA/
Given a number n, you have to find the count of the numbers from 1 to n that are coprime to n.

Input format
First line contains an integer n - the given number.

Output format
Print the total count of coprime numbers.

Sample Input 1
9

Sample Output 1
6

Explanation
Numbers coprime to 9 are: 1, 2, 4, 5, 7, 8

Constraints
1 <= n <= 1000
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

function gcd(a,b){ //GCD/HCF
  if(b==0) return a;
  return gcd(b, a%b);
}
function coprimeNumbers(n) {
  let count =0;

  for(let i=0;i<n;i++){
    if(gcd(i,n) === 1){
      count++;
    }
  }

  return count;
}

// NOTE: Please do not modify this function
function main() {
  let n = parseInt(readLine(), 10);
  let result = coprimeNumbers(n);
  print(result);
}