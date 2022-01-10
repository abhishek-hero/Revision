const check = (str, n, k) => {

    let count = 0, set = {};

    for (let i = 0; i < k; i++) {
        if (set[str[i]] == undefined) {
            set[str[i]] = 1
        } else {
            set[str[i]]++
        }
    }

    console.log(Object.keys(set).length)

    if (Object.keys(set).length == k) {
        count++
    }

    for (let i = k; i < n; i++) {

        if (set[str[i]] !== undefined) {
            set[str[i]]++
        } else {
            set[str[i]] = 1
        }

        if (set[str[i - k]] !== undefined) {
            set[str[i - k]]--
        }

        if (set[str[i - k]] && set[str[i - k]] == 0) {
            set.delete(str[i - k])
        }

        if (Object.keys(set).length == k) {
            count++
        }
    }

    return count
}


function runProgram(input) {
    input = input.trim().split("\n")
    let [n, k] = input[0].trim().split(" ").map(Number)
    let str = input[1].trim()

    console.log(check(str, n, k))

}

if (process.env.USERNAME === "abhim") {
    runProgram(`4 2
abcc`);
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