// Task 1
// Создать страницу, на которой у вас будет квадрат с background-color: white Под квадратом должны находиться 2 кнопки:

// "Randomize square color" - при клике на нее каждые 3 секунды у вас должен меняться цвет квадрата на рандомный.

// Для выборки случайного цвета используйте функцию Math.random(), ссылка на принцип ее работы

// "Stop Randomize square color" - при клике на нее, цвет квадрата перестает меняться

//  Цвет должен меняться на случайный из массива ниже:



const colorBox = document.getElementById("colorBox");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");


const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
  "rgb(42, 34, 82)",
  "rgb(61, 30, 214)",
  "blueviolet",
  "rgb(214, 30, 30)",
];


let intervalId = null;

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

function startColorChange() {
  if (intervalId === null) {
    intervalId = setInterval(() => {
      colorBox.style.backgroundColor = getRandomColor();
     }, 3000);
     startBtn.disabled = true;  // работает
    //stopBtn.disabled = false; // работает
  }
};

function stopColorChange() {
  clearInterval(intervalId);
 
  intervalId = null;

   startBtn.disabled = false; // работает
  // stopBtn.disabled = true; // работает
};

startBtn.addEventListener("click", startColorChange);
stopBtn.addEventListener("click", stopColorChange);

//<button disabled>Click me</button>
//— с  disabled  эта кнопка:

//становится неактивной,не реагирует на клики,выглядит "приглушённой" (браузер автоматически применяет стили),

// не отправляется при отправке формы.
