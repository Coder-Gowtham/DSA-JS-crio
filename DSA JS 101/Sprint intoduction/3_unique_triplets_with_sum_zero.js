/*
https://www.crio.do/learn/PSDS/ME_DSA_FOUNDATION/ME_DSA_FOUNDATION_MODULE_THREESUM/
Given an array *nums*, find all unique triplets (group of 3 numbers) such that their sum is 0. There should be no duplicates i.e. no triplet should be repeated.

Input format
The first line consists of an integer, N, denoting the size of the array.
The second line consists of N space separated integers which denote the elements of the array, nums.

Output format
You must return all such unique triplets which sum to 0 from the given array.

Constraints
0 <= N <= 10^3
0 <= | nums[i] | <= 10^6, where nums[i] represents the value of each element in the array

Sample Input 1
6
-1 0 1 2 -1 -4

Sample Output 1
-1 0 1
-1 -1 2
*/

/*
1) initialize a list of list od integers result
2) sort the array using the inbuit sosrt function
3) run a loop for i over 0 to n-1
    a) initialize j as i+1 and k as n-1
        i) if j-1 >= i and num[j] = nums[j-1] if current index value is same as previous do not consider it, not to take duplicates
            j++, continue
        ii) take sum as num[i] + num[j] + num[k]
        iii) if sum = 0
            store triplets in result as array
            j++
        iv) else if sum > 0 k--
        v)  else j++
return result;
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
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {

    let result = [];
    nums.sort((a,b) =>   a-b);

    for (let i = 0; i < nums.length; i++ ) {

        if(i>0 && nums[i] === nums[i-1]){
            continue;
        }

        let j = i+1, k = nums.length - 1;
        while(j<k){

        if(j-1>i && nums[j] === nums[j-1]){
            j++;
            continue;
        }

            let sum = nums[i] + nums[j] + nums[k];

            if (sum === 0) {
                let triplet = [];
                triplet.push(nums[i]);
                triplet.push(nums[j]);
                triplet.push(nums[k]);
                result.push(triplet);
                j++;
            } else if (sum > 0) k--;
            else j++;
        }
    
    }
    return result;
}
function main() {
    let n = parseInt(readLine(), 10);
    let nums = readIntArr();
    let result = threeSum(nums);
    for (const ans of result) {
        console.log(...ans);
    }
}