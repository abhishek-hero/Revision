let nums = [0, 1, 0, 2, 3, 0]

// last non zero element found at
let last = 0

for (let i = 0; i < nums.length; i++) {

    if (nums[i] !== 0) {
        let temp = nums[last]
        nums[last] = nums[i]
        nums[i] = temp
        last++
    }
}

// for (let i = last; i < nums.length; i++) {
//     nums[i] = 0
// }

console.log(nums)