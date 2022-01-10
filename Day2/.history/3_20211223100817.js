function runProgram(input) {
    let str = input.trim()

    let res = ''
    let i = 0

    while (i < str.length) {

        let count = 0
        for (let j = i; j < str.length; j++) {

            if (str[i] == str[j]) {
                count++
            } else {
                break
            }
        }

        res += str[i] + count
        i = i + count
    }

    console.log(res)
}

if (process.env.USERNAME === "abhim") {
    runProgram(`aaabbbcccaaa`);
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