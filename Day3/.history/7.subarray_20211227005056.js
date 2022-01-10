// max sum of subarray of size k

// let arr = [100, 2, 3, 10, 10, 20]
// let k = 2

// let sum = 0
// for (let i = 0; i < k; i++) {
//     sum += arr[i]
// }

// let max = sum

// for (let i = k; i < arr.length; i++) {

//     sum = sum - arr[i - k]
//     sum = sum + arr[i]
//     if (sum > max) {
//         max = sum
//     }
// }

// console.log(max)


let str = 'abhoferpqrfor'
let temp = 'for'

let k = temp.length
let n = str.length
let newStr = ''
let counter = 0

const check = (main, str) => {

    let i = 0;
    let count = 0;
    let set = {}
    for (let i = 0; i < str.length; i++) {
        set[str[i]] = 0
    }

    let checker = ''
    for (key in str) {
        checker += str[key]
    }

    if (checker.length < main) {
        return false
    }
    while (i < main.length) {
        for (let j = 0; j < checker.length; j++) {
            if (main[i] == checker[j]) {
                count++
            }
        }
        i++
    }

    if (count == main.length) {
        return true
    }

    return false
}


// let str = 'abhoferpqrfor'
// let temp = 'for'
for (let i = 0; i < k; i++) {
    newStr += str[i]
}

let res = ''
for (let i = k; i < n; i++) {

    newStr.split('').shift()
    newStr = newStr + str[i]


    console.log(newStr)
    // if (check(str, newStr)) {
    //     console.log(newStr)
    //     counter++
    // }
}

// console.log(counter)