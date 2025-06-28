'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.replace(/\s+/g, " ").trim();
    });
    main();
});

function readLine() {
    return inputString[currentLine++];
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
 * @param {number} x
 * @return {number}
 */
// TODO: Implement this method
function findElement(n, arr, x) {
    for(let i=0;i<n;i++){
        if(arr[i] === x){
            return i
        }
    }
    return -1;
}

// NOTE: Please do not modify this function
function main() {
    let n = parseInt(readLine(), 10);
    let arr = readIntArr();
    let x = parseInt(readLine(), 10);
    let result = findElement(n, arr, x);
    print(result);
}
