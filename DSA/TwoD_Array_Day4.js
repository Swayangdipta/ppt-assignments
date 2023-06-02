/*
Question 1
Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing order, return a sorted array of only the integers that appeared in all three arrays.
*/
// Approach: First declare a Map() to store the unique values of the arrays,then itearte over the three array separately to
// check and store the values in Map(),if a value is present we just increase its value by 1 and if not then we simply add it tot he MAp()
// Finally iterate over the map to check if any element has a value of 3 which indicates that they are present in all the arrays.
// After checking we can add it to a result array and then return it.
// Time COmplexity: O(n)
// Space Complexity: O(m) where m is the number of unique elements in the Map()

const getPresentInAll = (arr1,arr2,arr3) => {
    let map = new Map()
    let result = []

    for (let i = 0; i < arr1.length; i++) {
        map.set(arr1[i],1)
    }

    for (let i = 0; i < arr2.length; i++) {
        if(map.has(arr2[i])){
            map.set(arr2[i],map.get(arr2[i]) + 1)
        }else{
            map.set(arr2[i],1)
        }
    }

    for (let i = 0; i < arr3.length; i++) {
        if(map.has(arr3[i])){
            map.set(arr3[i],map.get(arr3[i]) + 1)
        }else{
            map.set(arr3[i],1)
        }
    }

    map.forEach((value,key) => {
        if(value === 3){
            result.push(key)
        }
    });

    return result
}

console.log(getPresentInAll([1,2,3,4,5],[1,2,5,7,9],[1,3,4,5,8]));

/*
**Question 2**

Given two **0-indexed** integer arrays nums1 and nums2, return *a list* answer *of size* 2 *where:*

- answer[0] *is a list of all **distinct** integers in* nums1 *which are **not** present in* nums2*.*
- answer[1] *is a list of all **distinct** integers in* nums2 *which are **not** present in* nums1.
*/
// Approach: By using Set() to store the distinct values of nums1 and nums2 we then can iterate over the Set()
// to check if a value is present in the other Set() or not.If not present we add it to the answer[] array.
// FInally returning the answer[] array
// Time Complexity: O(n)
// Space Complexity: O(1)

const getNotPresentIntegers = (nums1,nums2) => {
    const answer = [[],[]]
    const distinct1 = new Set(nums1)
    const distinct2 = new Set(nums2)

    // Check is empty
    if(nums1.length === 0 && nums2.length === 0) return []

    if(nums1.length === 0) return nums2

    if(nums2.length === 0) return nums1

    distinct1.forEach((value) => {
        if(!distinct2.has(value)){
            answer[0].push(value)
        }
    })

    distinct2.forEach((value) => {
        if(!distinct1.has(value)){
            answer[1].push(value)
        }
    })

    return answer
}

console.log(getNotPresentIntegers([1,2,3],[2,4,6]));

/*
Question 3
Given a 2D integer array matrix, return *the **transpose** of* matrix.

The **transpose** of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.
*/
// Time Complexity: O(n^2)
// Space Complexity: O(1)

const getTransposeOfMatrix = matrix => {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i + 1; j < matrix.length; j++) {
            const temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }

    return matrix
}

console.log(getTransposeOfMatrix([[1,2,3],[4,5,6],[7,8,9]]));

/*
Question 4
Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.
*/
// Approach: First we need to sort the array in accending order then initialize a var maximum_sum to store
// the sum of minimum elements in each pair. Loop over the array with step 2 as we are taking elements as pairs of two
// finally return the maximum_sum
// Time Complexity: O(n log n)

const getMaxSum = nums => {
    let maximum_sum = 0
    nums.sort((a,b) => a - b)

    for (let i = 0; i < nums.length; i += 2) {
        maximum_sum += nums[i]
    }

    return maximum_sum
}

console.log(getMaxSum([1, 4, 3, 2]));

/*
Question 6
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
*/
// Approach: First we craete a result array to store the calculated values,then we initialize two pointers left and right
// then we itearate over the array nums and check the absolute values of left and right as even if a number is negative but
// higher in value it will produce square result greater than the smaller positive values. Finally after checking we square and
// add it to its correct position and return the result array.
// Time Complexity: O(n)
// Space Complexity: O(1)

const getSquaresSorted = nums => {
    const result = new Array(nums.length)
    let left = 0
    let right = nums.length - 1

    for (let i = nums.length - 1; i >= 0; i--) {
        if(Math.abs(nums[left]) > Math.abs(nums[right])){
            result[i] = nums[left] * nums[left]
            left++
        }else{
            result[i] = nums[right] * nums[right]
            right--
        }
    }

    return result
}

console.log(getSquaresSorted([-4,-1,0,3,10]));

/*
**Question 8**

Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

*Return the array in the form* [x1,y1,x2,y2,...,xn,yn].
*/
// Approach: First we initialize an array reformed as the same length of nums then we initialize and split the array into 
// two parts based on the n variable. Finally itearte over the nums array and check if the current index in even or odd,
// if even we add the current index value from part1(x) and if odd we add the values from part2(y). 
// finally returning the reformed array.
// Time Complexity: O(n)
// Space Complexity: O(1)

const getReformedArray = (nums,n) => {
    const reformed = new Array(nums.length)
    const part1 = nums.slice(0,n)
    const part2 = nums.slice(n,nums.length)

    for (let i = 0; i < nums.length; i++) {
        if(i % 2 === 0){
            reformed[i] = part1[i / 2]             
        }else{
            reformed[i] = part2[Math.floor(i / 2)]
        }
    }

    return reformed
}

console.log(getReformedArray([2,5,1,3,4,7],3));