// // 1 Если а – четное посчитать а*б, иначе а+б
// let a = 2
// let b = 3
// let c
//
// if (a%2 == 0)
//     c = a*b
// else c= a+b
//
// console.log(c)


//2  Определить какой четверти принадлежит точка с координатами (х,у)
let x = -2
let y =-2

switch ( !isNaN(x) && !isNaN(y) )
{
    case (x > 0 && y > 0):
        console.log("1 quarter");
        break

    case (x < 0 && y > 0):
        console.log("2 quarter");
        break

    case (x < 0 && y < 0):
        console.log("3 quarter");
        break

    case (x > 0 && y < 0):
        console.log("4 quarter");
        break

    default:
        console.log("0 quarter");
        break

}
//
// 3   Найти суммы только положительных из трех чисел
// let a = -2
// let b = 3
// let c = 2
// let result = 0
//
// if (a>0)
//     result = result + a
// if (b>0)
//     result = result + b
// if (c>0)
//     result = result + c
//
// console.log(result)
//

//4  Посчитать выражение (макс(а*б*с, а+б+с))+3
// let a = 3
// let b = 2
// let c = 2
// let result
//
// function max(a,b,c) {
//     return a*b*c > a+b+c ? a*b*c : a+b+c
// }
// result = max(a,b,c) + 3
// console.log(result)

// 5  Написать программу определения оценки студента по его рейтингу, на основе
// следующих правил
//
// let rating = 25
// rating = Math.round(rating)
//
// switch (!isNaN(rating))
// {
//     case (rating>=0 && rating <=19):
//         console.log("Your rating is F");
//         break
//     case (rating>19 && rating <=39):
//         console.log("Your rating is E");
//         break
//
//     case (rating>39 && rating <=59):
//         console.log("Your rating is D");
//         break
//     case (rating>59 && rating <=74):
//         console.log("Your rating is C");
//         break
//
//     case (rating>74 && rating <=89):
//         console.log("Your rating is B");
//         break
//
//     case (rating>89 && rating <=100):
//         console.log("Your rating is A");
//         break
//
//     default:
//         console.log("Rating can`t be a negative number")
//
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
