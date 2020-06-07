'use strict';

// function calcStepen(a,n) {
//  if ((a ^ 0) || (n ^ 0)){
//     alert("Число должно быть целым!");
//    }
// else if (a>0 && n>0 ){
//   alert ( Math.pow(a,n));
 
// } else if (a==0 || n==0) {
//     alert("Число или степень не равна 0");
// }

// }
// let a=prompt("a="),
// n = prompt("Степень равна");
// Number(a);
// Number(n);

// calcStepen(a,n);

// let question = prompt("Какое «официальное» название JavaScript?", '');

// if (question=="ECMAScript") {
//   alert("Верно!");
// } else {
//   alert("Не знаете? ECMAScript!");
// }
let num = +prompt("Введите ограничение случайного числа", "");
alert("Ваше случайное число: " + Math.ceil(Math.random() * num ));