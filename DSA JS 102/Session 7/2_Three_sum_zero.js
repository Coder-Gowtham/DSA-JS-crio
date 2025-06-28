/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_LEVEL2_DEBUGGING_PROBLEMS/ME_DSA_LEVEL2_DEBUGGING_PROBLEMS_MODULE_THREESUMDSADEBUG/
Given an array nums of n integers, there are elements a, b, c in nums such that a + b + c = 0

Your task is to identify and rectify the issue causing the error to ensure the code properly returns all unique triplets in the array which gives the sum of zero.
The solution set must not contain duplicate triplets.

Input format
First line will contain a single integer n representing the size of array
Next line will contain N space separated integers representing the array nums.

Output format
Return all the possible triplets.

Sample Input 1
6
-1 0 1 2 -1 -4

Sample Output 1
-1 0 1
-1 -1 2

Explanation
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].

Notice that the order of the output and the order of the triplets does not matter.
Note: List of triplet can be printed in any order

Constraints
3 <= n <= 3000
-10^5 <= nums[i] <= 10^5
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
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    let answer = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {

        let target = -nums[i];
        let front = i + 1;
        let back = nums.length - 1;

        while (front < back) {
            let sum = nums[front] + nums[back];
            if (sum < target)
                front++;
            else if (sum > target)
                back--;
            else {
                let triplet = [nums[i], nums[front], nums[back]];
                answer.push(triplet);

                while (front < back && nums[front] == triplet[1])
                    front++;
                while (front < back && nums[back] == triplet[2])
                    back--;
            }
        }

        while (i + 1 < nums.length && nums[i + 1] == nums[i])
            i++;
    }

    return answer;
}

function main() {
    let n = parseInt(readLine(), 10);
    let nums = readIntArr();
    let result = threeSum(nums);
    for (const ans of result) {
        console.log(...ans);
    }
}