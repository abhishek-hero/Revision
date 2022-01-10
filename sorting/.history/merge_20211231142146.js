// Merge sort recursively
// NOTE it's a divide and 

let arr = [12, 45, 23, 51, 19, 8, 2]
let n = arr.length

const merge = (arr, l, mid, h) => {
    let a = [], b = [];
    let n1 = mid - l + 1
    let n2 = h - mid

    for (let i = 0; i < n1; i++) {
        a[i] = arr[l + i]
    }

    for (let i = 0; i < n2; i++) {
        b[i] = arr[mid + 1 + i]
    }

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

mergeSort(arr, 0, arr.length - 1)
console.log(arr)