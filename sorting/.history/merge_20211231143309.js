// Merge sort recursively
// NOTE it's a divide and 

// let arr = [12, 45, 23, 51, 19, 8, 2]
// let n = arr.length

// const merge = (arr, l, mid, h) => {
//     let a = [], b = [];
//     let n1 = mid - l + 1
//     let n2 = h - mid

//     for (let i = 0; i < n1; i++) {
//         a[i] = arr[l + i]
//     }

//     for (let i = 0; i < n2; i++) {
//         b[i] = arr[mid + 1 + i]
//     }

//     let i = 0, j = 0, k = l;

//     while (i < a.length && j < b.length) {
//         if (a[i] < b[j]) {
//             arr[k] = a[i]
//             k++
//             i++

//         } else {
//             arr[k] = b[j]
//             k++
//             j++
//         }
//     }

//     while (i < a.length) {
//         arr[k] = a[i]
//         k++
//         i++
//     }

//     while (j < b.length) {
//         arr[k] = b[j]
//         k++
//         j++
//     }
// }

// const mergeSort = (arr, l, h) => {

//     if (l < h) {

//         let mid = Math.floor((l + h) / 2)

//         mergeSort(arr, l, mid)
//         mergeSort(arr, mid + 1, h)

//         merge(arr, l, mid, h)
//     }
// }

// mergeSort(arr, 0, arr.length - 1)
// console.log(arr)









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

function runProgram(input) {
    input = input.trim().split('\n')

    let n = +input[0]
    let arr = input[1].trim().split(" ").map(Number)

    mergeSort(arr, 0, arr.length - 1)
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