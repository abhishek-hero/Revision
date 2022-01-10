const knapsack = (weight, val, capacity, n, dp) => {

    if (n === 0 || capacity === 0) {
        return 0
    }

    if (dp[n][capacity] !== -1) {
        return dp[n][capacity]
    }

    if (weight[n - 1] <= capacity) {

        return dp[n][capacity] = Math.max(val[n - 1] + knapsack(weight, val, capacity - weight[n - 1], n - 1, dp), knapsack(weight, val, capacity, n - 1, dp))
    }

    else if (weight[n - 1] > capacity) {

        return dp[n][capacity] = knapsack(weight, val, capacity, n - 1, dp)
    }
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

        for (let k = 0; k < n + 1; k++) {
            dp[k] = []
            for (let j = 0; j < capacity + 1; j++) {
                dp[k][j] = -1
            }
        }
        // console.log(n, capacity, weight, val, dp)

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