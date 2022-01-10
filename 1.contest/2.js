const score = (arr) => {

    let ab = 0, virat = 0;

    ab += arr[0]

    if (arr[0] % 2 !== 0) {
        vr = true
        abd = false

    } else {
        abd = true
        vr = false
    }


    // 1 2 0 0 1 1 6 6 4 1 6 1
    for (let i = 1; i < arr.length; i++) {

        if (arr[i] % 2 !== 0 && abd == true && (i + 1) % 6 !== 0) {
            ab += arr[i]
            vr = true
            abd = false

        } else if (arr[i] % 2 == 0 && abd == true && ((i + 1)) % 6 !== 0) {
            ab += arr[i]

        } else if (arr[i] % 2 !== 0 && vr == true && (i + 1) % 6 !== 0) {
            virat += arr[i]
            abd = true
            vr = false

        } else if (arr[i] % 2 == 0 && vr == true && (i + 1) % 6 !== 0) {
            virat += arr[i]
        }

        // if its a 6th ball

        else if (arr[i] % 2 !== 0 && abd == true && (i + 1) % 6 == 0) {
            ab += arr[i]

        } else if (arr[i] % 2 == 0 && abd == true && (i + 1) % 6 == 0) {
            ab += arr[i]
            vr = true
            abd = false

        } else if (arr[i] % 2 !== 0 && vr == true && (i + 1) % 6 == 0) {
            virat += arr[i]

        } else if (arr[i] % 2 == 0 && vr == true && (i + 1) % 6 !== 0) {
            virat += arr[i]
            abd = true
            vr = false
        }
    }

    if (ab > virat) {
        return 'AB de Villiers'
    } else if (virat > ab) {
        return 'Virat Kohli'
    } else {
        return 'Tie'
    }
}


function runProgram(input) {
    input = input.trim().split('\n')
    let test = +input[0]
    let line = 1

    for (let i = 0; i < test; i++) {
        let overs = +input[line++]
        let arr = input[line++].trim().split(" ").map(Number)

        // let arr = [1, 2, 0, 0, 1, 1, 6, 6, 4, 1, 6, 1]
        console.log(score(arr))

    }
}

if (process.env.USERNAME === "abhim") {
    runProgram(`3
2
1 2 0 0 1 1 6 6 4 1 6 1
3
0 0 0 0 0 1 0 0 0 0 1 1 6 6 6 1 4 4
1
0 1 0 1 0 0`);
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