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