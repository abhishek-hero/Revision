function runProgram(input) {
    input = input.trim().split("\n")
    let str = input[0].trim()
    let n = +input[1]

    let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let b = alpha.toLocaleLowerCase()
    console.log(b)
}

if (process.env.USERNAME === "abhim") {
    runProgram(`All-convoYs-9-be:Alert1.
4`);
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