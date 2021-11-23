describe('updateUiList', () => {
         const toDos = ["1", "1", "1", "1"]
         updateUiList(toDos)
    it('toDos length =  list.children.length', () => {
        let list = document.querySelector('.result')
        expect(list.children.length).to.equal(toDos.length);
    })
})


describe('Local Storage', () => {
    const toDos = ["1", "1", "1", "1"]
    it('clearStorage', () => {
        localStorage.setItem('toDos', JSON.stringify(toDos));
        clearStorage()
        expect(localStorage.getItem('toDos')).to.equal(null);
    })
    it('AddToStorage', () => {
        const toDosStringify = JSON.stringify(toDos);
        localStorage.setItem('toDos', toDosStringify);
        expect(localStorage.getItem('toDos')).to.equal(toDosStringify);
    })
})


describe('removeFromList', () => {
    const toDos = ["12", "1", "1", "1"]
    it('removeItem', () => {
        let obj = {
            target: {
                innerText : 12
            }
        }
        localStorage.setItem('toDos', JSON.stringify(toDos));
        removeFromList (obj)
        const toDosStringify = JSON.stringify(toDos);
        expect(localStorage.getItem('toDos')).to.equal(toDosStringify);

    })
    it('', () => {

    })
})