const maxSubarray = (arr, n, k) => {

    let sum = 0
    let max = 0
    for (let i = 0; i < k; i++) {

        sum += arr[i]

    }
    max = sum

    for (let i = k; i < n; i++) {

        sum -= arr[i - k]
        sum += arr[i]
        if (sum > max) {
            max = sum
        }
    }
    return max
}


function runProgram(input) {
    input = input.trim().split('\n')
    let [n, k] = input[0].trim().split(" ").map(Number)
    let arr = input[1].trim().split(" ").map(Number)
    console.log(maxSubarray(arr, n, k))
    // maxSubarray(arr, n, k)
}

if (process.env.USERNAME === "abhim") {
    runProgram(`10 3
  -1 -1 -2 1 -2 4 1 9 3 9`);
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