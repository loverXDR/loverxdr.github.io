"use strict";

export function getDecimal(num) {
  return Math.abs(num - Math.floor(num));
}

export function ucFirst(str) {
  if (!str) {
    return str;
  } else {
    return str[0].toUpperCase() + str.slice(1);
  }
}

export function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  
  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
export function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '…';
  } else {
    return str;
  }
}
export function camelize(str) {
  let words = str.split('-');
  
  for (let i = 1; i < words.length; i++) {
    words[i] = ucFirst(words[i]);
  }
  
  return words.join('');
}
export function fibs(n) {
  let a = 0n;
  let b = 1n;

  if (n === 0) {
      return a;
  } else if (n === 1) {
      return b;
  } else {
      for (let i = 2; i <= n; i++) {
          let c = a + b;
          a = b;
          b = c;
      }

      return b;
  }
}
export function arrReverseSorted(arr) {
  let sortedArr = arr.slice().sort((a, b) => b - a);
  
  return sortedArr;
}
export function unique(arr) {
  let set = new Set(arr);
  
  return Array.from(set);
}
