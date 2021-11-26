describe('Insert', () => {
    const testLink = new LinkedList()
    it('add value to empty list', () => {
        testLink.insert(46)
        expect(testLink.nodes).to.eql({value: 46, next:null})
    })

    it('add random value', () => {
        testLink.insert(22)
        expect(testLink.nodes).to.eql({ value: 46, next: { value: 22, next: null } })
    })
})

describe('Delete Value', () => {
    const testLink = new LinkedList()
    testLink.insert(46)
    testLink.insert(42)
    testLink.insert(22)
    it('Delete first node', () => {
        testLink.deleteValue(46)
        expect(testLink.nodes).to.eql({value: 42, next: { value: 22, next: null } })
    })

    it('Delete random value', () => {
        testLink.deleteValue(22)
        expect(testLink.nodes).to.eql({ value: 42, next: null })
    })
    it('Delete all values', () => {
        testLink.deleteValue(42)
        expect(testLink.nodes).to.eql({ value: null, next: null })
    })
})

describe('Delete Last', () => {
    const testLink = new LinkedList()
    testLink.insert(46)
    testLink.insert(42)
    testLink.insert(22)
    it('Delete', () => {
        testLink.deleteLast()
        expect(testLink.nodes).to.eql({ value: 46, next: { value: 42, next: null } })
    })

    it('Delete', () => {
        testLink.deleteLast()
        expect(testLink.nodes).to.eql({ value: 46, next: null })
    })
    it('Delete last value', () => {
        testLink.deleteLast()
        expect(testLink.nodes).to.eql({ value: null, next: null })
    })
})

describe('get Size', () => {
    const testLink = new LinkedList()
    testLink.insert(46)
    testLink.insert(42)
    testLink.insert(22)
    it('set random size', () => {
        expect(testLink.getSize()).to.equal(3)
    })

    it('set size 0', () => {
        const testLink2 = new LinkedList()
        testLink.deleteLast()
        expect(testLink2.getSize()).to.eql(0)
    })
})

describe('get Value', () => {
    const testLink = new LinkedList()
    testLink.insert(46)
    testLink.insert(42)
    testLink.insert(22)
    it('get first value', () => {
        expect(testLink.getValue(0)).to.equal(46)
    })

    it('get random value', () => {
        expect(testLink.getValue(1)).to.equal(42)
    })

    it('get last value', () => {
        expect(testLink.getValue(2)).to.equal(22)
    })
})

describe('get Node by Index', () => {
    const testLink = new LinkedList()
    testLink.insert(46)
    testLink.insert(42)
    testLink.insert(22)
    it('get first node', () => {
        expect(testLink.getNodeByIndex(0)).to.eql({ value: 46,
            next: { value: 42, next: { value: 22, next: null } } })
    })

    it('get random node', () => {
        expect(testLink.getNodeByIndex(1)).to.eql({ value: 42, next: { value: 22, next: null } })
    })

    it('get last node', () => {
        expect(testLink.getNodeByIndex(2)).to.eql({ value: 22, next: null })
    })
})

describe('get Index', () => {
    const testLink = new LinkedList()
    testLink.insert(46)
    testLink.insert(42)
    testLink.insert(22)
    it('get first index', () => {
        expect(testLink.getIndex(46)).to.equal(0)
    })

    it('get random index', () => {
        expect(testLink.getIndex(42)).to.equal(1)
    })

    it('get last index', () => {
        expect(testLink.getIndex(22)).to.equal(2)
    })
})

describe('Insert all', () => {
    const testLink = new LinkedList()
    it('add values to empty list', () => {
        testLink.insertAll([1,2])
        expect(testLink.nodes).to.eql({ value: 1, next: { value: 2, next: null } })
    })

    it('add random values', () => {
        testLink.insertAll([1,2])
        expect(testLink.nodes).to.eql({ value: 1,
            next: { value: 2, next: { value: 1,
                        next: { value: 2, next: null } }}})
    })
})

describe('remove At', () => {
    const testLink = new LinkedList()
    testLink.insert(46)
    testLink.insert(42)
    testLink.insert(22)
    testLink.insert(212)
    it('remove at last index', () => {
        testLink.removeAt(2)
        expect(testLink.nodes).to.eql({ value: 46,
            next: { value: 42, next: { value: 212, next: null } } })
    })

    it('remove at first index', () => {
        testLink.removeAt(0)
        expect(testLink.nodes).to.eql({ value: 42, next: { value: 212, next: null } })
    })

    it('remove at random index', () => {
        testLink.removeAt(1)
        expect(testLink.nodes).to.eql({ value: 42, next: null })
    })
})

describe('insert At', () => {
    const testLink = new LinkedList()
    testLink.insert(46)
    testLink.insert(42)
    testLink.insert(22)
    testLink.insert(212)
    it('insert at last index', () => {
        testLink.insertAt(2,123)
        expect(testLink.nodes).to.eql({value:46,next:{value:42,next:
                    {value:123,next:{value:22,next:{value:212,next:null}}}}})
    })

    it('insert at first index', () => {
        testLink.insertAt(0,111222)
        expect(testLink.nodes).to.eql({value:111222,next:{value:42,next:
                    {value:123,next:{value:22,next:{value:212,next:null}}}}})
    })

    it('insert at random index', () => {
        testLink.insertAt(1,155555)
        expect(testLink.nodes).to.eql({value:111222,next:{value:155555,next:{value:42,next:
                        {value:123,next:{value:22,next:{value:212,next:null}}}}}})
    })
})

describe('is List Clear', () => {
    let testLink = new LinkedList()
    it('this.nodes === null', () => {
        expect(testLink.nodes).to.false
    })

    it('this.nodes.value === null', () => {
        testLink = {value: null, next: null}
        expect(testLink.nodes).to.false
    })

})

describe('set Default List', () => {
    let testLink = new LinkedList()
    testLink.insert(46)
    testLink.insert(42)
    testLink.insert(22)
    testLink.insert(212)
    it('default', () => {
        testLink.setDefaultList()
        expect(testLink.nodes).to.be.eql({value: null, next: null})
    })

})
