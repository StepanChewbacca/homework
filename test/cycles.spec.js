describe('Найти сумму четных чисел и их количество в диапазоне от 1 до 99', () => {
    it('сумма чисел', () => {
        expect(summAndCounts()).to.equal(49,2450);     
    })

});

describe('Определить простое ли число', () => {
    it('негативное число', () => {
        expect(isPrime (-1)).to.equal("Number is negative or number = 1");     
    })
    it('простое число', () => {
        expect(isPrime (7)).to.equal("Number is prime");     
    })
    it('не простое число', () => {
        expect(isPrime (4)).to.equal("Number is not prime");     
    })

});


describe('найти корень (последовательный подбор)', () => {
    it('корень с 1', () => {
        expect(getSqrt(2)).to.equal(1);     
    })
    it('корень с 25', () => {
        expect(getSqrt(25)).to.equal(5);     
    })
    it('корень с 26', () => {
        expect(getSqrt(26)).to.equal(5);     
    })

});


describe('найти корень (метод бинарного поиска)', () => {
    it('корень с 1', () => {
        expect(getSqrtBin(2)).to.equal(1);     
    })
    it('корень с 25', () => {
        expect(getSqrtBin(25)).to.equal(5);     
    })
    it('корень с 26', () => {
        expect(getSqrtBin(26)).to.equal(5);     
    })

});


describe('Вычислить факториал числа', () => {
    it(' факториал с 1', () => {
        expect(getFactorial(1)).to.equal(1);     
    })
    it(' факториал с 5', () => {
        expect(getFactorial(5)).to.equal(120);     
    })
    it(' факториал с 6', () => {
        expect(getFactorial(6)).to.equal(720);     
    })

});


describe('Посчитать сумму цифр заданного числа', () => {
    it(' сумму цифр число с одной цифрой', () => {
        expect(getSumOfNumbers (2)).to.equal(2);     
    })
    it(' сумму цифр число с двумя цифрами', () => {
        expect(getSumOfNumbers (33)).to.equal(6);     
    })
    it('сумму цифр число с тремя цифрами', () => {
        expect(getSumOfNumbers (333)).to.equal(9);     
    })
    it(' сумма цифр отрицательного числа', () => {
        expect(getSumOfNumbers (-333)).to.equal(9);     
    })

});

describe('Вывести число, которое является зеркальным отображением последовательностицифр заданного числа,', () => {
    it(' реверс числа с одной цифрой', () => {
        expect(doReverseOfNumber(2)).to.equal(2);     
    })
    it(' реверс числа с двумя цифрами', () => {
        expect(doReverseOfNumber(32)).to.equal(23);     
    })
    it('реверс числа с тремя цифрами', () => {
        expect(doReverseOfNumber (123)).to.equal(321);     
    })

});