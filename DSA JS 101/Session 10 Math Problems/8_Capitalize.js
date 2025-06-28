function main() {
  let str = "hello WOrld"
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);


     if (charCode >= 97 && charCode <= 122) {
      charCode -= 32;
    }
    let capitalizedChar = String.fromCharCode(charCode);
    result += capitalizedChar;
  }
  console.log(result);
}

/*4Problem Description: https://www.crio.do/learn/PSDS/ME_DSA_DEBUGGING_PROBLEMS_NEW/ME_DSA_DEBUGGING_PROBLEMS_NEW_MODULE_CAPITALISEDEBUG/
Given a string, convert lowercase to uppercase without using any inbuilt function.

Input format
First line contains a string.

Output format
Print the required string.

Sample Input 1
hello WOrld

Sample Output 1
HELLO WORLD

Explanation
Here the lowercase letters in the string "hello WOrld" are converted to uppercase letters resulting in the output "HELLO WORLD".

Constraints
Length the string < 100
*/