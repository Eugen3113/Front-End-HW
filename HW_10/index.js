// Задание 1
// Напишите программу, которая выводит в консоль все четные числа от 1 до 20.

for(let i = 1; i <= 20; i++) {
  if ( i % 2 === 0) {
        console.log(i);
  }
    
    
}

// Задание 2
// У вас есть массив чисел [2, 4, 6, 8, 10]. 
// Напишите программу для удвоения каждого значения в массиве и вывода результата в консоль.

let numberArray = [2, 4, 6, 8, 10]

for(let i = 0; i < numberArray.length; i++) {
let Array = numberArray[i] * 2;
        console.log(Array);
     
        
}

// Задание 3
// Создайте массив из следующих элементов: "Семен", "Иван", "Петр", "Татьяна". 
// Создайте еще один массив с возрастами: 18, 27, 74, 34;
//  Создайте и заполните при помощи цикла этот новый массив новыми элементами по образу: "Семен 18 лет/годов"

const users = ["Семен", "Иван", "Петр", "Татьяна"];
let arrayAge = [18, 27, 74, 34];
let newArray = [];

for (i =0; i < users.length; i++) {
        newArray.push(`${users[i]} ${arrayAge[i]} лет/годов`);
        
        // console.log(newArray);
        
}
   console.log(newArray);



//    Задание 4
// Используя пройденные на занятии методы массива получите из этого массива новый массив, 
// в котором элементы идут в обратной последовательности.

const users1 = ["Семен", "Иван", "Петр", "Татьяна"];
let arrayAge1 = [18, 27, 74, 34];
let newArray1 = [];

for (i =0; i < users1.length; i++) {
        newArray1.push(`${users1[i]} ${arrayAge1[i]} лет/годов`);
        
    // let  reverseArray = newArray1.reverse();
    //      console.log(reverseArray);
}
  let  reverseArray = newArray1.reverse();
         console.log(reverseArray);

   //console.log(newArray1);
   // console.log(reverseArray);
   