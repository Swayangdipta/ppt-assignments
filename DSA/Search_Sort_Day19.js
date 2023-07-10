class ListNode {
    constructor(val = 0,next = null){
        this.val = val
        this.next = next
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

    return head
}

const convertListToArray = list => {
    let arr = []
    let cur = list
    while(cur){
        arr.push(cur.val)
        cur = cur.next
    }
    return arr
}

// 1. Merge k Sorted Lists
// Tc: O(nk log k)
// SC: O(1)

const mergeSortedList = lists => {
    const mergeTwoLists = (l1,l2) => {
        const dummyHead = new ListNode()
        let current = dummyHead

        while(l1 && l2){
            if(l1.val <= l2.val){
                current.next = l1
                l1 = l1.next
            }else{
                current.next = l2
                l2 = l2.next
            }

            current = current.next
        }

        if(l1){
            current.next = l1
        }else{
            current.next = l2
        }

        return dummyHead.next
    }

    const mergeKSortedLists = () => {
        const n = lists.length

        if(n === 0) return []
        if(n === 1 || n === 1 && lists[0].length === 0) return lists

        let interval = 1

        while(interval < n){
            for (let i = 0; i + interval < n; i += interval * 2) {
                lists[i] = mergeTwoLists(lists[i],lists[i + interval])
            }

            interval *= 2
        }

        return lists[0]
    }

    return mergeKSortedLists()
}

const l1 = createLinkedList([1,4,5])
const l2 = createLinkedList([1,3,4])
const l3 = createLinkedList([2,6])

console.log(convertListToArray(mergeSortedList([l1,l2,l3])));

// 2. Count of Smaller Numbers After Self
// TC: O(n log n)
// SC: O(n)

const countSmaller = (nums) => {
  const counts = new Array(nums.length).fill(0);
  mergeSortWithCount(nums, counts, 0, nums.length - 1);
  return counts;
}

const mergeSortWithCount = (nums, counts, start, end) => {
  if (start >= end) {
    return;
  }

  const mid = Math.floor((start + end) / 2);
  mergeSortWithCount(nums, counts, start, mid);
  mergeSortWithCount(nums, counts, mid + 1, end);

  let left = start;
  let right = mid + 1;
  let mergeIndex = 0;
  const merged = new Array(end - start + 1);

  while (left <= mid && right <= end) {
    if (nums[left] <= nums[right]) {
      counts[left] += right - mid - 1;
      merged[mergeIndex] = nums[left];
      left++;
    } else {
      merged[mergeIndex] = nums[right];
      right++;
    }
    mergeIndex++;
  }

  while (left <= mid) {
    counts[left] += end - mid;
    merged[mergeIndex] = nums[left];
    left++;
    mergeIndex++;
  }

  while (right <= end) {
    merged[mergeIndex] = nums[right];
    right++;
    mergeIndex++;
  }

  for (let i = start; i <= end; i++) {
    nums[i] = merged[i - start];
  }
}

console.log("Smaller" ,countSmaller([5,2,6,1]));


// 3. Sort an Array
// TC : O(n log n)
// SC : O(n)
const sortArray = () => {
    const mergeSort = arr => {
        if(arr.length <= 1){
            return arr
        }

        const mid = Math.floor(arr.length / 2)
        const left = arr.slice(0,mid)
        const right = arr.slice(mid)

        const sortedLeft = mergeSort(left)
        const sortedRight = mergeSort(right)

        return merge(sortedLeft,sortedRight)
    }

    const merge = (left,right) => {
        let merged = []
        let i = 0, j = 0

        while(i < left.length && j < right.length){
            if(left[i] <= right[j]){
                merged.push(left[i])
                i++
            }else{
                merged.push(right[j])
                j++
            }

            if(i === left.length){
                merged = merged.concat(right.slice(j))
            }

            if( j === right.length){
                merged = merged.concat(left.slice(i))
            }
        }

        return merged
    }

    console.log(mergeSort([5,2,3,1])); 
}

sortArray()

// 4. Move all zeroes to end of array
// TC: O(n)
// SC: O(1)

const moveZeroesToEnd = arr => {
    let current = 0

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== 0){
            arr[current] = arr[i]
            current++
        }
    }

    for (let j = current; j < arr.length; j++) {
        arr[j] = 0
    }

    return arr
}

console.log(moveZeroesToEnd([1, 2, 0, 4, 3, 0, 5, 0]));

// 6. Merge two sorted arrays
// TC: O(n)
// SC: O(n)
const mergeSortedArray = (arr1,arr2) => {
    let merged = []
    let i = 0 , j = 0
    while(i < arr1.length || j < arr2.length){

        if(arr1[i] < arr2[j]){
            merged.push(arr1[i])
            i++
        }else{
            merged.push(arr2[j])
            j++
        }

        if( i === arr1.length){
            merged = merged.concat(arr2.slice(j))
            break
        }

        if( j === arr2.length){
            merged = merged.concat(arr1.slice(i))
            break
        }
    }

    return merged
}

console.log(mergeSortedArray([5,8,9,223],[4,7,86,190,222]));

// 7. Intersection of Two Arrays
// TC: O(m + n)
// SC: O(m)
const findIntersection = (nums1,nums2) => {
    const set = new Set(nums1)
    const intersection = []
    for (const num of nums2) {
        if(set.has(num)){
            intersection.push(num)
            set.delete(num)
        }
    }

    return intersection
}

console.log(findIntersection([1,2,2,1],[2,2]));

// 8. Intersection of Two Arrays II
// TC: O(m + n)
// SC: O(m)
const findIntersectionTwo = (nums1,nums2) => {
    const frequencyMap = new Map()
    const intersection = []

    for (const num of nums1) {
        frequencyMap.set(num,(frequencyMap.get(num) || 0) + 1)
    }

    for (const num of nums2) {
        if(frequencyMap.get(num) && frequencyMap.get(num) > 0){
            intersection.push(num)
            frequencyMap.set(num,frequencyMap.get(num) - 1)
        }
    }

    return intersection
}

console.log(findIntersectionTwo([4,9,5],[9,4,9,8,4]));