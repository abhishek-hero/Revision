// count no of triplets such that the absolute
// difference between max and min element of triplet
// should be equal to k.

// -3 -2 -1 0

const findTriplet = (arr, n, k) => {

    let count = 0

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {

                if (i < j && j < k) {
                    let max = Math.max(arr[i], arr[j], arr[k])
                    let min = Math.min(arr[i], arr[j], arr[k])

                    let res = Math.abs(max - min)
                    if (res <= k) {
                        console.log(res, k)
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

    console.log(findTriplet(arr, n, k))
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