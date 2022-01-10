let arr = [1, 2, 3]

// swap iterative

let start = 0, end = n - 1;

while (start < end) {

    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
    start++
    end--
}

console.log(arr)