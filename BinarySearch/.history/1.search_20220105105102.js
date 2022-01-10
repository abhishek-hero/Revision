const binarySearch = (arr, n, target) => {

    let low = 0, high = n - 1;

    // let mid = 
}


function runProgram(input) {
    input = input.trim().split("\n")

    let n = +input[0]
    let arr = input[1].trim().split(" ").map(Number)
    let target = +input[2]


}

if (process.env.USERNAME === "abhim") {
    runProgram(`5
1 2 3 5 6
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