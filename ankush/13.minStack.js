class Stack {
    constructor() {
        this.stack = []
        this.minStack = []
        this.min = Infinity
    }

    addStack(a) {
        this.stack.push(a)
        if (a <= this.min) {
            this.min = a
            this.minStack.push(a)
        }
    }

    removeStack(a) {
        if (!this.stack.length == 0) {

            let temp = this.stack.pop()
            if (temp == this.min) {
                this.minStack.pop()
            }

            if (this.minStack.length == 0) {
                this.min = Infinity
            } else {
                this.min = this.minStack[this.minStack.length - 1]
            }
        }
    }

    getMin() {
        if (!this.stack.length == 0) return this.min
        // NOTE if stack is empty
        return -1
    }

    top() {
        if (!this.stack.length == 0) return this.stack[this.stack.length - 1]
        // NOTE if stack is empty
        return -1
    }
}

let stack = new Stack()
stack.addStack(3)
stack.addStack(5)
stack.addStack(1)
console.log(stack.getMin())
stack.pop()
console.log(stack.getMin())