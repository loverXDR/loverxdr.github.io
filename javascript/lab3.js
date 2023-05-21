"use strict";

function getDecimal(num) {
  return Math.abs(num) % 1;
}

function ucFirst(str) {
  if (!str) {
    return str;
  } else {
    return str[0].toUpperCase() + str.slice(1);
  }
}

function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  
  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '…';
  } else {
    return str;
  }
}
function camelize(str) {
  let words = str.split('-');
  
  for (let i = 1; i < words.length; i++) {
    words[i] = ucFirst(words[i]);
  }
  
  return words.join('');
}
import { fib } from './lab2.js';
function fibs(n) {
  let result = [];
  
  for (let i = 0; i < n; i++) {
    result.push(fib(i));
  }
  
  return result;
}
function arrReverseSorted(arr) {
  let sortedArr = arr.slice().sort((a, b) => b - a);
  
  return sortedArr;
}
function unique(arr) {
  let set = new Set(arr);
  
  return Array.from(set);
}
