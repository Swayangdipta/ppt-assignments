/* Question 1
Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2),..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.
*/
// Approach: First we need to sort the array in accending order then initialize a var maximum_sum to store
// the sum of minimum elements in each pair. Loop over the array with step to as we are taking elements as pairs of two
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

/* Question 2
Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor. 

The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice. 

Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.
*/
// Approach: By using a Set() or Map() we can calculate the maxminum she can eat. In here after add all the unique candies to the Set()
// we check if the size of the Set() reaches the max_eatable then we return the size of the Set() as its contains all unique candies
// Time Complexity: O(n)
// Space Complexity: O(n)

const findMaxEatable = (candyType,n) => {
    let max_eatable = n/2
    let unique_candies = new Set()

    // check is empty
    if(candyType.length === 0) return 0

    for (let i = 0; i < candyType.length; i++) {
        unique_candies.add(candyType[i])
        if(unique_candies.size >= max_eatable){
            return max_eatable
        }
    }

    return unique_candies.size

}

console.log(findMaxEatable([1,1,2,2,3,3]));

/* Question 4
You have a long flowerbed in which some of the plots are planted, and some are not.
However, flowers cannot be planted in adjacent plots.
Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
*/
// Approach: We just need to loop trough the array staring from index 1 and ending at length -1
// Then check if the prev,current and next elemnts are all 0 and if it is then decrease the value on n to n-1
// FInally we check if n reaches its 0 or less if it reaches then its true or else its false
// Time Complexity: O(n)

const findIsPlantable = (flowerbed,n) => {

    // check if length is 0,1 or 2
    if(flowerbed.length === 0 || flowerbed.length === 1) return false

    for (let i = 1; i < flowerbed.length -1; i++) {
        if(n <= 0){
            return true
        }

        if(flowerbed[i-1] === 0 && flowerbed[i] === 0 && flowerbed[i+1] === 0){
            flowerbed[i] = 1
            n--
        }
    }

    return false
}

console.log(findIsPlantable([1,0,0,0,0,0,0,1],3));

/* Question 5
Given an integer array nums, find three numbers whose product is maximum and return the maximum product.
*/
// Approach: First we sort the array in decending order and then return the product of the first three elements
// Time Complexity: O(n log n)
const findMaxProductBrute = nums => {
    nums.sort((a,b) => b - a)

    return nums[0] * nums[1] * nums[2]
}

console.log(findMaxProductBrute([1,2,7,0,3]));

/*
Question 6
Given an array of integers nums which is sorted in ascending order, and an integer target,
write a function to search target in nums. If target exists, then return its index. Otherwise,
return -1.

You must write an algorithm with O(log n) runtime complexity.
*/

// Approach: By using Binary search algo as its a sorted array we can achive the solution in O(log n) TC
// Time COmplexity: O(log n)

const findTarget = (nums,target) => {
    let left = 0
    let right = nums.length
    let mid = Math.floor(nums.length / 2)

    // Check is empty 
    if(nums.length === 0) return -1

    while(left <= right){
        if(nums[mid] === target){
            return mid
        }else if(nums[mid] > target){
            right = mid - 1
        }else{
            left = mid + 1
        }

        mid = Math.floor((left + right) / 2)
    }

    if(nums[mid] !== target){
        return -1
    }
}

console.log(findTarget([-1,0,3,5,9,12,16,34,45],6));

/* Question 7
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is
monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.
*/

// Approach: By declaring and check if the current and previous values we can update the corresponding variables
// isInceasing or isDecreasing. FInally if one of those variables are true then its a monotone else not.
// Time Complexity: O(n)

const isMonotonic = nums => {
    let isIncreasing = true
    let isDecreasing = true

    for (let i = 1; i < nums.length; i++) {
        if(nums[i] > nums[i-1]){
            isDecreasing = false
        }

        if(nums[i] < nums[i-1]){
            isIncreasing = false
        }
    }

    if(isIncreasing || isDecreasing){
        return true
    }else{
        return false
    }
}

console.log(isMonotonic([1,2,2,3]));

/* Question 8 
You are given an integer array nums and an integer k.

In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.

The score of nums is the difference between the maximum and minimum elements in nums.

Return the minimum score of nums after applying the mentioned operation at most once for each index in it.
*/

const findMinScore = (nums,k) => {
    let min_score = Infinity
    let max_score = -Infinity

    for (let i = 0; i < nums.length; i++) {
        let min = Math.min(nums[i] - k,min_score)
        let max = Math.max(nums[i] + k,max_score)

        min_score = min
        max_score = max
    }

    return max_score - min_score
}

console.log(findMinScore([1],0));