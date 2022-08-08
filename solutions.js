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
 * J solution: >./ #;.(_1) 0,input =: 1 1 0 1 1 1
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
 * J solution: +/ 0= 2| #;.(_1) ' ',": 12 345 2 6 7896
 */
var findNumbers = function(nums) {
    evenNums = 0
    for (let num of nums) {
        if (num.toString().length % 2 === 0) {
            evenNums++
        }
    }
    return evenNums
};
