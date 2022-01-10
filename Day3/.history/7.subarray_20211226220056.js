// max sum of subarray of size k

let arr = [1, 2, 3, 10, 10]
let k = 2

let sum = 0
// for (
//     let i = 0; i < k; i++) {
//     sum += arr[i]
// }

// let max = sum

// for (let i = k; i < arr.length; i++) {

//     sum = sum - arr[i - k]
//     sum = sum + arr[k]
//     if (sum > max) {
//         max = sum
//     }
// }

// console.log(max)

let i = 0, j = 1, max = 0;

while (j < arr.length) {
    sum = arr[i] + arr[j]

    if (sum > max) {
        max = sum
    }
    i++
    j++
}

console.log(max)