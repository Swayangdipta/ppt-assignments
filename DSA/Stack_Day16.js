
class Stack{
    constructor(){
        this.arr = []
    }

    push(val){
        this.arr.push(val)
    }

    pop(){
        return this.arr.pop()
    }

    empty(){
        return this.arr.length <= 0 ? true : false
    }
}

const createStack = array => {
    let stack = new Stack()
    for (let index = 0; index < array.length; index++) {
        stack.push(array[index])
    }

    return stack
}

/*
Question 3
Given a stack with **push()**, **pop()**, and **empty()** operations, The task is to delete the **middle** element ****of it without using any additional data structure.
*/

const removeMiddleElementOfStack = stk => {
    let lengthOfStack = 0

    while(!stk.empty()){
        stk.pop()
        lengthOfStack++
    }

    console.log(lengthOfStack);
}

let stk = createStack([1,2,3,4,5])
removeMiddleElementOfStack(stk);

/* 7. **Longest Increasing Subsequence**
Given an integer array `nums`, return *the length of the longest **strictly increasing***subsequence
*/

const findLongestSubStcictlySorted = arr => {
    let length = 1
    arr.sort((a,b) => a - b)

    if(arr.length === 0) return 0

    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i] < arr[i + 1]){
            length++
        }
    }
}

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