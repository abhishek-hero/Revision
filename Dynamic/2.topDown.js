const knapsack = (weight, val, capacity, n, dp) => {

    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < capacity + 1; j++) {

            if (weight[i - 1] <= j) {
                dp[i][j] = Math.max(val[i - 1] + dp[i - 1][j - weight[i - 1]], dp[i - 1][j])
            }

            else if (weight[i - 1] > j) {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }


    return dp[n][capacity]
}



function runProgram(input) {
    input = input.trim().split("\n")

    let test = +input[0]
    let line = 1

    for (let i = 0; i < test; i++) {

        let splitter = input[line++].trim().split(" ").map(Number)
        let capacity = splitter[0]
        let n = splitter[1]

        let weight = []
        let val = []

        for (let j = 0; j < n; j++) {
            let arr = input[line++].trim().split(" ").map(Number)
            weight.push(arr[0])
            val.push(arr[1])
        }

        let dp = new Array(n + 1)


        for (let i = 0; i < n + 1; i++) {
            dp[i] = []
            for (let j = 0; j < capacity + 1; j++) {

                dp[i][j] = -1
                if (i == 0 || j == 0) {
                    dp[i][j] = 0
                }
            }
        }

        console.log(knapsack(weight, val, capacity, n, dp))
    }
}

if (process.env.USERNAME === "abhim") {
    runProgram(`1
4 5
1 8
2 4
3 0
2 5
2 3`);
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