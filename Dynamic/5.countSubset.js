// TODO count no. of subset with given sum

let arr = [1, 2, 3, 5, 8, 10]
let sum = 10
let n = arr.length

let dp = new Array(n+1)

for(let i = 0; i < n+1; i++){
    dp[i] = []
    for(let j = 0; j < sum+1; j++){
        dp[i][j] = -1

        if(i == 0){
            dp[i][j] = 0
        }

        if(j == 0){
            dp[i][j] = 1
        }
    }
}

// console.log(dp)

const subsetSum = (arr, n, sum) => {

    for(let i = 1; i < n+1; i++){
        for(let j = 1; j < sum+1; j++){

            if(arr[i-1] <= j){

                dp[i][j] = dp[i-1][j-arr[i-1]] + dp[i-1][j]
            }else if(arr[i-1] > j) {
                dp[i][j] = dp[i-1][j]
            }
        }
    }
    return dp[n][sum]
}

console.log(subsetSum(arr, n, sum))