function runProgram(input) {
    input = input.trim().split("\n")

    let n = +input[0]
    let arr = input[1].trim().split(" ").map(Number)
    let set = {}
    let ans = []

    for (let i = 0; i < n; i++) {
        set[arr[i]] = 0
        ans.push(set[arr[i]])
    }

    console.log(set)
    console.log(ans)
}

if (process.env.USERNAME === "abhim") {
    runProgram(`8
1 2 3 4 2 1 6 5`);
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