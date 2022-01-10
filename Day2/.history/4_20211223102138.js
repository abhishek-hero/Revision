function runProgram(input) {
    input = input.trim().split("\n")

    let n = +input[0]
    let arr = input[1].trim().split(" ").map(Number)
    let set = {}
    let ans = []

    for (let i = 0; i < n; i++) {
        set[arr[i]] = 0
    }

    for (key in set) {
        ans.push(+key)
    }

    console.log(ans)

    if (ans.length >= 6) {
        console.log(ans[0], ans[1], ans[2])
        console.log(ans[ans.length - 3], ans[ans.length - 2], ans[ans.length - 1])
    } else {
        console.log("Not Possible")
        console.log("Not Possible")
    }
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