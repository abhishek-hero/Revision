// Nearest smaller element

const nsleft = (arr, n) => {

    let res = []
    let stack = []

    for (let i = 0; i < n; i++) {

        if (stack.length == 0) {
            res.push(-1)
        }

        else if (stack.length > 0 && stack[stack.length - 1][1] < arr[i]) {
            res.push(stack[stack.length - 1])
        }

        else if (stack.length > 0 && stack[stack.length - 1][1] >= arr[i]) {
            while (stack.length > 0 && stack[stack.length - 1][1] >= arr[i]) {
                stack.pop()
            }

            if (stack.length == 0) {
                res.push(-1)
            } else {
                res.push(stack[stack.length - 1])
            }
        }
        stack.push([i, arr[i]])
    }

    return res
}


const nsRight = (arr, n) => {

    let res = []
    let stack = []

    for (let i = n - 1; i >= 0; i--) {

        if (stack.length == 0) {
            res.push(-1)
        }

        else if (stack.length > 0 && stack[stack.length - 1][1] < arr[i]) {
            res.push(stack[stack.length - 1])
        }

        else if (stack.length > 0 && stack[stack.length - 1][1] >= arr[i]) {
            while (stack.length > 0 && stack[stack.length - 1][1] >= arr[i]) {
                stack.pop()
            }

            if (stack.length == 0) {
                res.push(-1)
            } else {
                res.push(stack[stack.length - 1])
            }
        }
        stack.push([i, arr[i]])
    }

    return res.reverse()
}

const check = (left, right) => {

    let ans = []

    for (let i = 0; i < left.length; i++) {

        if (left[i] == -1) {
            if (right[i] == -1) {
                ans.push(-1)
            }
        } else if (left[i] == -1) {
            if (right[i].length == 2) {
                ans.push(right[i][1])
            }
        } else if (right[i] == -1) {
            if (left[i].length == 2) {
                ans.push(left[i][1])
            }
        } else if (left[i].length == 2 && right[i].length == 2) {

            if (left[i][0] <= right[i][0]) {
                ans.push(left[i][1])
            } else {
                ans.push(right[i][1])
            }
        }
    }

    return ans.join(" ")
}

function runProgram(input) {
    input = input.trim().split("\n")
    let test = +input[0]
    let line = 1

    for (let i = 0; i < test; i++) {
        let n = +input[line++]
        let arr = input[line++].trim().split(" ").map(Number)

        let left = nsleft(arr, n)
        let right = nsRight(arr, n)

        check(left, right)
    }
}

if (process.env.USERNAME === "abhim") {
    runProgram(`1
8
39 27 11 4 24 32 32 1`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}