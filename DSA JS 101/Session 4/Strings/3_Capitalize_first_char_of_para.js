/*
Problem Description
Given a paragraph of words, capitalize the first character of each word and return the paragraph.

Input format
First line contains a string - The paragraph.

Output format
Print the paragraph after capitalizing each word.

Sample Input 1
the quick Brown fox jumps over The lazy dog.

Sample Output 1
The Quick Brown Fox Jumps Over The Lazy Dog.

Explanation
Each word has it’s first character capitalized
Constraints
Length of paragraph < 100.
The paragraph contains spaces, lowercase and uppercase characters.

TC: O(n)
SC: O(n)
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

function readStringArr() {
    return readLine().split(" ");
}

function print(x) {
    process.stdout.write(x + "");
}


/**
 * @param {string} paragraph
 * @return {string}
 */


// TODO: Implement this method
// function capitaliseBasic(paragraph) {
//     let result = "";

//     for (let i = 0; i < paragraph.length; i++) {

//         if (i == 0 || paragraph[i - 1] == " ") {
//             result += paragraph[i].toUpperCase();
//         } else {
//             result += paragraph[i];
//         }
//     }

//     return result;
// }

// USING SPLIT, JOIN, SLICE

function capitaliseBasic(paragraph) {

    return paragraph
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

}



// NOTE: Please do not modify this function
function main() {
    let paragraph = readLine();
    let result = capitaliseBasic(paragraph);
    print(result);
}