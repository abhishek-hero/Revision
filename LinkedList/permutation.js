function runProgram(input) {
    input = input.trim().split("\n")

    let arr = input[1].trim().split(" ")
    let n = input[0].trim()

    let index = 0
    let ans = []

    permutation(arr, index, n, ans)
    ans = ans.sort()
    for (let i = 0; i < ans.length; i++) {
        console.log(ans[i].join(" "))
    }

}


function permutation(arr, index, n, ans) {

    if (index == n) {
        ans.push([...arr])
    }
    else {

        for (let i = index; i < n; i++) {

            arr = swap(arr, index, i)
            permutation(arr, index + 1, n, ans)
            arr = swap(arr, index, i)

        }
    }
}


function swap(a, i, j) {
    let temp;
    let charArray = a
    temp = charArray[i];
    charArray[i] = charArray[j];
    charArray[j] = temp;
    return (charArray)
}



if (process.env.USERNAME === "abhim") {
    runProgram(`3
1 2 3`);
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