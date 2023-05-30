/* Question 1
Given an integer array nums of length n and an integer target, find three integers
in nums such that the sum is closest to the target.
Return the sum of the three integers.
*/
// Time Complexity: O(n^2)
// Space COmplexity: O(1)

const findClosestSum = (nums,target) => {
    let closestSum = Infinity

    nums.sort((a,b) => a - b)

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1

        while(left < right){
            let sum = nums[i] + nums[left] + nums[right]

            if(Math.abs(sum - target) < Math.abs(closestSum - target)){
                closestSum = sum
            }

            if(sum < target){
                left ++
            }else{
                right --
            }
        }
    }

    return closestSum
}

console.log(findClosestSum([-1, 2, 1, -4],1));

// Question 4
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
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
Question 5
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
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
Question 6
Given a non-empty array of integers nums, every element appears twice except
for one. Find that single one.
*/
// Approach: By using XOR bitwise opeartion we can check if a number appears twice or not
// by XORing with same value it leaves zero or negets the operation an then we finally stay with the single value
// note: only works if the values form pair like appear two or four times.for anything else we can use Map() which will result in O(n) space complexity
// Time Complexity: O(n)
// Space Complexity: O(1)

const findSingleOccuringNumber = nums => {
    let single = 0

    // Check is empty
    if(nums.length === 0) return false

    for (let i = 0; i < nums.length; i++) {
        single ^= nums[i]
    }

    if(single){
        return single
    }else{
    }

    if(single !== 0){
        return single
    }else{
        return "All Numbers Appears Twice"
    }
}

console.log(findSingleOccuringNumber([2,2,4,5,3,5,4]));

/*
Question 7
You are given an inclusive range [lower, upper] and a sorted unique integer array
nums, where all elements are within the inclusive range.

A number x is considered missing if x is in the range [lower, upper] and x is not in
nums.

Return the shortest sorted list of ranges that exactly covers all the missing
numbers. That is, no element of nums is included in any of the ranges, and each
missing number is covered by one of the ranges.
*/
// Approach 1: By using Map() we push every element to the map and then check if the differnced element is present
// in the map or not, if not then we calculate and push the range into the missingELement Array.
// Time Complexity: O(n)
// Space Complexity: O(n)

const findMissingElementRangesMap = (nums,range) => {
    let map = new Map()
    let missingElements = []

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i],i)
    }

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] >= range[0] && nums[i] <= range[1]){
            if(i === 0){
                if(nums[i] > range[0]){
                    missingElements.push([nums[i] - range[0],nums[i] - 1])
                }
            }else if(i !== nums.length -1){
                if(!map.has(nums[i + 1] - nums[i])){
                    missingElements.push([nums[i] + 1,nums[i+1] -1])
                }
            }else{
                if(nums[i] !== range[0]){
                    missingElements.push([nums[i] + 1,range[1]])
                }
            }
        }    
    }

    return missingElements
}

console.log(findMissingElementRangesMap([0,1,3,50,75],[0,99]));

// Approach 2: After looking at the code i realized we dont need a map we just have to calculate the
// diffrence directly in the if condition (nums[i] + 1 !== nums[i+1]) after that everything is same
// Time Complexity: O(n)
// Space COmplexity: O(1)

const findMissingElementRanges = (nums,range) => {
    let missingElements = []

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] >= range[0] && nums[i] <= range[1]){
            if(i === 0){
                if(nums[i] > range[0]){
                    missingElements.push([nums[i] - range[0],nums[i] - 1])
                }
            }else if(i !== nums.length -1){
                if(nums[i]+1 !== nums[i+1]){
                    missingElements.push([nums[i] + 1,nums[i+1] -1])
                }
            }else{
                if(nums[i] !== range[0]){
                    missingElements.push([nums[i] + 1,range[1]])
                }
            }
        }    
    }

    return missingElements
}

console.log(findMissingElementRanges([0,1,3,50,75],[0,99]));


/*
Question 8
Given an array of meeting time intervals where intervals[i] = [starti, endi],
determine if a person could attend all meetings.
*/

// Approach: Firstly we sort the intervals based on the start time if not sorted already.
// then in the next step check if any meeting time is ovelapping by comparing the start time and the endtime 
// starting from the second element
// Time Complexity: O(n log n) if sorting involved else O(n)
// Space Complexity: O(1)

const canAttend = intervals => {
    // Check is empty 
    if(intervals.length === 0) return false

    intervals.sort((a,b) => {
        return a[0] - b[0]
    })

    for (let i = 1; i < intervals.length; i++) {
        if(intervals[i][0] < intervals[i-1][1]){
            return false
        }
    }

    return true
}

console.log(canAttend([[0,30],[5,10],[15,20]]));