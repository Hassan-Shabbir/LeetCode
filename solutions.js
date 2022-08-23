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
 * J solution: {{ >./ #;.(_1) 0, y }} 1 1 0 1 1 1
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

/**
 * 
 * Remove Duplicates from Sorted Array
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}

If all assertions pass, then your solution will be accepted.

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Constraints:

    1 <= nums.length <= 3 * 104
    -100 <= nums[i] <= 100
    nums is sorted in non-decreasing order.

 * @param {number[]} nums
 * @return {number}
 * J solution: ~.
 */
var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] == nums[i+1]) {
            nums.splice(i+1, 1)
            i--
        }
    }
}

/**
 *   Check If N and Its Double Exist

Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

More formally check if there exists two indices i and j such that :

    i != j
    0 <= i, j < arr.length
    arr[i] == 2 * arr[j]

Example 1:

Input: arr = [10,2,5,3]
Output: true
Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.

Example 2:

Input: arr = [7,1,14,11]
Output: true
Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.

Example 3:

Input: arr = [3,1,7,11]
Output: false
Explanation: In this case does not exist N and M, such that N = 2 * M.

Constraints:

    2 <= arr.length <= 500
    -10^3 <= arr[i] <= 10^3

 * @param {number[]} arr
 * @return {boolean}
 * J solution: {{ +./ , 2= %/~ y }} 10 2 5 3
 */
var checkIfExist = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == 2 * arr[j] && i !== j) {
                return true
            }
        }
    }
    return false
}

/**
 *
  Valid Mountain Array

Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

    arr.length >= 3
    There exists some i with 0 < i < arr.length - 1 such that:
        arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
        arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

Example 1:

Input: arr = [2,1]
Output: false

Example 2:

Input: arr = [3,5,5]
Output: false

Example 3:

Input: arr = [0,3,2,1]
Output: true

Constraints:

    1 <= arr.length <= 104
    0 <= arr[i] <= 104

 * @param {number[]} arr
 * @return {boolean}
 * J solution: TODO
 */
var validMountainArray = arr => {
    let increasing = true
    let switched = 0
    let valid = true
    if (arr.length < 3) { 
        return false 
    }
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i+1] && i == 0) {
            valid = false
        }
        if (arr[i] > arr[i+1] && i != 0) {
            increasing = false
        }
        
        if (increasing) {
            valid = valid && (arr[i] < arr[i+1])
        }
        else if (!increasing) {
            valid = valid && (arr[i] > arr[i+1])
        }
    }
    return valid && !increasing
}

// Longest Absolute File Path Problem In J 
// ]a =: 'dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext'
// ]b =: {{ }:each '\n' cut ('\\t';'@') rxrplc y }} a
// ]depth =: {{ > {."(1) b,.~ +/each '@'=each y }} b
// ]data =: 0, {{ > #each }:each '\n' cut ('\\t';'') rxrplc y }} a
// ]idxOfParent =: 0 0 , }. 1+ {{ > ({:each <\ 0>. 1-~ y) i:~each <\ y }} depth
// {{ data + data {~ idxOfParent [ idxOfParent =: {~ idxOfParent }} ^:(_) ''

// Remove first matching char from string
// rmFirstChar =: [#~i.~:i.@:#@:[ 
// rmFirstCharUnicode ← ⊣#~ι≠ι∘#∘⊣
// '551' rmFirstChar '5' NB. ==> '51'

// Square even indicies
// sqEven =: *:`] @.(2|[:i.#) 

/**
 *   Replace Elements with Greatest Element on Right Side

Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

Example 1:

Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
Explanation: 
- index 0 --> the greatest element to the right of index 0 is index 1 (18).
- index 1 --> the greatest element to the right of index 1 is index 4 (6).
- index 2 --> the greatest element to the right of index 2 is index 4 (6).
- index 3 --> the greatest element to the right of index 3 is index 4 (6).
- index 4 --> the greatest element to the right of index 4 is index 5 (1).
- index 5 --> there are no elements to the right of index 5, so we put -1.

Example 2:

Input: arr = [400]
Output: [-1]
Explanation: There are no elements to the right of index 0.

Constraints:

    1 <= arr.length <= 104
    1 <= arr[i] <= 105

 * @param {number[]} arr
 * @return {number[]}
 * J solution: _1,~ }. >./\. 17 18 5 4 6 1
 */
var replaceElements = arr => {
    let max = -1
    for (let i = arr.length-1; i >= 0; i--) {
        let cur = arr[i]
        arr[i] = max
        if (cur > max) {
            max = cur
        }
    }
    return arr
}


/**
 * Remove Duplicates from Sorted Array

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}

If all assertions pass, then your solution will be accepted.

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Constraints:

    1 <= nums.length <= 3 * 104
    -100 <= nums[i] <= 100
    nums is sorted in non-decreasing order.

 * @param {number[]} nums
 * @return {number}
 * J solution: (] #~ 1, 2~:/\ ]) 0 0 1 1 1 2 2 3 3 4
 */
var removeDuplicates = nums => {
    let len = 1
    for (let i = 0; i < nums.length-1; i++) {
        if (nums[i] != nums[i+1]) {
            nums[len] = nums[i+1]
            len++
        }
    }
    return len
}
