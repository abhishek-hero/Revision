// find subarray with max sum

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
let n = arr.length

let max = 0
let curr = 0

for (let i = 0; i < n; i++) {

    curr += arr[i]

    max = Math.max(max, curr)

    if (curr < 0) {
        curr = 0
    }
}

console.log(max)