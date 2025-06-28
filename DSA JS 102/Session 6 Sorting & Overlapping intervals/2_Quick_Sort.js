/*
Problem Description
You are given an array arr. You need to sort the array arr using quick sort.
Note :- You should sort the array arr using quick sort only.

Input format
First line will contain a single integer N.
Second line will contain N space separated integers representing array elements.

Output format
Output the array space separated in a single line or simply return a sorted array.

Sample Input 1
5 4 3 1 2 5
Sample Output 1
1 2 3 4 5

Explanation
Taking an array like [5, 4, 3, 1, 2], Quick Sort begins by choosing a pivot, often the last element, and partitions the array by rearranging elements on either side of the pivot.
Recursive calls are then applied to the subarrays. For instance, in the given array, the pivot 2 is chosen, leading to the partitioned array [1, 2, 3, 5, 4].
Further recursive calls and pivot selections result in a sorted array [1, 2, 3, 4, 5].

Constraints
1 <= N <= 100000
1 <= arr[i] <= 10000000
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

function partition(arr, left, right) {
    let pivot = arr[right];
    let i = left - 1; // i+1 is the partition index

    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    //i+1 is the partition index
    //swap arr[i+1] with arr[right]

    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1;
}

function quickSortImple(arr, left, right) {
    if (left >= right) return;

    let partion_index = partition(arr, left, right);

    quickSortImple(arr, left, partion_index - 1);
    quickSortImple(arr, partion_index + 1, right);

}
function quickSort(n, arr) {
    quickSortImple(arr, 0, n - 1);
    return arr
}

function main() {
    let n = parseInt(readLine(), 10);
    let arr = readIntArr();
    let result = quickSort(n, arr);
    console.log(...result);
}