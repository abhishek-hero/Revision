// let nums = [0, 1, 0, 2, 3, 0]

// // last non zero element found at
// let last = 0

// for (let i = 0; i < nums.length; i++) {

//     if (nums[i] !== 0) {
//         nums[last] = nums[i]
//         last++
//     }

//     // if (nums[i] !== 0) {
//     //     let temp = nums[last]
//     //     nums[last] = nums[i]
//     //     nums[i] = temp
//     //     last++
//     // }
// }

// for (let i = last; i < nums.length; i++) {
//     nums[i] = 0
// }

// console.log(nums)

// let digits = [9]
// var plusOne = function (digits) {

//     for (let i = digits.length - 1; i >= 0; i--) {
//         digits[i]++
//         if (digits[i] > 9) {
//             digits[i] = 0;
//         }
//         else {
//             return digits;
//             break
//         }
//     }
//     digits.unshift(1);
//     return digits;
// };

// console.log(plusOne(digits))


// for (let i = digits.length - 1; i >= 0; i--) {
//     digits[i]++
//     if (digits[i] > 9) {
//         digits[i] = 0;
//     }
//     else {
//         console.log(digits)
//         return
//     }
// }
// digits.unshift(1);
// // return digits;
// console.log((digits))


let arr1 = [1, 2, 3, 0, 0, 0]
let arr2 = [2, 5, 6]

let i = 0;
let j = 0;

for (let i = 0; i < arr2.length; i++) {
    console.log(arr1[i], arr2[i])
    arr1[i] = arr2[i]
}

console.log(arr1)