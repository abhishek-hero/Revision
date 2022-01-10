// 6 101
// 42 44 17 10 36 8

let arr = [42, 44, 17, 10, 36, 8]

for (let i = 0; i < arr.length; i++) {
    let sub = []

    for (let j = i; j < arr.length; j++) {
        sub.push(arr[j])

        if (sub.length == 3) {
            console.log(sub)
        }
    }
}



const check = (arr, n, target) => {

    if (target == 0) return -1

    let max = Infinity;
    let sumMax = Infinity;
    let ans = -1

    let i = 0; j = 0, sum = 0;

    while (i < n) {
        while (sum <= target && j < arr.length) {
            sum += arr[j]
            j++
        }

        if (sum >= target) {

            let checker = j - i
            if (checker < max) {
                max = checker
            }
            i++
        }

        else {
            sum -= arr[i]
            i++
        }
    }

    if (max !== Infinity) {
        return max
    }
    return -1
};


function runProgram(input) {
    input = input.trim().split('\n')
    let test = +input[0]
    let line = 1

    for (let i = 0; i < test; i++) {
        let [n, target] = input[line++].trim().split(" ").map(Number)
        let arr = input[line++].trim().split(" ").map(Number)

        console.log(check(arr, n, target))
    }
}

if (process.env.USERNAME === "abhim") {
    runProgram(`1
    6 101
    42 44 17 10 36 8`);
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