// Selection Sort
// NOTE Find minimum element in unsorted array and swap it with element at begining


let arr = [12, 45, 23, 51, 19, 8]
let n = arr.length
let min = 0


for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {

        if (arr[j] < arr[i]) {

            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}

console.log(arr)