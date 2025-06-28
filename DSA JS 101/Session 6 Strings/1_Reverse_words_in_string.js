/*
Problem Description
A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
Return a string of the words in reverse order concatenated by a single space.
Note that s may contain leading or trailing spaces or multiple spaces between two words.
The returned string should only have a single space separating the words.
Do not include any extra spaces.

Input format
String s.
Output format
The function should return a string of the words in reverse order concatenated by a single space.

Sample Input 1
hello world
Sample Output 1
world hello

Explanation
The given words after being reversed gives:world hello
Your reversed string should not contain leading or trailing spaces.

Constraints
1 <= s.length <= 10^5
s contains English letters (upper-case and lower-case), digits, and spaces ' '.
There is at least one word in s.
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
    // Automatically run main when 2 lines of input are received
    if (inputLines.length === 2) {
        rl.close(); // triggers rl.on('close')
    }
});

rl.on('close', () => {
    main();
});

function readLine() {
    return inputLines.shift();
}

function print(x) {
    process.stdout.write(x + "");
}
/**
 * @param {string} s
 * @return {string}
 */

function reverseWordsInAString(s) {
    let result = "";
    let n = s.length;

    for (let i = n - 1; i >= 0; i--) {

        if (i == 0 || s[i - 1] == ' ') {

            let word = '';
            for (let j = i; j < n; j++) {
                if (s[j] == ' ') {
                    break
                };
                word += s[j];
            }

            if (result == "") {
                result = word;
            } else {
                result = result + " " + word;
            }

        }
    }
    return result
}

//Using Split
// function reverseWordsInAString(s) {
//     let str = s.split(" ");
//     let filteredArr = [];

//     for(let i=0; i<str.length; i++){
//         if(str[i] !== " "){
//             filteredArr.push(str[i]);
//         }
//     }

//     return filteredArr.reverse().join(" ");
// }


function main() {
    var s = readLine();
    console.log(reverseWordsInAString(s));
}