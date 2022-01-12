let str = '[()]{}'
let n = str.length
let stack = []

// NOTE Using Stack

for (let i = 0; i < n; i++) {

    if (str[i] == '(' || str[i] == '{' || str[i] == '[') {
        stack.push(str[i])

    }

    if (stack.length == 0) {
        console.log("Unbalanced")
        return
    }

    else if (str[i] == ')') {
        if (stack[stack.length - 1] == '(') {
            stack.pop()
        } else {
            console.log("Unbalanced")
            return
        }
    }
    else if (str[i] == ']') {
        if (stack[stack.length - 1] == '[') {
            stack.pop()
        } else {
            console.log("Unbalanced")
            return
        }
    }
    else if (str[i] == '}') {
        if (stack[stack.length - 1] == '{') {
            stack.pop()
        } else {
            console.log("Unbalanced")
            return
        }
    }
}

if (stack.length == 0) {
    console.log('balanced')
} else {
    console.log('unbalanced')
}