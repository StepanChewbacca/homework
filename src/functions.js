// //1   Получить строковое название дня недели по номеру дня.
//
// function Day(index){
//     let arr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
//     if (index < 1 || index > 7)
//     return false
//     else
//         return arr[index-1]
// }
// console.log(Day(7))
//
// //2   Найти расстояние между двумя точками в двухмерном декартовом пространстве.
//
// const Distance = (x1, y1, x2, y2 ) => {
//
//     return Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2)) ;
// }
// console.log(Distance(1,1,2,2))

//3   Вводим число(0-999), получаем строку с прописью числа.
// const ZeroToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
// const TenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
// const TwentyToNinety = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
// function toWordsConvert(string) {
//     string = string.toString();
//     string = string.replace(/[\, ]/g, '');
//     let newString = ""
//
//      if (string === isNaN(string))
//          return 'not a number ';
//
//     switch (true) {
//
//         case string==100 && string.length === 3:
//                 newString += "one hundred "
//                 break
//
//         case (string>=100 && string<=109 && string.length === 3):
//                 newString += "one hundred "
//                 newString += ZeroToNine[string[2]]
//                 break
//
//         case string[1] == 1 && string.length === 3:
//                 newString += ZeroToNine[string[0]] + " hundred "
//                 newString += TenToNineteen[string[2]]
//                 break
//
//         case string[2]!=0 && string.length === 3:
//                 newString +=  ZeroToNine[string[0]] + " hundred "
//                 newString += TwentyToNinety[string[1]-2] + " "
//                 newString += ZeroToNine[string[2]]
//                 break
//
//         case (string[2]==0 && string[1] != 1 && string.length === 3 ):
//                 newString +=  ZeroToNine[string[0]] + " hundred "
//                 newString += TwentyToNinety[string[1]-2] + " "
//                 break
//
//         case string[0] == 1 && string.length === 2:
//                 newString += TenToNineteen[string[1]]
//                 break
//
//         case string[1]!=0 && string.length === 2:
//                 newString += TwentyToNinety[string[0]-2] + " "
//                 newString += ZeroToNine[string[1]]
//                 break;
//
//         case (string[1]==0 && string[0] != 1 && string.length === 2 ):
//                 newString += TwentyToNinety[string[0]-2] + " "
//                 break
//         case string.length === 1:
//                 newString += ZeroToNine[string[0]]
//     }
//
//     return newString
//
// }
// console.log(toWordsConvert(22))

//4  Вводим строку, которая содержит число, написанное прописью (0-999). Получить само
// число
//
// const numbers = {
//     'zero': 0,
//     'one': 1,
//     'two': 2,
//     'three': 3,
//     'four': 4,
//     'five': 5,
//     'six': 6,
//     'seven': 7,
//     'eight': 8,
//     'nine': 9,
//     'ten': 10,
//     'eleven': 11,
//     'twelve': 12,
//     'thirteen': 13,
//     'fourteen': 14,
//     'fifteen': 15,
//     'sixteen': 16,
//     'seventeen': 17,
//     'eighteen': 18,
//     'nineteen': 19,
//     'twenty': 20,
//     'thirty': 30,
//     'forty': 40,
//     'fifty': 50,
//     'sixty': 60,
//     'seventy': 70,
//     'eighty': 80,
//     'ninety': 90
// };
//
// function doTextToNumber(stringNumber) {
//     stringNumber = stringNumber.toString().split(/[\s-]+/);
//     let digit = 0;
//     for (let i=0; i < stringNumber.length; i++) {
//         if (numbers[stringNumber[i]] != null) {
//             digit = digit + numbers[stringNumber[i]];
//
//         } else if (stringNumber[i] == "hundred") {
//             digit = digit * 100;
//         }
//     }
//     return digit;
// }
//
// console.log(doTextToNumber("one hundred twenty"));




















