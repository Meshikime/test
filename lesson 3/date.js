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
// let num = +prompt("Введите ограничение случайного числа", "");
// alert("Ваше случайное число: " + Math.ceil(Math.random() * num ));




let date = new Date(2014, 0, 3); // 3 января 2012 года
function getWeekDay(date) {

    date.getMonth(Date);
    switch (date.getDay()) {
        case 1: // if (x === 'value1')
            alert("ПН");
            break;

        case 2: // if (x === 'value2')
            alert("ВТ");
            break;
        case 3: // if (x === 'value2')
            alert("СР");
            break;
        case 4: // if (x === 'value2')
            alert("ЧТ");
            break;
        case 5: // if (x === 'value2')
            alert("ПТ");
            break;
        case 6: // if (x === 'value2')
            alert("СБ");
            break;
        case 0: // if (x === 'value2')
            alert("ВС");
            break;
        default:

            break;
    }
    
}

getWeekDay(date);







// function formatDate(date) {

//     let options = {
//         day: 'numeric',
//         month: 'numeric',
//         year: 'numeric',
//     };
//     alert(date.toLocaleString("ru", options));
// }

// formatDate(date);
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

// Для вывода используйте alert.