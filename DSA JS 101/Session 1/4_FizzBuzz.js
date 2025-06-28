/*
Problem Description
Implement the function fizzBuzz() that:

Accepts a number argument n
Write a program that outputs the string representation of numbers from 1 to N,
For multiples of three, it should output "Fizz" instead of the number.
For multiples of five, output "Buzz" instead of the number.
For numbers that are multiples of both three and five, output "FizzBuzz".
For numbers that are multiples of neither three nor five, output the number itself as a string.

Write a program that outputs the string representation of numbers from 1 to N.
But for multiples of three it should output "Fizz" instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Input format
First line contains an integer representing the value of N.

Output format
Return an array of strings where each string is either Fizz (for multiples of 3 and NOT 5) or Buzz (for multiples of 5 and NOT 3) or FizzBuzz (for multiples of BOTH 3 and 5) or an integer (For multiples of NEITHER 3 NOR 5).

Sample Input 1
15

Sample Output 1
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz

Optimization:
Create Variables count3, and count5 starting from 1.

For each number, check if count3 == 3 and count5 == 5, then print "FizzBuzz".
If it's only count3 == 3 print "Fizz".
If it's only count5 == 5, print "Buzz".
If it's neither, print the number itself.
Increment count3 and count5 by 1.
If count3 > 3, set it back to count3 as 1.
If count5 > 5, set it back to count5 as 1.

 1. Modulo (%) is computationally heavier than simple comparisons
% (modulo) involves division, which is more expensive than:

A simple equality check (===)
An increment (++)
A reset (count = 1)
Modern CPUs and JavaScript engines optimize % quite well, but:
It still involves division-like logic.
On very low-level hardware or tight loops, the cost adds up.
*/

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
    for ( let i = 0; i < str.length; i++ ) {
        arr.push(parseInt(str[i], 10));
    }
    return arr;
}

function print(x) {
    process.stdout.write(x + "");
}
/**
 * @param {number} n
 * @return {string[]}
 */
// function fizzBuzz(n) {
//     let arr = [];

//     for(let i=1; i<=n;i++){
//     if(i%3===0 && i%5 ===0){
//         arr.push( "FizzBuzz");
//     } else if(i%3===0){
//         arr.push( "Fizz");
//     } else if(i%5===0){
//         arr.push( "Buzz");
//     } else{
//         arr.push(`${i}`);
//     }
//     }

//     return arr;
// }

//Optimised approach

function fizzBuzz(n) {
    let arr = [];
    let count3 = 1;
    let count5 = 1;

    for(let i=1; i<=n;i++){
        if(count3 == 3 && count5 == 5) {
            arr.push("FizzBuzz");
            count3=1;
            count5=1;
            }
        else if(count3 === 3) {
            arr.push("Fizz");
            count3=1;
            count5++;
        } else if(count5 == 5){
            arr.push("Buzz");
            count5=1;
            count3++;
        } else{
            arr.push(`${i}`);
            count3++;
            count5++;
        } 
    }

    return arr;
    
}
function main() {
    let n = parseInt(readLine(), 10);
    let result = fizzBuzz(n);
    for (const ans of result) {
        console.log(ans);
    }
}
