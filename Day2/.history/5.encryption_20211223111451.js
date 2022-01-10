function runProgram(input) {
    input = input.trim().split("\n");
    let str = input[0].trim();
    let n = +input[1];

    let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let b = "abcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    let res = ''

    for (let i = 0; i < str.length; i++) {

        for (let j = 0; j < Math.max(alpha.length, num.length); j++) {

            if (str[i] == alpha[j]) {

                let temp = (j + n) - 26
                res += alpha[temp]
            }
        }

    }
}

if (process.env.USERNAME === "abhim") {
    runProgram(`All-convoYs-9-be:Alert1.
4`);
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



// for (let j = 0; j < alpha.length; j++) {

//     if (str[i] == alpha[j]) {

//         let temp = (j + n) - 26
//         res += alpha[temp]
//     } else if (str[i] == b[j]) {

//         let temp = (j + n) - 26
//         res += b[temp]
//     }
// }


// if (
//     str[i] !== "0" ||
//     str[i] == "1" ||
//     str[i] == "2" ||
//     str[i] == "3" ||
//     str[i] == "4" ||
//     str[i] == "5" ||
//     str[i] == "6" ||
//     str[i] == "7" ||
//     str[i] == "8" ||
//     str[i] == "9"
// ) {
//     for (let j = 0; j < num.length; j++) {
//         if (str[i] == num[j]) {

//             let temp = (j + n) - 10
//             res += num[temp]
//         }
//     }
// }