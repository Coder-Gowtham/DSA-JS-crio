/*
Problem Description
Write a program that takes a list of words arr[] as input and returns the most occurring word in arr[].
It is guaranteed that if there are multiple words with the same frequency, the program should return the lexicographically minimum string among them.

Input format
The first line contains an integer N, the number of words in the array.
The next N lines contain the words in the array.

Output format
Return the most occurring word in the array.

Sample Input 1
4
hello
world
crio
crio
Sample Output 1
crio

Explanation
In this case, "crio" is the most frequent word, occurring 2 time.

Sample Input 2
5
crio
for
learn
a
learn

Sample Output 2
learn

Explanation
"learn" is the most frequent word in the given array, occurring 2 times.

Constraints
1 <= N <= 10^5

1 <= arr[i].size <= 10
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

function readString() {
    return readLine();
}

/**
 * @param {number} N
 * @param {string[]} arr
 * @return {string}
 */
function maxRepeatingWord(N, arr) {
    let myMap = new Map();

    for (let i of arr) {
        myMap.set(i, (myMap.get(i) || 0) + 1);
    }

    let maxCount = 0;
    let result = '';

    for (let [word, count] of myMap.entries()) {
        if (count > maxCount) {
            maxCount = count;
            result = word;
        }

        if (count === maxCount && word < result) {
            maxCount = count;
            result = word;
        }
    }

    return result;
}

function main() {
    let N = readInt();
    let arr = [];
    for (let i = 0; i < N; i++) {
        arr.push(readString());
    }

    let res = maxRepeatingWord(N, arr);
    console.log(res);
}

