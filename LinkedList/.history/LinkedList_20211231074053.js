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

    this.isEmpty = function () {
        return length === 0
    }

    this.indexOf = function (element) {
        var currentNode = head
        var index = -1

        while (currentNode) {
            index++
            if (currentNode.element === element) {
                return index
            }
        }
    }
}