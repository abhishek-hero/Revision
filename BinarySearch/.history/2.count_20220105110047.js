

function runProgram(input) {
    input = input.trim().split('\n')
    let [n, k] = input.trim().split(" ").map(Number)
    let arr = input.trim().split(" ").map(Number)

}

if (process.env.USERNAME === "abhim") {
    runProgram(`6 3
2 3 3 3 6 9`);
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