let arr = [5, 5, 5, 5, 4, 4, 4]

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


arr = arr.sort((a, b) => a - b)

let i = 0; j = arr.length - 1;
let count = 0


while (i < arr.length && j >= 0) {

    let sum1 = 0, sum2 = 0;
    if (i !== j) {
        sum1 = 4 * arr[i]
        sum2 = 5 * arr[j]
    }

    if (sum1 == sum2) {
        count++
    }
    i++
    j--
}

console.log(count)