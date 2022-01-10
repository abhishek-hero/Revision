let arr = [1, 2, 3, 4, 5]
let n = arr.length
let k = 2

// let a = arr.pop()
// arr.unshift(a)

// console.log(arr)


// let temp = arr[n - 1]

// for (let i = n - 1; i >= 0; i--) {
//     arr[i] = arr[i - 1]
// }

// arr[0] = temp
// console.log(arr)

for (let i = 0; i < k; i++) {

    rotateLeft(arr, n)
}

const rotateLeft = (arr, n) => {

    let temp = arr[0]

    for (let i = 0; i < n - 1; i++) {
        arr[i] = arr[i + 1]
    }

    arr[n - 1] = temp
}

console.log(arr)