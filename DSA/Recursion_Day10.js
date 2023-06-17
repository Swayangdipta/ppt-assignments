/* Question 1
Given an integer `n`, return *`true` if it is a power of three. Otherwise, return `false`*.
An integer `n` is a power of three, if there exists an integer `x` such that `n == 3x`.
*/
// TC: O(log3(n))
// SC: O(log3(n))
const isPowerOfThree = n => {
    if(n === 1){
        return true
    }else if(n < 1 || n % 3 !== 0){
        return false
    }

    return isPowerOfThree(n / 3)
}

console.log(isPowerOfThree(0));

/*Question 2
You have a list `arr` of all integers in the range `[1, n]` sorted in a strictly increasing order. Apply the following algorithm on `arr`:
*/
// TC: O(n log n)
// SC: O(n)

const getLastRemainingNumber = (arr,direction,index) => {
    if(arr.length === 1){
        return arr
    }

    if(direction === 'left'){
        if(index < arr.length){
            arr.splice(index,1)
            index++
        }else{
            direction = 'right'
            index = arr.length - 1;
        }
    }else if(direction === 'right'){
        if(index >= 0){
            arr.splice(index,1)
            index -= 2
        }else{
            direction = 'left'
            index = 0
        }
    }

    return getLastRemainingNumber(arr,direction,index)
}
let n = 9
let arr = Array.from({length: n},(_,i) => i + 1)

console.log(getLastRemainingNumber(arr,'left',0));

/*Question 3
Given a set represented as a string, write a recursive code to print all subsets of it. The subsets can be printed in any order.
*/
// TC: O(2^n)
// SC: O(n)
const printSubsets = (set, subset = '', index = 0) => {
    if (index === set.length) {
      console.log(subset);
      return;
    }
    printSubsets(set, subset, index + 1);
    printSubsets(set, subset + set[index], index + 1);
  };
  
  printSubsets("abc");

/*Question 4
Given a string calculate length of the string using recursion.
*/
// TC: O(n^2)
// SC: O(n^2)
const calculateLengthOfString = str => {
    if(str === ''){
        return 0
    }

    return 1 + calculateLengthOfString(str.substring(1))
}

console.log(calculateLengthOfString("abcd"));

// Question 6
// Tower Of Hanoi

// TC: O(2^n)
// SC: O(n)
function towerOfHanoi(n, source, temporary, destination) {
    if (n === 1) {
      console.log(`Move disk 1 from ${source} to ${destination}`);
      return 1;
    }
  
    const movesAtoB = towerOfHanoi(n - 1, source, destination, temporary);
    console.log(`Move disk ${n} from ${source} to ${destination}`);
    const movesBtoC = towerOfHanoi(n - 1, temporary, source, destination);
  
    return movesAtoB + 1 + movesBtoC;
}

const n1 = 3;
const source = 'Rod 1';
const temporary = 'Rod 2';
const destination = 'Rod 3';
  
const totalMoves = towerOfHanoi(n1, source, temporary, destination);
console.log(`Total moves required: ${totalMoves}`);

/*Question 7
Given a string str, the task is to print all the permutations of str. A permutation is an arrangement of all or part of a set of objects, with regard to the order of the arrangement. For instance, the words ‘bat’ and ‘tab’ represents two distinct permutation (or arrangements) of a similar three letter word.
*/

function printPermutations(str, prefix = '') {
    if (str.length === 0) {
      console.log(prefix);
      return;
    }
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const restOfString = str.slice(0, i) + str.slice(i + 1);
      printPermutations(restOfString, prefix + char);
    }
}
  
printPermutations('abb');
  
/*Question 8
Given a string, count total number of consonants in it. A consonant is an English alphabet character that is not vowel (a, e, i, o and u). Examples of constants are b, c, d, f, and g.
*/
// TC: O(n)
// SC: O(n)
const countConsonants = (str,index) => {
    const consonants = {
        'b': true,
        'c': true,
        'd': true,
        'f': true,
        'g': true,
        'h': true,
        'j': true,
        'k': true,
        'l': true,
        'm': true,
        'n': true,
        'p': true,
        'q': true,
        'r': true,
        's': true,
        't': true,
        'v': true,
        'w': true,
        'x': true,
        'y': true,
        'z': true,
    }
    const lowercaseStr = str.toLowerCase();

    if(index >= str.length){
        return 0
    }

    if(consonants.hasOwnProperty(lowercaseStr[index])){
        return 1 + countConsonants(str,index + 1)
    }

    return countConsonants(str,index + 1)
}

console.log(countConsonants("geeksforgeeks portal",0));