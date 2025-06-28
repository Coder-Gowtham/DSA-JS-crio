/*
Problem Description
Given an array of non negative integers, arrange the elements, such that if made into a number, they form the largest number.

For instance,

Given the array [1, 3, 10] , this should be arranged to [3, 1, 10] - since the largest possible number formed by these numbers is 3110.

Input format
There are 2 lines of input

First-line contains n, the size of the array.

Next line contains n space-separated integers.

Output format
Print the largest number formed by arranging these numbers in the list.

Sample Input 1
2

10 2

Sample Output 1
210

Sample Input 2
5

3 30 34 5 9

Sample Output 2
9534330

Constraints
0<= n <=50000

0<= a[i] <= 10^4
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

function largestNumber(arr) {
  let strNums = arr.map(String);

  strNums.sort((a,b) => (b+a).localeCompare(a+b));
  let result = strNums.join('');

  return result[0] === '0'? '0': result;
}

function main() {
  const n = parseInt(readLine(), 10);
  let arr = readIntArr();
  const result = largestNumber(arr);
  console.log(result);
}

/*
input:
2
10 2
output
210

*/