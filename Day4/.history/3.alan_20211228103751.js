function runProgram(input) {
    input = input.trim().split('\n')
    let test = +input[0]

    let line = 1
    for (let i = 0; i < test; i++) {
        let str = input[line++].trim()

        let i = 0, ans = '';

        while (i < str.length) {
            if (str[i + 1] !== '#') {
                ans += str[i]
                i++
            } else {
                i++
            }
        }

        console.log(ans)
    }
}

if (process.env.USERNAME === "abhim") {
    runProgram(`2
ab#d
a#bc`);
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