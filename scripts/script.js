let temperature = 25;
     if (temperature > 20) {
        console.log("На улице тепло");
     }
      let battery = 5;
      if (battery < 10) {
        console.log("Нужно зарядить телефон");
      } else {
        console.log("Батарея в порядке");
      }
      let isWeekend = false;

      if (isWeekend === true){
        console.log("Можно поспать подольше");
      } else {
        console.log("Надо в школу");
      }

      let grade = 8;

      if (grade>=9){
        console.log("Отлично");
      } else if (grade>=7){
        console.log("Хорошо");
      } else if (grade>=5){
        console.log("Удовлетворительность");
    } else {
        console.log("Нужно подтянуться");
    }


  
let weatherCondition = "солнечно"; 
let isSunny = true;

if (weatherCondition === "солнечно") {
  console.log("Сегодня солнечно, можно выйти на улицу.");
} else if (weatherCondition === "дождь") {
  console.log("Идет дождь, возьми зонт.");
} else if (weatherCondition === "снег") {
  console.log("На улице снег, одевайся тепло.");
} else if (weatherCondition === "ветер") {
  console.log("На улице сильный ветер, будь осторожен.");
}

if (temperature > 20) {
  console.log("На улице тепло.");
} else if (temperature >= 0) {
  console.log("На улице прохладно.");
} else {
  console.log("На улице холодно.");
}

if (isSunny) {
  console.log("Погода солнечная, светит яркое солнце.");
} else {
  console.log("Погода пасмурная или облачная.");
}

let day = 3;

switch (day) {
    case 1:
        console.log("понедельник");
        break;
        case 2:
            console.log("Вторник");
            break;
            case 3:
                console.log("Среда");
                break;
               defauit:
               console.log("Другой день");
}

let role = 'admin';

switch (role) {
    case 'admin':
        console.log("Администратор");
        break;
    case 'editor':
        console.log("Редактор");
        break;
    case 'guest':
        console.log("Гость");
        break;
    default:
        console.log("Неизвестная роль");
}

let isOnline = true;
let status = isOnline ? "В сети" : "Не в сети";
console.log(status);

let isReady = true; 

console.log(isReady ? "Заказ готов и можно забирать" : "Заказ не готов к получению");

let i = 5;
while(i<3) {
  console.log("Привет");
}

let nummer;

do {
  number = prompt("Введите число:");
} while (num != 5);

console.log("Правильно! ");
let  fruits = ["Яблоко","груша","банан"];

for (let fruit of fruits) {
  console.log(fruit);
}

let person = {name: "Анна", age: 15, city: "Минск"};

for (let key in person){
  console.log(key + "+ person[key");
}

for (let i = 1; i <= 10; i++) {
  if (i===5) break;
  console.log(i);
}

let sum = 0; 
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log(sum); 

for (let i = 1; i <= 10; i++) {
  console.log(`4 x ${i} = ${4 * i}`);
}

const word = "банан"; 
const countA = (word.match(/а/g) || []).length;
console.log(`Количество букв "а": ${countA}`);

function User(name) {
  this.name = name;
}

new User("Anna");

// const User = (name) => {
//   this.name = name;
// }

new User("Anna")

const squaree = x => x * x;

function makeCounter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

let counterr = makeCounter();

counterr(); 
counterr(); 

function makeCounter() {
  let name = "Nikolay";

  return function() {
    alert(name);
  };
}

let name = "Irina";
// create a function
let work = makeCounter();
work();

function printMyName() {
  const myName = "Вячеслав"; 
  console.log(myName);
}

const toys = [
  {
    name: 'Мяч',
    color: 'красный',
    year: 2020,
    count: 3,
    shape: 'круглая'
  },
  {
    name: 'Кукла',
    color: 'розовая',
    year: 2018,
    count: 2,
    shape: 'человечек'
  },
  {
    name: 'Пазл',
    color: 'мультицвет',
    year: 2021,
    count: 1,
    shape: 'прямоугольная'
  }
];

//1
function greet(name) {
  console.log(`Привет, ${name}!`);
}

//2

const square = (num) => num * num;

