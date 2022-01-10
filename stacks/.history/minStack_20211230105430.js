// keep track of minimum element in stack when any operation carried out on stack

let arr = [18, 19, 29, 15, 16]
let stack = []
let sStack = []


const pop = (a) => {

    if (stack.length == 0) {
        return -1
    }
    let ans = stack.pop()

    if (sStack[sStack.length - 1] == ans) {
        stack.pop()
    }

    return ans

}

const push = (a) => {
    stack.push(a)
    if (sStack.length == 0 || sStack[sStack.length - 1] >= a) {
        sStack.push(a)
    }
    return

}

const getELe = () => {

    if (sStack.length == 0) {
        return -1
    }

    return sStack[sStack.length - 1]

}