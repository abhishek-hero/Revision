function runProgram(input) {
    input = input.trim().split("\n");
    let str = input[0].trim();
    let n = +input[1];

    let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let bravo = "abcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    let symbols = ';:_-@#$%&./'
    let res = ''

    for (let i = 0; i < symbols.length; i++) {
        console.log(symbols[i])
    }

    // for (let i = 0; i < str.length; i++) {

    //     if (str[i] == ';') {
    //         res += ';'
    //         break
    //     } else if (str[i] == ':') {
    //         res += ':'
    //     } else if (str[i] == '_') {
    //         res += '_'
    //     } else if (str[i] == '-') {
    //         res += '-'
    //     } else if (str[i] == '@') {
    //         res += '@'
    //     } else if (str[i] == '#') {
    //         res += '#'
    //     } else if (str[i] == '%') {
    //         res += '%'
    //     } else if (str[i] == '$') {
    //         res += '$'
    //     } else if (str[i] == '&') {
    //         res += '&'
    //     } else if (str[i] == '.') {
    //         res += '.'
    //     } else if (str[i] == '/') {
    //         res += '/'
    //     }

    //     for (let j = 0; j < Math.max(alpha.length, num.length); j++) {

    //         if (str[i] == alpha[j]) {

    //             res += alpha[(j + n) % 26]

    //         } else if (str[i] == bravo[j]) {

    //             res += bravo[(j + n) % 26]

    //         } else if (str[i] == num[j]) {

    //             res += num[(j + n) % 10]
    //         }
    //     }

    // }

    // console.log(res)
}

if (process.env.USERNAME === "abhim") {
    runProgram(`----------a
100`);
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