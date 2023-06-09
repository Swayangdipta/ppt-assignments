/* Question 1
Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return **any of them**.
*/

// Time Complexity: O(n)
// Space Complexity: O(1)


const resconstructPermutation = s => {
    const perm = new Array(s.length + 1)

    let start = 0
    let end = s.length

    for (let i = 0; i < s.length; i++) {
        if(s.charAt(i) === "I"){
            perm[i] = start
            start++
        }else if(s.charAt(i) === "D"){
            perm[i] = end
            end--
        }
    }

    perm[s.length] = start

    return perm
}

console.log(resconstructPermutation("IDID"))

/* Question 2
You are given an m x n integer matrix matrix with the following two properties:

- Each row is sorted in non-decreasing order.
- The first integer of each row is greater than the last integer of the previous row.

Given an integer target, return true *if* target *is in* matrix *or* false *otherwise*.

You must write a solution in O(log(m * n)) time complexity.
*/

// Approach: We can use binary search and modify it so that it works perfectly on a m*n matrix or 2D array.
// Time Complexity: O(log(m*n))
// Space Complexity: O(1)

const findTargetInMatrix = (matrix,target) => {
    let m = matrix.length
    let n = matrix[0].length
    let left = 0
    let right = m * n - 1
    let result = false

    // Check if empty
    if (matrix.length === 0 || matrix[0].length === 0) {
        return result;
    }

    if(target > matrix[m-1][n-1] || target < matrix[0][0]) return result

    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        let value = matrix[Math.floor(mid / n)][mid % n]

        if(value === target){
            return result = true
        }else if(value < target){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }

    return result
}

console.log(findTargetInMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3));

/* Question 3
Given an array of integers arr, return true if and only if it is a valid mountain array.
*/

// Approach: First we initialize a variable peak with -Infinity value to store the highest integer,
// then we iterate over the array arr to find the highest integer or peak. then we check if the peak element is located at nth position,
// if its in nth position then we return false as the rule was that after the highest integer next integers should be strictly lower,
// Then we iteartae over the array arr once more to check if the integers are in strictly increasing order till peak position and after that if 
// its in strictly decreasing position. If any one of the conditions does not met we return false else we store true in isValid variable,
// Finally returning the isValid variable.

// Time Complexity: O(n)
// Space Complexity: O(1)

const isValidMountain = arr => {
    let peak = -Infinity
    let isValid = false
    let n = arr.length

    if(n < 3) return isValid

    for (let i = 0; i < n; i++) {
        if(arr[i] > peak){
            peak = i
        }
    }

    if(peak === n) return isValid

    for (let j = 0; j < n - 1; j++) {

        if(j < peak){
            if(arr[j] < arr[j+1]){
                isValid = true
            }else{
                isValid = false
                return isValid
            }
        }else{
            if(arr[j] > arr[j+1]){
                isValid = true
            }else{
                isValid = false
                return false
            }
        }
    }

    return isValid
}

console.log(isValidMountain([0,2,3,4,5,2,1,0]));

/* Question 4
Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.
*/

const findLongestContiguousSubarray = nums => {
    let longest = 0
    let zeroes = 0
    let ones = 0
    let n = nums.length

    for (let i = 0; i < nums.length - 1; i++) {
        if(nums[i] === 0 && nums[i+1] === 1){
            zeroes++
        }else if(nums[i] === 1 && nums[i+1] === 0){
            ones++
        }
        let temp = zeroes + ones
        
    }

    return zeroes + ones
}

console.log(findLongestContiguousSubarray([0,1,0,1,1,0,1,0,1,0,1,0]))

/* Question 5
The **product sum** of two equal-length arrays a and b is equal to the sum of a[i] * b[i] for all 0 <= i < a.length (**0-indexed**).
*/
// Approach: We first need to sort the array nums1 in accending and nums2 in decending order,even though the problem statement was to
// only rearrange the nums1, we can not achieve the solution without first sorting the nums2 array.
// then we iteatre over the array and calculate the minSum, finally returning the minSum

// Time Complexity: O(n log n)
// Space Complexity: O(n)

const findMinimumSumArray = (nums1,nums2) => {
    let minSum = 0
    nums1.sort((a,b) => a - b)
    nums2.sort((a,b) => b - a)

    for (let i = 0; i < nums1.length; i++) {
        minSum += (nums1[i] * nums2[i])
    }

    return minSum
}

console.log(findMinimumSumArray([5,3,4,2],[4,2,2,5]));

/*
Question 6

An integer array original is transformed into a **doubled** array changed by appending **twice the value** of every element in original, and then randomly **shuffling** the resulting array.

Given an array changed, return original *if* changed *is a **doubled** array. If* changed *is not a **doubled** array, return an empty array. The elements in* original *may be returned in **any** order*.
*/

// Time Complexity: O(n^2)
// Space COmplexity: O(1)

const findIfChanged = changed => {
    let count = 0
    const original = new Array(Math.floor(changed.length / 2))
    // Check is empty or the length is odd
    if(changed.length === 0 || changed.length % 2 !== 0) return []

    for (let i = 0; i < changed.length; i++) {
        if(count === changed.length / 2) break;  

        for (let j = 0; j < changed.length; j++) {
            if(changed[i] * 2 === changed[j]){
                original[count] = changed[i]
                count++
            }
        }  
    }

    return original
}

console.log(findIfChanged([1,3,4,2,6,8]));

/* Question 7
Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.
*/
// Approach: We first initialize some varivbales to keep track of the order in which the numbers will get placed,
// then we use a while loop to iterate over n*n times to put all the elemenets as n*n matrix will get generated.
// Then for each direction we calculate the order in which the elemts will be placed as we traverse the array,
// in that order,after every loop we adjust the tracking variables. Finally returning the spiral array

// Time complexity: O(n^2)
// Space complexity: O(n^2)

const generateSpiralMatrix = n => {
    const spiral = new Array(n)
    let count = 1;
    let rowStart = 0;
    let rowEnd = n - 1;
    let colStart = 0;
    let colEnd = n - 1;
    
    for (let i = 0; i < n; i++) {
        spiral[i] = []
    }

    while (count <= n * n) {
      // Right
      for (let i = colStart; i <= colEnd; i++) {
        spiral[rowStart][i] = count++;
      }
      rowStart++;
  
      // Down
      for (let i = rowStart; i <= rowEnd; i++) {
        spiral[i][colEnd] = count++;
      }
      colEnd--;
  
      // Left
      for (let i = colEnd; i >= colStart; i--) {
        spiral[rowEnd][i] = count++;
      }
      rowEnd--;
  
      // Up
      for (let i = rowEnd; i >= rowStart; i--) {
        spiral[i][colStart] = count++;
      }
      colStart++;
    }
  
    return spiral;
  };
  
  console.log(generateSpiralMatrix(3));  