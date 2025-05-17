// Task 1
// Напишите функцию, которая принимает два числа и возвращает большее значение.
//  Вызов функции присвоить переменной и отобразить результат(переменную) в консоле

function addNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
let bigNumber = addNumber(5, 59);
console.log(bigNumber);

//-------------------------------------
// Task 2
// Создайте стрелочную функцию, которая бы принимала массив и цифру,
//  возвращала бы элемент массива под этим индексом.
let numberArray = [2, 4, 6, 8, 10];
let num = 2;

const getElementByIndex = (array, index) => array[index];

console.log(getElementByIndex(numberArray, num));

//----------------------------------------
// Task 3
//  Создайте функцию, которая бы принимала следующие параметры: код погоды и функцию decode,
//  которая дает расшифровку погоды по коду. Функция должна возвращать строку, описывающую погоду.

//  Таблица соответствия код-описание: SQ – шквал PO – пыльный вихрь FC - торнадо BR – дымка (видимость от 1 до 9 км)
//  HZ – мгла (видимость менее 10 км) FU – дым (видимость менее 10 км) DS - пыльная буря (видимость менее 10 км)
//  SS - песчаная буря (видимость менее 10 км)
//  Подсказка: удобно использовать в одном из методов switch-case

const decode = (code) => {
  switch (code) {
    case "SQ": {
      return "шквал";
    }

    case "PO": {
      return "пыльный вихрь";
    }

    case "FC": {
      return "торнадо";
    }

    case "BR": {
      return "дымка (видимость от 1 до 9 км)";
    }

    case "HZ": {
      return "мгла (видимость менее 10 км)";
    }

    case "FU": {
      return "дым (видимость менее 10 км)";
    }
    case "DS": {
      return "пыльная буря (видимость менее 10 км)";
    }
    case "SS": {
      return "песчаная буря (видимость менее 10 км)";
    }

    default: {
      return "неправильный код соответствия";
    }
  }
};

const showWeather = (code, decodeFunction) => {
  return `${code}: ${decodeFunction(code)}`;
};
let message = showWeather("SS", decode);
console.log(message);
