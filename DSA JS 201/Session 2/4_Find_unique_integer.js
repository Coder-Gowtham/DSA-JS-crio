/*
Problem Description:https://www.crio.do/learn/PSDS/ME_DSA_HASH/ME_DSA_HASH_MODULE_FIRSTUNIQUEINTEGER/
GFG: https://www.geeksforgeeks.org/non-repeating-element/
Hello Crio Warriors. You don't know me, but I know you and I want to play a game. Here's what happens if you lose. 
The question you are looking for is loaded with marks. When the timer in the back goes off, your marks will be permanently ripped off. 
Here is the question:

All the Bollywood superstars from the likes of Shah Rukh to Amitabh are lining up to entertain our Crio warriors. 
However due to certain security concerns they also brought their body doubles with them. 
A superstar can accompany any number of body doubles they want. Each superstar is represented by an integer, 
and all body doubles have the same integer representing them as the superstart.

We have to find the first superstar who came to entertain Crio warriors without a body double. 
If all the superstars have arrived with a body double then print -1.

Input format
You are given an integer N denoting the number of Bollywood superstars who arrived at Crio station, 
followed by N integers where ith integer denotes the Bollywood superstar.

Output format
You are required to output a single integer denoting the bollywood superstar who arrived without a body double. 
If all the superstars arrived with a body double print a -1

Constraints
1 <= N <= 1e5
0 <= Superstar <= 1e9

Sample Input 1
4
9 6 7 6
Sample Output 1
9
Explanation 1
Among the superstars who attended, 6 came with a body double whereas 9 and 7 came without any body doubles. The first superstar who arrived without a body double is 9.

Sample Input 2
5
7 6 1 6 1
Sample Output 2
7
Explanation 2
Among the superstars who attended, only 7 came without a body double.
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
 * @return {number}
 */
function firstUniqueInteger(n, arr) {
    const map = new Map();
    for (const e of arr) {
        map.set(e, (map.get(e) || 0) + 1)
    };

    for (const [key, value] of map) {
        if (value === 1) return key;
    }
    return -1;
}
function main() {
    let n = parseInt(readLine(), 10);
    let arr = readIntArr();

    let result = firstUniqueInteger(n, arr);
    console.log(result);
}