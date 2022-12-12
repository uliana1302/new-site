function verify() {

let a = parseInt(document.getElementById("a").value);
let b = parseInt(document.getElementById("b").value);
let с = parseInt(document.getElementById("c").value);
let low, high, min, max, incor;
if (a < b) {
      low = a;
      high = b;
  } else {
      low = b;
      high = a;
  }
if (c.value == 'меньше') {
    min = c;
  } else if (c.value == 'больше') {
    max = c;
  } else {
    incor = c;
  }
if (a == low && b == high && c == min) {
  result = "верный"
  document.getElementById("results-v").innerText = "Результаты: Ваш ответ"+ " " + result;
  document.getElementById("res-out").value = "Ответ"+ " " + result;
} else if (a == low && b == high && c == max) {
  result = "не верный"
  document.getElementById("results-v").innerText = "Результаты: Ваш ответ"+ " " + result;
  document.getElementById("res-out").value = "Ответ"+ " " + result;
} else if (a == high && b == low && c == max) {
  result = "верный"
  document.getElementById("results-v").innerText = "Результаты: Ваш ответ"+ " " + result;
  document.getElementById("res-out").value = "Ответ"+ " " + result;
} else if (a == high && b == low && c == min) {
  result = "не верный"
  document.getElementById("results-v").innerText = "Результаты: Ваш ответ"+ " " + result;
  document.getElementById("res-out").value = "Ответ"+ " " + result;
} else if (c == incor) {
  result = "не корректный"
  document.getElementById("results-v").innerText = "Результаты: Ваш ответ"+ " " + result;
  document.getElementById("res-out").value = "Ответ"+ " " + result;
}
}

const elementC = document.getElementById("c");
elementC.addEventListener("keyup", verify);
