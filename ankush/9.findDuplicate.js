// NOTE sum of n-1 natural no. - sum of array

let arr = [1, 3, 3, 2, 4]
let n = arr.length

const sumNatural = (n) => {
    let sum = (n * (n + 1) / 2)
    return sum
}

const check = (arr, n) => {

    let s1 = 0
    for (let i = 0; i < n; i++) {
        s1 += arr[i]
    }

    let s2 = sumNatural(n - 1)
    let ans = s1 - s2
    return ans
}

console.log(check(arr, n))