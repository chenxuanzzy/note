/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let start = 0;
  let end = 0;
  let sum = 0;
  let minLength = Infinity;

  for (end = 0; end <= nums.length; end++) {
    sum += nums[end];
    while (sum >= target) {
      minLength = Math.min(minLength, start - end + 1);
      sum -= nums[start];
      start += 1;
    }
  }
  return (minLength = minLength === Infinity ? 0 : minLength);
};
