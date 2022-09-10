//this adds the current date on the jumbotron of the page
let currentDay = $('#currentDay');
currentDay.text(moment().format('dddd, MMMM Do'));


//these are variables to keep track of the current time
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


//this function is called when page is loaded, it sets an interval to call checkTime function every second as well as setting the current moment to exact current time.
function captureTime(){
    setInterval(function(){
        checkTime();
        //comment out line below to test
        currentMoment = moment();
        // comment in line below to test
        // currentMoment.add(59, 'm')
        
        
        
    }, 1000);
    
}

//this function uses the updated time every second to check the if conditions to update the background colors of the time blocks.
function checkTime(){
    if(currentMoment.isSameOrAfter(dayBegins)){
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
    if(currentMoment.isSameOrAfter(nineOclock)){
        $('#nineAM').removeClass('future');
        $('#nineAM').addClass('present');       
    }
    if(currentMoment.isSameOrAfter(tenOclock)){
        $('#tenAM').removeClass('future');
        $('#tenAM').addClass('present');       
        $('#nineAM').removeClass('present');
        $('#nineAM').addClass('past');
    }
    if(currentMoment.isSameOrAfter(elevenOclock)){
        $('#elevenAM').removeClass('future');
        $('#elevenAM').addClass('present');       
        $('#tenAM').removeClass('present');
        $('#tenAM').addClass('past');       
    }
    if(currentMoment.isSameOrAfter(twelveOclock)){
        $('#twelvePM').removeClass('future');
        $('#twelvePM').addClass('present');       
        $('#elevenAM').removeClass('present');
        $('#elevenAM').addClass('past');       
    }
    if(currentMoment.isSameOrAfter(oneOclock)){
        $('#onePM').removeClass('future');
        $('#onePM').addClass('present');       
        $('#twelvePM').removeClass('present');
        $('#twelvePM').addClass('past');       
    }
    if(currentMoment.isSameOrAfter(twoOclock)){
        $('#twoPM').removeClass('future');
        $('#twoPM').addClass('present');       
        $('#onePM').removeClass('present');
        $('#onePM').addClass('past');       
    }
    if(currentMoment.isSameOrAfter(threeOclock)){
        $('#threePM').removeClass('future');
        $('#threePM').addClass('present');       
        $('#twoPM').removeClass('present');
        $('#twoPM').addClass('past');       
    }
    if(currentMoment.isSameOrAfter(fourOclock)){
        $('#fourPM').removeClass('future');
        $('#fourPM').addClass('present');       
        $('#threePM').removeClass('present');
        $('#threePM').addClass('past');       
    }
    if(currentMoment.isSameOrAfter(fiveOclock)){
        $('#fivePM').removeClass('future');
        $('#fivePM').addClass('present');       
        $('#fourPM').removeClass('present');
        $('#fourPM').addClass('past');       
    }
    if(currentMoment.isSameOrAfter(sixOclock)){
        $('#fivePM').removeClass('present');
        $('#fivePM').addClass('past');       
        
    }

}

//this line will call the captureTime function when the page is loaded and ready to run javascript codes
$(document).ready(captureTime)



























// let prevMoment = moment().hour(hour_before);
// let nextMoment = moment().hour(hour_after);

// console.log(currentMoment.isSameOrAfter(prevMoment, nextMoment));

// let currentTime = moment().format(format);
// console.log(currentTime);

// if(currentTime.isBefore())

