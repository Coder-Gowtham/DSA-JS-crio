/*
Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_STACK_QUEUE/ME_DSA_STACK_QUEUE_MODULE_POSTFIXEXPRESSIONDSA/
Resource: https://www.techiedelight.com/evaluate-given-postfix-expression/
Postfix expressions are an ordering of mathematical operations, where the operator(+,-,* etc) comes after the operands.

For instance, an operation 2 + 3 (infix notation, which humans use) will be represented as 2 3 + in postfix notation. 
The computers can understand postfix notation.
Your job is to evaluate the given postfix expression. The expression is given as a string where each token is separated by a space.
The possible operators can be +, - and *
Note that all operands(numbers) are assumed to be non-negative.

Input format
One line of input, containing the string S.

Output format
Print the result of the given expression

Sample Input 1
2 3 +
Sample Output 1
5

Explanation 1
3 + 2 = 5

Sample Input 2
2 3 1 * + 9 -
Sample Output 2
-4

Explanation 2
If the expression is converted into an infix expression, it will be 2 + (3 * 1) – 9 = 5 – 9 = -4.

Constraints
1 <= |S| <= 100
S[i] >= 0, where S[i] is an operand in the expression
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

/*****************STACK Data Structure Start****************/
class Stack {
    constructor() {
        this.items = [];
    }
    //pushes new element on top
    push(element) {
        this.items.push(element);
    }
    //removes top most element 
    pop() {
        if (this.isEmpty())
            return undefined;
        return this.items.pop();
    }
    //returns the top most element
    peek() {
        if (this.isEmpty())
            return undefined;
        return this.items[this.items.length - 1];
    }
    //returns true if empty
    isEmpty() {
        return this.items.length == 0;
    }
    //returns the size of stack
    size() {
        return this.items.length;
    }
}
/*****************STACK Data Structure End****************/


/**
 * @param {string} exp
 * @return {number}
 */


// TODO: Implement this method
function postfixExpression(exp) {
    const stk = [];
    const arr = exp.split(" ");
    for (const str of arr) {
        if (str === '+') {
            let a = stk.pop();
            let b = stk.pop();
            stk.push(a + b);
        } else if (str === '-') {
            let a = stk.pop();
            let b = stk.pop();
            stk.push(b - a);
        } else if (str === '*') {
            let a = stk.pop();
            let b = stk.pop();
            stk.push(a * b);
        } else {
            stk.push(parseInt(str, 10));
        }
    }

    return stk[stk.length - 1];
}

// NOTE: Please do not modify this function
function main() {
    let expression = readLine();
    let result = postfixExpression(expression);
    console.log(result);
}


