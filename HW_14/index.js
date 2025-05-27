// Task 1
// У вас есть массив объектов:

// const cars = [ { brand: "BMW", price: 20000, isDiesel: true },
//     { brand: "Mercedes", price: 22000, isDiesel: false }, { brand: "Porshe", price: 50000, isDiesel: true },
//      { brand: "Nissan", price: 25000, isDiesel: false }, ];

// Создайте на основе страрого массива новый массив объектов по образу:
//  [{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...]

const cars = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];

cars.forEach((value) => {
  delete value.price;
});

console.log(cars);
//----------------------------------------------------------------------------

// Task 2

// Создайте новый массив, где оставьте только машины с дизельным двигателем.

const cars1 = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];

const filteredArrayDiesel = cars1.filter((value) => {
  return value.isDiesel === true;
});

console.log(filteredArrayDiesel);
//-------------------------------------------------------------------------------

// Task 3

// Создайте новый массив, где оставьте только машины не с дизельным двигателем.
const cars2 = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];

const filteredArrayDiesel2 = cars2.filter((value) => {
  return value.isDiesel != true; // если машина не дизельная
  // return value.isDiesel === false;
});

console.log(filteredArrayDiesel2);
//-------------------------------------------------------------------------------

//! Task 4
// Посчитайте общую стоимость всех машин не с дизельным двигателем.

const cars3 = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];

let filteredByNonDieselPrice = 0; //  создаём переменную

for (const car of cars3) {      // перебераем все значения массива (of -для массива)(in -для объекта)
  if (!car.isDiesel) {           // если не дизель
    filteredByNonDieselPrice += car.price;   // прибавляем цену к переменной
  }
}
console.log(filteredByNonDieselPrice);






//----------------------------------------------------------------------------------

// Task 5

// Повысьте цену всех машин в массиве на 20%.
const cars4 = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];

cars4.forEach((value) => {
  value.price = value.price * 1.2;  // price* 1.2  - прибавляем 20%
});
console.log(cars4);
//---------------------------------------------------------------------------------------

// Task 6

// Создайте новый массив, где все дизельные машины заменены на { brand: "Tesla", price: 25000, isDiesel: false }
const cars5 = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];

const updatedArrayCars5 = [];

cars5.forEach(car => {
  if (car.isDiesel) {             //! проверяем дизельная ли машина
    updatedArrayCars5.push({ brand: "Tesla", price: 25000, isDiesel: false }); // если да,то меняем на теслу
  } else {
    updatedArrayCars5.push(car); // если нет, оставляем как есть
  }
});

console.log(updatedArrayCars5);
//--------------------------------------------------------------------------------------------------
