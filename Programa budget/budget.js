'use strict';

let money = +prompt("Ваш бюджет на месяц?", " ");
let time = prompt("Введите дату в формате YYYY-MM-DD", " ");
let appData = {
    бюджет: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null &&
        a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        i--;
    }
}
function detectDayBudget() {
 return appData.moneyPerDay = appData.бюджет / 30;
alert("Ежедненый бюджет: " + appData.moneyPerDay);
}
detectDayBudget();
function detectLevel(){
if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка")
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
};
}
detectLevel();
 
function chooseOptExpenses(){
    let question;
    for (let i = 0; i < 3; i++) {
        question = prompt('Статья необязательных расходов? ', '');
    }
    if (typeof (question) === 'string' && typeof (question) != null && question.length < 50) {
    console.log("done");
    let optionalExpenses  = {
        i: question,
    }
}
}
chooseOptExpenses();