# 3. Longest Substring Without Repeating Characters

## 題目 [LeetCode 003](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

Given a string s, find the length of the longest substring without repeating characters.

**Example 1:**

```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

**Example 2:**

```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

**Example 3:**

```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

**Constraints:**

- `0 <= s.length <= 5 * 104`

- `s` consists of English letters, digits, symbols and spaces.

## 解題思路

題目：給一段字串，擷取沒有重複的字元後回傳長度（must be substring）

- 建立空陣列利用`indexOf`查找沒有重複的字元放入，如果 index = -1 代表陣列中沒有此字元，反之，有的話就利用 splice 將它去除，此時滑動窗口至
  下一個字元，需要注意的是去除是從 0 開始至 **index + 1**
- 回傳比較陣列長度和初始值 max 誰較大

補充：

1. String

   > 字串，長度為 0 的字串也是字串，叫空字串

2. Substring

   > 子字串，字串中**連續**的一段字串，如本題

3. Subsequence
   > 子序列，由左到右挑取字元所構成的字串（不用連續）

## 程式

@[code](./code/LeetCode/LongestSubstringWithoutRepeatingCharacters/index.js)

- Time Complexity: O(n)
- Space Complexity: O(n)
