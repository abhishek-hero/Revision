// [ 1, 2, 2, 3, 4, 5 ] [ 4, 4, 3, 2, 1, 1 ]

const countEqual = (asc, des, n) => {

    let i = 0, j = n - 1, count = 0;

    while (i < n && j >= 0) {
        if (asc[i] == des[j]) {
            count++
            i++
            j++
        } else if (asc[i] < des[j]) {
            i++
        } else {
            j--
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
        let asc = input[line++].trim().split(" ").map(Number)
        let des = input[line++].trim().split(" ").map(Number)

        console.log(countEqual(asc, des, n))
    }
}

if (process.env.USERNAME === "abhim") {
    runProgram(`1
6
1 2 2 3 4 5
4 4 3 2 1 1`);
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