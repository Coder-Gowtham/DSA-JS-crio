/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_STACK_QUEUE/ME_DSA_STACK_QUEUE_MODULE_NEXTLARGERELEMENT/
Given an array A having N elements, the task is to find the next greater element(NGE) for each element of the array in order of their appearance
in the array. If no such element exists, output -1. This should be achieved with a time complexity of O(n).

Input format
There are 2 lines of input
The first line contains an integer N denoting the size of the array.
The second line contains N space separated positive integers denoting the values in the array A.

Output format
Print N space separated integers, which are the next greater element for each array element. If no such greater element exists for any element, output -1

Function definition
You have to implement the given function. It accepts the original array as an argument, and returns the new next greater element array. 

Constraints
1 <= N <= 10^5
0 <= Values in the array <= 10^9

Sample Input 1
4
1 3 2 4
Sample Output 1
3 4 4 -1

Explanation 1
In the array, the next larger element to 1 is 3 , 3 is 4 , 2 is 4 and for 4, there is no such greater element, hence -1.
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
 * @param {number[]} arr
 * @return {number[]}
 */
function nextLargerElement(n, arr) {
    const st = [];
    const ans = [];
    for (let i = n - 1; i >= 0; i--) {
        while (st.length > 0 && arr[i] >= st[st.length - 1]) {
            st.pop();
        };
        if (st.length === 0) {
            ans[i] = -1;
        } else {
            ans[i] = st[st.length - 1];
        }
        st.push(arr[i]);
    }
    return ans;
}
function main() {
    let n = parseInt(readLine(), 10);
    let arr = readIntArr();
    let result = nextLargerElement(n, arr);
    console.log(...result);
}