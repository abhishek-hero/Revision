// Infix Expression- Operators are written in-between their operands. This is the usual way we write expressions.
// NOTE Example- a+b-c
// Postfix Expression- If the operator appears in the expression after the operands.
// Example- Postfix of the above expression would be ab+c-
// The compiler scans the expression either from left to right or from right to left.
// Consider the below expression: a + b * c + d
// The compiler first scans the expression to evaluate the expression b * c, then again scan the expression to add a to it. The result is then added to d after another scan.
// The repeated scanning makes it very in-efficient. It is better to convert the expression to postfix(or prefix) form before evaluation.
// The postfix expression of this would be- abc * + d+
// This expression is much easy to evaluate than its infix counterpart.
// Remember Brackets too can be used in the input and postfix notation doesn't have brackets.

// NOTE Input and Output
// in = a + b * c + d <==> op = abc * + d+
// in = a+b-c+d*(e-f)/g+(h*(i/j)) <==> op = ab+c-def-*g/+hij/*+

// NOTE Function to check priority of operator

// let str = 'a+b-c+d*(e-f)/g+(h*(i/j))'

const priority = (a) => {

    if (a == '^') return 3
    if (a == '*' || a == '/') return 2
    if (a == '+' || a == '-') return 1
    return -1
}

// NOTE This function checks whether the particular character is an operand or an operator.

const isCharacter = (a) => {
    if (a == ')' || a == '(' || a == '+' || a == '-' || a == '*' || a == '/' || a == '^') return false;
    return true;
}

// NOTE Function convert Infix into Postfix

const InfixPostfix = (str) => {

    // let str = 'a+b-c+d*(e-f)/g+(h*(i/j))'

    let ans = ''
    let stack = []

    for (let i = 0; i < str.length; i++) {

        if (isCharacter(str[i])) {
            ans += str[i]
        }
        else if (str[i] == '(') {
            stack.push(str[i])
        }
        else if (str[i] == ')') {

            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                let temp = stack.pop()
                ans += temp
            }

            if (stack.length == 0) {
                return "Wrong"
            }
            else {
                stack.pop()
            }
        }
        else {
            // console.log('priority', priority(stack[stack.length - 1]), 'top', stack[stack.length - 1])
            while (stack.length > 0 && priority(stack[stack.length - 1]) >= priority(str[i])) {
                let temp = stack.pop()
                ans += temp
            }

            stack.push(str[i])
        }
    }

    while (stack.length > 0) {
        let temp = stack.pop()
        ans += temp
    }

    return ans.toString()
}




function runProgram(input) {
    let str = input.trim()
    console.log(InfixPostfix(str))
}

if (process.env.USERNAME === "abhim") {
    runProgram(`a+b-c+d*(e-f)/g+(h*(i/j))`);
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