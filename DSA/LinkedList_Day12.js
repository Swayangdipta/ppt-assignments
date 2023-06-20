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

/*QUestion 1
Given a singly linked list, delete middle of the linked list. For example, if given linked list is 1->2->3->4->5 then linked list should be modified to 1->2->4->5.If there are even nodes, then there would be two middle nodes, we need to delete the second middle element. For example, if given linked list is 1->2->3->4->5->6 then it should be modified to 1->2->3->5->6.If the input linked list is NULL or has 1 node, then it should return NULL
*/
// TC: O(n)
// SC: O(1)
const removeElementFromList = list => {
    if (list.size < 2) {
        return list;
    }

    let linkedlist = list.head
    let current = linkedlist
    let prev = null
    let count = 0
    
    while(linkedlist){
        if(count === Math.floor(list.size / 2)){
            if(prev){
                prev.next = current.next
            }else{
                list.head = current.next
            }
            list.size--
            break
        }

        prev = current
        current = current.next
        count++
    }

    return list
}

let list = createLinkedList([2,4,6,7,5,1])
console.log(convertListToArray(removeElementFromList(list)));

/*Question 3
Given a linked list consisting of **L** nodes and given a number **N**. The task is to find the **N**th node from the end of the linked list.
*/
// This is using the size property
// TC: O(n)
// SC: O(1)
const findSecondLastElementApp1 = list => {
    let current = list.head
    let count = 0
    let result
    while(current){
        if(count === list.size - 2){
            result = current.val
            return current.val
        }
        current = current.next
        count++
    }
    return result
}
let list1 = createLinkedList([1,2,3,4,5,6,7,8,9])
console.log(findSecondLastElementApp1(list1));

// This does not use size property
// TC: O(n)
// SC: O(1)
const findSecondLastElementApp2 = list => {
    if(list.size < 2) return list.head

    let current = list.head
    let prev = null
    while(current.next !== null){
        prev = current
        current = current.next
    }
    return prev.val
}

console.log(findSecondLastElementApp2(list1));

/*Question 4
Given a singly linked list of characters, write a function that returns true if the given list is a palindrome, else false.
*/
// TC: O(n)
// SC: O(n)

const checkIfPalindrome = list => {
    let current = list.head
    let text = ''
    let reversed = ''

    while(current){
        text += current.val
        current = current.next
    }
    text = text.toLowerCase()

    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i]
    }

    return text === reversed
}

let list2 = createLinkedList(['R','A','D','A','R'])
console.log(checkIfPalindrome(list2));

/*Question 6
Given a linked list and two integers M and N. Traverse the linked list such that you retain M nodes then delete next N nodes, continue the same till end of the linked list.
*/
// TC: O(n)
// SC: O(1)

const deleteAndRetain = (list,M,N) => {
    let mCount = M
    let nCount = N
    let current = list.head
    let prev = null

    while(current){
        if(mCount > 0){
            prev = current
            current = current.next
            mCount--
        }else if(nCount > 0){
            current = current.next
            nCount--
            list.size--
        }
        
        if(mCount === 0 && nCount === 0){
            prev.next = current
            mCount = M
            nCount = N
        }
    }

    return list 
}

let list3 = createLinkedList([1,2,3,4,5,6,7,8,9,10])
console.log(convertListToArray(deleteAndRetain(list3,3,2)));

/*Question 7
Given two linked lists, insert nodes of second list into first list at alternate positions of first list.
*/
// TC: O(min(n,m))
// SC: O(1)
const mergeListsAtAlternatePosition = (l1,l2) => {
    let l1Current = l1.head
    let l2Current = l2.head

    while(l2Current){
        let l1Next = l1Current.next
        let l2Next = l2Current.next

        l1Current.next = l2Current
        l2Current.next = l1Next

        l1Current = l1Next
        l2Current = l2Next

        l1.size++
    }

    return l1
}

const l1 = createLinkedList([5,7,17,13,11])
const l2 = createLinkedList([12,10,2,4,6])
console.log(convertListToArray(mergeListsAtAlternatePosition(l1,l2)));

/* Question 8
Given a singly linked list, find if the linked list is circular or not.
*/
// TC: O(n)
// SC: O(1)
const findIfCircularList = head => {
    if(head === null || head.next === null){
        return false
    }

    let slow = head
    let fast = head.next

    while(slow !== null && fast.next !== null){
        if(slow === fast){
            return true
        }

        slow = slow.next
        fast = fast.next.next
    }

    return false
}

const head = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = head;

console.log(findIfCircularList(head));

const findIfSelfLooped = (N,value,x) => {
    if(x === 0){
        return false
    }

    if(x < N){
        return true
    }

    return false
}

let value = createLinkedList([1,3,4])

console.log(findIfSelfLooped(3,value,2));