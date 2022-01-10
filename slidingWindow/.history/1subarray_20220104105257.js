// 5 3
// 2 2 1 3 4

const checkSum = (arr, n, k) => {

    let i = 0, j = 0, sum = 0;

    while (i < n) {
        while (sum < k && j < arr.length) {
            sum += arr[j]
            j++
        }

        if (sum == k) {
            return "Yes"
        }

        else {
            sum -= arr[i]
            i++
        }
    }

    return "No"
}


function runProgram(input) {
    input = input.trim().split('\n')
    let test = +input[0]
    let line = 1

    for (let i = 0; i < test; i++) {
        let [n, k] = input[line++].trim().split(' ').map(Number)
        let arr = input[line++].trim().split(' ').map(Number)

        console.log(checkSum(arr, n, k))
    }


}

if (process.env.USERNAME === "abhim") {
    runProgram(`3
5 3
1 2 1 3 4
4 5
1 2 1 3
3 2
1 2 1`);
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