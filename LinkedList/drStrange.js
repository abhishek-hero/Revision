const subSequences = (n, arr, index, ans) => {
    console.log(ans.join(' '))

    if (index == n) return;
    for (let i = index; i < n; i++) {
        ans.push(arr++)
        subSequences(n, arr, i + 1, ans)
        ans.pop()
    }

}


function runProgram(input) {
    let n = +input
    let arr = 1
    // for (let i = 1; i <= n; i++) {
    //     arr.push(i)
    // }

    subSequences(n, arr, 0, [])
}

if (process.env.USERNAME === "abhim") {
    runProgram(`3`);
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








// const subSequences = (arr, index, ans) => {

//     if (index === arr.length) {
//         console.log(ans)
//         return
//     }

//     let currChar;
//     currChar = arr[index]

//     subSequences(arr, index + 1, ans)
//     ans.push(currChar)
//     subSequences(arr, index + 1, ans)

// }