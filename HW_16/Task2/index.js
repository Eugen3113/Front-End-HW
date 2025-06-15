// Задание 2
// Создание и обработка промисов

// Создайте функцию showNumbers(seconds), которая принимает в качестве аргумента число секунд и возвращает промис. 
// Промис должен выполняться через указанное количество секунд и возвращать сообщение "Прошло {seconds} секунд(ы)".
//  Используйте setTimeout внутри промиса для создания задержки выполнения. Если колличестов секунд больше 10, 
//  то промис должен возвращать ошибку "Ошибка: максимальное количество секунд = 10".
//  Создайте несколько экземпляров функции showNumbers с разными значениями секунд и 
//  выведите результат выполнения каждого промиса.



function showNumbers(seconds) {
  return new Promise((resolve, reject) => {
    if (seconds > 10) {
      reject("Ошибка: максимальное количество секунд = 10");
    } else {
      setTimeout(() => {
        resolve(`Прошло ${seconds} секунд(ы)`);
      }, seconds * 1000);
    }
  });
}

//  Примеры использования

showNumbers(3)
  .then(result => console.log(result))
  .catch(error => console.error(error));

showNumbers(7)
  .then(result => console.log(result))
  .catch(error => console.error(error));

showNumbers(15)                       // Ошибка: максимальное количество секунд = 10
  .then(result => console.log(result))
  .catch(error => console.error(error));
