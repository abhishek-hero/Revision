// sort the array using stack

function runProgram(input) {
    input = input.trim().split('\n')

    let n = +input[0]
    let arr = input[1].trim().split(' ').map(Number)

    let stack = []

    while (arr.length !== 0) {

        let temp = arr[arr.length - 1]
        arr.pop()

        while (stack.length !== 0 && stack[stack.length - 1] > temp) {
            arr.push(stack[stack.length - 1])
            stack.pop()
        }

        stack.push(temp)
    }

    console.log(stack)
}

if (process.env.USERNAME === "abhim") {
    runProgram(`5
5 1 2 4 3 
0`);
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