//3

const hello = () => "hi";

//4

function doSomething(callback) {
  callback();
}
doSomething(() => console.log("Что-то делается"));

//5

const arr = ["aaa", "b", "cc"];
arr.sort((a, b) => a.length - b.length);
console.log(arr);

//6

function lastLetter(word) {
  return word.slice(-1);
}


//7

const user = {
  name: "Alex",
  showName() {
    console.log(this.name);
  }
};

//8

const User = {
  name: "Alex",
  showName: () => {
    console.log(this.name);
  }
};

//9

function makeCounter() {
  let count = 0;
  return () => {
    count++;
    return count;
  };
}


const counter = makeCounter();
console.log(counter()); 
console.log(counter()); 

//10

function createPiggyBank() {
  let amount = 0;
  return {
    addMoney(sum) {
      amount += sum;
    },
    getAmount() {
      return amount;
    }
  };
}

const piggyBank = createPiggyBank();
piggyBank.addMoney(100);
console.log(piggyBank.getAmount()); 

//Условные конструкции и приведение типов в JavaScript

//1

let age = prompt("Введите ваш возраст:");
age = Number(age);
if (age >= 18) {
  console.log("Доступ разрешён");
} else {
  console.log("Доступ запрещён");
}

//2

let a = 10;
let b = 7;

if (a > b) {
  console.log("a больше b");
} else if (a < b) {
  console.log("b больше a");
} else {
  console.log("Они равны");
}

//3

let t = prompt("Введите температуру:");
t = Number(t);
if (t < 0) {
  console.log("Мороз");
} else if (t <= 20) {
  console.log("Прохладно");
} else {
  console.log("Тепло");
}

//4

let t = prompt("Введите температуру:");
t = Number(t);
if (t < 0) {
  console.log("Мороз");
} else if (t <= 20) {
  console.log("Прохладно");
} else {
  console.log("Тепло");
}

//5

let num = prompt("Введите число:");
num = Number(num);
if (num % 2 === 0) {
  console.log("Чётное");
} else {
  console.log("Нечётное");
}

//6

const PASSWORD = "javascript";
let inputPassword = prompt("Введите пароль:");
if (inputPassword === PASSWORD) {
  console.log("Добро пожаловать!");
} else {
  console.log("Неверный пароль!");
}

//7

let score = Number(prompt("Введите результат (0-100):"));
if (score >= 90) {
  console.log("Отлично");
} else if (score >= 75) {
  console.log("Хорошо");
} else if (score >= 50) {
  console.log("Удовлетворительно");
} else {
  console.log("Нужно подтянуться");
}

//8

let hour = Number(prompt("Введите час (0-23):"));
if (hour >= 0 && hour <= 5) {
  console.log("Ночь");
} else if (hour <= 11) {
  console.log("Утро");
} else if (hour <= 17) {
  console.log("День");
} else {
  console.log("Вечер");
}

//9

let hasTicket = true;
let age = 15;
if (age >= 16) {
  if (hasTicket) {
    console.log("Можно войти");
  } else {
    console.log("Купи билет");
  }
} else {
  console.log("Вход только с родителями");

  //10\

  let a = 10;
let b = 5;
let operator = "+";

if (operator === "+") {
  console.log(a + b);
} else if (operator === "-") {
  console.log(a - b);
} else if (operator === "*") {
  console.log(a * b);
} else if (operator === "/") {
  if (b !== 0) {
    console.log(a / b);
  } else {
    console.log("Деление на ноль невозможно");
  }
} else {
  console.log("Неизвестный оператор");
}

//11

let day = Number(prompt("Введите номер дня (1-7):"));
switch (day) {
  case 1:
    console.log("Понедельник");
    break;
  case 2:
    console.log("Вторник");
    break;
  case 3:
    console.log("Среда");
    break;
  case 4:
    console.log("Четверг");
    break;
  case 5:
    console.log("Пятница");
    break;
  case 6:
    console.log("Суббота");
    break;
  case 7:
    console.log("Воскресенье");
    break;
  default:
    console.log("Некорректный номер дня");
}

//12

let month = Number(prompt("Введите номер месяца (1-12):"));
switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Зима");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Весна");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Лето");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Осень");
    break;
  default:
    console.log("Некорректный номер месяца");
}

