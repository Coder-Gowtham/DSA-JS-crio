/*
Problem Description
Given a string S.Implement an algorithm to determine if a string has all unique characters.

Input format
A single line that contains the string S.

Output format
Print "Yes"(without quotes) if S has all unique characters "No"(without quotes) otherwise.

Sample Input 1
abcd

Sample Output 1
Yes

Explanation
All characters in "abcd" are unique.

Sample Input 2
abca

Sample Output 2
No

Explanation
All characters in "abca" are not unique, character 'a' repeats two times.

Constraints
1 <= length(S) <= 100000 S contains only english alphabetic characters.


Checklist
*/

function isUnique(s) 
{
    let st = new Set();
    let n = s.length;
    
     for (let i = 0; i < n; ++i) {
      st.add(s[i]);
    }
    
     if (st.size === s.length) {
      return true;
    } else {
      return false;
    }
}


// function main()
// {
//     let s = readLine();
//     let res = isUnique(s);
//     if(res) {
// 		console.log("Yes");
// 	} else {
// 		console.log("No");
// 	}

// }