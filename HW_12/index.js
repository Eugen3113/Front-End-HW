document.getElementById("weightForm").addEventListener("submit", function (event) {
  event.preventDefault(); //Отмена стандартного поведение события.

  const HEIGHT = document.getElementById("height").value;
  const GENDER = document.getElementById("gender").value;
  const RESULT = document.getElementById("result");

  if (!HEIGHT || !GENDER) {
    RESULT.textContent = "Пожалуйста, заполните все поля.";
    return;
  }

  let idealWeight = 0;

  if (GENDER === "male") {
    idealWeight = HEIGHT - (100 + (HEIGHT - 100) / 20);
  } else if (GENDER === "female")  {
    idealWeight = HEIGHT - (100 + (HEIGHT - 100) / 10);
  }
  RESULT.textContent = `Ваш идеальный вес: ${idealWeight.toFixed(1)} кг`;//toFixed(1) округляет
                                 //  число до фиксированного количества знаков после запятой и возвращает его в виде строки.
});