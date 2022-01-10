function runProgram(input) {
    input = input.trim().split('\n')
    let test = +input[0]
    let line = 1

    for (let i = 0; i < test; i++) {
        let n = +input[line++]
        let str = input[line++]

        let set = {}

        for (let i = 0; i < n; i++) {
            if (str[i] == undefined) {
                set[str[i]] = 1
            } else {
                set[str[i]] + 1
            }
        }
        console.log(set)
    }
}

if (process.env.USERNAME === "abhim") {
    runProgram(`2
6
aabbcc
5
aabcd`);
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