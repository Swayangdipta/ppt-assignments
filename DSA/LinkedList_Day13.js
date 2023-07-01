class ListNode {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class DoublyListNode {
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
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

const createDoublyLinkedList = arr => {
    const head = new DoublyListNode(arr[0])
    let current = head

    for (let i = 1; i < arr.length; i++) {
        let temp = new DoublyListNode(arr[i])
        temp.prev = current
        current.next = temp
        current = current.next
    }

    return {head}
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

/*Question 1
Given two linked list of the same size, the task is to create a new linked list using those linked lists. The condition is that the greater node among both linked list will be added to the new linked list.
*/
// TC: O(n)
// SC: O(n)

const formNewList = (list1,list2) => {
    let l1Current = list1.head.next
    let l2Current = list2.head.next
    let newList = new ListNode(list1.head.val > list2.head.val ? list1.head.val : list2.head.val)

    let current = newList
    while(l1Current && l2Current){
        if(l1Current.val > l2Current.val){
            current.next = new ListNode(l1Current.val)
        }else{
            current.next = new ListNode(l2Current.val)
        }

        l1Current = l1Current.next
        l2Current = l2Current.next
        current = current.next
    }

    return {head: newList}
}

const list1 = createLinkedList([2,8,9,3])
const list2 = createLinkedList([5,3,6,4])

console.log(convertListToArray(formNewList(list1,list2)));

/*Question 2
Write a function that takes a list sorted in non-decreasing order and deletes any duplicate nodes from the list. The list should only be traversed once.
*/
// TC: O(n)
// SC: O(1)
const removeDuplicatesFromList = linkedlist => {
    let current = linkedlist.head

    while(current && current.next){
        if(current.val === current.next.val){
            current.next = current.next.next
        }else{
            current = current.next
        }
    }

    return linkedlist
}

let linkedlist = createLinkedList([11,11,11,21,43,43,60])
console.log(convertListToArray(removeDuplicatesFromList(linkedlist)));

/*Question 5
Given a linked list and a key to be deleted. Delete last occurrence of key from linked. The list may have duplicates.
*/
// TC: O(n)
// SC: O(1)
const deleteLastOccurance = (list,key) => {
    let current = list.head
    let lastOccuranceNodesPrev = list.head

    while(current && current.next){
        if(current.next.val === key){
            lastOccuranceNodesPrev = current
        }

        current = current.next
    }

    if(lastOccuranceNodesPrev === list.head){
        list.head = list.head.next
    }else if(lastOccuranceNodesPrev.next.next){
        lastOccuranceNodesPrev.next = lastOccuranceNodesPrev.next.next
    }else{
        lastOccuranceNodesPrev.next = null
    }

    return list
}

const list3 = createLinkedList([1,2,3,5,2,10])
console.log(convertListToArray(deleteLastOccurance(list3,10)));

/*Question 6
Given two sorted linked lists consisting of N and M nodes respectively. The task is to merge both of the lists (in place) and return the head of the merged list.
*/

const mergeSortedListsInPlace = (a,b) => {
    let current1 = a.head
    let current2 = b.head
    let merged 

    if(current1.val > current2.val){
        merged = current2
        current1 = current1.next
    }else{
        merged = current1
        current2 = current2.next;
    }

    let mergedCurrent = merged

    while(current1 && current2){
        if(current1.val <= current2.val){
            mergedCurrent.next = current1
            current1 = current1.next
        }else{
            mergedCurrent.next = current2
            current2 = current2.next
        }

        mergedCurrent = mergedCurrent.next;
    }

    if(current1){
        mergedCurrent.next = current1
    }else{
        mergedCurrent.next = current2
    }

    return {
        head: merged
    }
}

let listA = createLinkedList([5,10,15])
let listB = createLinkedList([2,3,20])

console.log(mergeSortedListsInPlace(listA,listB))

/*Question 7
Given a **Doubly Linked List**, the task is to reverse the given Doubly Linked List.
*/
// TC: O(n)
// SC: O(1)

const reverseDoublyList = list => {
    let head = list.head
    let prev = null
    
    while(head){
        let temp = head.next
        head.next = head.prev
        head.prev = temp

        prev = head
        head = temp
    }

    list.head = prev

    return list
}

let doublyList1 = createDoublyLinkedList([1,5,2,9])
console.log(convertListToArray(reverseDoublyList(doublyList1)));

/*Question 8
Given a doubly linked list and a position. The task is to delete a node from given position in a doubly linked list.
*/
// TC: O(n)
// SC: O(1)
const removeElementInPosition = (list,x) => {
    let current = list.head
    let count = 1
    if(x === 1) {
        if (current) {
            list.head = current.next;
            if (list.head) {
            list.head.prev = null;
            }
        }
        return list;
    }

    while(current){
        if(x === count){
            if(current.next){
                current.next.prev = current.prev
                current.prev.next = current.next
            }else{
                current.prev.next = null
            }
        }

        current = current.next
        x--
    }

    return list
}  

let doublyList = createDoublyLinkedList([1,5,2,9])
console.log(convertListToArray(removeElementInPosition(doublyList,1)));