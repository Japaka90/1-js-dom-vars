'use strict';

var names = ['Вася', 'Дима', 'Катя', 'Маша', 'Иннокентий', 'Петя', 'Елизавета Петровна', 'Даша', 'Фёдор', 'Михаил'];
var girls_names = ['Катя', 'Маша', 'Елизавета Петровна', 'Даша'];
var jobs = ['Слесарь', 'Менеджер', 'Премьер Министр', 'Экономист', 'Дворник', 'Веб-разработчик', 'Врач', 'Учитель', ' Повар', 'Дрессировщик'];

function random(min, max) {
    var number = Math.floor(Math.random() * (max - min + 1) + min);
    return number
}

var ul = document.getElementById('list');
var list = [];
for (var i=0; i<10; i++) {
    var xnames = names[random(0, names.length-1)];
    var xjobs = jobs[random(0, jobs.length-1)];
    var xage = random(20, 35); 
    var xsalary =random(20, 120);
    list.push({
        name: xnames,
        job: xjobs,
        age: xage,
        salary: xsalary        
    });    
    var li = document.createElement('li');
    var span = document.createElement('span');
    var div = document.createElement('div');
    var textSpan= document.createTextNode(list[i].name + ' ');
    var textDiv= document.createTextNode(list[i].job + ' ' + list[i].age + ' ' + list[i].salary);
    span.appendChild(textSpan);
    div.appendChild(span);
    div.appendChild(textDiv);
    li.appendChild(div);
    ul.appendChild(li);
    
    if (list[i].salary < 50) {
        div.style.backgroundColor = 'red'
    } else if (list[i].salary < 80) {
        div.style.backgroundColor = 'yellow'
    } else {
        div.style.backgroundColor = 'green'
    };
    
    if (list[i].age >=20 && list[i].age <=27) {       
        span.style.fontWeight = 'bold';       
    };
    
    if (list[i].job == 'Премьер Министр') {
        div.style.textDecoration = 'underline'
    };
    
    for (var j=0; j<girls_names.length; j++) {
        if (list[i].name == girls_names[j]) {
        div.style.fontSize = '1.1em'
        };
    }
};



