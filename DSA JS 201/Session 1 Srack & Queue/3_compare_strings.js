/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_STACK_QUEUE/ME_DSA_STACK_QUEUE_MODULE_BACKSPACESTRINGCOMPARE/
GFG: https://www.geeksforgeeks.org/dsa/check-if-two-strings-after-processing-backspace-character-are-equal-or-not/
Given 2 strings S and T containing lowercase and '#' characters. You have to check whether these 2 strings are same or not when typed into an editor('#' being the backspace character).


Note: Backspacing an empty string remains an empty string only.

For eg. a#bc means bc, and a##bcd means bcd.

Input format
There are 2t+1 lines of input.

First line contains an integer tests - Number of test cases.
First line of each test case contains a string S.
Second line of each test case contains a string T.

Output format
Print true if the 2 strings are same otherwise false, for each test case print in a different line.

Function definition
You have to complete the given function. It accepts two parameters - the two strings, and returns a boolean value, true if S and T are same and false if not.

Sample Input 1
2
as#sddff#
aa#sddf
a##b
ab

Sample Output 1
true
false

Explanation
In first test case both the strings become "asddf" when typed into an editor.
In second test case the string becomes "b" and "ab" which are not equal.

Constraints
1 <= tests <= 10
1 <= Length of each string <= 10^5
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

// STACK BASED APPROACH
// TC: O(n + m)	SC: O(n + m)
// function backspaceStringCompare(s, t) {
//     let st1 = [];
//     let st2 = [];

//     for (let i = 0; i < s.length; i++) {
//         if (st1.length !== 0 && s[i] === '#') {
//             st1.pop();
//         } else {
//             st1.push(s[i])
//         }
//     }

//     for (let i = 0; i < t.length; i++) {
//         if (st2.length !== 0 && t[i] === '#') {
//             st2.pop();
//         } else {
//             st2.push(t[i]);
//         }
//     }

//     if (st1.length === st2.length) {
//         for (let i = 0; i < st1.length; i++) {
//             if (st1[i] !== st2[i]) {
//                 return false;
//             }
//         }
//         return true;
//     }
//     return false;
// }

//OPTIMSED 2 POINTERS APPROACH
//TC: O(n + m)	SC: O(1) 
function backspaceStringCompare(s, t) {
    let i = s.length - 1;
    let j = t.length - 1;

    while (i >= 0 || j >= 0) {
        let backS = 0;
        while (i >= 0) {
            if (s[i] === '#') {
                backS++;
                i--;
            } else if (backS > 0) {
                backS--;
                i--;
            } else {
                break;
            }
        }

        let backT = 0;
        while (j >= 0) {
            if (t[j] === '#') {
                backT++;
                j--;
            } else if (backT > 0) {
                backT--;
                j--;
            } else {
                break;
            }
        }

        if (i >= 0 && j >= 0 && s[i] !== t[j]) {
            return false;
        }

        if ((i >= 0) !== (j >= 0)) {
            return false;
        }

        i--;
        j--;
    }

    return true;
}


function main() {
    let tests = parseInt(readLine());
    while (tests--) {
        const s = readLine()
        const t = readLine()
        const result = backspaceStringCompare(s, t);
        console.log((result ? "true" : "false"))
    }
}
