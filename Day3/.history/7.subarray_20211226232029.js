// max sum of subarray of size k

// let arr = [100, 2, 3, 10, 10, 20]
// let k = 2

// let sum = 0
// for (let i = 0; i < k; i++) {
//     sum += arr[i]
// }

// let max = sum

// for (let i = k; i < arr.length; i++) {

//     sum = sum - arr[i - k]
//     sum = sum + arr[i]
//     if (sum > max) {
//         max = sum
//     }
// }

// console.log(max)


let str = 'foroferpqrfor'
let temp = 'for'

let k = temp.length
let n = str.length
let newStr = ''

for (let i = 0; i < k; i++) {
    newStr += str[i]
}


for (let i = k; i < n; i++) {
    swap(newStr)
}