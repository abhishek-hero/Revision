flag = false


const subsequence = (arr, index, ans, k) => {

    if (ans == k) {
        flag = true
    }

    if (index == arr.length) {
        return
    }

    let currChar = arr[index]

    subsequence(arr, index + 1, ans, k)
    ans += currChar
    subsequence(arr, index + 1, ans, k)
}




function runProgram(input) {
    input = input.trim().split("\n")

    let n = +input[0]
    let arr = input[1].split(' ').map(Number)
    let target = +input[2]

    subsequence(arr, 0, 0, target)
    if (flag == true) {
        console.log("yes")
    } else {
        console.log("no")
    }

}

if (process.env.USERNAME === "abhim") {
    runProgram(`4
1 2 3 4
5`);
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