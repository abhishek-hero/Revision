class Stack {
    constructor() {
        this.items = []
        this.count = 0
    }

    // NOTE add element to top of stack ==> push
    addToStack(element) {
        this.items[this.count] = element
        this.count++
    }

    // NOTE remove top from stack ==> pop
    removeTop() {
        if (this.count == 0) return undefined
        let deletedItem = this.items[this.count - 1]
        this.count--
        return deletedItem
    }

    // NOTE return top element ==> peek
    returnTop() {
        return this.items[this.count - 1]
    }

    isEmpty() {
        return this.count == 0 ? 'stack is empty' : 'Stack is not empty'
    }

    size() {
        return this.count
    }

    printStack() {
        if (this.count == 0) return 'stack is empty'
        let str = ''
        for (let i = 0; i < this.count; i++) {
            str += this.items[i]
        }

        return str
    }

    clear() {
        this.items = []
        this.count = 0
    }
}

const stack = new Stack()

stack.addToStack(100)
stack.addToStack(200)
console.log(stack)
stack.clear()
console.log(stack)
// console.log(stack.isEmpty())
// console.log(stack.removeTop())
// console.log('peek', stack.returnTop())
// console.log(stack.removeTop())
// console.log(stack.removeTop())
// console.log(stack.isEmpty())
// console.log(stack.size())
// console.log(stack.printStack())