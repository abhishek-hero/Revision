let max = Infinity;

const check = (arr, n, target) => {

    let i = 0; j = 0;
}


function runProgram(input) {
    input = input.trim().split('\n')
    let test = +input[0]
    let line = 1

    for (let i = 0; i < test; i++) {
        let [n, target] = input[line++].trim().split(" ").map(Number)
        let arr = input[line++].trim().split(" ").map(Number)
    }
}

if (process.env.USERNAME === "abhim") {
    runProgram(`1
5 7
1 2 3 4 5`);
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