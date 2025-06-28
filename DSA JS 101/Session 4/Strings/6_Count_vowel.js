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



function countVowels(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let letter of word) {
        letter = letter.toLowerCase();
        console.log(vowels.includes(letter));

        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count;
}

// NOTE: Please do not modify this function
function main() {
    let word = readLine();
    let result = countVowels(word);
    print(result);
}