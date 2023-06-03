"use strict";

function checkAgeAndGender() {
    let age = prompt("Введите ваш возраст:");
    let gender = prompt("Введите ваш пол (мужчина или женщина):");
  
    if (age >= 0 && age <= 17) {
      alert("Вам работать ещё рано — учитесь");
    } else if ((age >= 18 && age <= 59 && gender === "мужчина") || (age >= 18 && age <= 54 && gender === "женщина")) {
      alert("Вам ещё работать и работать");
    } else if ((age >= 60 && age <= 64 && gender === "мужчина") || (age >= 55 && age <= 59 && gender === "женщина")) {
      alert("Скоро пенсия!");
    } else if (age > 65 && gender === "мужчина" || age > 60 && gender === "женщина") {
      alert("Вам пора на пенсию");
    } else {
      alert("Да кто ты такой?");
    }
  }
  
  function checkNum() {
    let num = prompt("Введите целое число:");
    let message;
    
    switch (num) {
      case "1":
        message = "На ветке сидит 1 ворона";
        break;
      case "2":
      case "3":
      case "4":
        message = "На ветке сидит " + num + " вороны";
        break;
      default:
        message = "На ветке сидит " + num + " ворон";
    }
    
    alert(message);
  }
  
  function checkNumber() {
    let num;
    
    do {
      num = prompt("Введите число больше 100:");
    } while (num <= 100 && num !== null);
  }
  
  function checkPrime() {
    let n = prompt("Введите число:");
    
    nextPrime:
    for (let i = 2; i <= n; i++) {
  
      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
  
      console.log(i);
    }
  }
  

  function drawTable() {
    let num = prompt("Введите количество строк: ");
    let k = Math.floor(num / 5);
    let l = num - 5 * k;
    let one = "dog dog dog cat cat dog";
    let two = "dog dog cat cat dog dog";
    let three = "dog cat cat dog dog dog";
    let four = "cat cat dog dog dog dog";
    let five = "cat dog dog dog dog cat";
    var list = [one, two, three, four, five]
    for (let i = 1; i <= k; i++) {
        for (let j = 0; j < 5; j++) console.log(list[j]);
    }
    for (let j = 0; j < l; j++) console.log(list[j]);
}
