// Rain water trapping

let arr = [3, 0, 0, 2, 0, 4]

let maxLeft = [], maxRight = [];
maxLeft[0] = arr[0]
maxRight[0] = arr[arr.length - 1]


for (let i = 1; i < arr.length; i++) {
    maxLeft[i] = Math.max(arr[i], maxLeft[i - 1])
}

console.log(maxLeft)