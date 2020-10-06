var NewYear = '1 jan 2021';
var current_times = new Date();
var daysEl = document.getElementById('days');
var HoursEl = document.getElementById('hours');
var MinutesEl = document.getElementById('minutes');
var SecondsEl = document.getElementById('seconds');



function countdown(){
    const NewYearDate = new Date(NewYear);
    // console.log(NewYearDate);
    const current_date = new Date();
    // console.log(NewYearDate -current_date);
    const totalSeconds = (NewYearDate -current_date) / 1000;
    // console.log(seconds);
    const days = Math.floor(totalSeconds / 3600 / 24);
    // console.log(days);
    const hours = Math.floor((totalSeconds / 3600 ) % 24);
    // console.log(days, hours);
    const minutes = Math.floor(totalSeconds / 60 ) % 24 % 60;
    // console.log(days, hours,minutes);
    const seconds = Math.floor(totalSeconds % 60);
    // console.log(days, hours,minutes,seconds);

daysEl.innerHTML = days;
HoursEl.innerHTML = hours;
MinutesEl.innerHTML = minutes;
SecondsEl.innerHTML = seconds;

    
    
}
countdown();


setInterval(countdown,1000)