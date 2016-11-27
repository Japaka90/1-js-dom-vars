'use strict';

function initializeClock(time, option) {
    var clock = document.querySelector('.clock');
    time = time || new Date();
    option = option || ['hours', 'minutes', 'seconds'];

    var format = '';
     
    if(option.includes('year')){
      format += 'Year: ' + time.getFullYear() + ' ';
    }
    if(option.includes('month')){
      format += 'Month: ' + Number(time.getMonth() + 1) + ' ';
    }
    if(option.includes('day')){
      format += 'Day: ' + time.getDate() + ' ';
    }
    if(option.includes('hours')){
      format += 'Hours: ' + time.getHours() + ' ';
    }
    if(option.includes('minutes')){
      format += 'Minutes: ' + time.getMinutes() + ' ';
    }
    if(option.includes('seconds')){
      format += 'Seconds: ' + time.getSeconds() + ' ';
    }        
    clock.innerHTML = format;
    
    setTimeout('initializeClock()', 1000)
}

 initializeClock(new Date(2014, 6, 14), ['year', 'month', 'day', 'seconds']);