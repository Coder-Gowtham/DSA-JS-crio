/*
Problem Description
Given an array in which all numbers except two are repeated once. (i.e. we have 2k+2 numbers and k numbers are occurring twice and 
remaining two have occurred once).

Find those two numbers in the most efficient way. Return the two numbers in a sorted manner.

Input format
First line of input contains N which denotes the number of elements in the input array.
The next line of input contains N space separated integers.

Output format
Return the two numbers which are present only once in the array in a sorted manner(i.e smaller number first).

Sample Input 1
8
2 3 7 9 11 2 3 11
Sample Output 1
7 9

Explanation
All numbers except 7 and 9 are repeated once.

Constraints
2<=N<=100000
1<=arr[i]<=100000

APPRAOCH:
Yes, we can use XOR to solve this problem in a more efficient way.
Let x and y be the non-repeating elements we are looking for and arr[] be the input array.
Firstly, let’s calculate the XOR of all the elements in the given array. xor = arr[0] ^ arr[1] ^ arr[2] ..... arr[n-1].
All the bits that are set in xor will be set in one non-repeating element (x or y) and not in others.
If we take any set bit of xor and divide the elements of the array in two sets – one set of elements with the same bit set and another set with the same bit not set.
By doing so, we will get x in one set and y in another set. Now if we do XOR of all the elements in the first set, 
we will get the first non-repeating element, and by doing the same in other sets we will get the second non-repeating element.

OPTIMAL APPROACH:
Xor all the elements of the array into a variable : sum, this way all the elements present twice in an array will get removed as the Xor of an element with itself gives 0.
Thus, we will be left with the Xor of the two required numbers.
Now we will take 2’s Complement of sum i.e (-sum) and store it in a variable.
Now, we want to get a number that contains only the rightmost set bit of the sum. For that, bitwise And the 2’s complement of sum with the sum. Store this number in a variable named set_bit.
This variable will help us divide the array into two groups, one that has this bit set, and another that doesn't. The two required numbers have opposite parity on this bit, which will therefore help us to isolate each one of them into two different groups.
Initialize two variables, sum1 and sum2 and set them both to 0.
We compute bitwise & of the array elements with the set_bit, if the answer comes out to be zero, we Xor the number with sum1, else, 
we Xor the number with sum2.
Same numbers will cancel each other, thus giving us the two required numbers in sum1 and sum2.
We can thus return these two numbers.
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

/**
 * @param {number} N
 * @param {number[]} nums
 * @return {number[]} 
 */
function twoNonRepeatingNumbers(N, nums) {
    let xor = 0;

    for (let i = 0; i < N; i++) {
        xor = xor ^ nums[i];
    };

    let rightMostSetBit = xor & (-xor);
    let group1 = 0, group2 = 0;

    for (let i = 0; i < N; i++) {
        if ((nums[i] & rightMostSetBit) > 0) {
            group1 = group1 ^ nums[i];
        }
        else {
            group2 = group2 ^ nums[i];
        }
    }

    if (group1 > group2) {
        return [group2, group1];
    }
    return [group1, group2];
}

function main() {
    const [N] = readLine().split(" ").map(Number);
    const nums = readIntArr();
    const result = twoNonRepeatingNumbers(N, nums);
    for (let i = 0; i < 2; i++)
        process.stdout.write(`${result[i]} `);
}

