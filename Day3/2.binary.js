const binarySearch = (arr, n, target) => {

    let low = 0, high = n - 1;

    while (low <= high) {

        let mid = Math.floor(low + (high - low) / 2)

        if (arr[mid] == target) {
            return "YES"
        }

        else if (arr[mid] < target) {
            low = mid + 1
        }

        else if (arr[mid] > target) {
            high = mid - 1
        }
    }

    return 'NO'
}



function runProgram(input) {
    input = input.trim().split('\n')

    let n = +input[0]
    let arr = input[1].trim().split(" ").map(Number)
    let q = +input[2]
    let query = input[3].trim().split(" ").map(Number)

    for (let i = 0; i < q; i++) {
        console.log(binarySearch(arr, n, query[i]))

    }
}

if (process.env.USERNAME === "abhim") {
    runProgram(`5
1 2 3 4 5
3
3 5 7`);
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