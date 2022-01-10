// Insertion sort

// NOTE Insert an element from unsorted array to its correct position in sorted array

let arr = [12, 45, 23, 51, 19, 8]
let n = arr.length


for (let i = 1; i < n; i++) {
    let current = arr[i]
    let j = i - 1

    while (arr[j] > current && j >= 0) {
        arr[j + 1] = arr[j]
        j--
    }

    console.log(j)
    arr[j + 1] = current

    console.log(arr)
}

console.log(arr)