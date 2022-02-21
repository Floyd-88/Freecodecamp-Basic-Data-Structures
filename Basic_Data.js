/*We have defined a function, forecast, that takes an array as an argument. Modify the function using slice() to extract 
information from the argument array and return a new array that contains the string elements warm and sunny.*/

/*function forecast(arr) {
  // Only change code below this line
arr = arr.slice(2, 4)
  return arr;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));*/



/*Мы определили функцию, copyMachineкоторая принимает arr(массив) и num(число) в качестве аргументов. Предполагается, что 
функция возвращает новый массив, состоящий из numкопий файлов arr. Мы сделали большую часть работы за вас, но она пока не
 работает должным образом. Измените функцию, используя синтаксис расширения, чтобы она работала правильно (подсказка: здесь может
  пригодиться другой метод, который мы уже рассмотрели!).*/

 /* function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
newArr.push([...arr])
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));*/


/*Мы определили функцию spreadOut, которая возвращает переменную sentence. Измените функцию с помощью оператора распространения 
так, чтобы она возвращала массив ['learning', 'to', 'code', 'is', 'fun'].*/

/*function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence; // Change this line
  sentence = ['learning', ...fragment, 'is', 'fun'] 
  return sentence;
}

console.log(spreadOut());*/


/*indexOf()может быть невероятно полезным для быстрой проверки наличия элемента в массиве. Мы определили функцию quickCheck,
 которая принимает массив и элемент в качестве аргументов. Измените функцию с помощью indexOf()так, чтобы она возвращала 
 trueзначение, если переданный элемент существует в массиве, и falseесли его нет.*/

/* function quickCheck(arr, elem) {
  // Only change code below this line
return (arr.indexOf(elem) >=0) ? true : false
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));*/


/*Мы определили функцию filteredArray, которая принимает arrвложенный массив и elemв качестве аргументов и возвращает новый
 массив. elemпредставляет элемент, который может присутствовать или отсутствовать в одном или нескольких массивах, вложенных
  в arr. Измените функцию, используя forцикл, чтобы она возвращала отфильтрованную версию переданного массива таким образом,
   чтобы любой массив, вложенный в arrсодержащий elem, был удален.*/

/*   function filteredArray(arr, elem) {
    let newArr = [];
  // Only change code below this line
  for(let i=0; i < arr.length; i++) {
      if(arr[i].indexOf(elem) === -1) {
          newArr.push(arr[i])
      }
   }

  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 7, 9]], 3));*/


/*Создан foodsобъект с тремя записями. Используя выбранный вами синтаксис, добавьте к нему еще три записи: bananasсо значением 13,
 grapesсо значением 35и strawberriesсо значением 27.*/

 /*let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;
// Only change code above this line

console.log(foods);*/


/*Завершите написание функции, чтобы она возвращала true, если переданный ей объект содержит все четыре имени, Alan, Jeff, 
Sarahи в Ryanпротивном случае возвращала false.*/

/*let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Rya: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Only change code below this line
return userObj.hasOwnProperty("Alan") && userObj.hasOwnProperty("Jeff") && 
userObj.hasOwnProperty("Sarah") && userObj.hasOwnProperty("Ryan")
  // Only change code above this line
}

console.log(isEveryoneHere(users));*/




/*Мы определили функцию, countOnlineкоторая принимает один аргумент (объект пользователя). Используйте оператор for...in в этой
 функции, чтобы пройти по объекту пользователей, переданному в функцию, и вернуть количество пользователей, чье onlineсвойство
  установлено на true.*/

/*  const users = {
  Alan: {
    online: true
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
function countOnline(usersObj) {
  // Only change code below this line
  let result = 0;
for(let user in usersObj) {
    if(usersObj[user].online === true) {
      result += 1
    }
  }
return result
  // Only change code above this line
}

console.log(countOnline(users));*/


/*Взгляните на объект, который мы предоставили в редакторе кода. Объект userсодержит три ключа. dataКлюч содержит пять ключей, 
один из которых содержит массив friends. Отсюда видно, насколько гибкими являются объекты как структуры данных. Мы начали писать 
функцию addFriend. Завершите его написание, чтобы он принимал userобъект и добавлял имя friendаргумента к хранящемуся в нем 
массиву user.data.friendsи возвращал этот массив.*/

/*let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line
userObj.data.friends.push(friend)
return userObj.data.friends
  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));*/