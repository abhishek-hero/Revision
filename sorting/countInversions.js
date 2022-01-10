function runProgram(input) {
    input = input.trim().split('\n')
    let n = +input[0]
    let arr = input[1].trim().split(" ").map(Number)

    let count = 0

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[i]) {
                count++
            }
        }
    }

    console.log(count)

}

if (process.env.USERNAME === "abhim") {
    runProgram(`4
8 4 2 1`);
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