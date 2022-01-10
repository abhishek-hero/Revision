// Merge sort recursively
// NOTE it's a divide and 

let arr = [12, 45, 23, 51, 19, 8]
let n = arr.length

const mergeSort = (arr, l, h) => {

    if (l < r) {

        let mid = Math.floor((l + h) / 2)

        mergeSort(arr, l, mid)
        mergeSort(arr, mid + 1, h)

        mergeSort(arr, l, mid, h)
    }
}