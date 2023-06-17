// Question 1
// Given two strings s1 and s2, return the lowest ASCII sum of deleted characters to make two strings equal.
// Time Complexity: O(m*n)
// Space Complexity: O(m*n)

function minimumDeleteSum(s1, s2) {
  const m = s1.length;
  const n = s2.length;

  const dp = new Array(m + 1);
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }

  for (let i = 1; i <= m; i++) {
    dp[i][0] = dp[i - 1][0] + s1.charCodeAt(i - 1);
  }
  for (let j = 1; j <= n; j++) {
    dp[0][j] = dp[0][j - 1] + s2.charCodeAt(j - 1);
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + s1.charCodeAt(i - 1),
          dp[i][j - 1] + s2.charCodeAt(j - 1)
        );
      }
    }
  }

  return dp[m][n];
}

console.log(minimumDeleteSum("sea","eat"))

/* Question 2
Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.
*/
// Approach: First we need to create two variables to keep track of the open and close counts,then we have to iterate over 
// the given string to check for both the current and its opposite chars and inceasing and deceasing the values accordingly
// if any given iteario the counts get below 0 we return false or else after completing the iteration we return true

// Time Complexity: O(n)
// Space Complexity: O(1)

const isValidString = (s) => {
    let open_count = 0
    let close_count = 0
    let n = s.length

    for (let i = 0; i < n; i++) {
        if(s[i] === '(' || s[i] === '*'){
            open_count++
        }else{
            open_count--
        }
        
        if(s[n - i - 1] === ')' || s[n - i - 1] === '*'){
            close_count++
        }else{
            close_count--
        }

        if(open_count < 0 || close_count < 0){
            return false
        }
    }
  
    return true;
  };
  
  console.log(isValidString("((*)"))

/* Question 5
Given an array of characters chars, compress it using the following algorithm:
Begin with an empty string s. For each group of **consecutive repeating characters** in chars:
- If the group's length is 1, append the character to s.
- Otherwise, append the character followed by the group's length.
The compressed string s **should not be returned separately**, but instead, be stored **in the input character array chars**. Note that group lengths that are 10 or longer will be split into multiple characters in chars.
After you are done **modifying the input array,** return *the new length of the array*.
You must write an algorithm that uses only constant extra space.
*/
// Approach: We first create a variable compressIndex to keep track of index for the current char so that we can modify the chars array correctly and another
// variable count to keep track of the group length, the we iterate through the chars array and first check if
// the current char has a equal adjacent char, if it has then we increment the count or else we set the previous char to the compressIndex
// then for the group length we check the count var and add the length accordingly,after that we reset the count var for other groups
// and after the iteraion we return the compressIndex

// Time Complexity: O(n)
// Space Complexity: O(1)

const compressString = chars => {
    let compressIndex = 0
    let count = 1

    for (let i = 1; i <= chars.length; i++) {
        if( i < chars.length && chars[i] === chars[i - 1]){
            count++
        }else{
            chars[compressIndex++] = chars[i - 1]
            if(count > 1){
                if(count < 10){
                    chars[compressIndex++] = String(count)
                }else{
                    const countAsString = String(count)
                    for (let j = 0; j < countAsString.length; j++) {
                        chars[compressIndex++] = countAsString[j]
                    }                    
                }
            }
            count = 1
        }
    }
    return compressIndex
}

console.log(compressString(["b","a","a","a","a","a","a","a","a","a","a","a","a","a","a"]));
  

const constructBinaryTree = s => {
  let binaryTree = []
  binaryTree.push(s[0])
  for (let i = 1; i < s.length; i++) {
    let current = s[i]
    if(current !== '(' || current !== ')'){
      
    }
  }
}