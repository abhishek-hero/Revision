// find subarray with max sum

let arr = [1, 2, 3, -2, 5]
let n = arr.length

let max = 0
let curr = 0
let start = 0, end = 0;

for (let i = 0; i < n; i++) {

    curr += arr[i]

    max = Math.max(max, curr)

    if (curr < 0) {
        curr = 0
    }
}

console.log(max)

// above approach is correct


// for (let i = 1; i < n; i++) {

//     curr = Math.max(arr[i], curr + arr[i])

//     if (curr > max) {
//         max = curr
//     }
// }

// console.log(max)