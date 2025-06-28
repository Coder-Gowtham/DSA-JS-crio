/*
Problem Description
Given a sorted array of integers and a target, find if there’s a pair of elements that add up to the target. Return true if such a pair can be found, and false otherwise.

Input format
There are 3 lines of input.
First line contains an Integer N that represents the number of elements in the array.
Second line contains N space-separated integers, which are members of the array.
Third line contains an integer X, which is the target value.

Output format
Return a boolean, true representing "Present" and false representing “Not Present”

NOTE: Do not return a string ("Present" or “Not Present”
*/

"use strict"; //This line enables strict mode in JavaScript.
//Strict mode helps catch common coding mistakes and "unsafe" actions (like using undeclared variables).
//It makes the code more secure and sometimes faster because it allows the JavaScript engine to optimize the code better.

process.stdin.resume(); //This tells Node.js to start reading from standard input (the input stream). By default, Node.js pauses the standard input stream, so you need to call resume() to begin receiving input.
process.stdin.setEncoding("utf-8"); //This sets the character encoding for the input stream to UTF-8, meaning that input will be received as readable text (instead of raw binary data). Without this, you'd get Buffer objects instead of strings when reading input.

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  //.on is an event listener. The callback function is called with a chunk of the input — this chunk is stored in inputStdin
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  //This sets up an event listener for when the input stream ends
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      //First, inputString.trim() removes any leading/trailing whitespace from the whole input.Then, .split('\n') splits the input into an array of lines — one for each line of input the user entered. .map(string => { ... }) applies a function to each line of input individually.
      // return string.replace(/\s+/g, " ").trim(); /string.replace(/\s+/g, " "): replaces multiple spaces or whitespace characters (like tabs) with a single space. .trim(): removes leading and trailing spaces on that line
    });
  main(); //contains the core logic of your program. Now that the input is cleaned and organized line-by-line, main() can easily work with it.
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

/* Alternate and more concise 
function readIntArr() {
    return readLine().split(" ").map(x => parseInt(x, 10));
}
    */

function print(x) { //Will print the output in the same line unlike console.log() which print in the next line
  process.stdout.write(x + "");
}
/**
 * @param {number} n
 * @param {number[]} arr
 * @param {number} target_sum
 * @return {boolean}
 */
function twoSumInSortedArray(n, arr, target_sum) {}

function main() {
  let n = parseInt(readLine());
  let arr = readIntArr();
  let target_sum = parseInt(readLine());

  let isPresent = twoSumInSortedArray(n, arr, target_sum);
  if (isPresent) {
    print("Present");
  } else {
        ("Not Present");
  }
}

/* 
Crio Methodology

Milestone 1: Understand the problem clearly
1. Ask questions & clarify the problem statement clearly.
2. Take an example or two to confirm your understanding of the input/output

Milestone 2: Finalize approach & execution plan
1. Understand what type of problem you are solving and see if you can recollect solving similar problems in the past
      a. Obvious logic (this would only test ability to convert logic to code)
      b. Figuring out logic
      c. Knowledge of specific algorithm, data structure or pattern
      d. Knowledge of specific domain or concepts
      e. Mapping real world into abstract concepts/data structures
2. Brainstorm multiple ways to solve the problem and pick one based on the TC/SC requirements
3. Get to a point where you can explain your approach to a 10 year old

Milestone 3 : Come up with an “Instruction Manual” for a 10 year old
1. Take a stab at the high-level logic & write it down like a detailed Instruction Manual for a 10 Year old where each line of the manual can be expanded into a logical line(s) of code.
2. Try to offload logic out of the main section as much as possible by delegating to functions.

Milestone 4: Code by expanding your 10 Year Old’s "Instruction Manual”
1. Run your code snippets at every logical step to test correctness (Helps avoid debugging larger pieces of code later)
2. Make sure you name the variables, functions clearly.
3. Use libraries as much as possible

Milestone 5: Prove that your code works using custom test cases
1. Make sure you check boundary conditions and other test cases you noted in Milestone 1
      a. If compiler is not available, dry run your code on a whiteboard or paper
2. Suggest optimizations if applicable during interviews
*/
