// Q1. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// Solution
// Approach:- We can create a Map and then check if the compliment(target - current_number) of the target is present in the map.
// If complient is not present we then add the current number to the map
// Time Complexity - O(n)
// Space Complexity - O(1)

const findTarget = (nums,target) => {
    let map = new Map()
    // Check if empty array
    if(nums.length === 0) return -1
    // Check if array is of length 1 and the 2 elemets adds upto the target
    if(nums.length === 1){
        if(nums[0]+nums[1] === target){
            return [0,1]
        }else{
            return -1
        }
    }

    for(let i = 0;i < nums.length;i++){
        if(map.has(target - nums[i])){
            return [i,map.get(target - nums[i])]
        }else{
            map.set(nums[i],i)
        }
    }    
}

console.log(findTarget([2,7,11,15],9))

// Q2. Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
// Approach: FIrst we need a variable to keep count of the non matching values (count or k). Then we loop and check the values and replace the elements
// in the array using the count varibale and increment the count variable.Finally return the count variable value.
// Time Complexity: O(n)
// Space Complexity: O(1)


const removeOccurances = (nums, val) => {
    let count = 0
    // check is empty
    if(nums.length === 0) return 0

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== val){
            nums[count] = nums[i]
            count++
        }     
    }

    return count

}

console.log(removeOccurances([3,2,2,3,4,3,4,5,3],3))

// Q3. Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// Approach: We can perform an binary search to find the target in O(log n) time
// Time complexity: O(log n)
// Space complexity: O(1)

const findPosition = (nums,target) => {
    let left = 0,right = nums.length - 1

    // Check if empty array
    if(nums.length === 0) return -1

    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        if(nums[mid] === target){
            return mid
        }else if(nums[mid] < target){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }

    if(nums[left] === target){
        return left
    }else{
        return left - 1
    }
}

console.log(findPosition([1,2,3,4,6,7,53,98,102,769,987],78))

/*
💡 **Q4.** You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
Increment the large integer by one and return the resulting array of digits. 
*/
// Approach: Loops through the array and add the digits into a string then parse it to Integer and add 1 and then again convert it to string
// Then covert it back to array and return it
// Time complexity: O(n)
// Space complexity: O(1)

const getEvalutedArray = (nums) => {
    let digits = '',evalutedArray = []

    for (let i = 0; i < nums.length; i++) {
        digits += nums[i]
    }

    digits = (parseInt(digits)+1).toString()
    
    for (let i = 0; i < digits.length; i++) {
        evalutedArray.push(parseInt(digits.charAt(i)))
    }

    return evalutedArray
}

console.log(getEvalutedArray([1,2,3]))

/*
💡Q5. ****You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

*/

// Approach: Brute force , add all the elements into the array nums1 and then sort it.
// Time Complexity: O(m log m)

const mergeSortedArrayBrute = (nums1,m,nums2,n) => {
    let count = 0
    for (let i = m; i < m + n; i++) {
        nums1[i] = nums2[count]
        count++
    }
    nums1.sort() // TimSort is used by default in JS
    return nums1
}

console.log(mergeSortedArrayBrute([1,2,3,0,0,0],3,[2,5,6],3))

// Q6. Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Approach: First we create a Map() then we loop over the nums array and check if the nums[i] element is already present or not. If not then add it to the map.
// Time Complexity: O(n) Worst / O(1) Best

const checkIsTwice = (nums) => {
    let map = new Map()
    // Check is empty
    if(nums.length === 0) return false
    // Check if only the two containing elements are duplicate
    if(nums.length === 2 && nums[0] === nums[i]){
        return true
    }

    for (let i = 0; i < nums.length; i++) {
       if(map.has(nums[i])){
        return true
       }else{
        map.set(nums[i],1)
       }
    }

    return false
}

console.log(checkIsTwice([1,2,3,1]));

/*
Q7.** Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.

Note that you must do this in-place without making a copy of the array.
*/
// Approach: First we declare a count = 0 variable and a for loop to iterate over the nums array 
// then check if nums[i] is 0 or not if not then set varable nums[count] to nums[i] which is non zero
// Finally another loop to set rest of the array to zero starting from last count value
// TIme Complexity: O(n) 


const moveZeroToEnd = nums => {
    let count = 0

    // Check is empty
    if(nums.length === 0) return nums
    // Swap if nums contain only two element
    if(nums.length === 2 && nums[0] === 0){
        nums[0] = nums[1]
        nums[1] = 0
        return nums
    }

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0){
            nums[count] = nums[i]
            count++
        }
    }

    for (let j = count; j < nums.length; j++) {
        nums[j] = 0
    }

    return nums
}

console.log(moveZeroToEnd([0,1,0,3,12]));

/*
Q8.** You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.
*/

// Approach: First we create a map and add the numbers to it if not present,if present we set it to 2 as to represent duplicate
// and also the index of the duplicate. Then loop trough the map to find the duplicate and return the values
// Time Complexity: O(n)

const findDuplicatedValue = nums => {
    let duplicated;
    let map = new Map()

    // Check is empty
    if(nums.length === 0) return false

    for (let i = 0; i < nums.length; i++) {
        if(map.has(nums[i])){
            map.set(nums[i],[2,i])
        }else{
            map.set(nums[i],[1,i])
        }
    }

    map.forEach((value,key) => {
        if(value[0] === 2){
            if(value[1] === nums.length - 1){
                duplicated =  [key,nums[value[1]-1] + 1]
            }else{
                duplicated = [key,nums[value[1]+1] - 1]                
            }
            return
        }
    })

    if(duplicated){
        return duplicated
    }else{
        return "NO DUPLICATES FOUND"
    }
}

console.log(findDuplicatedValue([1,2,3,4,5,6,7,2]));