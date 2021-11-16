
describe('Составьте алгоритм, который считает, сколько времени вам нужно на приготовление яиц', () => {
    it('случайное значение', () => {
        expect(getCookingTime(46)).to.equal(50);     
    })
    it('значение кратно 5', () => {
        expect(getCookingTime(25)).to.equal(25);     
    })
    it('значение не кратно 5', () => {
        expect(getCookingTime(123)).to.equal(125);     
    })
}) 


describe('Получая массив чисел. Все они либо нечетные, либо четные, кроме одного', () => {
    it('все числа чётные кроме одного', () => {
        expect(getNumber([2,2,2,2,1])).to.equal(1);     
    })
    it('все числа не чётные кроме одного', () => {
        expect(getNumber([1,1,1,1,1,2])).to.equal(2);     
    })
}) 


describe('Принимая массив объектов и случайную строку. У объектов может быть ключ: «title» с разными значениями. Создайте алгоритм, который фильтрует массив, заданный как первый параметр, и возвращает массив объектов, которые содержат в своих заголовках заданную строку в качестве второго параметра (без учета регистра).', () => {
    it('поиск с строк с разными регистрами', () => {
        expect(findTitle(objArr, "JS")).to.eql([ { title: ' like JS!' },
        { title: 'Js - is the best!' } ]);     
    })
    it('поиск субстроки в словах', () => {
        expect(findTitle(objArr, "title")).to.eql([ { title: 'Some title1' },
        { title: 'Some title yes no' } ]);     
    })
}) 

describe('Принимая строку, ваша функция должна вернуть обьект, в котором ключи – символы строки, значение – количество повторений символов в строке', () => {
    it('случайная строка', () => {
        expect(countCharacters("aaa2225fgaq1")).to.eql({ '1': 1, '2': 3, '5': 1, a: 4, f: 1, g: 1, q: 1 }); 
        expect(countCharacters("sdgdfh34qtreh31463fw")).to.eql({ '1': 1,'3': 3,'4': 2, '6': 1,d: 2, e: 1,f: 2, g: 1, h: 2, q: 1, r: 1, s: 1, t: 1, w: 1 });     
    })
    it('пустая строка', () => {
        expect(countCharacters("")).to.eql({});     
    })   
}) 

describe('получить следуйщий палиндром', () => {
    it('передаём уже палиндром', () => {
        expect(getNextPalindrome(99)).to.equal(101); 
          
    })
    it('передаём случайное число', () => {
        expect(getNextPalindrome(100)).to.equal(101);     
    })
    it('число из одной цифры', () => {
        expect(getNextPalindrome(1)).to.equal(11);     
    })    
}) 




describe('Создать структуру данных Set, используя объект, создать методы add,remove, has', () => {

    it('getSet', () => {
        expect(getSet([1, 3, 3, 3, 2])).to.eql({ '1': 1,
        '2': 3,
        '3': 2,
        add: [Function],
        has: [Function],
        remove: [Function] });
    });   
    it('add значение уже есть в сете', () => {
        expect(getSet([1, 3, 3, 3, 2]).add(3)).to.equal(false);
    });
    it('add значение ещё нет в сете', () => {
        expect(getSet([1, 3, 3, 3, 2]).add(4)).to.equal();
    });
    it('has', () => {
        expect(getSet(([1, 3, 3, 3, 2 , 4])).has(4)).to.equal(true);
    });
    it('remove', () => {
        expect(getSet(([1, 3, 3, 3, 2 , 4])).remove(3)).to.equal(undefined);
    });
});
