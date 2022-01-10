// max area of reactangle in binary matrix

let arr = [
    [0, 1, 1, 0],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 0, 0]
]


const MAH = (arr, n) => {

    let stack = []
    let left = []

    for (let i = 0; i < arr.length; i++) {

        if (stack.length == 0) {
            left.push(-1)
        }

        else if (stack.length > 0 && stack[stack.length - 1][0] < arr[i]) {
            left.push(stack[stack.length - 1][1])
        }

        else if (stack.length > 0 && stack[stack.length - 1][0] >= arr[i]) {
            while (stack.length > 0 && stack[stack.length - 1][0] >= arr[i]) {
                stack.pop()
            }

            if (stack.length == 0) {
                left.push(-1)
            } else {
                left.push(stack[stack.length - 1][1])
            }
        }

        stack.push([arr[i], i])
    }

    // console.log(left)

    stack = []
    let right = []

    for (let i = n - 1; i >= 0; i--) {

        if (stack.length == 0) {
            right.push(n)
        }

        else if (stack.length > 0 && stack[stack.length - 1][0] < arr[i]) {
            right.push(stack[stack.length - 1][1])
        }

        else if (stack.length > 0 && stack[stack.length - 1][0] >= arr[i]) {
            while (stack.length > 0 && stack[stack.length - 1][0] >= arr[i]) {
                stack.pop()
            }

            if (stack.length == 0) {
                right.push(n)
            } else {
                right.push(stack[stack.length - 1][1])
            }
        }

        stack.push([arr[i], i])
    }

    right = right.reverse()

    let width = []
    let area = 0.00001

    for (let i = 0; i < left.length; i++) {
        let ans = right[i] - left[i] - 1

        if ((ans * arr[i]) > area) {
            area = ans * arr[i]
        }
    }

    console.log(area)
}

let n = arr.length
let m = arr[0].length
let vector = []

for (let j = 0; j < m; j++) {
    vector.push(arr[0][j])
}

