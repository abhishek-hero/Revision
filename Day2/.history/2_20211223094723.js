function runProgram(input) {
    input = input.trim().split("\n")
    let n = +input[0]
    let str = input[1].trim()

    let res = ''
    for (let i = n - 1; i >= 0; i--) {
        res += str[i]
    }


    console.log(str)

    // if(res == str){
    //     console.log("Yes")
    // }else{
    //     console.log("No")
    // }
}

if (process.env.USERNAME === "abhim") {
    runProgram(`6
nrupul`);
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