function runProgram(input) {
    input = input.trim().split('\n')
    let test = +input[0]

    let line = 1
    for (let i = 0; i < test; i++) {
        let str = input[line++].trim()

    }
}

if (process.env.USERNAME === "abhim") {
    runProgram(`2
ab#d
a#bc`);
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