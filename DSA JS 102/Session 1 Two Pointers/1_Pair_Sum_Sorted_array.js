/*
Problem Description
Given a sorted array of integers and a target, find if there’s a pair of elements that add up to the target. Return true if such a pair can be found, and false otherwise.

Input format
There are 3 lines of input.

First line contains an Integer N that represents the number of elements in the array.
Second line contains N space-separated integers, which are members of the array.
Third line contains an integer X, which is the target value.

Output format
Return a boolean, true representing "Present" and false representing “Not Present”

NOTE: Do not return a string ("Present" or “Not Present”)

Constraints
2 <= Length of array <= 10^5
1 <= Range of values <= 10^6

Sample Input 1
5
2 4 5 8 9
7

Sample Output 1
Present

Explanation 1
Since 0 and 2 are the indices where the numbers 2 and 5 which add up to 7 are seen, the function returns true which leads to "Present" being printed as the output.
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

function twoSumInSortedArray(n, arr, target_sum) {
    let left = 0;
    let right = n-1;
    

    while(left < right){
        let sum = arr[left] + arr[right]
        if (sum === target_sum) return true;
        else if(sum < target_sum) left++;
        else right--;
    }
    return false;
}


function main() {
    let n = parseInt(readLine());
    let arr = readIntArr();
    let target_sum = parseInt(readLine());

    let isPresent = twoSumInSortedArray(n, arr, target_sum);
    if(isPresent) {
        print("Present");
    }
    else {
        print("Not Present")
    }
}