/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_STACK_QUEUE/ME_DSA_STACK_QUEUE_MODULE_VALIDPARENTHESIS/
GFG : https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/

Given a string S containing the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
For an input string to be valid:
Open brackets must be closed by the same type of brackets.( can be closed by ) only
Open brackets must be closed in the correct order. ([]) is valid, ([)] is not.

Note: An empty string is also considered valid.

Input format
One line containing a string with a bracket sequence.

Output format
Return "true" if balanced, false otherwise.

Constraints
0 <= | S | <= 10^5

Sample Input 1
()[]{}
Sample Output 1
true

Explanation 1
The given sequence of brackets is valid as per the rules specified.

Sample Input 2
([)]
Sample Output 2
false

Explanation 2
The given sequence of brackets is invalid as per the rules specified.
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


function validParenthesis(s) {
    const st = new Stack();

    for (const char of s) {
        if (char === '(' || char === '[' || char === '{') {
            st.push(char);
        } else {
            let topEle = st.peek()
            if ((topEle === '(' && char === ')') ||
                (topEle === '[' && char === ']') ||
                (topEle === '{' && char === '}')) {
                st.pop()
            } else return false
        }
    }

    if (st.isEmpty()) {
        return true;
    }
    return false;
}

// NOTE: Please do not modify this function
function main() {
    let s = readLine();
    let result = validParenthesis(s);
    console.log(result);
}