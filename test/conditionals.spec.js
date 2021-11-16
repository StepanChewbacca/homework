describe('Если а – четное посчитать а*б, иначе а+б', () => {
    it('первый аргумент четный', () => {
        expect(sumOrMulpiply(4, 2)).to.equal(8);     
    })
    it('первый аргумент не четный',()=>{
        expect(sumOrMulpiply(3, 2)).to.equal(5); 
    })
});

describe('пределить какой четверти принадлежит точка с координатами', () => {
    it('x > 0 && y > 0', () => {
        expect(getQuarter(4, 2)).to.equal("1 quarter");     
    })
    it('x < 0 && y > 0)',()=>{
        expect(getQuarter(-3, 2)).to.equal("2 quarter"); 
    })
    it('xx < 0 && y < 0', () => {
        expect(getQuarter(-44, -2)).to.equal("3 quarter");     
    })
    it('x > 0 && y < 0',()=>{
        expect(getQuarter(3, -2)).to.equal("4 quarter"); 
    })
    it('x or y  = 0', () => {
        expect(getQuarter(0, 1)).to.equal("0 quarter");     
    })
}) 
  
    describe(' Найти суммы только положительных из трех чисел', () => {
        it('a>0 b>0 c>0' ,() => {
            expect(summOfPlusNumbers(1, 2, 3)).to.equal(6);     
        })
        it('a>0 b>0 c<0 ',()=>{
            expect(summOfPlusNumbers(1, 2, -3)).to.equal(3); 
        })
        it('a>0 b<0 c<0 ', () => {
            expect(summOfPlusNumbers(1, -2, -2)).to.equal(1);     
        })
        it('a<0 b<0 c<0 ',()=>{
            expect(summOfPlusNumbers(-3, -2, -2)).to.equal(0); 
        })

    })     
     
    describe('Посчитать выражение (макс(а*б*с, а+б+с))+3', () => {
        it('a*b*c > a+b+c' ,() => {
            expect(max(2, 2, 2)).to.equal(8);     
        })
        it('a*b*c < a+b+c',()=>{
            expect(max(1, 1, 2)).to.equal(4); 
        })
    })
    
    describe('Написать программу определения оценки студента по его рейтингу, на основе следующих правил', () => {
        it('rating>=0 && rating <=19' ,() => {
            expect(markOfStudent(2)).to.equal("Your rating is F");     
        })
        it('rating>=19 && rating <=39',()=>{
            expect(markOfStudent(20)).to.equal("Your rating is E"); 
        })
        it('rating>39 && rating <=59' ,() => {
            expect(markOfStudent(40)).to.equal("Your rating is D");     
        })
        it('rating>59 && rating <=74',()=>{
            expect(markOfStudent(60)).to.equal("Your rating is C"); 
        })

        it('rating>74 && rating <=89' ,() => {
            expect(markOfStudent(75)).to.equal("Your rating is B");     
        })
        it('rating>=0 && rating <=19',()=>{
            expect(markOfStudent(90)).to.equal("Your rating is A"); 
        })

    })



