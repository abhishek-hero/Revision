// Rain water trapping

let arr = [3, 0, 0, 2, 0, 4]

let maxLeft = [], maxRight = [];
maxLeft[0] = arr[0]
// maxRight[arr.length - 1] = arr[arr.length - 1]
let maxRight = arr[arr.length - 1]


for (let i = 1; i < arr.length; i++) {
    maxLeft[i] = Math.max(arr[i], maxLeft[i - 1])
}

// console.log(maxLeft)

let sum = 0
for (let i = arr.length - 2; i >= 0; i--) {
    maxRight = Math.max(arr[i], maxRight)
    sum += Math.min(maxRight[i], maxLeft[i]) - arr[i]

}

// for (let i = 0; i < arr.length; i++) {
// }

console.log(sum)