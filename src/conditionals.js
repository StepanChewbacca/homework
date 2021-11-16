// // 1 Если а – четное посчитать а*б, иначе а+б

function sumOrMulpiply (a,b) {
return a%2===0 ? a*b : a+b
}
console.log(sumOrMulpiply(4,4)); 

//2  Определить какой четверти принадлежит точка с координатами (х,у)

function getQuarter(x,y) {
    switch ( !isNaN(x) && !isNaN(y) )
    {
        case (x > 0 && y > 0):
            return "1 quarter"
    
        case (x < 0 && y > 0):
            return "2 quarter";
            
        case (x < 0 && y < 0):
            return "3 quarter";
            
    
        case (x > 0 && y < 0):
            return "4 quarter";
            
        default:
            return "0 quarter";
            
    }
}
console.log(getQuarter(-5,2)); 



//
// 3   Найти суммы только положительных из трех чисел


function summOfPlusNumbers (a,b,c) {
    let result = 0
if (a>0)
    result = result + a
if (b>0)
    result = result + b
if (c>0)
    result = result + c
return result
}
summOfPlusNumbers(1,2,-3)


//4  Посчитать выражение (макс(а*б*с, а+б+с))+3
function max(a,b,c) {
    return a*b*c > a+b+c ? a*b*c : a+b+c
}

let  result = max(3,2,2) + 3
console.log(result)

// 5  Написать программу определения оценки студента по его рейтингу, на основе
// следующих правил
//
function markOfStudent (rating) {
    rating = Math.round(rating)
    
    switch (!isNaN(rating))
    {
        case (rating>=0 && rating <=19):
            return ("Your rating is F");
        case (rating>=19 && rating <=39):
            return ("Your rating is E");
        case (rating>39 && rating <=59):
            return("Your rating is D");
        case (rating>59 && rating <=74):
            return ("Your rating is C");
        case (rating>74 && rating <=89):
            return ("Your rating is B");   
        case (rating>89 && rating <=100):
            return ("Your rating is A");
        default:
            return ("Rating can`t be a negative number")
    
    }
    
}
markOfStudent(90)


