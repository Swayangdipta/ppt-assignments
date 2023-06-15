/*Question 1

Given an integer `n`, return *`true` if it is a power of two. Otherwise, return `false`*.

An integer `n` is a power of two, if there exists an integer `x` such that `n == 2x`.
*/
// TC: O(log n)
// SC: O(log n)

const isPowerOfTwo = n => {
    if(n === 1 || n === 0){
        return true
    }else if(n <= 1 || n % 2 === 0){
        return false
    }

    return isPowerOfTwo( n / 2)
}

console.log(isPowerOfTwo(3));

/*Question 2
Given a number n, find the sum of the first natural numbers.
*/
// TC: O(n)
// SC: O(n)
const findSumOfNaturalNums = n => {
    if(n <= 1){
        return n >= 0 ? n : 0
    }

    return n + findSumOfNaturalNums(n - 1)
}

console.log(findSumOfNaturalNums(3));

// Question 3
// Given a positive integer, N. Find the factorial of N. 
// TC: O(n)
// SC: O(n)
const findFactorialRecursive = N => {
    if(N === 1 || N === 0){
        return 1
    }

    return N * findFactorialRecursive(N-1)
}

console.log(findFactorialRecursive(5));

/*
Question 4
Given a number N and a power P, the task is to find the exponent of this number raised to the given power, i.e. N^P.
*/
// TC: O(n)
// SC: O(n)
const findExponent = (N,P) => {
    if(P === 0){
        return 1
    }

    return N * findExponent(N,P-1)
}

console.log(findExponent(5,2));

/*
Question 5
Given an array of integers **arr**, the task is to find maximum element of that array using recursion.
*/
// TC: O(n)
// SC: O(n)

const findMaxInArray = (arr) => {
    if(arr.length === 1){
        return arr[0]
    }

    const last = arr.pop()
    const maximumFromArray = findMaxInArray(arr)

    return last > maximumFromArray ? last : maximumFromArray
}

console.log(findMaxInArray([1, 4, 3, -5, -4, 8, 6]));

/*
Question 6
Given first term (a), common difference (d) and a integer N of the Arithmetic Progression series, the task is to find Nth term of the series.
*/
// TC: O(n)
// SC: O(n)

const findNthTermSeries = (a,d,N) => {
    if(N === 1){
        return a
    }

    return findNthTermSeries(a + d,d,N - 1) 
}

console.log(findNthTermSeries(2,3,5));

/*
Question 8

Given an array, find a product of all array elements.
*/
// TC: O(n)
// SC: O(n)
const findProduct = (arr,index) => {
    if(index === arr.length - 1){
        return arr[index]
    }

    return arr[index] * findProduct(arr,++index)
}

console.log(findProduct([1, 2, 3, 4, 5],0));