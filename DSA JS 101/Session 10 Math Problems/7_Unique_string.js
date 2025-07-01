/*
Problem Description
Given a string S.Implement an algorithm to determine if a string has all unique characters.

Input format
A single line that contains the string S.

Output format
Print "Yes"(without quotes) if S has all unique characters "No"(without quotes) otherwise.

Sample Input 1
abcd

Sample Output 1
Yes

Explanation
All characters in "abcd" are unique.

Sample Input 2
abca

Sample Output 2
No

Explanation
All characters in "abca" are not unique, character 'a' repeats two times.

Constraints
1 <= length(S) <= 100000 S contains only english alphabetic characters.


Checklist
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

function isUnique(s) {
  let st = new Set();
  let n = s.length;

  for (let i = 0; i < n; ++i) {
    st.add(s[i]);
  }

  if (st.size === s.length) {
    return true;
  } else {
    return false;
  }
}


function main() {
  let s = readLine();
  let res = isUnique(s);
  if (res) {
    console.log("Yes");
  } else {
    console.log("No");
  }

}