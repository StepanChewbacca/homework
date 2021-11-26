function createDiv(htmlClass, value) {
    if (htmlClass === 'arrow') {
        myList.innerHTML += `<div class=${htmlClass}></div>`;
    } else {
        myList.innerHTML += `<div class=${htmlClass}>${value}</div>`
    }
}

function deleteLastItem() {
    link.deleteLast()
    if (!link.isListClear()) {
        makeUiList()
    } else {
        deleteUiList()
    }
}

function deleteListValue () {
    link.deleteValue(input.value)
    if (!link.isListClear()) {
        makeUiList()
    } else {
        deleteUiList()
    }
}

function deleteAllList() {
    deleteUiList()
    link.setDefaultList()
}

function enterListValueAll() {
    console.log(inputAll.value.split(' '))
    link.insertAll(inputAll.value.split(' '))
    makeUiList()
}

function enterListValue() {
    link.insert(input.value)
    makeUiList()
}

function makeUiList() {
    deleteUiList()
    let currentNode = link.nodes
    while (currentNode) {
        createDiv("myListValue",currentNode.value)
        if (currentNode.next!== null) {
            createDiv("myListNext",currentNode.next.value)
            createDiv("arrow")
        } else {
            createDiv("myListNext","null")
        }
        currentNode = currentNode.next
    }
}

function deleteUiList() {
    myList.innerHTML = ''
}

function searchByIndex() {
    search.innerHTML =   `<label class="search">Your index value is ${link.getValue(Number(inputSearch.value))}</label>`
}

function searchByValue() {
    search.innerHTML =   `<label class="search">Your value index is ${link.getIndex(inputSearch.value)}</label>`
}