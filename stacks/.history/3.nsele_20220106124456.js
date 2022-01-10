// Nearest smaller element

const nsleft = (arr, n) => {

    let res = []
    let stack = []

    for (let i = 0; i < n; i++) {

        if (stack.length == 0) {
            res.push(-1)
        }

        else if (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {

        }


        stack.push([i, arr[i]])
    }
}

function runProgram(input) {
    input = input.trim().split("\n")
    let test = +input[0]
    let line = 1

    for (let i = 0; i < test; i++) {
        let n = +input[line++]
        let arr = input[line++].trim().split(" ").map(Number)

    }
}

if (process.env.USERNAME === "abhim") {
    runProgram(`1
8
39 27 11 4 24 32 32 1`);
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