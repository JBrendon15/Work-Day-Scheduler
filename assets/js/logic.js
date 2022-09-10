let currentDay = $('#currentDay');
currentDay.text(moment().format('dddd, MMMM Do'));
let timeNow = $('#timeNow');


let scheduleTime = $('#schedule-time');
let format = 'HH:mm:ss';
let currentMoment = moment();

let nineOclock = moment('09:00:00', format);
let tenOclock = moment('10:00:00', format);
let elevenOclock = moment('11:00:00', format);
let twelveOclock = moment('12:00:00', format);
let oneOclock = moment('13:00:00', format);
let twoOclock = moment('14:00:00', format);
let threeOclock = moment('15:00:00', format);
let fourOclock = moment('16:00:00', format);
let fiveOclock = moment('17:00:00', format);
let sixOclock = moment('18:00:00', format);
let dayBegins = moment('00:00:00', format);

function captureTime(){
    setInterval(function(){
        currentMoment = moment();
        timeNow.text(currentMoment);
        
    }, 1000);
    
}
if(currentMoment.isBetween(dayBegins, nineOclock)){
    $('#nineAM').addClass('future');
    $('#tenAM').addClass('future');
    $('#elevenAM').addClass('future');
    $('#twelvePM').addClass('future');
    $('#onePM').addClass('future');
    $('#twoPM').addClass('future');
    $('#threePM').addClass('future');
    $('#fourPM').addClass('future');
    $('#fivePM').addClass('future');
}


if(currentMoment.isBetween(nineOclock, tenOclock)){
    $('#nineAM').removeClass('future');
    $('#nineAM').addClass('present');       
}
if(currentMoment.isBetween(tenOclock, elevenOclock)){
    $('#tenAM').removeClass('future');
    $('#tenAM').addClass('present');       
    $('#nineAM').removeClass('present');
    $('#nineAM').addClass('past');
           
}
if(currentMoment.isBetween(elevenOclock, twelveOclock)){
    $('#elevenAM').removeClass('future');
    $('#elevenAM').addClass('present');       
    $('#tenAM').removeClass('present');
    $('#tenAM').addClass('past');       
}
if(currentMoment.isBetween(twelveOclock, oneOclock)){
    $('#twelvePM').removeClass('future');
    $('#twelvePM').addClass('present');       
    $('#elevenAM').removeClass('present');
    $('#elevenAM').addClass('past');       
}
if(currentMoment.isBetween(oneOclock, twoOclock)){
    $('#onePM').removeClass('future');
    $('#onePM').addClass('present');       
    $('#twelvePM').removeClass('present');
    $('#twelvePM').addClass('past');       
}
if(currentMoment.isBetween(twoOclock, threeOclock)){
    $('#twoPM').removeClass('future');
    $('#twoPM').addClass('present');       
    $('#onePM').removeClass('present');
    $('#onePM').addClass('past');       
}
if(currentMoment.isBetween(threeOclock, fourOclock)){
    $('#threePM').removeClass('future');
    $('#threePM').addClass('present');       
    $('#twoPM').removeClass('present');
    $('#twoPM').addClass('past');       
}
if(currentMoment.isBetween(fourOclock, fiveOclock)){
    $('#fourPM').removeClass('future');
    $('#fourPM').addClass('present');       
    $('#threePM').removeClass('present');
    $('#threePM').addClass('past');       
}
if(currentMoment.isBetween(fiveOclock, sixOclock)){
    $('#fivePM').removeClass('future');
    $('#fivePM').addClass('present');       
    $('#fourPM').removeClass('present');
    $('#fourPM').addClass('past');       
}

$(document).ready(captureTime)



























// let prevMoment = moment().hour(6);
// let nextMoment = moment().hour(7);

// console.log(currentMoment.isBetween(prevMoment, nextMoment));

// let currentTime = moment().format(format);
// console.log(currentTime);

// if(currentTime.isBefore())

