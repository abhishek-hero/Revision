function runProgram(input) {
    let str = input.trim()
    let stack = []

    for (let i = 0; i < str.length; i++) {
        if (str[i] == '(' || str[i] == '[' || str[i] == '{') {
            stack.push(str[i])
        }

        if (stack.length == 0) {
            console.log("unbalanced1")
            return
        }

        else if (str[i] == ')') {
            if (stack[stack.length - 1] == '(') {
                stack.pop()
            } else {
                console.log("unbalanced2")
                return
            }
        }

        else if (str[i] == ']') {
            if (stack[stack.length - 1] == '[') {
                stack.pop()
            } else {
                console.log("unbalanced3")
                return
            }
        }

        else if (str[i] == '}') {
            if (stack[stack.length - 1] == '{') {
                stack.pop()
            } else {
                console.log("unbalanced4")
                return
            }
        }
    }

    console.log(stack)
    if (stack.length == 0) {
        console.log('balanced')
    } else {
        console.log('unbalanced5')
    }
}

if (process.env.USERNAME === "abhim") {
    runProgram(`(((((((((())))))))))]`);
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