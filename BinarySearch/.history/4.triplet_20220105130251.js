// count no of triplets such that the absolute
// difference between max and min element of triplet
// should be equal to k.

const findTriplet = (arr, n, k) => {

    let count = 0

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {

                if (i < j && j < k) {
                    let max = Math.max(arr[i], arr[j], arr[k])
                    let min = Math.min(arr[i], arr[j], arr[k])

                    if (Math.abs(max - min) <= k) {
                        count++
                    }
                }
            }
        }
    }

    return count
}



function runProgram(input) {
    input = input.trim().split('\n')
    let [n, k] = input[0].trim().split(' ').map(Number)
    let arr = input[1].trim().split(' ').map(Number)
}

if (process.env.USERNAME === "abhim") {
    runProgram(`4 2
-3 -2 -1 0`);
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