/*

Problem Description
You have an array in which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit by buying a share on one day and selling it on another day. 
You may repeat this across the days (i.e., buy one and sell one share of the stock multiple times).
Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again)

Input format
First line contains N, the number of days for which stock price will be provided
Next line contains N space separated integers representing the stock prices on each of these N days

Output format
Print out the maximum profit possible. Print 0 if no profit is possible.

Constraints
1 <= N <= 10^5
1 <= Stock prices <= 10^5

Sample Input 1
6
7 1 5 3 6 4

Sample Output 1
7

Explanation 1
Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Again buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

Total profit of 7.

Sample Input 2
5
1 2 3 4 5

Sample Output 2
4

Explanation 2
Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.

Note that you cannot buy on day 1, buy on day 2 and sell them later, as you cannot engage in multiple transactions at the same time. You must sell before buying again.

Sample Input 3
5
7 6 4 3 
Sample Output 3
0

Explanation 3
No profit is possible due to continuously decreasing prices, so the maximum profit is 0.

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
 * @param {number[]} prices
 * @return {number}
 */

function bestTimeToBuyAndSellStocks(prices) {
    let profit = 0;

    for (let i = 0; i <= prices.length - 1; i++) {
        if (prices[i + 1] > prices[i]) {
            profit += prices[i + 1] - prices[i];
        }
    }

    return profit;
}

function main() {
    let n = readLine();
    let prices = readIntArr();
    console.log(bestTimeToBuyAndSellStocks(prices));
}