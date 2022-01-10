let arr = [1, 2, 10]
let n = arr.length
let target = 9


let dp = new Array(n + 1)

for (let i = 0; i < n + 1; i++) {
    dp[i] = []
    for (let j = 0; j < target + 1; j++) {

        dp[i][j] = -1

        if (i == 0) {
            dp[i][j] = false
        }

        if (j == 0) {
            dp[i][j] = true
        }
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

    // console.log(dp)
    // console.log(dp[n][target])
    return dp[n][target]
}

// console.log(subsetSum(arr, n, target))




// if (subsetSum(arr, arr.length, 9) == true) {
//     console.log("Yes")
// } else {
//     console.log("No")
// }

// let target = 12

const subset = (arr, n, index, ans, target) => {

    if (ans == target) {
        console.log(ans)
    }
    if (index == n) {

        return
    }

    let currChar = arr[index]

    subset(arr, n, index + 1, ans + currChar, target)
    // ans.push(currChar)
    subset(arr, n, index + 1, ans, target)
    // ans.pop()
}

subset(arr, n, 0, 0, 12)