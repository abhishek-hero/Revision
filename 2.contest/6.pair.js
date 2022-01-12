const findPair = (arr, n, k) => {

    let i = 0, j = n - 1;
    while (i < j) {
        if (arr[i] + arr[j] == k) {
            return 1
        } else if (arr[i] + arr[j] < k) {
            i++
        } else if (arr[i] + arr[j] > k) {
            j--
        }
    }
    return -1
}


function runProgram(input) {
    input = input.trim().split('\n')
    let test = +input[0]
    let line = 1
    for (let i = 0; i < test; i++) {
        let [n, k] = input[line++].trim().split(" ").map(Number)
        let arr = input[line++].trim().split(" ").map(Number)

        arr = arr.sort((a, b) => a - b)
        // console.log(arr)
        console.log(findPair(arr, n, k))
    }
}

if (process.env.USERNAME === "abhim") {
    runProgram(`1
    7 -10
2 -5 6 -1 5 -1 6`);
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