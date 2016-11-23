'use strict';

var names = ['Вася', 'Дима', 'Катя', 'Маша', 'Иннокентий', 'Петя', 'Елизавета Петровна', 'Даша', 'Фёдор', 'Михаил'];
var girls = ['Катя', 'Маша', 'Елизавета Петровна', 'Даша']
var namesL = names.length;
var jobs = ['Слесарь', 'Менеджер', 'Премьер Министр', 'Экономист', 'Дворник', 'Веб-разработчик', 'Врач', 'Учитель', ' Повар', 'Дрессировщик'];
var jobsL = jobs.length;

var li = document.getElementsByTagName('li');
var s = new Object();
//Math.floor(Math.random() * (max - min + 1) + min) - формула для рассчёта случайного числа в диапазоне

for (var i=0; i<10; i++) {
    var xname = Math.floor(Math.random() * namesL); //
    var xjobs = Math.floor(Math.random() * jobsL);
    var xage = Math.floor(Math.random() * (35 - 20 +1) + 20); // от 20 до 35
    var xsalary = Math.floor(Math.random() * (120 - 20 + 1) + 20); // от 20 до 120
    var list = [names[xname],' ' + jobs[xjobs],' ' + xage,' ' + xsalary];
    li[i].innerHTML = list;
    s[i] = li[i].innerText.split(', ')
};

for (var i=0; i<10; i++) {    
    if (s[i][3] < 50) {
        li[i].style.backgroundColor = 'red'
    } else if (s[i][3] < 80) {
        li[i].style.backgroundColor = 'yellow'
    } else {
        li[i].style.backgroundColor = 'green'
    };
    if (s[i][2] >=20 && s[i][2] <=27) {
        s[i][0].style.color = 'white'
    };
//    if (s[i][1] == 'Премьер Министр') {
//        li[i].style.color = 'white'
//    };
    
    for (var j=0; j<girls.length; j++) {
        if (s[i][0] == girls[j]) {
        li[i].style.fontSize = '1.1em'
    };
    }
    
}


  




