/*
You are given an array of N non-negative integers where each represents the height of a line. N vertical lines are drawn at points marked 1 to n on the x axis as shown in the diagram. Find two lines, which together with the x axis forms a container, such that the container holds the most water. Assume the width of lines to be negligible.

Note: You may not slant the container and n is at least 2.

Input format
The first line consists of an integer, N, denoting the size of the array.
The second line consists of N space separated integers which denote the elements of the array,

Output format
Single integer denoting the capacity of the largest container.
Constraints
2 <= N <= 10^6

Sample Input 1
9
1 8 6 2 5 4 8 3 7

Sample Output 1
49

Explanation 1
The lines of length 8 and 7 form a container that can hold 7*7=49 units of water. Here, the first 7 is the minimum of the two line heights and the second 7 is the number of units they are apart. This is the largest container that can be formed with the given input.
https://www.youtube.com/watch?v=TI3e-17YAlc

Solution:
By using two pointer approach
The intuition behind this approach is that the area formed between the lines will always be limited by the height of the shorter line. Further, Increasing the distance between the lines will increase the area.
Take two pointers, one at the beginning and one at the end of the input height array and maintain a variable maxarea to store the maximum area obtained till now. At every step, we find out the area formed between the values at the two pointers, update maxarea and move the pointer pointing to the shorter line towards the other end by one step.

Solution steps
Use two pointers leftIndex and rightIndex initialized at 0 and n-1
Now compute the area implied by these pointers as (leftIndex-rightIndex)*min(height[leftIndex], height[rightIndex])
if height[leftIndex] < height[rightIndex]then, increment leftIndex by 1 else, decrement rightIndex by 1
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

// Complete the function implementation below
/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
   let answer = 0;

   let left = 0, right = height.length - 1;

   while(left<right){
       let area = Math.min(height[left], height[right]) * (right - left);

       answer = Math.max(area, answer);

       if(height[left] < height[right]) left++;
       else right--;
   }
   return answer;

    
}
function main() {
    let n = parseInt(readLine(), 10);
    let height = readIntArr();
    let result = maxArea(height);
    console.log(result);
}