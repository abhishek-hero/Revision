const nWays = (n) => {
    if (n < 0) {
        return 0
    }
    if (n == 0) {
        return 1
    }

    return (nWays(n - 1) + nWays(n - 2) + nWays(n - 3))
}


function runProgram(input) {
    let n = +input[0]

    let dp = []

    for (let i = 0; i < n; i++) {
        dp = [[]]
        for (let j = 0; j < n; j++) {
            dp[i][j] = -1
        }
    }
    console.log(dp)
    // console.log(nWays(n))
}

if (process.env.USERNAME === "abhim") {
    runProgram(`39`);
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