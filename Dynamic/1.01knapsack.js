let weight = [1, 2, 3]
let val = [2, 3, 4]
let n = weight.length;
let capacity = 3

// let dp = new Array(4)

// for (let i = 0; i < 100; i++) {
//     dp[i] = []
//     for (let j = 0; j < 100; j++) {
//         dp[i][j] = -1
//     }
// }



// const knapsack = (weight, val, capacity, n) => {

//     if (n == 0 || capacity == 0) {
//         return 0
//     }

//     if (dp[n][capacity] !== -1) {
//         return dp[n][capacity]
//     }

//     if (weight[n - 1] <= capacity) {

//         return dp[n][capacity] = Math.max(val[n - 1] + knapsack(weight, val, capacity - weight[n - 1], n - 1), knapsack(weight, val, capacity, n - 1))
//     }

//     else if (weight[n - 1] > capacity) {

//         return dp[n][capacity] = knapsack(weight, val, capacity, n - 1)
//     }
// }




// top-down

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

// console.log(dp)

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

console.log(knapsack(weight, val, capacity, n, dp))