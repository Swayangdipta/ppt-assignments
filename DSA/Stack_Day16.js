
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
