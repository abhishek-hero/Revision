// find subarray with max sum

let arr = [-1, -2, -3, -4]
let n = arr.length

let max = 0
let curr = 0

for (let i = 0; i < n - 1; i++) {

    curr += arr[i]

    max = Math.max(max, curr)

    // if (curr < 0) {
    //     curr = 0
    // }
}

console.log(max)