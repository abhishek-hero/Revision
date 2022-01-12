// Euclidean algorithm

const gcd = (a, b) => {

    if (b == 0) {
        return a
    }

    return gcd(b, a % b)


}


function runProgram(input) {
    input = input.trim().split('\n')
    let test = +input[0]
    let line = 1
    for (let i = 0; i < test; i++) {
        let [a, b] = input[line++].trim().split(" ").map(Number)

        console.log(gcd(a, b))
    }
}

if (process.env.USERNAME === "abhim") {
    runProgram(`2
6 9
2 25`);
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