// // TODO min subset sum difference

let arr = [1,2,7]
let n = arr.length

var range = -1
for(let i = 0; i < n; i++){
    range += arr[i]
}


let dp = new Array(n+1)

for(let i = 0; i < n+1; i++){
    dp[i] = []
    for(let j = 0; j < range+1; j++){
        dp[i][j] = -1

        if(i == 0){
            dp[i][j] = false
        }

        if(j == 0){
            dp[i][j] = true
        }
    }
}

const subsetSum = (arr, target, n) => {

    for(let i =1; i< n+1; i++){
        for(let j=1; j< target+1; j++){

            if(arr[i-1] <= j){
                dp[i][j] = dp[i-1][j-arr[i-1]] || dp[i-1][j]
            }

            else if(arr[i-1] > j){
                dp[i][j] = dp[i-1][j]
            }
        }
    }

    return dp[n][target]

}

subsetSum(arr, range/2, n)
let vector = []

for(let j = 0; j < Math.ceil(range+1/2); j++){
    if(dp[n][j] == true){
        vector.push(j)
    }
}

console.log(vector)

// let mid = Math.floor(vector.length/2)

// console.log(mid)

let max = Infinity
for(let i = 0; i < vector.length; i++){
    let min = range - 2*vector[i]

    if(min < max){
        max = min
    }
}

console.log(max)