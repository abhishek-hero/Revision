// find subarray with max sum

let arr = [-1]
let n = arr.length

let max = arr[0]
let curr = arr[0]

for (let i = 0; i < n - 1; i++) {

    curr += arr[i]

    max = Math.max(max, curr)

    if (curr < 0) {
        curr = 0
    }
}

console.log(max)


// for (let i = 1; i < n; i++) {

//     curr = Math.max(arr[i], curr + arr[i])

//     if (curr > max) {
//         max = curr
//     }
// }

// console.log(max)