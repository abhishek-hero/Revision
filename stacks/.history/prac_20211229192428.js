let arr = [5, 5, 5, 5, 4, 4, 4]
let low = 0, high = arr.length - 1;
let count = 0
let ans = 0

arr = arr.sort((a, b) => a - b)

while (low <= high) {

    let mid = Math.floor((high - low) / 2)

    if (arr[mid] == 4) {
        ans = mid
        return
    }

    if (arr[mid] > 4) {
        high = mid - 1
    }
}

console.log(ans)




// let i = 0, j = n - 1;
// let count = 0

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (i != j) {
//             let sum1 = 4 * arr[i]
//             let sum2 = 5 * arr[j]

//             if (sum1 == sum2) {
//                 count++
//             }
//         }
//     }
// }

// console.log(count)

