function runProgram(input) {
    input = input.trim().split("\n")
    let n = +input[0]
    let str = input[1].trim()

    let i = 0; j = n - 1, count = 0;

    while (i <= Math.floor(n / 2) && j >= Math.floor(n / 2)) {

        if (str[i] == str[j]) {
            count++
            i++
            j--
        } else {
            break
        }

        console.log(count)

    }

    if (count !== Math.floor(n / 2)) {
        console.log("No")
    } else {
        console.log("Yes")
    }

}

if (process.env.USERNAME === "abhim") {
    runProgram(`6
    abaaba`);
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








// let res = ''
// for (let i = n - 1; i >= 0; i--) {
//     res += str[i]
// }

// if (res == str) {
//     console.log("Yes")
// } else {
//     console.log("No")
// }