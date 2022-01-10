let arr = [1, 2, 0, 4, 6]

let min = arr[0]
let max = arr[1]

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    } else if (arr[i] < min) {
        min = arr[i]
    }
}

console.log(min, max)