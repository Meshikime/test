'use strict';


let money = +prompt("Ваш бюджет на месяц?"," ");
let time = prompt("Введите дату в формате YYYY-MM-DD"," ");
alert("Бюджет на 1 день: "+budget);


let appData = {
бюджет:money,
данные_времени:time,
expenses:{} ,
optionalExpenses: {},
income:{},
savings: false
};
let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a4 = prompt("Во сколько обойдется?", '');
    
    appData.expenses[a1] = a2;
    appData.expenses[a3] = a4;
    alert(appData.budget / 30);