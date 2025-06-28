/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_ARRAY_TWO_POINTERS/ME_DSA_ARRAY_TWO_POINTERS_MODULE_MAXSUMTRIPLET/
https://www.geeksforgeeks.org/find-maximum-sum-triplets-array-j-k-ai-aj-ak/
Given an array nums, you need to find the maximum sum of triplet (nums[i] + nums[j] + nums[k]) such that 0 <= i < j < k and nums[i] < nums[j] < nums[k]. If no such triplet exists print 0.

Input format
There are 2t+1 lines of input
First line contains an integer t - No of test cases.
First line of each test case contains an integer n - No of elements in the array.
Second line of each test case contains N space separated integers - The array nums.

Output format
For each test case print the answer in a new line.

Sample Input 1
3
7
3 7 4 2 5 7 5
4
5 2 4 5
3
3 2 1

Sample Output 1
16
11
0

Explanation 1
In the first case valid triplets are: [3,4,5], [3,4,7], [4,5,7], [2,5,7]. Out of these [4,5,7] has the maximum sum, 16
In the second case, it’s [2, 4, 5] with sum 11
In the third case there are no valid triplets.

Constraints
1 <= t <= 100
3 <= n <= 300
1 <= nums[i] <= 10^9
It is guaranteed that the sum of n over all test cases is less than 3000.
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
 * @param {number} n
 * @param {number[]} nums
 * @return {number}
 */



function getIIndex(j, nums) {

    let maxI = -1;
    for (let i = 0; i < j; i++) {
        if (nums[i] < nums[j] && (maxI === -1 || nums[i] > nums[maxI])) {
            maxI = i;
        }
    }
    return maxI;
}

function getKIndex(j, nums) {
    let maxK = -1;
    for (let k = j + 1; k < nums.length; k++) {
        if (nums[k] > nums[j] && (maxK === -1 || nums[k] > nums[maxK])) {
            maxK = k;
        }
    }
    return maxK;
}


function maxSumTriplet(n, nums) {
    let ans = 0;

    for (let j = 1; j < n - 1; j++) {
        let sum = 0;
        const idxI = getIIndex(j, nums);
        const idxK = getKIndex(j, nums);

        if (idxI === -1 || idxK === -1) continue;

        sum = nums[idxI] + nums[j] + nums[idxK];

        ans = Math.max(ans, sum)
    }
    return ans;
}
//Time Complexity: O(n²)
//Space Complexity: O(1)

function main() {
    let t = parseInt(readLine(), 10);
    while (t--) {
        let n = parseInt(readLine(), 10);
        let nums = readIntArr();
        let ans = maxSumTriplet(n, nums);
        console.log(ans);
    }
}