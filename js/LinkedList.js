const link = new LinkedList()
function LinkedList() {
    this.nodes = {value: null, next: null}

    this.insert = (value) => {
        this.insertAt(this.getSize(), value);
    }

    this.deleteValue = (value) => {
        this.removeAt(this.getIndex(value))
        if (this.isListClear()) {
            this.setDefaultList()
        }
    }

    this.deleteLast = () => {
        this.removeAt(this.getSize() - 1)

    }

    this.getSize = () => {
        if (this.nodes.value === null) {
            return 0
        }
        let counter = 0
        let currentNode = this.nodes
        while (currentNode) {
            counter++
            currentNode = currentNode.next
        }
        return counter
    }

    this.getValue = (index) => {
         return this.getNodeByIndex(index).value
    }

    this.getNodeByIndex = (index) => {
        let counter = 0
        let currentNode = this.nodes;
        while (index !== counter) {
            currentNode = currentNode.next
            counter ++
        }
        return  currentNode
    }

    this.getIndex = (value) => {
        let index = 0
        let currentNode = this.nodes;
        while (currentNode) {
            if (value === currentNode.value) {
                return index
            }
            index++
            currentNode = currentNode.next
        }
    }

    this.insertAll = (arr) => {
        for (let key of arr) {
            this.insert(key)
        }
    }

    this.removeAt = (index) => {
        if (this.nodes.value === null) {
            return
        }
        let previousNode
        let nextNode
        if (index === 0){
            this.nodes =  this.getNodeByIndex(index+1) || null
        } else {
            previousNode = this.getNodeByIndex(index-1)
            nextNode =  this.getNodeByIndex(index+1) || null
            if (previousNode) previousNode.next = nextNode;
        }
        if (this.isListClear()) {
            this.setDefaultList()
        }
    }

    this.setValue = (value = null, next = null) => {
        return {value: value, next: next}
    }

    this.insertAt = (index, value) => {
        let currentNode = this.nodes;
        if (index === 0) {
            this.nodes = this.setValue(value,currentNode.next )
        } else {
            let counter = 0
            while (index-1 !== counter) {
                currentNode = currentNode.next
                counter ++
            }
            currentNode.next = this.setValue(value, currentNode.next)
        }
    }

    this.isListClear = () => {
         return (this.nodes === null || this.nodes.value === null);
    }

    this.setDefaultList = () => {
        this.nodes = {value: null, next: null}
    }
}








