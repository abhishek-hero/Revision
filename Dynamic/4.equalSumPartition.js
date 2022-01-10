let arr = [1, 5, 11, 5]
let n = arr.length

let dp = new Array(n + 1)

for (let i = 0; i < n + 1; i++) {
    dp[i] = []
    for (let j = 0; j < 11 + 1; j++) {

        dp[i][j] = -1

        if (i == 0) {
            dp[i][j] = false
        }

        if (j == 0) {
            dp[i][j] = true
        }
    }
}

const equalSum = (arr, n) => {
    let sum = 0

    for (let i = 0; i < n; i++) {
        sum += arr[i]
    }

    if (sum % 2 !== 0) {
        return false
    }

    else if (sum % 2 == 0) {

        return subsetSum(arr, n, sum / 2)
    }
}


const subsetSum = (arr, n, target) => {
    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < target + 1; j++) {


            if (arr[i - 1] <= j) {
                dp[i][j] = dp[i - 1][j - arr[i - 1]] || dp[i - 1][j]
            }

            else if (arr[i - 1] > j) {

                dp[i][j] = dp[i - 1][j]
            }
        }
    }

    return dp[n][target]
}

console.log(equalSum(arr, n))