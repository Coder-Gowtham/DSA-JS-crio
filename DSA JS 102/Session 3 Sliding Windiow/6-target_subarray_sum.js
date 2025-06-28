
/*
Given an array nums containing non-negative integers, find a continuous subarray that has a sum equal to a given target k. 
Return the length of the subarray. If no such subarray exists, return 0.
*/
function subarraySum(nums, k) {
    let count = 0;
    let currentSum = 0;
    let sumFreq = {0: 1};

    for (let num of nums) {
        currentSum += num;

        if (sumFreq[currentSum - k]) {
            count += sumFreq[currentSum - k];
        }

        sumFreq[currentSum] = (sumFreq[currentSum] || 0) + 1;
    }

    return count;
}

const nums = [1, 1, 1];
const k = 2;
const count = subarraySum(nums, k);
console.log(count);
