function runProgram(input) {
    input = input.trim().split("\n")
    let test = +input[0]
    let line = 1
    let res = []

    for (let i = 0; i < test; i++) {
        let str1 = input[line++].trim().split('').sort().join("")
        res.push(str1)
    }

    for (let i = 0; i < res.length; i++) {
        console.log(res[i])
        if (res[i] == res[i + 1]) {
            console.log(res[i])
            res.shift()
        } else if (res[i] !== res[i + 1]) {
            count++
            res.shift()
        }
    }

    console.log(res)
}

if (process.env.USERNAME === "abhim") {
    runProgram(`5
eodc
odec
code
baca
aabc`);
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