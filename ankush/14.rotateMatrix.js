// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// let n = 3
// let ans = []

// for (let j = n - 1; j >= 0; j--) {
//     let temp = []
//     for (let i = 0; i < n; i++) {
//         temp.push(matrix[i][j])
//     }
//     ans.push(temp)
// }

// console.log(ans)


// NOTE optimized solution

function rotateMatrix(matrix) {

    let n = matrix.length
    for (let i = 0; i < n / 2; i++) {

        for (let j = i; j < n - i - 1; j++) {

            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][n - i - 1]
            matrix[j][n - i - 1] = matrix[n - i - 1][n - j - 1]
            matrix[n - i - 1][n - j - 1] = matrix[n - j - 1][i];
            matrix[n - j - 1][i] = temp
        }
    }
    return matrix
}

console.log(rotateMatrix(matrix))