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
// rmFirstCharUnicode ??? ???#~??????????#??????
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


/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:

Input: nums = [0]
Output: [0]

Constraints:

    1 <= nums.length <= 104
    -231 <= nums[i] <= 231 - 1
 
Follow up: Could you minimize the total number of operations done?
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * J solution: (#~ 0&~:) , (#~ 0&=)
 */
var moveZeroes = nums => {
    let j = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[j] = nums[i]
            j++
        }
    }
    while (j < nums.length) {
        nums[j] = 0
        j++
    }
}

/**
 * Sort Array By Parity

Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

Return any array that satisfies this condition.

Example 1:

Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

Example 2:

Input: nums = [0]
Output: [0]

Constraints:

    1 <= nums.length <= 5000
    0 <= nums[i] <= 5000

 * @param {number[]} nums
 * @return {number[]}
 * J solution: ((#~ (0=2&|)), (#~ 2&|)) 3 1 2 4
 */
var sortArrayByParity = nums => {
    return [].concat(nums.filter(x => x % 2 == 0), nums.filter(x => x % 2 != 0))
}



/**
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
 * J solution: f =: {{(#~ x&~:) y}}
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
 * Height Checker

A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).

Return the number of indices where heights[i] != expected[i].

Example 1:

Input: heights = [1,1,4,2,1,3]
Output: 3
Explanation: 
heights:  [1,1,4,2,1,3]
expected: [1,1,1,2,3,4]
Indices 2, 4, and 5 do not match.

Example 2:

Input: heights = [5,1,2,3,4]
Output: 5
Explanation:
heights:  [5,1,2,3,4]
expected: [1,2,3,4,5]
All indices do not match.

Example 3:

Input: heights = [1,2,3,4,5]
Output: 0
Explanation:
heights:  [1,2,3,4,5]
expected: [1,2,3,4,5]
All indices match.

Constraints:

    1 <= heights.length <= 100
    1 <= heights[i] <= 100

 * @param {number[]} heights
 * @return {number}
 * J solution: +/@:(~: /:~)
 */
var heightChecker = heights => {
    let sorted = heights.slice().sort((x,y) => x - y)
    let diffs = 0
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] != sorted[i]) {
            diffs++
        }
    }
    return diffs
}


/**
 *  Third Maximum Number

Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

Example 1:

Input: nums = [3,2,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1.

Example 2:

Input: nums = [1,2]
Output: 2
Explanation:
The first distinct maximum is 2.
The second distinct maximum is 1.
The third distinct maximum does not exist, so the maximum (2) is returned instead.

Example 3:

Input: nums = [2,2,3,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2 (both 2's are counted together since they have the same value).
The third distinct maximum is 1.

Constraints:

    1 <= nums.length <= 104
    -231 <= nums[i] <= 231 - 1
 
Follow up: Can you find an O(n) solution?
 * @param {number[]} nums
 * @return {number}
 * J solution: {{ 2 } (,{.)^:(2) ~. \:~ y }}
 */
var thirdMax = nums => {
    let maxes = [-Infinity, -Infinity, -Infinity];
    let len = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < 3; j++) {
            if (nums[i] > maxes[j] && nums[i] != maxes[0] && nums[i] != maxes[1] && nums[i] != maxes[2]) {
                maxes.splice(j, 0, nums[i]);
                len++;
                break;
            }
        }
    }
    if (len >= 3) { 
        return maxes[2];
    } else { 
        return maxes[0];
    }
}

/**
 *
  Find All Numbers Disappeared in an Array

Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Example 2:

Input: nums = [1,1]
Output: [2]

Constraints:

    n == nums.length
    1 <= n <= 105
    1 <= nums[i] <= n

Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
 * @param {number[]} nums
 * @return {number[]}
 * J solution: {{ >: I. -. y e.~ >: i. # y }} 4 3 2 7 8 2 3 1
 */
var findDisappearedNumbers = nums => {
    let missing = [];
    for (let i = 1; i <= nums.length; i++) {
        let found = 0;
        let j = 0;
        for (; j < nums.length; j++) {
            if (i === nums[j]) {
                found = 1;
                break;
            }
        }
        if (!found) {
            missing.push(i);
        }
    }
    return missing;
}

