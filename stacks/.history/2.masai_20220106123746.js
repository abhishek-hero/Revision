function runProgram(input) {
    input = input.trim().split("\n")
    let n = +input[0]

    let stack = []

    for (let i = 1; i <= n; i++) {
        let arr = input[i].trim().split(" ").map(Number)

        if (arr.length == 3) {
            stack.push()
        }
    }
}

if (process.env.USERNAME === "abhim") {
    runProgram(`5
E 1 1
E 2 1
E 1 2
D
D`);
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