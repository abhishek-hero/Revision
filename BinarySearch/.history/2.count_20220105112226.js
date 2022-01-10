const lowerBound = (arr, n, target) => {

    let low = 0, high = n - 1; ans = -1;

    while (low <= high) {

        let mid = Math.floor(low + (high - low) / 2)

        if (arr[mid] == target) {
            ans = mid
            high = mid - 1
        }

        else if (arr[mid] < target) {
            low = mid + 1
        }

        else if (arr[mid] > target) {
            high = low - 1
        }
    }

    return ans
}


const upperBound = (arr, n, target) => {

    let low = 0, high = n - 1, ans = -1;

    while (low <= high) {

        let mid = Math.floor(low + (high - low) / 2)

        if (arr[mid] == target) {
            ans = mid
            low = mid + 1
        }

        else if (arr[mid] < target) {
            low = mid + 1
        }

        else {
            high = mid - 1
        }
    }

    return ans
}

const coutnFreq = (arr, n, target) => {

    let lower = lowerBound(arr, n, target)
    let upper = upperBound(arr, n, target)

    if (lower == -1) {
        return 0
    }

    let ans = upper - lower + 1

    console.log(ans)
}



function runProgram(input) {
    input = input.trim().split('\n')
    let [n, k] = input[0].trim().split(" ").map(Number)
    let arr = input[1].trim().split(" ").map(Number)

    coutnFreq(arr, n, k)

}

if (process.env.USERNAME === "abhim") {
    runProgram(`6 3
2 3 3 3 6 9`);
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