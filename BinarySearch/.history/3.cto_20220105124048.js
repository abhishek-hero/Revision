const firstOcc = (arr, n) => {

    let low = 0, high = n - 1, ans = -1;

    while (low <= high) {

        let mid = Math.floor(low + (high - low) / 2)

        if (arr[mid] == 1) {
            ans = mid
            high = mid - 1
        }

        else if (arr[mid] < 1) {
            low = mid + 1
        }

        else if (arr[mid] > 1) {
            high = mid - 1
        }
    }

    return ans
}


function runProgram(input) {
    input = input.trim().split('\n')
    let n = +input[0]
    let arr = input[1].trim().split(" ").map(Number)

    console.log(firstOcc(arr, n))

}

if (process.env.USERNAME === "abhim") {
    runProgram(`5
0 0 0 1 1`);
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