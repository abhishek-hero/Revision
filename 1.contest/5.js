// longest increasing subarray

const check = (arr) => {

    if (arr.length === 1) {
        return true
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] < arr[i]) {
            continue
        } else {
            return false
        }
    }

    return true
}


const sub = (arr, n) => {

    let max = 0.00001

    if (arr.length == 1) {
        return arr.length
    }

    for (let i = 0; i < n; i++) {
        let subarray = []
        for (let j = i; j < n; j++) {
            subarray.push(arr[j])
            // console.log(sub)
            if (check(subarray)) {

                if (max < subarray.length) {
                    max = subarray.length
                    // console.log(max)
                }
            }

        }
    }

    return max
}

function runProgram(input) {
    input = input.trim().split("\n")
    let test = +input[0]
    let line = 1

    for (let i = 0; i < test; i++) {
        let n = +input[line++]
        let arr = input[line++].trim().split(" ").map(Number)

        console.log(sub(arr, n))
    }
}

if (process.env.USERNAME === "abhim") {
    runProgram(`2
    2
    1 1
    6
    1 2 1 2 3 1
    `);
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