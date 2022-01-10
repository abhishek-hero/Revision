function runProgram(input) {
    input = input.split("\n");

    var obj = {}
    var count = 0
    for (let i = 0; i < input.length; i++) {
        if (obj[input[i].trim().split("").sort().join("")] == undefined) {
            obj[input[i].trim().split("").sort().join("")] = i
        }

    }
    let res = [];
    for (key in obj) {
        res.push(input[obj[key]].trim())
    }
    res.sort()
    console.log(Object.keys(obj).length - 1);
    for (let i = 1; i < res.length; i++) {
        console.log(res[i].trim());

    }



}
if (process.env.USERNAME === "abhim") {
    runProgram(`5
    eodc
    odec
    code
    baca
    aabc`);
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