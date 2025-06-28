/*
https://www.crio.do/learn/PSDS/ME_DSA_BASIC_PROBLEM_SOLVING/ME_DSA_BASIC_PROBLEM_SOLVING_MODULE_REVERSECHARACTERSOFWORDDSA/
Problem Description
Write a program to reverse the words present in a sentence.

Input format
First line contains an string consisting of words separated by spaces.

Output format
Return the string with it's words reversed.

Sample Input 1
abc def ghi
Sample Output 1
cba fed ihg
Explanation
abc reversed is cba, def reversed is fed, ghi reversed is igh.

Constraints
1 <= str.length <= 10^5
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
 * @param {String} s
 * @return {String}
 */
// function reverseCharacters(str) {
//     let result = "";
//     for(let i=0; i<str.length; i++){
//         if(str[i+1]==" " || i == str.length -1){

//             let word ="";
//             for(let j=i; j>=0; j--){
//                 if(str[j]==" "){
//                     break;
//                 }

//                 word += str[j];
//             }

//             if(result == ""){
//                 result = word;
//             } else{
//             result = result + " " + word
//             }
//         }
//     }

//     return result;
// }


//USING SLIPT

function reverseCharacters(str) {
    let result = str.split("");    

    for(let i=0; i<str.length; i++){
        let left = i;

        while(i<str.length && str.charAt(i)!== " " ){
            i++;
        }

        let right = i-1;

        reverse(result,left, right);
    }

     return result.join("");



}

function reverse(result,left, right){

    while(left<right){
        let temp = result[left];
        result[left] = result[right];
        result[right] = temp;

        left++;
        right--;
    }

}

function main() {
    let str = readLine();
    let ans = reverseCharacters(str);
    console.log(ans);
}