//13

let drink = "tea";
switch (drink) {
  case "tea":
    console.log("Вы выбрали чай");
    break;
  case "coffee":
    console.log("Вы выбрали кофе");
    break;
  case "juice":
    console.log("Вы выбрали сок");
    break;
  default:
    console.log("Такого напитка нет");
}

//14

let isLoggedIn = true;
let role = "user";

if (!isLoggedIn) {
  console.log("Войдите в систему");
} else {
  if (role === "admin") {
    console.log("Добро пожаловать, админ");
  } else {
    console.log("Здравствуйте, пользователь");
  }
}

//15

let total = 350;
let isVIP = true;
let discount;

if (isVIP) {
  discount = 0.20;
} else if (total >= 500) {
  discount = 0.15;
} else if (total >= 200) {
  discount = 0.10;
} else {
  discount = 0;
}

let finalPrice = total - total * discount;
console.log(`Итоговая цена: ${finalPrice}`);

//16

let input = prompt("Введите число:");
let num = Number(input);
if (isNaN(num)) {
  console.log("Это не число!");
} else {
  if (num > 0) {
    console.log("Положительное");
  } else if (num < 0) {
    console.log("Отрицательное");
  } else {
    console.log("Ноль");
  }
}

//17

console.log("5" == 5);   
console.log("5" === 5);  
console.log("5" + 5);    
console.log("5" - 5);

//18

let age = prompt("Введите возраст:");
age = Number(age);
if (age < 18) {
  console.log("Доступ запрещён");
} else {
  console.log("Проходи");
}

//19

let name = prompt("Введите имя:");
if (!name) {
  console.log("Имя не введено");
} else {
  console.log(`Привет, ${name}!`);
}

//20

let isOnline = "false";

if (isOnline) {
  console.log("Пользователь в сети");
} else {
  console.log("Пользователь не в сети");
}

//21

console.log("10" > 5);    
console.log("10" < "2");   
console.log("abc" > 5);    
console.log(true == 1);    
console.log(false == 0);   
//дз 24.11.2025
let toys = [
  { id: 1, name: "Красный шар", type: "ball_red", color: "red", size: "m" },
  { id: 2, name: "Золотой колокольчик", type: "bell_gold", color: "gold", size: "s" },
  { id: 3, name: "Зеленая игрушка", type: "toy_green", color: "green", size: "l" },
  { id: 4, name: "Синяя снежинка", type: "snowflake_blue", color: "blue", size: "m" }
];


let trees = [
  { id: 1, type: "green", size: "big", description: "Классическая зелёная ёлка" },
  { id: 2, type: "snowy", size: "medium", description: "Ёлка в снегу" },
  { id: 3, type: "gold", size: "small", description: "Золотая ёлка" }
];


let garlands = [
  { id: 1, type: "white", length: "long", mode: "blink" },
  { id: 2, type: "multi", length: "short", mode: "static" },
  { id: 3, type: "blue", length: "long", mode: "blink" }
];


console.log("Список игрушек:");
for (let toy of toys) {
  console.log(`${toy.name} — ${toy.type}`);
}


let currentTree = {
  type: "",
  garland: "",
  toys: [],

  setTree(newType) {
    this.type = newType;
  },

  setGarland(newGarland) {
    this.garland = newGarland;
  },

  addToy(toy) {
    this.toys.push(toy);
  },

  showInfo() {
    console.log("=== Информация о ёлке ===");
    console.log("Тип ёлки:", this.type);
    console.log("Гирлянда:", this.garland);
    console.log("Игрушки на ёлке:");
    this.toys.forEach((toy, index) => {
      console.log(`${index + 1}. ${toy.name} (${toy.type})`);
    });
    console.log(`Всего игрушек: ${this.toys.length}`);
  },

  removeToy(id) {
    this.toys = this.toys.filter(toy => toy.id !== id);
  }
};


currentTree.setTree(trees[0].type);

