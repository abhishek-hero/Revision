let arr = [5, 5, 5, 5, 4, 4, 4, 12, 15]
let n = arr.length

let one = []

for (let i = 0; i < Math.floor(arr[i] / 2); i++) {
    one.push(arr[i])
}

console.log(one)



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

