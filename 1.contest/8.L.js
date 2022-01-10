const printL = (arr, n, m) => {

    let ans = []

    for (let i = 0; i < m; i++) {
        for (let j = 0; j <= n - i - 1; j++) {
            ans.push(arr[j][i])
        }

        for (let k = i + 1; k < m; k++) {
            ans.push(arr[n - 1 - i][k])
        }
    }

    console.log(ans.join(' '))
}



function runProgram(input) {
    input = input.trim().split('\n')
    let test = +input[0]
    let line = 1

    for (let i = 0; i < test; i++) {
        let [n, m] = input[line++].trim().split(' ').map(Number)

        let arr = []

        for (let j = 0; j < n; j++) {
            arr.push(input[line++].trim().split(' ').map(Number))
        }

        printL(arr, n, m)

    }
}

if (process.env.USERNAME === "abhim") {
    runProgram(`2
3 3
15 20 3
4 5 6
7 8 9
4 3
1 2 3
4 5 6
7 8 9
10 11 12`);
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