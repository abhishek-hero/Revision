let arr = [5, 5, 5, 5, 4, 4, 4]
let low = 0, high = arr.length - 1;
let count = 0
let five = []

let numIdenticalPairs = (nums) => {
    let result = 0,
        numberMap = {}
    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i]
        if (!numberMap[currentNum]) {
            numberMap[currentNum] = 1
        } else {
            result += numberMap[currentNum]
            numberMap[currentNum]++
        }
    }
    return result
}



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

