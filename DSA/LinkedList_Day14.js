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
// 1.Remove the loop from the linked list, if it is present, i.e. unlink the last node which is forming the loop.
// TC: O(n)
// SC: O(1)
const detectAndRemoveLoop = head => {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            break;
        }
    }

    if (fast === null || fast.next === null) {
        return head;
    }

    slow = head;
    while (slow.next !== fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    fast.next = null;

    return head;
};

const linkedlist = createLinkedList([1, 2, 3]);
linkedlist.head.next.next.next = linkedlist.head.next;

console.log(detectAndRemoveLoop(linkedlist.head).val);


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

// Question 3: Flatten LinkedList
// TC: O(n*m)
// SC: O(1)
const flattenLinkedList = head => {
    if (head === null || head.next === null) {
      return head;
    }
  
    let tail = head;
    while (tail.next !== null) {
      tail = tail.next;
    }
  
    let current = head;
    while (current !== null) {
      tail.next = current.bottom;
      while (tail.next !== null) {
        tail = tail.next;
      }
      current.bottom = null;
      current = current.next;
    }
  
    return head;
};
  
/*Question 5**

Given the `head` of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return *the reordered list*.
*/

// TC: O(n)
// SC: O(1)
const oddEvenList = head => {
    if (head === null || head.next === null) {
      return head;
    }
  
    let oddHead = null;
    let oddTail = null;
    let evenHead = null;
    let evenTail = null;
  
    let current = head;
    let index = 1;
  
    while (current !== null) {
      if (index % 2 !== 0) {
        if (oddTail === null) {
          oddHead = current;
          oddTail = current;
        } else {
          oddTail.next = current;
          oddTail = current;
        }
      } else {
        if (evenTail === null) {
          evenHead = current;
          evenTail = current;
        } else {
          evenTail.next = current;
          evenTail = current;
        }
      }
  
      current = current.next;
      index++;
    }
  
    if (oddTail !== null) {
      oddTail.next = evenHead;
    }
  
    return oddHead !== null ? oddHead : evenHead;
};

let oddEven = createLinkedList([1,2,3,4,5])

console.log(oddEvenList(oddEven.head));

/*Question 6**
Given a singly linked list of size **N**. The task is to **left-shift** the linked list by **k** nodes, where **k** is a given positive integer smaller than or equal to length of the linked list.
*/

// TC: O(n)
// SC: O(1)
const leftShiftLinkedList = (N,head, k) => {
    if (head === null || k === 0) {
      return head;
    }
  
    let current = head;
    let len = N;
  
    k = k % len;
  
    if (k === 0) {
      return head;
    }
  
    let slow = head;
    let fast = head;
    while (k > 1) {
      fast = fast.next;
      k--;
    }
  
    while (fast.next !== null) {
      slow = slow.next;
      fast = fast.next;
    }
  
    let newHead = slow.next;
    slow.next = null;
  
    let temp = newHead;
    while (temp.next !== null) {
      temp = temp.next;
    }
  
    temp.next = head;
  
    return newHead;
};

let head = createLinkedList([2, 4, 7, 8, 9]).head

console.log(leftShiftLinkedList(5,head,3))

// Question 7: For each node in the list, find the value of the next greater node
// TC: O(n)
// SC: O(n)
const nextLargerNodes = head => {
    const arr = [];
    let current = head;
    while (current !== null) {
      arr.push(current.val);
      current = current.next;
    }
  
    const result = new Array(arr.length).fill(0);
    const stack = [];
  
    for (let i = arr.length - 1; i >= 0; i--) {
      while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
        stack.pop();
      }
      if (stack.length > 0) {
        result[i] = stack[stack.length - 1];
      }
      stack.push(arr[i]);
    }
  
    return result;
}
  
let l2 = createLinkedList([2,1,5])

console.log(nextLargerNodes(l2.head));

/**Question 8**
Given the `head` of a linked list, we repeatedly delete consecutive sequences of nodes that sum to `0` until there are no such sequences.
*/
// TC: O(n)
// SC: O(n)
const removeZeroSumSublists = head => {
    const dummy = new ListNode(0);
    dummy.next = head;
  
    const map = new Map();
    let totalSum = 0;
    let current = dummy;
  
    while (current !== null) {
      totalSum += current.val;
  
      if (map.has(totalSum)) {
        let prev = map.get(totalSum).next;
        let tempSum = totalSum + prev.val;
        while (prev !== current) {
          delete map[tempSum];
          prev = prev.next;
          tempSum += prev.val;
        }
        map.get(totalSum).next = current.next;
      } else {
        map.set(totalSum, current);
      }
  
      current = current.next;
    }
  
    return dummy.next;
}

let list1 = createLinkedList([1,2,-3,3,1])

console.log(removeZeroSumSublists(list1.head));