function runProgram(input) {
    input = input.trim().split('\n')

    let n = +input[0]
    let arr = input[1].trim().split(" ").map(Number)
    let q = +input[2]
    let query = input[3].trim().split(" ").map(Number)

    for (let i = 0; i < q; i++) {

        let j = 1
        while (j <= n) {

            if (j == n && query[i] !== arr[j]) {
                console.log("NO")
            }

            if (query[i] == arr[j]) {
                console.log('YES')
                break
            } else {
                j++
            }

        }
    }
}

if (process.env.USERNAME === "abhim") {
    runProgram(`5
1 2 3 4 5
3
3 5 7`);
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