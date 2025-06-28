/*
Given an array of integers as input, output the indices of two numbers in the array which add up to a specified target.
Assume that each input would have exactly one solution and you cannot use the same element twice. If 2 different elements have the same value, they can be used.
Print the indices in increasing order.

Input format
First line contains an Integer N that represents the number of elements in the array.
Second line contains N space separated integers, which are members of the array.
Third line contains an integer X, which is the target value.

Output format
Print two space separated indices(in increasing order) of the numbers which add up to the specified target.
*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', () => {
    console.log('[received data]');

    inputString = inputString.trim().split('\n').map(string => {
        return string.replace(/\s+/g, " ").trim();
    });
    main();
});

function readLine() {
        console.log('[received data]');

    return inputString[currentLine++];
}

function readIntArr() {
    let str = readLine();
    str = str.split(" ");
    let arr = [];
    for ( let i = 0; i < str.length; i++ ) {
        arr.push(parseInt(str[i], 10));
    }
    return arr;
}

function print(x) {
    process.stdout.write(x + "");
}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const hm = new Map();
    for(let j=0; j<nums.length; j++){
        let x = target - nums[j];
        if(hm.has(x)){
            let i = hm.get(x);

            return[i, j]
        }
        hm.set(nums[j], j)
    }
    return[0, 0]
}
function main() {
    console.log('Reading input...')
    let n = parseInt(readLine(), 10);
    let nums = readIntArr();
    let target = parseInt(readLine(), 10);
    let result = twoSum(nums, target);
    console.log(result[0], result[1]);
}