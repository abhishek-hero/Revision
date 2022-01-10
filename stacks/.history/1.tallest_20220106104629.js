const tallest = (arr, n, k) => {

    let ans = []
    let max = arr[0]

    let i = 0;

    while (i < k && k <= n) {
        console.log(arr[i])

        if (arr[i] > max) {
            max = arr[i]
        }
        i++

        if (i == k) {
            ans.push(max)
            max = arr[i]
            k++
            i = i - k + 1
        }
    }

    return ans
}



function runProgram(input) {
    input = input.trim().split("\n")
    let test = +input[0]
    let line = 1

    for (let i = 0; i < test; i++) {
        let [n, k] = input[line++].trim().split(" ").map(Number)
        let arr = input[line++].trim().split(" ").map(Number)

        console.log(tallest(arr, n, k))
    }

}

if (process.env.USERNAME === "abhim") {
    runProgram(`1
9 3
1 2 3 1 4 5 2 3 6`);
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