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

    console.log(a, b, l, mid, h)

    let i = 0, j = 0, k = l;

    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            arr[k] = a[i]
            k++
            i++

        } else {
            arr[k] = b[j]
            k++
            j++
        }
    }

    while (i < a.length) {
        arr[k] = a[i]
        k++
        i++
    }

    while (j < b.length) {
        arr[k] = b[j]
        k++
        j++
    }
}

const mergeSort = (arr, l, h) => {

    if (l < h) {

        let mid = Math.floor((l + h) / 2)

        mergeSort(arr, l, mid)
        mergeSort(arr, mid + 1, h)

        merge(arr, l, mid, h)
    }
}

mergeSort(arr, 0, arr.length)
console.log(arr)