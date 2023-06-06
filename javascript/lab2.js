"use strict";
/**
 * Функция, возвращающая x в степени n (n - целое число)
 * @param {number} x -  число, котоое возводится в степень n
 * @param {number} n - степень, в которую возводится x
 * @returns {number} - значение x в степени n
 */
function pow(x, n) {
    if (n === 0) {
        return 1;
    } else if (n < 0) {
        return 1 / pow(x, -n);
    } else {
        return x * pow(x, n - 1);
    }
}
/**
 * вычисляет сумму чисел от 1 до n включительно
 * @param {number} n - число, до которого необходимо рассчитать сумму
 * @returns {number} - сумму всех чисел от n до 1 
 */
function sumTo(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + sumTo(n - 1);
    }
}
/**
 * возвращает факториал числа n!
 * @param {number} n - число, для которого вычисляется факториал 
 * @returns {BigInt} - Факториал заданного числа в виде BigInt
 */
function factorial(n) {
    if (n === 0) {
        return 1n;
    } else {
        return BigInt(n) * factorial(n - 1);
    }
}
/**
 * возвращает n-е число Фибоначчи
 * @param {number} n - номер числа Фибоначчи
 * @returns  {BigInt} - n-е число Фибоначчи в виде BigInt
 */
function fib(n) {
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
/**
 * принимает целочисленное значение x и возвращает анонимную функцию
 * @param {number} x - значение, с которым нужно сравнить
 * @returns {function} -  функция, которая принимает входное значение и возвращает логическое значение
 */
function compare(x) {
    return function (y) {
        if (y > x) {
            return true;
        } else if (y < x) {
            return false;
        } else {
            return null;
        }
    }
}
/**
 * возвращает сумму всех своих аргументов
 * @param  {...number} args - аргуементы, которые необходимо просуммировать
 * @returns {number} -  сумма всех аргументов
 */
function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}