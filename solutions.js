/**   Max Consecutive Ones
Given a binary array nums, return the maximum number of consecutive 1's in the array.

Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2

Constraints:

    1 <= nums.length <= 105
    nums[i] is either 0 or 1.

 * @param {number[]} nums
 * @return {number}
 *
 * J solution: >./ #;.(_1) 0, input =: 1 1 0 1 1 1
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxOnes = 0
    let currentOnes = 0
    for (let num of nums) {
        if (num == 1) {
            currentOnes += 1
        }
        else {
            currentOnes = 0
        }
        if (currentOnes > maxOnes) {
            maxOnes = currentOnes
        }
    }
    return maxOnes
}

/**
 *
Given an array nums of integers, return how many of them contain an even number of digits.

Example 1:

Input: nums = [12,345,2,6,7896]
Output: 2
Explanation: 
12 contains 2 digits (even number of digits). 
345 contains 3 digits (odd number of digits). 
2 contains 1 digit (odd number of digits). 
6 contains 1 digit (odd number of digits). 
7896 contains 4 digits (even number of digits). 
Therefore only 12 and 7896 contain an even number of digits.

Example 2:

Input: nums = [555,901,482,1771]
Output: 1 
Explanation: 
Only 1771 contains an even number of digits.

Constraints:

    1 <= nums.length <= 500
    1 <= nums[i] <= 105

 * @param {number[]} nums
 * @return {number}
 *
 * J solution: +/ 0= 2| #;.(_1) ' ', ": 12 345 2 6 7896
 */
var findNumbers = function(nums) {
    evenNums = 0
    for (let num of nums) {
        if (num.toString().length % 2 === 0) {
            evenNums++
        }
    }
    return evenNums
}

/**
 *Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [6,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

Constraints:

    1 <= nums.length <= 104
    -104 <= nums[i] <= 104
    nums is sorted in non-decreasing order.
 
Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?1
 * @param {number[]} nums
 * @return {number[]}
 * J solution: /:~ *: _4 _1 0 3 10
 */
var sortedSquares = function(nums) {
    let negSquares = []
    let squares = []
    for (let num of nums) {
        if (num < 0) {
            negSquares.push(num * num)
        }
        else {
            while (negSquares.length > 0 && negSquares[negSquares.length-1] < num * num) {
                squares.push(negSquares.pop())
            }
            squares.push(num * num)
        }
    }   
    while (negSquares.length > 0) {
        squares.push(negSquares.pop())
    }
    return squares
}



/**
 *Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place ad do not return anything.

Example 1:

Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

Example 2:

Input: arr = [1,2,3]
Output: [1,2,3]
Explanation: After calling your function, the input array is modified to: [1,2,3]

Constraints:

    1 <= arr.length <= 104
    0 <= arr[i] <= 9

 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 * J solution: {{ (#y) {. y#~ 1+ 0= y }} 1 0 2 3 0 4 5 0
 */
var duplicateZeros = function(arr) {
    let len = arr.length
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            for (let j = arr.length - 1; j > i; j--) {
                arr[j + 1] = arr[j]
            }
            arr[i+1] = 0
            i++
        }
    }
    arr.length = len
}

/**
 *
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

Constraints:

    nums1.length == m + n
    nums2.length == n
    0 <= m, n <= 200
    1 <= m + n <= 200
    -109 <= nums1[i], nums2[j] <= 109

Follow up: Can you come up with an algorithm that runs in O(m + n) time?
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * J solution: 1 2 3 0 0 0 {{ /:~ y,~ ((#x)-#y) {. x }} 2 5 6
 */

var merge = function(nums1, m, nums2, n) {
    nums1.splice(nums1.length-n, n)
    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i] > nums2[0]) {
           nums1.splice(i, 0, nums2.shift())
        }
    }
    while (nums2.length > 0) {
        nums1.push(nums2.shift())
    }
}


/**
 *
  Remove Element

Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
                            // It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
    assert nums[i] == expectedNums[i];
}

If all assertions pass, then your solution will be accepted.

Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).

Constraints:

    0 <= nums.length <= 100
    0 <= nums[i] <= 50
    0 <= val <= 100

 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * J solution: 3 {{ y #~ x~:y }} 3 2 2 3
 */
var removeElement = function(nums, val) {
    let vals = nums.length
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1)
            i--
            vals--
        }
    }
    return vals
}





