// 1. Two Sum
// Input: nums = [2,7,11,15], target = 9



const nums = [3, 2, 4]
let target = 6;


function toSumFunc(nums, target) {

  for (let i = 0; i <= nums.length - 1; i++) {
    // console.log(nums[i]);

    for (let j = 0; j <= nums.length - 1; j++) {
      // console.log(i, j);
      if (nums[i] + nums[j] == target && i != j) {
        // console.log(i, j);

        return [i, j];

      }

    }

  }
  return;
}
const result = toSumFunc(nums, target);
console.log(result);

