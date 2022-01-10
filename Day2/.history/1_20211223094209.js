function runProgram(input) {
    input = input.trim().split("\n")
    let n = +input[0]
    let arr = input[1].trim().split(" ").map(Number)

    let sumEven = 0, sumOdd = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i] % 2 == 0) {
            sumEven += arr[i]
        } else {
            sumOdd += arr[i]
        }
    }

    if (sumOdd > sumEven) {
        console.log("Odd")
    } else {
        console.log("Even")
    }
}

if (process.env.USERNAME === "abhim") {
    runProgram(`4
1 2 3 4`);
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