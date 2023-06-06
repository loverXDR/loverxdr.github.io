"use strict";

function checkAgeAndGender() {
  const age = prompt("Введите ваш возраст:");
  const gender = prompt("Введите ваш пол (м или ж):");

  if (age >= 0 && age <= 17) {
    alert("Вам работать ещё рано — учитесь");
  } else if ((age >= 18 && age <= 59 && gender === "м") || (age >= 18 && age <= 54 && gender === "ж")) {
    alert("Вам ещё работать и работать");
  } else if ((age >= 60 && age <= 64 && gender === "м") || (age >= 55 && age <= 59 && gender === "ж")) {
    alert("Скоро пенсия!");
  } else if (age > 65 && gender === "м" || age > 60 && gender === "ж") {
    alert("Вам пора на пенсию");
  } else {
    alert("Да кто ты такой?");
  }
}

function checkNum() {
  "use strict"
  const num = prompt("Введите целое число", "");
  if (num % 100 >= 11 && num % 100 <= 14) {
    switch (num % 100) {
      case 11:
      case 12:
      case 13:
      case 14:
        alert(`На ветке сидит  ${num} ворон`)
        break;
    }
  }
  else {
    switch (num % 10) {
      case 0:
        alert(`На ветке сидит  ${num} ворон`)
        break;
      case 1:
        alert(`На ветке сидит  ${num} ворона`)
        break;
      case 2:
      case 3:
      case 4:
        alert(`На ветке сидит  ${num} вороны`)
        break;
      case 5:
      case 6:
      case 7:
      case 9:
        alert(`На ветке сидит  ${num} ворон`)
        break;
      default:
        alert('wrong input')
        break;
    }
  }
}

function checkNumber() {
  let num;
  do {
    num = prompt("Введите число больше 100:");
  } while (num <= 100 && num !== null);
}

function checkPrime() {
  const n = prompt("Введите число:");

  nextPrime:
  for (let i = 2; i <= n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    console.log(i);
  }
}


function drawTable() {
  const num = prompt("Введите количество строк: ");
  const k = Math.floor(num / 5);
  const l = num - 5 * k;
  const o = "dog dog dog cat cat dog";
  const t = "dog dog cat cat dog dog";
  const th = "dog cat cat dog dog dog";
  const fo = "cat cat dog dog dog dog";
  const fi = "cat dog dog dog dog cat";
  const list = [o, t, th, fo, fi]
  for (let i = 1; i <= k; i++) {
    for (let j = 0; j < 5; j++) console.log(list[j]);
  }
  for (let j = 0; j < l; j++) console.log(list[j]);
}
