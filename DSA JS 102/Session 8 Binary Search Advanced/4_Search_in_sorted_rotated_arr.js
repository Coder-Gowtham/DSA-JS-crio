/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_ARRAY_BINARY_SEARCH/ME_DSA_ARRAY_BINARY_SEARCH_MODULE_SEARCHINROTATEDSORTEDARRAY/
GFG: https://www.geeksforgeeks.org/dsa/search-an-element-in-a-sorted-and-pivoted-array/
An array sorted in ascending order is rotated about a pivot unknown to you. Such an array is referred to as a rotated sorted array or a sorted-pivoted array. For example : [1,2,3,4,5] is a sorted array while [3,4,5,1,2] is a rotated sorted array.
You are given a rotated sorted array, and some integer values. You have to find each value’s location in the array. If the value is present, return the index in which it is stored ( 0 based indexing) , otherwise if not found return -1.

Function Definition
Complete the function search in the code editor for a language of your choice.
search has the following parameters :
nums : An array of numbers having its values in a rotated sorted order
target : An integer representing the number to be searched in nums
search returns :
int : An integer denoting the index of the target to be searched. If target not present returns -1.

Assume the array doesn’t have duplicates.

Input format
There are Q+3 lines of input.

First line will have a single integer N denoting the size of the array
Second line will contain N space separated integers
Third line will contain a single integer Q denoting the number of targets to be searched.
Next Q lines will have a single integer,X in each line denoting the target value. You have to search for each of these target values in turn.

Output format
One line per output for each target search, with -1 or the index at which the integer is found.

Constraints
1 <= N <= 10^6 where N denotes the size of the input array
1 <= A[i] <= 10^9 where A[i] denotes the ith element of the input array
1 <= Q <= 10^6 where Q denotes the number of targets to be searched
1 <= X <= 10^9 where X denotes the target element to be search

Sample Input 1
7
4 5 6 9 10 2 3
2
3
8
Sample Output 1
6
-1

Explanation 1
The element 3 is found in the array at index 6. Element 8 is not found in the array, thus -1.

Sample Input 2
6
5 6 8 1 3 4
1
0
Sample Output 2
-1

Explanation 2
The element 0 is not found in the array.
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
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
function search(nums, target) {
    let n = nums.length;
    let left = 0, right = n - 1, mid;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;
        else if (nums[left] <= nums[mid]) {
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        else {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}

function main() {
    let n = parseInt(readLine(), 10);
    let nums = readIntArr();
    let q = parseInt(readLine(), 10);
    while (q--) {
        let target = parseInt(readLine(), 10);
        let result = search(nums, target);
        console.log(result);
    }
}
