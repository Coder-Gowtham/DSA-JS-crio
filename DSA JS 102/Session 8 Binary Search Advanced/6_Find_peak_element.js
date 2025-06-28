/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_ARRAY_BINARY_SEARCH/ME_DSA_ARRAY_BINARY_SEARCH_MODULE_PEAKELEMENT/assessment/
A peak element is an element that is strictly greater than its neighbors. Given an integer array nums, find a peak element, and return its index. 
If the array contains multiple peaks, return the index to any of the peaks. You may imagine that nums[-1] = nums[n] = -∞. 
You must write an algorithm that runs in O(log n) time.

Input format
The first line contains an integer N, the size of the input array. The second line contains N integers, the elements of the given array.

Output format
Return a single integer, the index of the peak element in the array (0-based).

Sample Input 1
4
1 2 3 1
Sample Output 1
2
Explanation
3 is a peak element and your function should return the index number 2.

Constraints
1 <= nums.length <= 1000
1 <= nums[i] <= 2^31 - 1
nums[i] != nums[i + 1] for all valid i

APPROACH:
The problem statement asks for an O(log N) time approach, this gives us a hint of what algorithm can be used to solve the problem.
We can solve the problem by using binary search.
Here’s the algorithm -
    Initialize two variables, start and end, initialize start = 0 and end = N-1, where N is the length of the array.
    Continue iterating until start <= end.
    Compare the middle element with its neighbors -
        # If it's greater than it's neighbours, return the index. Index of mid = (start+end)/2. 
            If mid = 0 only check with right neighbour and if mid = n-1 only check with left neighbour.
        # Else, if the element on the left side of the middle element is greater than the middle element, 
            we can be sure that some peak of the array lies to the left side, thus we can remove the right half of the array from our search space. We set end = mid - 1 and move ahead.
        # Otherwise, the peak must lie to the right. 
            We then set the search space as the right of the middle element to search for the peak by setting start = mid + 1.
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
 * @param {number} N
 * @param {number[]} nums
 * @return {number}
 */
function peakElement(N, nums) {
    let n = nums.length;
    let left = 0, right = n - 1, mid;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (mid === 0 && nums[0] > nums[1]) return mid;
        if (mid === n - 1 && nums[n - 1] > nums[n - 2]) return mid;
        if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) {
            return mid;
        };

        if (nums[mid] < nums[mid - 1]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        };
    };
};

function main() {
    const [N] = readLine().split(" ").map(Number);
    const nums = readIntArr();
    console.log(peakElement(N, nums));
}