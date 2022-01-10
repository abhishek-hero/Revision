// Print largest subarray of sum k


// let arr = [4, 1, 1, 1, 2, 3, 5]
// let n = arr.length
// let target = 5
// let max = 0.00001
// let ans;


// Brute force approach
// const checkSum = (sub, target) => {

//     let sum = 0

//     for (let i = 0; i < sub.length; i++) {
//         sum += sub[i]
//     }

//     if (sum == target) {
//         return true
//     }

//     return false
// }

// const sub = (arr, n, target) => {
//     for (let i = 0; i < n; i++) {
//         let subarry = []
//         for (let j = i; j < n; j++) {
//             subarry.push(arr[j])

//             if (checkSum(subarry, target)) {
//                 if (subarry.length > max) {
//                     max = subarry.length
//                     ans = [...subarry]
//                 }
//             }
//         }
//     }
// }

// sub(arr, n, target)
// console.log(ans)



// Sliding window approach

let arr = [4, 1, 1, 1, 2, 3, 5]
let n = arr.length
let target = 5
let max = 0.00001

let i = 0, j = 0, sum = 0;
// let arr = [4, 1, 4, 1, 2, 3, 5]

while (j < n) {
    sum += arr[j]

    if (sum < target) {
        j++
    }
    else if (sum == target) {
        max = Math.max(max, j - i + 1)
        j++
    }

    else if (sum > target) {
        while (sum > target) {
            sum -= arr[i]
            i++
        }
        if (sum == target) {
            max = Math.max(max, j - i + 1)
        }
        j++
    }
}

console.log(max)