let nums = [0, 1, 0, 2, 3, 0]

// last non zero element found at
let last = 0

for (let i = 0; i < nums.length; i++) {

    if (nums[i] !== 0) {
        nums[last++] = nums[i]
    }
}

for (let i = last; i < nums.length; i++) {
    nums[i] = 0
}

console.log(nums)