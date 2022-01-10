let arr = [100, 80, 70, 85, 75]
// ans = 1, 1, 1, 2, 1

let stack = []
let ans = []

for (let i = 0; i < arr.length; i++) {

    let count = 1
    if (ans.length == 0) {
        ans.push(count)
    }

    else if (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
        ans.push(count)
    }

    else if (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
        while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop()
            count++
        }

        ans.push(count)
    }
}