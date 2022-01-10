function runProgram(input) {
    input = input.trim().split('\n')
    let n = +input[0]
    let que = []

    for (let i = 1; i <= n; i++) {
        let arr = input[i].split(' ')
        console.log(arr)

        if (arr.length == 2) {
            que.push(arr[1])
            console.log(que.length)
        } else {
            if (que.length !== 0) {
                let a = que.shift()
                console.log(a, que.length)
            } else {
                console.log(-1, que.length)
            }
        }
    }
}

if (process.env.USERNAME === "abhim") {
    runProgram(`5
E 2
D
D
E 3
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