/**
 * 239. Sliding Window Maximum
Hard

You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

Example 2:

Input: nums = [1], k = 1
Output: [1]

Constraints:

    1 <= nums.length <= 105
    -104 <= nums[i] <= 104
    1 <= k <= nums.length

 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * J solution: {{ x >./\ y }}
 */
var maxSlidingWindow = (nums, k) => {
    let maxes = []
    for (let i = 0; i <= nums.length - k; i++) {
        let max = -Infinity; 
        for (let j = 0; j < k; j++) {
            max = Math.max(max, nums[i+j])
        }
        maxes.push(max)
    }
    return maxes
}

/**
 * 1. Two Sum
Easy

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

    2 <= nums.length <= 104
    -109 <= nums[i] <= 109
    -109 <= target <= 109
    Only one valid answer exists.
 
Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * J solution: 6 {{ I. +./ x= (~:/~ i. # y) *. +/~ y }} 3 2 4
 */
var twoSum = (nums, target) => {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(target - nums[i])) {
      map.set(nums[i], i)
    } else {
      return [map.get(target - nums[i]), i]
    }
  }
}


/**
 *
217. Contains Duplicate
Easy

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true

Example 2:

Input: nums = [1,2,3,4]
Output: false

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

Constraints:

    1 <= nums.length <= 105
    -109 <= nums[i] <= 109

 * @param {number[]} nums
 * @return {boolean}
 * J solution: (-.@:-: ~.)
 */
var containsDuplicate = nums => {
    return nums.length != nums.filter((v, i, a) => a.indexOf(v) === i).length
}

/**
 *
125. Valid Palindrome
Easy

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

Constraints:

    1 <= s.length <= 2 * 105
    s consists only of printable ASCII characters.

 * @param {string} s
 * @return {boolean}
 * J solution: letterPalindrome =: {{ (-:|.) (#~ (>:&97 *. <:&122)) (])`(+&32)@.(<:&90*.>:&65)  a. i. y }}
 */
var isPalindrome = s => {
    s = s.toLowerCase().replace(/[^a-z0-9]*/g, '')
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[s.length-i-1]) {
            return false
        }
    }
    return true
}

/**
 *121. Best Time to Buy and Sell Stock
Easy

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

Constraints:

    1 <= prices.length <= 105
    0 <= prices[i] <= 104
 * @param {number[]} prices
 * @return {number}
 * J solution: {{ >./ y -~ >./\. y }}
 */
var maxProfit = prices => {
		let buyAt = prices[0]
		let sellAt = prices[0]
		let maxProfit = 0
		for (let price of prices) {
				if (price < buyAt) { // update both buy and sell
						buyAt = price
						sellAt = price
				} else if (price - buyAt > maxProfit) { // update sell
						sellAt = price
						maxProfit = Math.max(maxProfit, sellAt - buyAt)
				}
		}
    return maxProfit
}

/**
 *
771. Jewels and Stones
Easy

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0

Constraints:

    1 <= jewels.length, stones.length <= 50
    jewels and stones consist of only English letters.
    All the characters of jewels are unique.

 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 * J solution: {{ +/ , x =/ y }}
 */
var numJewelsInStones = (jewels, stones) => {
  let jewelSet = new Set(jewels)
	let sum = 0

	for (let stone of stones) {
		if (jewelSet.has(stone)) {
			sum++
		}
	}
}


/**
 *
392. Is Subsequence
Easy

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false

Constraints:

    0 <= s.length <= 100
    0 <= t.length <= 104
    s and t consist only of lowercase English letters.
 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = (s, t) => {
    let sp = 0
    
    for (let tp = 0; tp < t.length; tp++) {
        if (t[tp] === s[sp]) {
            sp++
        }
    }
    return sp === s.length
}


/*
1009. Complement of Base 10 Integer
Easy

The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

    For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.

Given an integer n, return its complement.

 

Example 1:

Input: n = 5
Output: 2
Explanation: 5 is "101" in binary, with complement "010" in binary, which is 2 in base-10.

Example 2:

Input: n = 7
Output: 0
Explanation: 7 is "111" in binary, with complement "000" in binary, which is 0 in base-10.

Example 3:

Input: n = 10
Output: 5
Explanation: 10 is "1010" in binary, with complement "0101" in binary, which is 5 in base-10.

 

Constraints:

    0 <= n < 109

 * @param {number} n
 * @return {number}
 * J solution: {{ (#~ ' '&~:) ": #: y }}
 */
var bitwiseComplement = function(n) { };

