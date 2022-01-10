function runProgram(input) {
    let str = input.trim()

    let ans = ''
    let res = ''

    let i = 0

}

if (process.env.USERNAME === "abhim") {
    runProgram(`a+b-c+d*(e-f)/g+(h*(i/j))`);
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