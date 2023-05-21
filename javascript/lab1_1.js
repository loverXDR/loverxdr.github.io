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
    let rows = prompt("Введите количество строк:");
    
    for (let i = 0; i < rows; i++) {
      let row = "";
      
      for (let j = 0; j < 6; j++) {
        if (j < 3) {
          row += "dog\t";
        } else {
          row += "cat\t";
        }
      }
      
      console.log(row);
    }
  }
