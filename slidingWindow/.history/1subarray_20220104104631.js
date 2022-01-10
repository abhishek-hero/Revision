let arr = [1, 2, 1, 3]

for (let i = 0; i < arr.length; i++) {
    let sub = []
    for (let j = i; j < arr.length; j++) {
        sub.push(arr[j])

        console.log(sub)
    }
}


// function runProgram(input) {
//     input = input.trim().split('\n')
//     let test = +input[0]
//     let line = 1

//     for (let i = 0; i < test; i++) {
//         let [n, k] = input[line++].trim().split(' ').map(Number)
//         let arr = input[line++].trim().split(' ').map(Number)
//     }


// }

// if (process.env.USERNAME === "abhim") {
//     runProgram(`3
// 5 3
// 1 2 1 3 4
// 4 5
// 1 2 1 3
// 3 2
// 1 2 1`);
// } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//         read += input;
//     });
//     process.stdin.on("end", function () {
//         read = read.replace(/\n$/, "");
//         read = read.replace(/\n$/, "");
//         runProgram(read);
//     });
//     process.on("SIGINT", function () {
//         read = read.replace(/\n$/, "");
//         runProgram(read);
//         process.exit(0);
//     });
// }