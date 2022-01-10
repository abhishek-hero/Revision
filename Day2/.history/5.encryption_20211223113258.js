function runProgram(input) {
    input = input.trim().split("\n");
    let str = input[0].trim();
    let n = +input[1];

    let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let bravo = "abcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    let res = ''

    for (let i = 0; i < str.length; i++) {

        for (let j = 0; j < Math.max(alpha.length, num.length); j++) {

            if (str[i] == alpha[j]) {

                if (j < 23) {
                    res += alpha[j + n]
                } else {
                    let temp = (j + n) - 26
                    res += alpha[temp]
                }

            } else if (str[i] == bravo[j]) {

                if (j < 23) {
                    res += bravo[j + n]
                } else {
                    let temp = (j + n) - 26
                    res += bravo[temp]
                }

            } else if (str[i] == num[j]) {

                if (j < 7) {
                    res += num[j + n]
                } else {
                    let temp = (j + n) - 10
                    res += num[temp]
                }
            }
        }

    }

    console.log(res)
}

if (process.env.USERNAME === "abhim") {
    runProgram(`All-convoYs-9-be:Alert1.
4`);
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