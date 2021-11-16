describe('Найти минимальный элемент массива', () => {
    it('елемент в конце массива', () => {
        expect( getMinOfArr([22,33,55,767,99,9999,32423,6,1])).to.equal(1);     
    })
    it('елемент в середине массива', () => {
        expect( getMinOfArr([22,33,55,767,-55,99,9999,32423,6,-5])).to.equal(-55);     
    })
    it('елемент в начале массива', () => {
        expect( getMinOfArr([-22,22,33,55,767,99,9999,32423,6,])).to.equal(-22);     
    })

});

describe('Найти максимальный элемент массива', () => {
    it('елемент в конце массива', () => {
        expect( getMaxOfArr([22,33,55,767,99,9999,32423,6,1111111])).to.equal(1111111);     
    })
    it('елемент в середине массива', () => {
        expect( getMaxOfArr([22,33,55,767,-55,99,9999,32423,6,-5])).to.equal(32423);     
    })
    it('елемент в начале массива', () => {
        expect( getMaxOfArr([2222222,22,33,55,767,99,9999,32423,6,])).to.equal(2222222);     
    })

});

describe('Найти индекс минимального элемента массива', () => {
    it('елемент в конце массива', () => {
        expect( getMinOfArr_index([22,33,55,767,99,9999,32423,6,1])).to.equal(8);     
    })
    it('елемент в середине массива', () => {
        expect( getMinOfArr_index([22,33,55,767,-55,99,9999,32423,6,-5])).to.equal(4);     
    })
    it('елемент в начале массива', () => {
        expect( getMinOfArr_index([-22,22,33,55,767,99,9999,32423,6,])).to.equal(0);     
    })

});

describe('Найти  индекс максимального элемента массива', () => {
    it('елемент в конце массива', () => {
        expect( getMaxOfArr_index([22,33,55,767,99,9999,32423,6,1111111])).to.equal(8);     
    })
    it('елемент в середине массива', () => {
        expect( getMaxOfArr_index([22,33,55,767,-5,99,9999,32423,6,-5])).to.equal(7);     
    })
    it('елемент в начале массива', () => {
        expect( getMaxOfArr_index([2222222,22,33,55,767,99,9999,32423,6,])).to.equal(0);     
    })

});

describe('Посчитать сумму элементов массива с нечетными индексами', () => {
    it('один елемент в массиве', () => {
        expect( getSumOfArr_oddIndex([1])).to.equal(0);     
    })
    it('два елемента в массиве', () => {
        expect( getSumOfArr_oddIndex([2,2])).to.equal(2);     
    })
    it('случайный массив', () => {
        expect( getSumOfArr_oddIndex([1,1,1,1,1,2,3])).to.equal(4);     
    })

});

describe('Сделать реверс массива (массив в обратном направлении)', () => {
    it('случайный массив', () => {
        expect( doArrReverse([1,2,3,4])).to.eql( [ 4, 3, 2, 1 ]);     
    })
    it('случайный массив', () => {
        expect( doArrReverse([2,2])).to.eql([2,2]);     
    })
    it('случайный массив', () => {
        expect( doArrReverse([1,1,1,1,1,2,3])).to.eql([3,2,1,1,1,1,1]);     
    })

});


describe('Посчитать количество нечетных элементов массива', () => {
    it('все елементы чётные', () => {
        expect( getCountOfArr_odd([2,2,2,2])).to.equal(0);     
    })
    it('только один нечётный елемент', () => {
        expect( getCountOfArr_odd([1,2])).to.equal(1);     
    })
    it('все нечётные елементы', () => {
        expect( getCountOfArr_odd([1,1,1,1,1,3,3])).to.equal(7);     
    })

});

describe(' Поменять местами первую и вторую половину массива', () => {
    it('четное кол-во елементов в массиве', () => {
        expect( doReverseArr_firstSecondPart([1,2,3,4])).to.eql([3,4,1,2]);     
    })
    it('нечетное кол-во елементов в массиве', () => {
        expect( doReverseArr_firstSecondPart([1,2,3])).to.eql([3,2,1]);     
    })
    it('случайный массив', () => {
        expect( doReverseArr_firstSecondPart([1,2,3,4,5,6,7])).to.eql([5,6,7,4,1,2,3]);     
    })

});


describe(' Bubble ', () => {
    let array = [3,2,1]
    let array2 = [5,6,7,4,1,2,3]
    it('уже отсортированный массив', () => {
        expect(doBubbleSort(arr)).to.eql(arr.sort());     
    })
    it('массив в обратном порядке', () => {
        expect( doBubbleSort(array)).to.eql(array.sort());     
    })
    it('случайный массив', () => {
        expect( doBubbleSort(array2)).to.eql(array2.sort());     
    })

});

describe(' Select ', () => {
    let array = [3,2,1]
    let array2 = [5,6,7,4,1,2,3]
    it('уже отсортированный массив', () => {
        expect(doSelectSort(arr)).to.eql(arr.sort());     
    })
    it('массив в обратном порядке', () => {
        expect(doSelectSort(array)).to.eql(array.sort());     
    })
    it('случайный массив', () => {
        expect(doSelectSort(array2)).to.eql(array2.sort());     
    })

});

describe(' Insert', () => {
    let array = [3,2,1]
    let array2 = [5,6,7,4,1,2,3]
    it('уже отсортированный массив', () => {
        expect( doInsertSort(arr)).to.eql(arr.sort());     
    })
    it('массив в обратном порядке', () => {
        expect(  doInsertSort(array)).to.eql(array.sort());     
    })
    it('случайный массив', () => {
        expect(  doInsertSort(array2)).to.eql(array2.sort());     
    })

});

