function runProgram(input) {
    input = input.trim().split("\n")
    let n = +input[0]

    let club = [], club1 = [], club2 = [], club3 = [], club4 = [];

    for (let i = 1; i < input.length; i++) {

        let arr = input[i].trim().split(" ")

        if (arr[0] == 'D') {
            if (club[0] == 1) {
                if (club1.length == 1) {
                    club.shift()
                }

                let temp = club1.shift()
                console.log(`1 ${temp}`)

            } else if (club[0] == 2) {
                if (club2.length == 1) {
                    club.shift()
                }

                let temp = club2.shift()
                console.log(`2 ${temp}`)

            } else if (club[0] == 3) {
                if (club3.length == 1) {
                    club.shift()
                }
                let temp = club3.shift()
                console.log(`3 ${temp}`)
            } else if (club[0] == 4) {
                if (club4.length == 1) {
                    club.shift()
                }
                let temp = club4.shift()
                console.log(`4 ${temp}`)

            }
        } else if (arr[0] == 'E') {
            if (arr[1] == 1) {
                if (club1.length == 0) {
                    club.push(+arr[1])
                }
                club1.push(+arr[2])

            } else if (arr[1] == 2) {
                if (club2.length == 0) {
                    club.push(+arr[1])
                }
                club2.push(+arr[2])

            } else if (arr[1] == 3) {
                if (club3.length == 0) {
                    club.push(+arr[1])
                }
                club3.push(+arr[2])

            } else if (arr[1] == 4) {
                if (club4.length == 0) {
                    club.push(+arr[1])
                }
                club4.push(+arr[2])

            }
        }

    }
}

if (process.env.USERNAME === "abhim") {
    runProgram(`5
E 1 1
E 2 1
E 1 2
D
D`);
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