/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_ARRAY_BINARY_SEARCH/ME_DSA_ARRAY_BINARY_SEARCH_MODULE_KTHSMALLESTELEMENTINMATRIX/
RESOURCE; 
Given nxn matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.
Note that it is the kth smallest element in the sorted order, not the kth distinct element.

Input format
First line contains two integers. N, denoting the size of the square matrix and K where we have to find the Kth Smallest element.
Next N lines contain N integers each denoting the elements of the matrix.

Output format
Single containing one integer denoting the Kth smallest element.

Sample Input 1
3 8
1 5 9
10 11 13
12 13 15
Sample Output 1
13

Explanation 1
If written in non-decreasing order, elements are,
1 5 9 10 11 12 13 13 15

Hence, 8th smallest element is 13.

Constraints
1<=N<=1000
0<=Ai<=10^9
1<=K<=N^2

APPROACH: 
The optimal approach involves binary search.
We know the range of values in the matrix is between the top left cell value and bottom left cell value. Therefore, our answer also lies in this range. We can apply a binary search in this range for our answer.
But how do we check the rank of the element we found in our binary search. A linear search along the matrix won’t do us any good. So we apply a binary search here too.
But how do we apply a binary search here?
Since each row of the given matrix is sorted we can check in log(n) time the rank of our element in a particular row. So, we apply a binary search on each row and add all the ranks to get the rank of an element in our matrix. This takes O(n*log(n)) time.
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
* Function to find the kth smallest element in a sorted matrix.
* @param {number[][]} matrix
* @param {number} k
* @return {number}
*/

function countLesserEqualElements(matrix, mid) {
    let n = matrix.length;

    let count = 0;
    let col = n - 1;

    for (let row = 0; row < n; row++) {
        while (col >= 0 && matrix[row][col] > mid) {
            col--;
        }
        count += col + 1;
    }
    return count;
}

function kthSmallestElementInMatrix(matrix, k) {
    let n = matrix.length;
    let left = matrix[0][0];
    let right = matrix[n - 1][n - 1];
    let mid = 0, ans = -1;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        if (countLesserEqualElements(matrix, mid) >= k) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return ans;

}

function main() {
    let [n, k] = readIntArr();
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix.push(readIntArr());
    }
    let result = kthSmallestElementInMatrix(matrix, k);
    console.log(result);
}
