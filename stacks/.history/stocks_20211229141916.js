let arr = [100, 80, 70, 85, 200]
// ans = 1, 1, 1, 2, 1

let stack = []
let ans = []
let res = 0

for (let i = 0; i < arr.length; i++) {

    let count = 0
    if (ans.length == 0) {
        count = 1
        ans.push(count)
    }

    else if (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
        count = 1
        ans.push(count)
    }

    else if (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
        while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            let a = stack.pop()
            count++
        }
        res = res + count
        ans.push(count)
    }

    stack.push(arr[i])
}
console.log(ans)