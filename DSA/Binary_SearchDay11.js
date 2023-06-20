/*Question 1**
Given a non-negative integer `x`, return *the square root of* `x` *rounded down to the nearest integer*. The returned integer should be **non-negative** as well.
*/
// TC : O(log x)
// SC: O(1)
const findSquareRoot = x => {
    if(x === 0 || x === 1){
        return x
    }

    let start = 1
    let end = Math.floor(x/2)
    let result
    while(start <= end){
        let mid = Math.floor((start + end) / 2)

        if(mid * mid === x){
            return mid
        }

        if(mid * mid < x){
            start = mid +1
            result = mid
        }else{
            end  = mid - 1
        }
    }

    return result
}

console.log(findSquareRoot(100));

/*Question 2
A peak element is an element that is strictly greater than its neighbors.
Given a **0-indexed** integer array `nums`, find a peak element, and return its index. If the array contains multiple peaks, return the index to **any of the peaks**.
*/
// TC: O(log n)
// SC: O(1)
const findPeakElement = nums => {
    if(nums.length === 0 || nums.length === 1){
        return false
    }

    let start = 0
    let end = nums.length - 1
    while(start <= end){
        let mid = Math.floor((start + end) / 2)
        
        if(mid > 0 && mid < nums.length - 1){
            if(nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]){
                return mid
            }else if(nums[mid - 1] > nums[mid]){
                end = mid - 1
            }else{
                start = mid + 1
            }
        }else if(mid === 0){
            if (nums[mid] > nums[mid + 1]) {
                return mid;
            } else {
                return mid + 1;
            }
        }else if(mid === nums.length - 1){
            if (nums[mid] > nums[mid - 1]) {
                return mid;
            } else {
                return mid - 1;
            }
        }
    }

    return -1
}

console.log(findPeakElement([1, 2, 3, 4, 5]));

/* Question 3
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
*/
// TC: O(n log n)
// SC: O(1)
const findMissingElement = nums => {
    nums.sort((a,b) => a - b)

    let left = 0
    let right = nums.length

    while(left <= right){
        let mid = Math.floor((left+right) / 2)

        if(nums[mid] === mid){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }

    return left
}

console.log(findMissingElement([3,0,1]));

/*Question 4
Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive.
There is only **one repeated number** in `nums`, return *this repeated number*.
*/
// TC: O(n log n)
// SC: O(1)
const findRepeatedNum = nums => {
    let start = 1
    let end = nums.length - 1

    while(start < end){
        let mid = Math.floor((start+end)/2)
        let count = 0

        for(let num of nums){
            if(num <= mid){
                count++
            }
        }

        if(count > mid){
            end = mid
        }else{
            start = mid + 1
        }
    }

    return start
}

console.log(findRepeatedNum([3,1,3,4,2]));

/* QUestion 6
Given the sorted rotated array nums of unique elements, return the minimum element of this array.
*/
// TC: O(log n)
// SC: O(1)
const findMinElement = nums => {
    let n = nums.length
    if(n === 0 ){
        return nums[n]
    }else if(n === 1){
        return nums[0] > nums[1] ? nums[1] : nums[0]
    }

    let start = 0
    let end = n - 1

    while(start < end){
        let mid = Math.floor((start+end) / 2)
        if(nums[mid] < nums[end]){
            end = mid
        }else{
            start = mid + 1
        }
    }

    return nums[start]
}

console.log(findMinElement([4,5,6,7,0,1,2]));

/*Question 7
Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value.
*/
// TC: O(log n)
// SC: O(1)
const getStartAndEndPosition = (nums,target) => {
    let start = 0
    let end = nums.length - 1
    let position = [-1,-1]

    while(start <= end){
        let mid = Math.floor((start+end)/2)

        if(nums[mid] >= target ){
            end = mid - 1
        }else{
            start = mid + 1
        }

        if(nums[mid] === target){
            position[0] = mid
        }
    }

    start = 0, end = nums.length - 1

    while(start <= end){
        let mid = Math.floor((start+end)/2)

        if(nums[mid] <= target ){
            start = mid + 1
        }else{
            end = mid - 1
        }

        if(nums[mid] === target){
            position[1] = mid
        }
    }

    return position
}

console.log(getStartAndEndPosition([5,7,7,8,8,8,8,8,10],8));