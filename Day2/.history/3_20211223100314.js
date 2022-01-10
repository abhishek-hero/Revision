function runProgram(input) {
    let str = input.trim()

    let res = ''
    for (let i = 0; i < str.length; i++) {

        res += str[i]
        let count = 0

        for (let j = 0; j < str.length; j++) {
            if (str[i] == str[j]) {
                count++
            } else {
                break
            }
        }

        res += count
    }

    console.log(res)
}

if (process.env.USERNAME === "abhim") {
    runProgram(`aaabbbbcc`);
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