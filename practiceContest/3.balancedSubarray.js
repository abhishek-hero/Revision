
// let arr = [1, 0, 0, 1, 0, 1, 1];
// let n = arr.length
const checkSubarray = (arr, n) => {

    let hm = new Map()

    let sum = 0
    let maxLen = 0
    let endIndex = -1

    for (let i = 0; i < n; i++)
        arr[i] = (arr[i] == 0) ? -1 : 1

    for (let i = 0; i < n; i++) {

        sum += arr[i]

        if (sum == 0) {
            maxLen = i + 1
            endIndex = i
        }

        if (hm.has(sum)) {
            if (maxLen < i - hm[sum]) {
                maxLen = i - hm[sum]
                endIndex = i
            }
        }

        else
            hm[sum] = i
    }

    for (let i = 0; i < n; i++)
        arr[i] = (arr[i] == -1) ? 0 : 1
    return maxLen
}


function runProgram(input) {
    input = input.trim().split('\n')
    let test = +input[0]
    let line = 1

    for (let t = 0; t < test; t++) {
        let n = +input[line++]
        let arr = input[line++].trim().split(" ").map(Number)

        console.log(checkSubarray(arr, n))
    }
}

if (process.env.USERNAME === "abhim") {
    runProgram(`1
5
1 0 0 1 0`);
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