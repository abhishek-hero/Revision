function runProgram(input) {
    input = input.trim().split('\n')
    let n = +input[0]
    let str = input[1].trim()

    let set = {}

    for (let i = 0; i < n; i++) {

        if (set[str[i]] == undefined) {
            set[str[i]] = 1
        } else {
            set[str[i]] += 1
        }
    }

    for (key in set) {
        console.log(key - set[key])
    }
}

if (process.env.USERNAME === "abhim") {
    runProgram(`4
aman`);
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