/*
Problem Description
Given a sorted array of N distinct integers and a target value X, return the index if the target is found. If not found then return -1.

Note - Try implementing with O(logN) runtime complexity.

Input format
First line contains integers N, the number of distinct integers, and X, the target value. Second line contains N space separated integers.

Output format
Print the index of the target element if found else return -1.

Sample Input 1
5 7
1 3 5 7 13
Sample Output 1
3
Explanation
Target integer 7 is at index 3.

Sample Input 2
5 8
1 3 5 7 13
Sample Output 2
-1
*/


function searchTarget(N, A, X) {
    let l = 0
    let r = N - 1

    while (l <= r) {
        let mid = Math.floor((r + l) / 2);

        if (A[mid] == X) {
            return mid;
        } else if (A[mid] > X) {
            r = mid - 1;
        } else if (A[mid] < X) {
            l = mid + 1;
        }
    }
    return -1;
}
//TC: O(logN)


let res = searchTarget(5, [1, 3, 5, 7, 13], 7);
console.log(res);
