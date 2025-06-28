

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

/**
 * @param {string} str
 * @return {boolean}
 */
// function allAlphabetsOrNot(str) {
//     let allAphabets = "qwertyuiopasdfghjklzxcvbnm";
//     allAphabets = allAphabets.split("")
//     let mySet = new Set(str.split(""));

//     for(let ch of allAphabets){
//         if(!mySet.has(ch)) return false;
//     }
//     return true;
// }

//Optimised Solution 

function allAlphabetsOrNot(str) {
    let seen = new Set();

    for (let ch of str.toLowerCase()) {
        if (ch >= 'a' && ch <= 'z') {
            seen.add(ch);
            if (seen.size === 26) return true;  // early exit
        }
    }

    return false;
}

function main() {
    let str = readLine();
    let res = allAlphabetsOrNot(str);
    console.log(res ? "true" : "false");
}