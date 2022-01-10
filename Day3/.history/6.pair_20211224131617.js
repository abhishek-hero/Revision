function runProgram(input) {
    input = input.trim().split("\n")

    let test = +input[0]
    let line = 1

    for (let t = 0; t < test; t++) {

        let [n, k] = input[line++].trim().split(' ').map(Number)
        let arr = input[line++].trim().split(" ").map(Number).sort((a, b) => a - b)
        let res = -1
        let i = 0, j = n - 1;

        while (i <= j) {

            let sum = arr[i] + arr[j]
            if (sum == k) {
                res = 1
            }
            i++
            j--
        }

        console.log(res)
    }
}

if (process.env.USERNAME === "abhim") {
    runProgram(`1
5 2
3 4 0 2 7`);
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





// for (let i = 0; i < n; i++) {

//     for (let j = i + 1; j < n; j++) {

//         let sum = arr[i] + arr[j]

//         if (sum == k) {
//             res = 1
//             break
//         } else {
//             sum = 0
//         }
//     }
// }