/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_HASH/ME_DSA_HASH_MODULE_FREQUENTWORDS/
GFG: https://www.geeksforgeeks.org/find-the-k-most-frequent-words-from-a-file/
Priority Queue Approach: https://www.youtube.com/watch?v=cupg2TGIkyM
You are given a list of words present in a book. Your younger brother is really curious to know the K most frequent words in the book, 
you have to find them.
Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, 
then the word with the lower alphabetical order should come first.

Input format
There are three lines of input
The first line contains N, which is the number of input strings.
The second line contains N space separated input strings (S).
The third line contains the value of K.

Output format
Print the K most frequent words present inside the book, each in a new line. If two words have the same frequency, then the word with the lower alphabetical order should come first.

Constraints
1 <= N <= 1000
1 <= Length(S) <= 100000
'a' <= S[i] <= 'z'
1 <= K <= Number of Unique Strings

Sample Input 1
1
bus
1
Sample Output 1
bus
Explanation 1
In the given input, the frequency of "bus" is 1 and it is the 1st most frequent word.

Sample Input 2
3
car bus car
2
Sample Output 2
car
bus

Explanation 2
In the given input, the frequency of "car" is 2, frequency of “bus” is 1.
Since K = 2, both words are printed, with "car" being the most frequent, gets printed first.
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

/**
 * @param {string[]} n
 * @param {number} k
 * @return {string[]}
 */
function frequentWords(words, k) {
    const map = new Map();
    for (let i = 0; i < words.length; i++) {
        map.set(words[i], (map.get(words[i]) || 0) + 1);
    };

    const wordCount = [...map]; //map to array

    wordCount.sort((a, b) => {
        if (a[1] > b[1]) return -1;
        if (b[1] > a[1]) return 1;
        if (a[0] < b[0]) return -1;
        return 1;
    });

    const ans = [];
    for (let i = 0; i < k; i++) {
        ans.push(wordCount[i][0]);
    }

    return ans;
}

function main() {
    const n = parseInt(readLine())
    const words = readLine().split(' ')
    const k = parseInt(readLine())
    const result = frequentWords(words, k)
    console.log(result.join("\n"))
}