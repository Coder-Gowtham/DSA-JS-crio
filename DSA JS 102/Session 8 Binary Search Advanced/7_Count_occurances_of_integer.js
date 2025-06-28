/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_ARRAY_BINARY_SEARCH/ME_DSA_ARRAY_BINARY_SEARCH_MODULE_COUNTOCCURRENCES/
GFG: https://www.geeksforgeeks.org/dsa/count-number-of-occurrences-or-frequency-in-a-sorted-array/
Given a sorted integer array of length n with possible duplicate elements. Find the number of occurrences of an integer k using binary search.

Input format
There are 2 lines of input.
First line contains 2 space separated integers n, k - Number of elements, the integer k.
Second line contains n space separated integers - The integer array.

Output format
Print the number of occurrences of the integer k.

Sample Input 1
5 2
-1 2 2 4 7
Sample Output 1
2
Explanation 1
The integer 2 occurs 2 times in the given array.

Constraints
1 <= n <= 10^6
-10^9 <= k <= 10^9
-10^9 <= A[i] <= 10^9

APPROACH
The first occurrence will be the A[i] = k such that i = 0, or A[i-1] < k. 
Note that we include i = 0 check also as k could be the first element of the array.
Similarly, the last occurrence will be the A[i] = k such that i = n-1, or A[i+1] > k.
Once we have these two, our answer will be j-i+1, the count of elements between and including i and j.
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
 * @param {number} k
 * @param {number[]} arr
 * @return {number}
 */
function countOccurrences(n, k, arr) {
    function findFirst() {
        let left = 0, right = n - 1, result = -1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === k) {
                result = mid;
                right = mid - 1; // keep looking left
            } else if (arr[mid] < k) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }

    function findLast() {
        let left = 0, right = n - 1, result = -1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === k) {
                result = mid;
                left = mid + 1; // keep looking right
            } else if (arr[mid] < k) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }

    const first = findFirst();
    if (first === -1) return 0; // not found
    const last = findLast();
    return last - first + 1;
}


function main() {
    let [n, k] = readIntArr();
    let arr = readIntArr();

    let ans = countOccurrences(n, k, arr);
    print(ans);
}