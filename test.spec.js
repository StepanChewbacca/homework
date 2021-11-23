describe('tickets', () => {
    it('first person > 25', () => {
        expect(tickets([100, 25, 50])).to.false
    })
    it('clear array', () => {
        expect(tickets([])).to.true
    })
    it('not enough money ', () => {
        expect(tickets([25,100,25])).to.false
    })
    it('enough money', () => {
        expect(tickets([25,25,50])).to.true
    })
})

describe('getSum', () => {
    it('second number is bigger then first number', () => {
        expect(getSum("2333333333333313333333333333333333","111111112111111111111")).to.equal('2333333333333424444445444444444444')
    })
    it('first number is bigger then second number', () => {
        expect(getSum("111111112111111111111" ,"2333333333333313333333333333333333")).to.equal('2333333333333424444445444444444444')
    })
})

describe('getQuantityPostsByAuthor', () => {
    const listOfPosts1 = [
        {
            id: 3,
            post: "some post3",
            title: "title3",
            author: "Rimus",
        }
    ];
    const listOfPosts3 = [
        {
            id: 3,
            post: "some post3",
            title: "title3",
            author: "Timus",
        }
    ];
    const listOfPosts2 = [
        {
            id: 1,
            post: "some post1",
            title: "title1",
            author: "Ivanov",
            comments: [
                {
                    id: 1.1,
                    comment: "some comment1",
                    title: "title1",
                    author: "Rimus",
                },
                {
                    id: 1.2,
                    comment: "some comment2",
                    title: "title2",
                    author: "Uncle",
                },
            ],
        },
        {
            id: 2,
            post: "some post2",
            author: "Ivanov",
            comments: [
                {
                    id: 2.1,
                    comment: "some comment1",
                    title: "title1",
                    author: "Rimus",
                },
                {
                    id: 2.2,
                    comment: "some comment2",
                    title: "title2",
                    author: "Uncle",
                },
                {
                    id: 2.3,
                    comment: "some comment3",
                    title: "title3",
                    author: "Rimus",
                },
            ],
        },
        {
            id: 3,
            post: "some post3",
            title: "title3",
            author: "Rimus",
        },
        {
            id: 4,
            post: "some post4",
            title: "title4",
            author: "Uncle",
        },
    ];
    it('list without comments', () => {
        expect(getQuantityPostsByAuthor(listOfPosts1,"Rimus" )).to.eql([ 1, 0 ])
    })
    it('list without comments and posts', () => {
        expect(getQuantityPostsByAuthor(listOfPosts3,"Rimus")).to.eql([ 0, 0 ])
    })
    it('random list ', () => {
        expect(getQuantityPostsByAuthor(listOfPosts2,"Rimus")).to.eql([ 1, 3 ])
    })
})


describe('cache', () => {
    const cachedFunc = cache();

    it('do not be in cache', () => {
        expect(cachedFunc("foobartest")).to.eql(["foobartest"])
    })
    it('already in cache', () => {
        cachedFunc("foobartest")
        expect(cachedFunc("foobartest")).to.eql(["foobartest"])
    })
})


describe('complexFunction', () => {
    it('random arg', () => {
        expect(complexFunction(1,2)).to.equal(3)
    })
    it('random arg', () => {
        expect(complexFunction("foo", "bar")).to.eql("foobar")
    })
})




