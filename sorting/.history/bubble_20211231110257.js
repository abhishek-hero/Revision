// Reapetedly swaping two adjacent elements if they are in wrong order

// let arr = [12, 45, 23, 51, 19, 8]
// let n = arr.length

// let counter = 1

// while (counter < n) {

//     for (let i = 0; i < n - counter; i++) {

//         if (arr[i] > arr[i + 1]) {
//             let temp = arr[i]
//             arr[i] = arr[i + 1]
//             arr[i + 1] = temp
//         }
//     }
//     console.log(arr)
//     counter++
// }

// console.log(arr)



const bubbleSort = (arr, n) => {

    let counter = 1

    while (counter < n) {
        for (let i = 0; i < n - counter; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        }

        counter++
    }

    return arr.join(' ')
}



function runProgram(input) {
    input = input.trim().split('\n')

    let n = +input[0]
    let arr = input[1].trim().split(" ").map(Number)

    console.log(bubbleSort(arr, n))
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