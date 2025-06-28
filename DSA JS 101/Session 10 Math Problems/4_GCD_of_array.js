/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_BASIC_MATH_DEBUGGING/ME_DSA_BASIC_MATH_DEBUGGING_MODULE_GCDOFARRAYDSA/
Given an array of numbers, find GCD of the array elements.
The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

Input format
First line contains n, the number integers.
Second line contains n space separated integers.

Output format
Return the gcd of array.

Sample Input 1
4
4 6 8 16
Sample Output 1
2

Explanation
gcd(4,6,8,16) = 2, as 2 is the greatest number that divides all four numbers

Constraints
2 <= n <= 10^3
1 <= nums[i] <= 10^3
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

function gcd(a, b){
    if(b==0) return a;
    return gcd(b, a%b);
}



function gcdOfArray(n,arr) {
    let ans =0;

    for(let i=0;i<n;i++){
        ans = gcd(arr[i], ans);
    }

    return ans;
    
}

function main() {
    let n = parseInt(readLine());
    let arr = readIntArr();
    let res = gcdOfArray(n,arr);
    console.log(res);
}