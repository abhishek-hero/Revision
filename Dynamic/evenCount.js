function runProgram(input) {
    let arr = input.trim().split("").map(Number)
    let ans = []

    for (let i = 0; i < arr.length; i++) {
        let count = 0

        for (let j = i; j < arr.length; j++) {

            if (arr[j] % 2 == 0) {
                count++
            }
        }
        ans.push(count)
    }

    console.log(ans.join(" "))
}

if (process.env.USERNAME === "abhim") {
    runProgram(`574674546476`);
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