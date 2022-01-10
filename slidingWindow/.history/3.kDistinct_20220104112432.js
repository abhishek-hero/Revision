function runProgram(input) {
    input = input.trim().split("\n")
    let [n, k] = input[0].trim().split(" ").map(Number)
    let str = input[1].trim()

}

if (process.env.USERNAME === "abhim") {
    runProgram(`4 2
abcc`);
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