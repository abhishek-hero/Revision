const findBoat = (arr, n, k) => {

    let i = 0, j = n - 1, count = 0;
    while (i <= j) {

        if (arr[i] + arr[j] <= k) {
            count++
            j--
            i++

        } else if (arr[i] + arr[j] > k) {
            count++
            j--
        }
    }

    return count
}


function runProgram(input) {
    input = input.trim().split('\n')
    let test = +input[0]
    let line = 1

    for (let t = 0; t < test; t++) {
        let [n, k] = input[line++].trim().split(" ").map(Number)
        let arr = input[line++].trim().split(" ").map(Number)

        arr = arr.sort((a, b) => a - b)
        console.log(findBoat(arr, n, k))
    }
}

if (process.env.USERNAME === "abhim") {
    runProgram(`2
4 5
3 5 3 4
4 3
1 2 2 3`);
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