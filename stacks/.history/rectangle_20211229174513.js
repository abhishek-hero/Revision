// max area of reactangle in binary matrix

let arr = [
    [0, 1, 1, 0],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 0, 0]
]

let n = arr.length
let m = arr[0].length
console.log(arr[0])
let vector = []

for (let j = 0; j < m; j++) {
    vector.push(arr[0][j])
}

console.log(vector)