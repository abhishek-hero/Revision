function person(name, age) {
    var obj = {}
    obj.name = name
    obj.age = age

    return obj
}

var p1 = new person('abhi', 19)

// console.log(typeof (p1))

function abhishek(a) {
    // console.log(a)
    return a
}

var b = new abhishek(2)
// console.log(b)
// b()

// console.log(yah)

// let num = 322

// let ans = 0

// while (num > 0) {
//     ans = ans * 10 + num % 10
//     // console.log(ans)
//     num = Math.floor(num / 10)
// }

// console.log(ans)
// // console.log(num)


// ----------------------------------------------------------------


// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

Input: nums = [-1, 0, 1, 2, -1, -4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []


// Constraints:

// 0 <= nums.length <= 3000
// -105 <= nums[i] <= 105


let ans = []

for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
        for (let k = 0; k < nums.length; k++) {

            if (i !== j && i !== k && j !== k && (nums[i] + nums[j] + nums[k]) == 0) {
                ans.push([nums[i], nums[j], nums[k]])
            }
        }
    }
}

console.log(ans)