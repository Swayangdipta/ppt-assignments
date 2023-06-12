/* Question 1
Given two strings s and t, *determine if they are isomorphic*.
Two strings s and t are isomorphic if the characters in s can be replaced to get t.
*/
// Approach: We can use Map() to add and check the occurances in each string, we itearte over the strings
// and in each iteration we check if its in the Map() and the current character of the other string is present in the Map()
// or not for both strings, if its not in the Map() we simply add it to the map or if its in the map but the other strings char is not
// present in the Map() we return false. Finally we return true means its isomorphic.

// Time COmplexity: O(n)
// Space COmplexity: O(k) ** k -> unqiue chars in string

const isIsomorphic = (s,t) => {
    const mapStoT = new Map()
    const mapTtoS = new Map()

    if(s.length !== t.length) return false

    for (let i = 0; i < s.length; i++) {
        const sChar = s.charAt(i)
        const tChar = t.charAt(i)

        if(mapStoT.has(sChar)){
            if(mapStoT.get(sChar) !== tChar){
                return false
            }
        }else{
            mapStoT.set(sChar,tChar)
        }

        if(mapTtoS.has(tChar)){
            if(mapTtoS.get(tChar) !== sChar){
                return false
            }
        }else{
            mapTtoS.set(tChar,sChar)
        }
    }

    return true
 }

 console.log("Q1: " + isIsomorphic("egg","add"));

/* Question 2
Given a string num which represents an integer, return true *if* num *is a **strobogrammatic number***.

A **strobogrammatic number** is a number that looks the same when rotated 180 degrees (looked at upside down).
*/

// Approach: First we create a map to store the valid pairs to store and get the rotated values,
// firstly i thought to reverse the string by getting the valid pair but the resulting reversed string causes the Space Complexity to O(n),
// so instead of reversing, we are directly checking the values from left and right and finding if they are correct or present in the map
// FInally returing the results.

// Time Complexity: O(n)
// Space Complexity: O(1)
const isStrobogrammatic = num => {
    const n = num.length
    const map = new Map()
    map.set("6", "9")
    map.set("9", "6")
    map.set("0", "0")
    map.set("8", "8")
    map.set("1", "1")

    for (let i = 0; i < Math.floor(n / 2); i++) {
        const left = num.charAt(i)
        const right = num.charAt( n - 1 - i)

        if(!map.has(left) || map.get(left) !== right){
            return false
        }
    }

    return true
}

console.log(isStrobogrammatic("69"));

/* Question 3
Given two non-negative integers, num1 and num2 represented as string, return *the sum of* num1 *and* num2 *as a string*.
You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.
*/
// Approach: We first need to create some varibales first and second to store the values and carry to store the current carry
// then we iterate through the strings num1 and num2 one by one and in each one we calulate the number with the help of carry varibale
//  finally returning the sum of the two value as string using the .toString() method.
 
// Time Complexity: O(n)
// Space  Complexity: O(1)
const getSumFromString = (num1,num2) => {
    let first = 0, second = 0, carry = 1

    for (let i = 0; i < num1.length; i++) {
        first = first * carry + parseInt(num1.charAt(i))
        carry = 10
    }
    carry = 1
    for (let j = 0; j < num2.length; j++) {
        second = second * carry + parseInt(num2.charAt(j))
        carry = 10
    }

    return (first + second).toString()
}

console.log(getSumFromString("1000","123487"));

/* Question 4
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
*/
// Approach: first we split the string s into a array which is separated by whitespaces, then we iterate over the words array,
// to target a single word and then iterate over that word to reverse it and store in the revWord varibale,
// after every word we add the reversed word to the reversed string, after the iterations we trim the string to remove the 
// starting and trailing whitespaces.FInally returning the reversed sentence
// Time COmplexity: O(n*m) -- n -> length of the words, m -> length of the targetted word
// Space Complexity: O(n)

const resverseWordsInSentence = s => {
    const words = s.split(" ")
    let reversed = ""

    // Check is empty
    if(s.length < 2) return s

    for (let i = 0; i < words.length; i++) {
        let revWord = ""
        for (let j =  words[i].length - 1; j >= 0; j--) {
            revWord += words[i].charAt(j)
        }
        reversed += revWord + " "
    }

    reversed = reversed.trim()

    return reversed
}

console.log(resverseWordsInSentence("Let's take LeetCode contest"));

/* Question 5
Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.
*/

// Time COmplexity: O(n * k)
// Space COmplexity: O(n)

const reverseKCharacters = (s, k) => {
    const n = s.length;
    let reversedStr = '';
  
    for (let i = 0; i < n; i += 2 * k) {
      let rev = '';
  
      for (let j = i; j < Math.min(i + k, n); j++) {
        rev += s.charAt(i + k - 1 - (j - i));
      }
  
      rev += s.slice(i + k, i + 2 * k);
      reversedStr += rev;
    }
  
    return reversedStr;
  }
  
  console.log(reverseKCharacters("abcdefg", 2));
  
  

/* Question 6
Given two strings s and goal, return true *if and only if* s *can become* goal *after some number of **shifts** on* s.

A **shift** on s consists of moving the leftmost character of s to the rightmost position.
*/
// Approach 1: we can craete a array from the target string s, then we itearte over the array sArray and modify the array
// by shifting the first element and placing the returnred char into the last postion of the array,
// then we compare the strings in every loop if the match found we retrun true elese we return false
// Time Complexity: O(n^2)
// Space Complexity: O(n)

const canBecomeGoal = (s,goal) => {
    const sArray = s.split('')

    for (let i = 0; i < sArray.length; i++) {
        sArray[sArray.length - 1] = sArray.shift()

        if(sArray.join('') === goal){
            return true
        }
    }

    return false
}

console.log(canBecomeGoal("abcde","cdeab"));

// Approach 2: We can contact the string s to itself to check if there any substring found which is equal to the goal.
// Time Complexity: O(n)
// Space Complexity: O(n)

const canBecomeGoalOptimized = (s,goal) => {
    let contactS = s + s
    
    if (s.length !== goal.length) {
        return false;
    }

    return contactS.includes(goal)
}

console.log(canBecomeGoalOptimized("abcde","cdeab"));

/* Question 7
Given two strings s and t, return true *if they are equal when both are typed into empty text editors*. '#' means a backspace character.
*/
// Approach: We create a function to correct the given string str, where we use stack DS to simulate the editor,
// when there is a "#" backspace character we pop the top element from the stack or else we push it to the stack,
// after the iteration we join the stack to create a string. Finally Comparing and returning the result.

// Time Complexity: O(n)
// Space Complexity: O(n)

const isEqualInEmptyText = (s,t) =>{
    const correctBackspaces = str => {
        let stack = []
        for (let i = 0; i < str.length; i++) {
            if(str.charAt(i) === "#"){
                stack.pop()
            }else{
                stack.push(str.charAt(i))
            }
        }
        return stack.join("")
    }

    const sCorrected = correctBackspaces(s)
    const tCorrected = correctBackspaces(t)

    return sCorrected === tCorrected
}

console.log(isEqualInEmptyText("ab#c","#ad#cd#########"));