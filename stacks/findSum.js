const grleft = (arr, n) => {

    let res = []
    let s = []

    for (let i = 0; i < n; i++) {

        if (s.length == 0) {
            res.push(-1)
        }
        else if (s.length > 0 && s[s.length - 1][1] > arr[i]) {
            res.push(s[s.length - 1][0] + 1)
        }
        else if (s.length > 0 && s[s.length - 1][1] <= arr[i]) {
            while (s.length > 0 && s[s.length - 1][1] <= arr[i]) {
                s.pop()
            }

            if (s.length == 0) {
                res.push(-1)
            } else {
                res.push(s[s.length - 1][0] + 1)
            }
        }

        s.push([i, arr[i]])
    }

    return res
}


const grRight = (arr, n) => {

    let res = []
    let s = []

    for (let i = n - 1; i >= 0; i--) {

        if (s.length == 0) {
            res.push(-1)
        }
        else if (s.length > 0 && s[s.length - 1][1] > arr[i]) {
            res.push(s[s.length - 1][0] + 1)
        }
        else if (s.length > 0 && s[s.length - 1][1] <= arr[i]) {
            while (s.length > 0 && s[s.length - 1][1] <= arr[i]) {
                s.pop()
            }

            if (s.length == 0) {
                res.push(-1)
            } else {
                res.push(s[s.length - 1][0] + 1)
            }
        }

        s.push([i, arr[i]])
    }

    return res.reverse()
}



function runProgram(input) {
    input = input.trim().split('\n')
    let n = +input[0]
    let arr = input[1].trim().split(" ").map(Number)

    let left = grleft(arr, n)
    let right = grRight(arr, n)
    let ans = []

    for (let i = 0; i < left.length; i++) {
        ans.push(left[i] + right[i])
    }

    console.log(ans.join(' '))
}

if (process.env.USERNAME === "abhim") {
    runProgram(`5
5 4 1 3 2`);
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