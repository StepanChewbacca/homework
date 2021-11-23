const listOfPosts2 = [
  {
    id: 1,
    post: "some post1",
    title: "title1",
    author: "Ivanov",
    comments: [
      {
        id: 1.1,
        comment: "some comment1",
        title: "title1",
        author: "Rimus",
      },
      {
        id: 1.2,
        comment: "some comment2",
        title: "title2",
        author: "Uncle",
      },
    ],
  },
  {
    id: 2,
    post: "some post2",
    author: "Ivanov",
    comments: [
      {
        id: 2.1,
        comment: "some comment1",
        title: "title1",
        author: "Rimus",
      },
      {
        id: 2.2,
        comment: "some comment2",
        title: "title2",
        author: "Uncle",
      },
      {
        id: 2.3,
        comment: "some comment3",
        title: "title3",
        author: "Rimus",
      },
    ],
  },
  {
    id: 3,
    post: "some post3",
    title: "title3",
    author: "Rimus",
  },
  {
    id: 4,
    post: "some post4",
    title: "title4",
    author: "Uncle",
  },
];

//1
function tickets(person) {
  let index = 0;
  let money = 0;
  while (true) {
    if (index === person.length) {
      return true;
    }
    if (person[index] === 25) {
      money += person[index];
      index++;
    } else {
      if (person[index] > 25 && person[index] - 25 - money > 0) {
        return false;
      } else {
        money += person[index] - 25;
        index++;
      }
    }
  }
}

console.log(tickets([25, 25, 50]));

//2

function getSum(firstNum, secondNum) {
  const firstArr = firstNum.split("");
  const secondArr = secondNum.split("");
  const templateArr = [];
  let finalArr = [];
  if (firstArr.length > secondArr.length) {
    while (secondArr.length !== firstArr.length) {
      secondArr.unshift("0");
    }
  } else if (secondArr.length > firstArr.length) {
    while (firstArr.length !== secondArr.length) {
      firstArr.unshift("0");
    }
  }
  for (let i = 0; i < firstArr.length; i++) {
    if (+firstArr[i] + +secondArr[i] >= 10) {
      templateArr.push(String(+firstArr[i] + +secondArr[i])[0]);
      templateArr.push(String(+firstArr[i] + +secondArr[i])[1]);
    } else {
      templateArr.push("0");
      templateArr.push(String(+firstArr[i] + +secondArr[i]));
    }
  }
  templateArr.push("0");
  if (templateArr[0] !== "0") {
    finalArr.push(templateArr[0]);
    finalArr.push(templateArr[1]);
    templateArr[1] = "0";
  }
  for (let i = 1; i < templateArr.length; i++) {
    finalArr.push(String(+templateArr[i] + +templateArr[i + 1]));
  }
  finalArr = finalArr.filter((item, index) => index % 2 === 0);
  return String(finalArr.join(""));
}

const firstNumber = "11111111111111111111";
const secondNumber = "233333333333333333333333333333333";
console.log(getSum(firstNumber, secondNumber));

//3

function getQuantityPostsByAuthor(listOfPosts, author) {
  let posts = 0;
  let comments = 0;

  for (let data of listOfPosts) {
    if (data.author === author) {
      posts++;
    }
    if (Object.keys(data).includes("comments")) {
      data.comments.forEach((element) => {
        if (element.author === author) {
          comments++;
        }
      });
    }
  }

  return [posts, comments];
}

console.log(getQuantityPostsByAuthor(listOfPosts2, "Rimus"));

//4

const complexFunction = (arg1, arg2) => arg1 + arg2;

function cache() {
  const arr = [];
  return function () {
    if (arr.includes(arguments[0])) {
      return arr;
    }
    arr.push(arguments[0]);
    return arr;
  };
}

const cachedFunc = cache();
console.log(cachedFunc(complexFunction("foo", "bar")));
console.log(cachedFunc(complexFunction("foo", "bar")));
console.log(cachedFunc(complexFunction("foo", "baz")));
