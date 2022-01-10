let arr = [5, 5, 5, 4, 4, 4, 12, 15]
let n = arr.length

let countfour = 0, countfive = 0;
for (let i = 0; i < n; i++) {
    if (arr[i] % 5 == 0) {
        countfive++
    } else if (arr[i] % 4 == 0) {
        countfour++
    }
}

console.log(countfive * countfour)



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

