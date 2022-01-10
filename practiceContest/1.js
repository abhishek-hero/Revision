function runProgram(input) {
    input = input.trim().split('\n')
    let test = +input[0]
    let line = 1

    for (let i = 0; i < test; i++) {
        let n = +input[line++]
        let str = input[line++].trim()
        let conStr = input[line++].trim()

        let set = {}

        for (let j = 0; j < n; j++) {
            if (set[conStr[j]] == undefined) {
                set[conStr[j]] = 1
            } else {
                set[conStr[j]]++
            }
        }

        for (let j = 0; j < n; j++) {
            if (set[str[j]] !== undefined) {
                set[str[j]]--
            }

            if (set[str[j]] == 0) {
                delete (set[str[j]])
            }
        }

        if (Object.keys(set).length == 0) {
            console.log("Yes")
        } else {
            console.log("No")
        }
    }
}

if (process.env.USERNAME === "abhim") {
    runProgram(`2
2
ab
ac
3
aba
aab`);
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