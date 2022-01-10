function runProgram(input) {
    input = input.trim().split("\n")
    let n = +input[0]
    let stack = []

    for (let i = 1; i <= n; i++) {
        let arr = input[i].trim().split(' ')

        if (arr.length == 2) {
            stack.push(arr[1])
        } else {
            if (stack.length !== 0) {
                let a = stack.pop()
                console.log(a)
            } else {
                console.log('Empty')
            }
        }
    }
}

if (process.env.USERNAME === "abhim") {
    runProgram(`3
Push 4
Push 5
Pop`);
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