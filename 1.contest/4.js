function some(arr, n) {

    let count = 0
    for (let j = 0; j < n; j++) {
        for (let k = 0; k < n; k++) {
            let temp = 2 * arr[j]
            if (arr[k] == temp && j !== k) {
                count++
            }
        }
    }

    return count
}


function runProgram(input) {
    input = input.trim().split("\n")
    let test = +input[0]
    let line = 1

    for (let i = 0; i < test; i++) {
        let n = +input[line++]
        let arr = input[line++].trim().split(" ").map(Number)

        console.log(some(arr, n))
    }
}

if (process.env.USERNAME === "abhim") {
    runProgram(`2
5
1 1 1 1 1
6
1 1 2 2 4 1 `);
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