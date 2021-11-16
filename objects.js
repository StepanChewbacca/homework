/*1.Составьте алгоритм, который считает, сколько времени вам нужно на
приготовление яиц.
    Правила:
-Яйца варить 5 минут
-Вместительность емкости не более 5 яиц одновременно*/

function getCookingTime(eggsAmount) {
    return Number.isInteger(eggsAmount) ? Math.ceil(eggsAmount / 5) * 5 : false;
  }
  
  console.log("-> getCookingTime(123)", getCookingTime(123));
  
  /*2.Получая массив чисел. Все они либо нечетные, либо четные, кроме
  одного. Тебе нужно его найти.*/
  
  function getNumber(array) {
    let newArray = array.filter((array) => array % 2 === 0);
    if (newArray.length === 1) {
      return newArray[0];
    } else {
      return array.find((array) => array % 2 !== 0);
    }
  }
  
  console.log(
    "-> getNumber([2, 43, 2, 2, 2, 2]);",
    getNumber([2, 43, 2, 2, 2, 2])
  );
  
  /*3. Принимая массив объектов и случайную строку. У объектов может
  быть ключ: «title» с разными значениями. Создайте алгоритм, который
  фильтрует массив, заданный как первый параметр, и возвращает
  массив объектов, которые содержат в своих заголовках заданную строку
  в качестве второго параметра (без учета регистра).*/
  
  let objArr = [
    {
      title: "Some title1",
    },
    {
      title: "Some title yes no",
    },
    {
      title: " like JS!",
    },
    {
      user: "This obj doesn’t have key title js",
    },
    {
      title: "Js - is the best!",
    },
  ];
  
  function findTitle(objArr, subString) {
    let newArr = [];
    for (let i = 0; i < objArr.length; i++) {
      const entries = Object.entries(objArr[i]);
      for (const [key, val] of entries) {
        if (
          val.toLowerCase().includes(subString.toLowerCase()) &&
          key === "title"
        ) {
          newArr.push(objArr[i]);
        }
      }
    }
    return newArr;
  }
  
  console.log("-> findTitle(arr,'JS'", findTitle(objArr, "JS"));
  
  /*4.1 Принимая строку, ваша функция должна вернуть обьект, в котором
  ключи – символы строки, значение – количество повторений символов в
  строке*/
  
  // function countCharacters(string) {
  //     let obj = {}
  //     string = string.replace(/\s+/g, '').toLowerCase().split('').sort();
  //     let count = 0
  //     for (let i = 0; i < string.length; i++) {
  //         count++
  //         if (string[i] === string[i + 1]) {} else if (string[i] !== string[i + 1]) {
  //             obj[string[i]] = count;
  //             count = 0
  //         }
  //     }
  //     return obj
  // }
  
  // console.log("-> countCharacters(asdgsdcvas12rfdbvwdf23tbcdfabvfdbgaDG"),
  //   countCharacters("asdgsdcvas12rfdbvwdf23tbcdfabvfdbgaDG");
  
  //4.2
  
  function countCharacters(string) {
    const result = {};
    const strToArr = string.replace(/\s+/g, "").toLowerCase().split("").sort();
    let mySet = new Set(strToArr);
    mySet.forEach((item) => {
      result[item] = strToArr.filter((element) => element === item).length;
    });
    return result;
  }
  
  console.log(
    "-> countCharacters(asdgsdcvas12rfdbvwdf23tbcdfabvfdbgaDG",
    countCharacters("asdgsdcvas12rfdbvwdf23tbcdfabvfdbgaDG")
  );
  
  /*5. Принимая число, ваша функция должна найти следующий
  положительный палиндром большего размера.
      Палиндром - это слово, фраза, число или другая последовательность
  символов, которая читается так же, как вперед и назад, например,
  «мадам».*/
  
  function getNextPalindrome(number) {
    number++;
    while (true) {
      if (
        number.toString().split("").reverse().join("") == number &&
        number > 10
      ) {
        return number;
      } else {
        number++;
      }
    }
  }
  
  console.log("-> getNextPalindrome(99);", getNextPalindrome(99));
  
  /*6. Создать структуру данных Set, используя объект, создать методы add,
      remove, has*/
  
  
      function getSet(array) {
        let setName = [];
      
        array.forEach((item) => {
          !setName.includes(item) ? setName.push(item) : true;
        });
        setName = setName.reduce((acc, item, index) => {
          acc[index + 1] = item;
          return acc;
        }, {});
      
        setName.add = function (value) {
          if (!Object.values(setName).includes(value)) {
            setName[value] = value;
          } else {
            return false
          }
        };
      
        setName.has = function (value) {
          return Object.values(setName).includes(value);
        };
      
        setName.remove = function (value) {
          if (Object.values(setName).includes(value)) {
            delete setName[value];
          } else {
            return false
          }
        };
        return setName;
      }
      
   
      newSet.add(222);
      console.log("-> newSet", newSet);
      console.log("-> newSet.has(222)", newSet.has(222));
      console.log("-> newSet.remove(222)", newSet.remove(222));
      console.log("-> newSet", newSet);

      newSet.remove