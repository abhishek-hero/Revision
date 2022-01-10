let arr = [6, 2, 5, 4, 5, 1, 6]
let n = arr.length


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
        right.push(n + 1)
    }

    else if (stack.length > 0 && stack[stack.length - 1][0] < arr[i]) {
        right.push(stack[stack.length - 1][1])
    }

    else if (stack.length > 0 && stack[stack.length - 1][0] >= arr[i]) {
        while (stack.length > 0 && stack[stack.length - 1][0] >= arr[i]) {
            stack.pop()
        }

        if (stack.length == 0) {
            right.push(n + 1)
        } else {
            right.push(stack[stack.length - 1][1])
        }
    }

    stack.push([arr[i], i])
}

console.log(right)
