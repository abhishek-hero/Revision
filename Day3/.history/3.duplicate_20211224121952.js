function runProgram(input) {
    input = input.trim().split("\n")
    let test = +input[0]

    let line = 1

    for (let i = 0; i < test; i++) {
        let n = +input[line++]
        let arr = input[line++].trim().split(" ").map(Number)


        let set = {}

        for (let j = 0; j < n; j++) {
            set[arr[i]] = 0
        }

        console.log(set)

        // if (n !== Object.keys(set).length) {
        //     console.log("YES")
        // } else {
        //     console.log("NO")
        // }
    }
}

if (process.env.USERNAME === "abhim") {
    runProgram(`3
1
1
2
1 1
3
1 2 3`);
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