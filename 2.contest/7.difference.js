const find = (arr, n, k) => {

    let i = 0; j = n - 1;
    while (i < j) {
        if (Math.abs(arr[i] - arr[j]) == k) {
            return 'Yes'
        } else if (Math.abs(arr[i] - arr[j]) > k) {
            i++
        } else if (Math.abs(arr[i] - arr[j]) < k) {
            return 'No'
        }
    }

    return 'No'
}


function runProgram(input) {
    input = input.trim().split('\n')
    let test = +input[0]
    let line = 1

    for (let t = 0; t < test; t++) {
        let [n, k] = input[line++].trim().split(" ").map(Number)
        let arr = input[line++].trim().split(" ").map(Number)
        console.log(find(arr, n, k))
    }
}

if (process.env.USERNAME === "abhim") {
    runProgram(`2
  5 3
  1 2 3 4 5
  5 8
  1 2 3 4 5 `);
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