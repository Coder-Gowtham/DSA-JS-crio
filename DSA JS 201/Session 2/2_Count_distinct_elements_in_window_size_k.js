/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_HASH/ME_DSA_HASH_MODULE_COUNTDISTINCTELEMENTS/
GFG: https://www.geeksforgeeks.org/dsa/count-distinct-elements-in-every-window-of-size-k/
VID: https://www.youtube.com/watch?v=NieY_gEQ5a8
Given an array of N elements and an integer B, you have to find the count of distinct numbers in all windows of size B.

You have to return an array of size N-B+1 where i'th element in the array is the number of distinct elements in sequence Ai,
Ai+1 ,..., Ai+B-1. If B > N, return an empty array.

Input format
There are 2 lines of input
First line contains two space separated integers N and B.
Second line contains N space separated integers representing the array A.

Output format
Return the array space separated in the first line.

Function definition
You have to implement the given function. It accepts three arguments - n, b and the input array. You have to return the new array as described.

Sample Input 1
6 3
1 2 1 3 4 3
Sample Output 1
2 3 3 2

Explanation
First range will be [1,2,1] , in which number of distinct elements are 2
Second range will be [2,1,3], in which number of distinct elements are 3
Third range will be [1,3,4], in which number of distinct elements are 3
Fourth range will be [3,4,3], in which number of distinct elements are 2

Constraints
1<=N<=100000

1<=B<=100000

1<=Ai<=10000
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

/**
 * @param {number} n
 * @param {number[]} arr
 * @param {number} b
 * @return {number[]}
 */
function countDistinctElements(n, b, arr) {
    const map = new Map();
    let i = 0, j = 0;
    const ans = [];
    while (j < n) {
        map.set(arr[j], (map.get(arr[j]) || 0) + 1);
        if (j - i + 1 === b) {
            ans.push(map.size);
            map.set(arr[i], map.get(arr[i]) - 1);
            if (map.get(arr[i]) == 0) {
                map.delete(arr[i]);
            };
            i++;
        }
        j++;
    }
    return ans;
}

function main() {
    let [n, b] = readIntArr();
    let arr = readIntArr();
    let result = countDistinctElements(n, b, arr);
    console.log(...result);
}
