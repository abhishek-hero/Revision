const nextGreater = (arr, n) => {

    let s = []
    let slen = s.length
    let res = []

    for (let i = n - 1; i >= 0; i--) {

        if (slen == 0) {
            res.push(-1)
        }

        else if (slen > 0 && s[slen - 1] > arr[i]) {
            res.push(s[slen - 1])
        }

        else if (slen > 0 && s[slen - 1] <= arr[i]) {

            while (slen > 0 && s[slen - 1] <= arr[i]) {
                s.pop()
            }

            if (slen == 0) {
                res.push(-1)
            } else {
                res.push(s[slen - 1])
            }
        }

        s.push(arr[i])
    }

    return res
}



function runProgram(input) {
    input = input.trim().split('\n')
    let test = +input[0].trim()
    let line = 1

    for (let i = 0; i < test; i++) {
        let n = +input[line++]
        let arr = input[line++].trim().split(" ").map(Number)

        let res = []
        let stack = []

        for (let i = n - 1; i >= 0; i--) {

            if (stack.length == 0) {
                res.push(-1)
            } else if (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
                res.push(stack[stack.length - 1])

            } else if (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {

                while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
                    stack.pop()
                }
                if (stack.length == 0) {
                    res.push(-1)
                } else {
                    res.push(stack[stack.length - 1])
                }
            }

            stack.push(arr[i])
        }

        console.log(res.reverse())
    }
}

if (process.env.USERNAME === "abhim") {
    runProgram(`1
4
1 3 2 4`);
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