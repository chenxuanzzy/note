# 209. Longest Substring Without Repeating Characters

## 題目 [LeetCode 209](https://leetcode.com/problems/minimum-size-subarray-sum/)

Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

**Example 1:**

```
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
```

**Example 2:**

```
Input: target = 4, nums = [1,4,4]
Output: 1
```

**Example 3:**

```
Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
```

**Constraints:**

- `1 <= target <= 109`

- `1 <= nums.length <= 105`

- `1 <= nums[i] <= 105`

## 解題思路

題目：給一組陣列和 target 數，如果陣列的值連續相加超過 target 則回傳長度，長度最小者為答案。

- 定義開始、結束、總和皆為 0。先預設**最小長度**為無限（Infinity），因為需要讓長度做比較回傳。
- 開始位置加總直到總和 sum 大於 target 後進入判斷當前窗口大小再存放至 minLength 中
- 回傳長度

  補充：

1. [Infinity](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Infinity)

## 程式

@[code](./code/LeetCode/MinimumSizeSubarraySum/index.js)

- Time Complexity: O(n)
- Space Complexity: O(1)
