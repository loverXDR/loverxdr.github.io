"use strict";

let book1 = {
  title: 'The Catcher in the Rye',
  pubYear: 1951,
  price: 10.99
};

let book2 = {
  title: 'To Kill a Mockingbird',
  pubYear: 1960,
  price: 12.99
};

for (let prop in book1) {
  console.log(prop + ': ' + book1[prop]);
}

for (let prop in book2) {
  console.log(prop + ': ' + book2[prop]);
}

book1.show = function() {
  console.log(this.title + ': $' + this.price);
};

function showBook() {
  console.log(this.title + ': $' + this.price);
}

book2.show = showBook;

console.log(book1.show());
console.log(book2.show());

function isEmpty(obj) {
  for (let prop in obj) {
    return false;
  }
  
  return true;
}

console.log(isEmpty(book1));
console.log(isEmpty(book2));
console.log('----------------------------------------------------')
let obj = {
  className: 'open menu'
};

obj.addClass = function(cls) {
  let classes = this.className.split(' ');
  
  if (!classes.includes(cls)) {
    classes.push(cls);
    this.className = classes.join(' ');
  }
  
  return this;
};

obj.removeClass = function(cls) {
  let classes = this.className.split(' ');
  
  if (classes.includes(cls)) {
    classes.splice(classes.indexOf(cls), 1);
    this.className = classes.join(' ');
  }
  
  return this;
};

console.log(obj.addClass('new'));
console.log(obj.addClass('open'));
console.log(obj.removeClass('menu'));
console.log('----------------------------------------------------')
let vasya = { name: "Вася", age: 23 };
let masha = { name: "Маша", age: 18 };
let vova = { name: "Вова", age: 12 };
let people = [ vasya , masha , vova ];

people.sort((a, b) => a.age - b.age);

console.log(people);
console.log('----------------------------------------------------')
function getSecondsToday() {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
  return Math.round((now - today) / 1000);
}

console.log(getSecondsToday());

function formatDate(date) {
  let day = date.getDate();
  if (day < 10) day = '0' + day;
  
  let month = date.getMonth() + 1;
  if (month < 10) month = '0' + month;
  
  let year = date.getFullYear() % 100;
  if (year < 10) year = '0' + year;
  
  return day + '.' + month + '.' + year;
}

console.log(formatDate(new Date()));