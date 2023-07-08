class ListNode {
    constructor(val){
        this.val = val
        this.next = null
    }
}

const createLinkedList = arr => {
    if(arr.length === 0) return null
    let head = new ListNode(arr[0])
    let current = head

    for (let i = 1; i < arr.length; i++) {
        let newNode = new ListNode(arr[i])
        current.next = newNode
        current = newNode
    }

    let linkedlist = {
        head: head,
        size: arr.length
    }

    return linkedlist
}

const convertListToArray = list => {
    let arr = []
    let cur = list.head
    while(cur){
        arr.push(cur.val)
        cur = cur.next
    }
    return arr
}

/*Question 2
    A number **N** is represented in Linked List such that each digit corresponds to a node in linked list. You need to add 1 to it.
*/
// TC: O(n)
// SC: O(1)
const addOneToTotalOfList = list => {
    let total = ''
    let carry = 0
    let current = list.head

    while(current){
        total += current.val
        current = current.next
    }

    return eval(total + '+1')
}

let list = createLinkedList([4,5,6])

console.log(addOneToTotalOfList(list));

const leftShiftKNodes = (N,value,k) => {
    let current = value.head
    let shifted
    let count = 0

    while(current){
        let temp 
        if(count === k){
            let temp = current
            shifted = current
            temp.next = null
        } 

        if(count === N - 1){
            current.next = temp
        }
        current = current.next
        count++
    }

    return {
        head: current
    }
}

let list1 = createLinkedList([2,4,7,8,9])

console.log(convertListToArray(leftShiftKNodes(5,list1,3)));