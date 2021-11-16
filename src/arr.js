// 1    Найти минимальный элемент массива

const arr = [1,2,3,4]
function getMinOfArr(arr) {
    let min = arr[0]
    for (let i=1; i<arr.length; i++) {
        if (arr[i]<min)
            min = arr[i]

    }
    return min
}
console.log(getMinOfArr(arr));

// 2   Найти максимальный элемент массива

function getMaxOfArr(arr) {
    let max = arr[0]
    for (let i=1; i<arr.length; i++) {
        if (arr[i]>max)
            max = arr[i]

    }
    return max
}
console.log(getMaxOfArr(arr));

// 3  Найти индекс минимального элемента массива

function getMinOfArr_index(arr) {
    let min = arr[0]
    let index = 0
    for (let i=1; i<arr.length; i++) {
        if (arr[i]<min) {
            min = arr[i]
            index = i
        }
    }
    return index
}
console.log(getMinOfArr_index(arr));

// 4   Найти индекс максимального элемента массива

function getMaxOfArr_index(arr) {
    let max = arr[0]
    let index = 0
    for (let i=1; i<arr.length; i++) {
        if (arr[i]>max) {
            max = arr[i]
            index = i
        }
    }
    return index
}
console.log(getMaxOfArr_index(arr));

// 5  Посчитать сумму элементов массива с нечетными индексами

function getSumOfArr_oddIndex(arr) {
    let sum = 0;
    for (let i=1; i<arr.length; i++) {
        if (i %2 !== 0)
            sum += arr[i]
    }
    return sum
}
console.log(getSumOfArr_oddIndex([1,1,1,1,1,1]));

// 6  Сделать реверс массива (массив в обратном направлении)


function doArrReverse(firstArr) {
    let secondArr = []
    for (let i=firstArr.length, j=0; i > 0;  i--, j++)
         secondArr[j] = firstArr[i-1]
    return secondArr
}

console.log(doArrReverse(arr))



// // 7  Посчитать количество нечетных элементов массива

function getCountOfArr_odd(arr) {
    let count= 0;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] %2 !== 0)
            count++
    }
    return count
}
console.log(getCountOfArr_odd(arr));

// 8  Поменять местами первую и вторую половину массива

function doReverseArr_firstSecondPart(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[Math.ceil(arr.length / 2) + i];
        arr[Math.ceil(arr.length / 2) + i] = temp;
    }
    return arr
}

console.log(doReverseArr_firstSecondPart(arr))

// //  9.1 Bubble


function doBubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
}

console.log(doBubbleSort(arr))

// // 9.2  Select


function doSelectSort (arr) {
    for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
        let index = i;
        for (let j = i + 1; j < l; j++) {
            if (arr[index] > arr[j]) {
                index = j;
            }
        }
        if (index !== i) {
            [arr[i], arr[index]] = [arr[index], arr[i]];
        }
    }
    return arr;
}

 console.log(doSelectSort(arr))



// // //9.3   Insert


function  doInsertSort (arr) {
    for (let i = 1, l = arr.length; i < l; i++) {
        let temp = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1] > temp) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = temp;
    }
    return arr;
}

console.log(doInsertSort(arr))



