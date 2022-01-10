function LinkedList() {
    var length = 0;
    var head = null;

    var Node = function (element) {
        this.element = element;
        this.next = null;
    }

    this.size = function () {
        return length
    }

    this.head = function () {
        return head
    }

    // add node to end of list
    this.add = function (element) {
        var node = new Node(element)
        if (head == null) {
            head = node
        }

        else {
            var currentNode = head

            while (currentNode.next) {
                currentNode = currentNode.next
            }

            currentNode.next = node
        }

        length++
    }

    // remove specific element
    this.remove = function (element) {
        var currentNode = head
        var prevNode;

        if (currentNode.element === element) {
            head = currentNode.next
        }

        else {
            while (currentNode.element !== element) {
                prevNode = currentNode
                currentNode = currentNode.next
            }

            prevNode.next = currentNode.next
        }

        length--
    }

    // check if linked list is empty
    this.isEmpty = function () {
        return length === 0
    }

    // find index of an element
    this.indexOf = function (element) {
        var currentNode = head
        var index = -1

        while (currentNode) {
            index++
            if (currentNode.element === element) {
                return index
            }

            currentNode = currentNode.next
        }

        return -1
    }

    // find element at specific index
    this.elementAt = function (index) {
        var currentNode = head
        var count = 0;

        while (count < index) {
            count++
            currentNode = currentNode.next
        }

        return currentNode.element;
    }

    // add at specific element
    this.addAt = function (index, element) {
        var node = new Node(element)

        var currentNode = head
        var prevNode;
        var currentIndex = 0;

        if (index > length) {
            return false
        }

        if (index === 0) {
            node.next = currentNode
            head = node

        } else {
            while (currentIndex < index) {
                currentIndex++
                prevNode = currentNode
                currentNode = currentNode.next
            }

            node.next = currentNode
            prevNode.next = node
        }

        length++
    }

    // remove at specific index
    this.removeAt = function () {
        var currentNode = head
        var prevNode;
        var currentIndex = 0

        if (index < 0 || index >= length) {
            return null
        }

        if (index === 0) {
            head = currentNode.next

        } else {
            while (currentIndex < index) {
                currentIndex++
                prevNode = currentNode
                currentNode = currentNode.next
            }

            prevNode.next = currentNode.next
        }

        length--
        return currentNode.element
    }
}

var canga = new LinkedList()
console.log(canga.size())
console.log(canga.head())
canga.add('apple')
console.log(canga.size())
console.log(canga.head())
canga.add('mango')
console.log(canga.size())
console.log(canga.head())