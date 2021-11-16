describe('Получить строковое название дня недели по номеру дня', () => {
    it('Monday', () => {
        expect(Day(1)).to.equal("Monday");     
    })
    it('Tuesday',()=> {
        expect(Day(2)).to.equal("Tuesday"); 
    })
    it('Wednesday', () => {
        expect(Day(3)).to.equal("Wednesday");     
    })
    it('<1',()=>{
        expect(Day(0)).to.false; 
    })
    it('>7', () => {
        expect(Day(9)).to.false;     
    })
}) 

describe('Найти расстояние между двумя точками в двухмерном декартовом пространстве', () => {
    it('случайные значения', () => {
        expect(Distance(1,1,2,2)).to.equal(1.4142135623730951);     
    })
    it('одинаковые значения xy1 и xу2',()=> {
        expect(Distance(1,1,1,1)).to.equal(0); 
    })
    it('xy2 больше xy1', () => {
        expect(Distance(2,2,1,1)).to.equal(1.4142135623730951);     
    })

}) 

describe('Вводим число(0-999), получаем строку с прописью числа.', () => {
     it('число 100', () => {
         expect(toWordsConvert(100)).to.equal("one hundred ");     
     })
     it('число Х01-Х09 (х = от 1 до 9)', () => {
        expect(toWordsConvert(108)).to.equal("one hundred eight");     
    })
    it('число Х10-Х19 (х = от 1 до 9)', () => {
        expect(toWordsConvert(111)).to.equal("one hundred eleven");     
    })
    it('число XYZ (x= от 1 до 9, у = от 2 до 9, z= от 1 до 9', () => {
        expect(toWordsConvert(221)).to.equal("two hundred twenty one");     
    })
    it('число XY0 ( х = от 1 до 9, у = от 2 до 9', () => {
        expect(toWordsConvert(330)).to.equal("three hundred thirty ");     
    })
    it('число Х0 (х = от 2 до 9)', () => {
        expect(toWordsConvert(18)).to.equal("eighteen");     
    })
    it('число XY (x= от 1 до 9, у = от 2 до 9)', () => {
        expect(toWordsConvert(35)).to.equal("thirty five");     
    })
    it('число Х0 (х = от 2 до 9 ) ', () => {
        expect(toWordsConvert(30)).to.equal("thirty ");     
    })
    it('Х (х= от 1 до 9)', () => {
        expect(toWordsConvert(7)).to.equal("seven");     
    })
  


}) 


describe('Вводим строку, которая содержит число, написанное прописью (0-999)', () => {
    it('число с сотнями', () => {
        expect(doTextToNumber("one hundred twenty")).to.equal(120);     
    })
    it('число от 10 до 19',()=> {
        expect(doTextToNumber("twelve")).to.equal(12); 
    })
    it('число  20 - 90', () => {
        expect(doTextToNumber("forty")).to.equal(40);     
    })

}) 

