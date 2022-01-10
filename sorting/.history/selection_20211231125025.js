// Selection Sort
// NOTE Find minimum element in unsorted array and swap it with element at begining


// let arr = [12, 45, 23, 51, 19, 8]
// let n = arr.length
// let min = 0


// for (let i = 0; i < n - 1; i++) {
//     for (let j = i + 1; j < n; j++) {

//         if (arr[j] < arr[i]) {

//             let temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//         }
//     }
// }

// console.log(arr)





const selectionSort = (arr, n) => {

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[i]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }

    return arr.join(' ')
}




function runProgram(input) {
    input = input.trim().split('\n')

    let n = +input[0]
    let arr = input[1].trim().split(" ").map(Number)

    console.log(selectionSort(arr, n))
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