// NOTE Quick sort == It's a divide and conquor algorithm
// NOTE Time Complexity = O(n2) worst case
// NOTE best case O(nLogn)

// let arr = [12, 45, 23, 51, 19, 8, 2]
// let n = arr.length


const swap = (arr, i, j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}


const partition = (arr, l, r) => {

    let pivot = arr[r]
    let i = l - 1

    for (let j = l; j < r; j++) {

        if (arr[j] < pivot) {
            i++

            // NOTE preventing swap call when i == j
            if (i !== j) {
                swap(arr, i, j)
            }
        }
    }
    swap(arr, i + 1, r)
    return i + 1
}

const quickSort = (arr, l, r) => {

    if (l < r) {

        let pi = partition(arr, l, r)

        quickSort(arr, l, pi - 1)
        quickSort(arr, pi + 1, r)
    }
}

// quickSort(arr, 0, arr.length - 1)
// console.log(arr)





function runProgram(input) {
    input = input.trim().split("\n")
    let n = +input[0]
    let arr = input[1].trim().split(" ").map(Number)

    quickSort(arr, 0, n - 1)
    console.log(arr.join(' '))
}

if (process.env.USERNAME === "abhim") {
    runProgram(`5
3 5 0 9 8`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}