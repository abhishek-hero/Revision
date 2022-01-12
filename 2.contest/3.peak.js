const findPeak = (arr, n) => {
    let i = 0;
    while (i < n) {
        if (arr[i] < arr[i + 1]) {
            i++
        } else {
            return i
        }
    }
}


function runProgram(input) {
    input = input.trim().split('\n')
    let test = +input[0]
    let line = 1
    for (let t = 0; t < test; t++) {
        let n = +input[line++]
        let arr = input[line++].trim().split(" ").map(Number)
        console.log(findPeak(arr, n))
    }
}

if (process.env.USERNAME === "abhim") {
    runProgram(`2
  3
  10 20 11
  5
  1 3 6 5 4`);
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