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

