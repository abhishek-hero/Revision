// Merge sort recursively
// NOTE it's a divide and 

let arr = [12, 45, 23, 51, 19, 8]
let n = arr.length

const merge = (arr, l, mid, h) => {
    let a = [], b = [];

    for (let i = l; i < mid; i++) {
        a.push(arr[i])
    }

    for (let i = mid + 1; i < h; i++) {
        b.push(arr[i])
    }

    let i = 0, j = 0, k = l;

    while (i < a.length && j < b.length) {
        if (arr[i] < arr[j]) {

        }
    }
}

const mergeSort = (arr, l, h) => {

    if (l < r) {

        let mid = Math.floor((l + h) / 2)

        mergeSort(arr, l, mid)
        mergeSort(arr, mid + 1, h)

        mergeSort(arr, l, mid, h)
    }
}