currentTree.setGarland(garlands[0].type);

currentTree.addToy(toys[0]);
currentTree.addToy(toys[1]);

currentTree.addToy(toys[2]);

currentTree.showInfo();


console.log("Игрушки красного цвета:");
let redToys = toys.filter(toy => toy.color === "red");
redToys.forEach(toy => console.log(`${toy.name} — ${toy.type}`));


let toyWithId2 = toys.find(toy => toy.id === 2);
console.log("Игрушка с id=2:", toyWithId2);


let treeTypes = new Set(trees.map(tree => tree.type));
console.log("Все типы ёлок:", Array.from(treeTypes));



currentTree.removeToy(1);
console.log("После удаления игрушки с id=1:");
currentTree.showInfo();


console.log("Количество игрушек на ёлке:", currentTree.toys.length);
const title = document.querySelettor("h1");

const button = document.querySelettorALL(".btn");

const apples = document.querySelettorALL(".apples");

element.classList.add("active");

element.classList.remove("error"); // Удалять класс

element.classList.toggle("open");

element.classList.toggle("on");

 

const img = document.createElement("img");
img.scr = garland.image;
img.classList.add("garland-on-tree");

img.style.left = (x - 140) + "px";
img.style.top = (y - 29) + "px";

img.style.animationDelay = (Math.random() *1.6) + "s";

treeArea.appendChild(img);

    let treeData = {
      type: currentTree.type,
      garland: currentTree.garland,
      toys: currentTree.toys
    };

    function getResultCurrentTreeData() {
      const resultCurrentTreeData = {
        type: currentTree.type,
        garland: currentTree.garland,
        toys: currentTree.toys.map(toy =>){
          id : toy.id,
          x: toy.id,
          y: toy.x,
          image: toy.image
        }))
      };
      return resultCurrentTreeData;
    }

    <div class="buttons">
      <a class="buttons" id="save-tree-btn">Сохранить</a>
      <a class="buttons" id="reset-tree-btn">Сбросить</a>
    </div>

    class Animal {
      speak() {
        console.log("Animal sound"); 
      }
    }

   class Cat extends Animal {
    speak() {
      console.log("Meow");
    }
   }

   const cat = new Cat();
   cat.speak();

   function Human(firstName, LastName) {
    this.firstName = firstName
    this.lastName = lastName
   }

   const chriss = new Human('Chris','Coyier')
   console.log(chriss.firstName)
   console.log(chriss.lastName)

   const zell = new Human('Zell','Liew')
   console.log(zell.firstName)
   console.log(zell.lastName)

   class Human {
    constructor(firstName,LastName) {
      this.firstName = firstName
      this.lastName = this.lastName
    }
   }

   const Human {
    init(firstName,LastName) {
      this.firstName = firstName
      this.lastName = this.lastName
    }
   }

   const chrris = objact.create(Human)
   chris.init('Chris','Coyier')

   console.log(chrris.firstName)
   console.log(chrris.lastName)

   function Human(firstName,LastName) {
    return {
     firstName,
    LastName
    }
   }

  //  const chris = Human('Chris','Coyier')

   console.log(chris.firstName)
   console.log(chris.lastName) 

   const some0bject= {
    some0Methot()
   }

   function Human (firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName

    this.sayHello = function() {
      console.log(`Hello', I'm ${firstName}`)
    }
   }
   const chris = new Human('Chris','Coyier')
   console.log(chris)

   function Human (firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
   }

   Human.prototype.sayHello = function() {
    console.log(`Hello','I'm${this.firstName}`)
   }

   class Notification {
    send() {
      console.log("Notification")
    }

   }
;
   const notification = new Notification();
   notification.send();

localStorage.setItem("theme","dark");
const theme = localStorage.getItem("them");
localStorage.clear();
sessionStorage.setItem("step","2");
const step = sessionStorage.getItem("step");
if (localStorage.getItem(:theme)) {
  console.log("Theme exists");
}
const data = {level: 3 };
localStorage.setItem("game",JSON.stringify(data));
const game = JSON.parse(localStorage.getItem("game"));