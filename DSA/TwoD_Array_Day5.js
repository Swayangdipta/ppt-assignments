// Question 1
// Convert 1D Array Into 2D Array
// Approach: We first initialize a array twoD to store the resulting m*n 2D array.Then we initialize two varibales
// start and end to keep track of the splice op and they will be updated later.
// Finally we use a loop to loop over the colums and use array slice() method to slice the array to desired length
// and add it to the twoD array.Finally Restuning the twoD array.
// Time Complexity: O(m*n)
// Space Complexity: O(m*n)

const convertOneToTwoD = (original,m,n) => {
    const twoD = []
    let start = 0
    let end = n

    // Check is empty
    if(m*n !== original.length || original.length === 0) return []

    for (let i = 0; i < m; i++) {
        twoD.push(original.slice(start,end))

        start = end
        end = 2 * end
    }

    return twoD
}

console.log(convertOneToTwoD([1,2,3,4],2,3));

/* Question 3
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
Question 4

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
Question 5

Given two integer arrays arr1 and arr2, and the integer d, *return the distance value between the two arrays*.

The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where |arr1[i]-arr2[j]| <= d.
*/

// Approach: Initialized a count var to keep track of the distance,then nested looping to checking every elements
// if a element meets condition increase count var. Finally if distance is found return the count - 1 as length - 1 of elments or return 0 if nothing found.
// Time Complexity: O(m*n)
// Space Complexity: O(1)

const getArrayDistance = (arr1,arr2,d) => {
    let count = 0

    // Check if empty
    if(arr1.length === 0 || arr2.length === 0) return arr1.length

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if(Math.abs(arr1[i] - arr2[j]) <= d){
                count++
            }
        }
    }

    if(count > 0){
        return count - 1
    }else{
        return 0
    }
}

console.log(getArrayDistance([4,5,8],[10,9,1,8],2));

/*
Question 7

Suppose an array of length n sorted in ascending order is **rotated** between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

- [4,5,6,7,0,1,2] if it was rotated 4 times.
- [0,1,2,4,5,6,7] if it was rotated 7 times.

Notice that **rotating** an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of **unique** elements, return *the minimum element of this array*.

You must write an algorithm that runs in O(log n) time.
*/

// Approach: We can use binary search and modify it a bit so we can find the min element from the rotated array.
// Time Complexity: O(log n)
// Space Complexity: O(1)

const getMinOfRotatedArray = nums => {
    let left = 0
    let right = nums.length - 1
    let mid = Math.floor((left + right) / 2)

    while(left < right){
        mid = Math.floor((left + right) / 2)
        if(nums[mid] < nums[right]){
            right = mid
        }else{
            left = mid + 1
        }
    }

    return nums[left]
}

console.log(getMinOfRotatedArray([3,4,5,1,2]));
console.log(getMinOfRotatedArray([4,5,6,7,0,1,2]));
console.log(getMinOfRotatedArray([7,0,1,2,4,5,6]));
console.log(getMinOfRotatedArray([1,2,4,5,6,7,0]));

/*
Question 8

An integer array original is transformed into a **doubled** array changed by appending **twice the value** of every element in original, and then randomly **shuffling** the resulting array.

Given an array changed, return original *if* changed *is a **doubled** array. If* changed *is not a **doubled** array, return an empty array. The elements in* original *may be returned in **any** order*.
*/

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