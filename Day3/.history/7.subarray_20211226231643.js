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

for (let i = 0; i < str.length; i++) {
    let newStr = ''
    for (let j = i; j < k; j++) {
        newStr += str[j]
    }

    console.log(newStr)
    // if (newStr.length == temp.length) {
    //     // check(newStr)
    // }
}
