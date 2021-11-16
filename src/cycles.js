//1  Найти сумму четных чисел и их количество в диапазоне от 1 до 99

function summAndCounts() {
let result = 0
let result_count = 0

    for (let i = 1; i < 100; i++) {

        if (i%2 === 0) {
            result = result + i;
            result_count++
    
        }
    }
    return result, result_count
   
}

summAndCounts()

//2  Проверить простое ли число? (число называется простым, если оно делится только
// само на себя и на 1)

function isPrime (num) {

    let prime = true
    
    if (num < 1 ){
        return ("Number is negative or number = 1")
    } else {
      for (let i = 2; i < num; i++) {
          if (num % i === 0) {
              prime = false
              break
          }
      }
      if (prime === true)
      return ("Number is prime")
        else
        return ("Number is not prime")
    }    
}

isPrime(7)

//3.1   найти корень (последовательный подбор)

function getSqrt(number) {
    let root = 1
    while (root * root <=number)
        root++
   
   return (root-1)
}

console.log("🚀 ~ file: cycles.js ~ line 56 ~ getSqrt(2)", getSqrt(2))
console.log("🚀 ~ file: cycles.js ~ line 58 ~ getSqrt(25)", getSqrt(25))
console.log("🚀 ~ file: cycles.js ~ line 60 ~ getSqrt(26)", getSqrt(26))


//3.2  найти корень (метод бинарного поиска)
function getSqrtBin (number)

{

    let min = 1
    let max = number
    let prev = 0

    for (; ;) {
        let mid = (min + max) / 2;
        if (prev == mid)
            return Math.floor(mid);
        let q = mid * mid;
        if (number == q)
            return Math.floor(mid);
        if (number < q)
            max = mid;
        else
            min = mid;
        prev = mid;
    }
}

console.log(Math.floor(getSqrtBin(37)));

//4  Вычислить факториал числа

function getFactorial(num) {

    let result = num;
    if(num ===0 || num===1){

        return 1;
    }

    while(num > 1){
        num--;
        result =num*result;
    }
    return result;
}

console.log(getFactorial(7));

//5  Посчитать сумму цифр заданного числа

function getSumOfNumbers (number) {
    let figures = "" + Math.abs(number)
    let sum = 0

    for (let i = 0; i < figures.length; i++)
        sum += +figures[i]

    return sum
}

console.log(getSumOfNumbers(765));

// 6  Вывести число, которое является зеркальным отображением последовательности
// цифр заданного числа,
function doReverseOfNumber (number) {
    let figures = "" + number
    let sum = ""
    for (let i = figures.length-1; i > -1 ; i--) {
        sum += figures[i]
    }
    return Number(sum)

}
console.log(doReverseOfNumber(875));




