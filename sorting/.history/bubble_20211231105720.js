// Reapetedly swaping two adjacent elements if they are in wrong order

let arr = [12, 45, 23, 51, 19, 8]
let n = arr.length

let counter = 1

while (counter < n) {

    for (let i = 0; i < n; i++) {

        if (arr[i] > arr[i + 1]) {
            let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
        }
    }
    console.log(arr)
    counter++
}

console.log(arr)