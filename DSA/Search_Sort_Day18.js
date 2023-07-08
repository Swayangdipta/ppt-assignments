/*1. Merge Intervals
Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return *an array of the non-overlapping intervals that cover all the intervals in the input*.
*/

// Time complexity: O(n log n)
// Space complexity: O(n)
 
const mergeIntervals = (intervals) => {
    intervals.sort((a,b) => a[0] - b[0])
    let merged = []

    let current = intervals[0]
    for (let i = 1; i < intervals.length ; i++) {
        let next = intervals[i]

        if(current[1] >= next[0]){
            current[1] = Math.max(current[1],next[1])
        }else{
            merged.push(current)
            current = next
        }
    }

    merged.push(current)

    return merged
}

console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]));

/*2. Sort Colors

Given an array `nums` with `n` objects colored red, white, or blue, sort them **[in-place](https://en.wikipedia.org/wiki/In-place_algorithm)** so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers `0`, `1`, and `2` to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.
*/

// Time complexity: O(n)
// Space complexity: O(1)

const sortColors = colors => {
    let left = 0
    let right = colors.length - 1
    let i = 0

    while(i <= right){
        if(colors[i] === 0){
            let temp = colors[i]
            colors[i] = colors[left]
            colors[left] = temp
            left++
            i++
        }else if(colors[i] === 2){
            let temp = colors[i]
            colors[i] = colors[right]
            colors[right] = temp
            right--
        }else{
            i++
        }
    }

    return colors
}

console.log(sortColors([2,0,2,1,1,0]));

// 3. First Bad Version Solution
// Tc: O(log n)
// Sc: O(1)

// FInding Bad Version
const findFirstBadVer = n => {
    let left = 1
    let right = n

    while(left < right){
        let mid = Math.floor((left + right) / 2)

        if(isBadVersion(mid)){
            right = mid
        }else{
            left = mid + 1
        }
    }

    return left
}

console.log(findFirstBadVer(5));

/*5. Contains Duplicate
Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.
*/

// Time Complexity: O(n log n)
// Space Complexity: O(1)
const findDuplicate = nums => {
    if(nums.length < 1) return false
    nums.sort((a,b) => a - b)

    for (let i = 1; i < nums.length; i++) {
        if(nums[i] === nums[i - 1])
            return true
    }

    return false
}

console.log(findDuplicate([1,2,3,1]));
console.log(findDuplicate([1,2,3,4]));


// 6. Minimum Number of Arrows to Burst Balloons
// TC: O(n log n)
// SC: O(1)
const minArrowsToBurstAll = points => {
    if(points.length < 2) return points.length

    let minArrows = 1

    points.sort((a,b) => a[1] - b[1])

    let prev = points[0]

    for (let i = 1; i < points.length; i++) {
        let current = points[i]

        if(current[0] > prev[1]){
            minArrows++
            prev = current
        }
    }

    return minArrows
}

console.log(minArrowsToBurstAll([[1,2],[2,3],[3,4],[4,5]]));

/* 7. **Longest Increasing Subsequence**
Given an integer array `nums`, return *the length of the longest **strictly increasing***subsequence
*/

// Time Complexity: O(n log n)
// Space Complexity: O(n)

const findLongestSubStcictlySorted = arr => {
    if(arr.length === 0) return 0

    let piles = []

    for (const num of arr) {
        let left = 0
        let right = piles.length - 1

        while(left <= right){
            let mid = Math.floor((left + right) / 2)

            if(piles[mid] < num){
                left = mid + 1
            }else{
                right = mid - 1
            }
        }

        if(left === piles.length){
            piles.push(num)
        }else{
            piles[left] = num
        }

    }

    return piles.length
}

console.log(findLongestSubStcictlySorted([7,7,7,7,7,7,7]));

/* 8. **132 Pattern**

Given an array of `n` integers `nums`, a **132 pattern** is a subsequence of three integers `nums[i]`, `nums[j]` and `nums[k]` such that `i < j < k` and `nums[i] < nums[k] < nums[j]`.

Return `true` *if there is a **132 pattern** in* `nums`*, otherwise, return* `false`*.*
*/

// TC: O(n)
// SC: O(1)
const findPattern = nums => {
    if(nums.length < 3) return false

    for (let i = 0; i < nums.length - 2; i++) {
        let j = i + 1
        let k = j + 1
        
        if(nums[i] < nums[k] && nums[k] < nums[j]){
            return true
        }
    }

    return false
}

console.log(findPattern([1,2,3,4]));
console.log(findPattern([3,1,4,2]));
console.log(findPattern([-1,3,2,0]));