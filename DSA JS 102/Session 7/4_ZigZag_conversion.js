/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_LEVEL2_DEBUGGING_PROBLEMS/ME_DSA_LEVEL2_DEBUGGING_PROBLEMS_MODULE_ZIGZAGCONVERSIONDSADEBUG/
You will be given a number N, and a string of the given length, along with a number of rows R. 
You have to arrange the letters of the string in a zigzag pattern, then read off the letters row by row, and return the new string.

For example - consider the string ‘LEARNBYDOING’. Given R = 4, the pattern looks like this :
image
Now, the first row is LY.
The second is EBDG The third is ANON
The fourth is RI. Combining these together, we get ‘LYEBDGANONRI’. You have to return this string.

Input format
First line will contain a number N and a string of size N.
Second line will contain the number of rows R.

Output format
Print the output string in a newline.

Sample Input 1
12 LEARNBYDOING
4
Sample Output 1
LYEBDGANONRI

Explanation
image

The first row - LY
Second row - EBDG
Third row - ANON
Fourth row - RI

Constraints
0<=N<=10000
1<=R<=10000
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


function zigzagConversion(n, s, rows) {
    if (rows === 1 || rows === n) {
        return s;
    }

    let result = "";
    let cycle = 2 * rows - 2;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j + i < n; j += cycle) {
            result += s[j + i];
            if (i !== 0 && i !== rows - 1 && j + cycle - i < n) {
                result += s[j + cycle - i];

            }
        }
    }

    return result;
}


function main() {
    let [n, s] = readLine().split(' ');
    n = parseInt(n);

    let row = parseInt(readLine());

    let zigzagString = zigzagConversion(n, s, row);
    print(zigzagString);
}