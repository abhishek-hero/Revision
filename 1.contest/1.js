// sort array one 0,1,2 with O(n) time complexity and constant space complexity

const sort = (arr, n) => {

    let count0 = 0, count1 = 0, count2 = 0;

    if (arr.length == 1) {
        return arr[0]
    }

    for (let i = 0; i < n; i++) {
        if (arr[i] == 0) {
            count0++
        }
        if (arr[i] == 1) {
            count1++
        }
        if (arr[i] == 2) {
            count2++
        }
    }

    for (let i = 0; i < count0; i++) {
        arr[i] = 0
    }

    for (let i = count0; i < (count0 + count1); i++) {
        arr[i] = 1
    }

    for (let i = (count0 + count1); i < n; i++) {
        arr[i] = 2
    }
    return arr.join(" ")
}



function runProgram(input) {
    input = input.trim().split("\n")
    let test = +input[0]
    let line = 1

    for (let i = 0; i < test; i++) {
        let n = +input[line++]
        let arr = input[line++].trim().split(" ").map(Number)

        console.log(sort(arr, n))
    }
}

if (process.env.USERNAME === "abhim") {
    runProgram(`3
1
2
3
2 0 1
4
2 0 2 1`);
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