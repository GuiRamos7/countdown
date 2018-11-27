(function(){
  "use strict";

  let $ = (x) => document.querySelector(x);
  let btnSubmit = $(".btn-submit");

  function countDown() {
    
    let now = new Date();
    let eventDate = new Date(2019, 6, 20);
    

    let currentTime = now.getTime();
    let eventTime = eventDate.getTime();
    let realTime = eventTime - currentTime;
    
  
    let seconds = Math.floor(realTime / 1000);
    let minutes = Math.floor(seconds / 60 );
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);


    hours %= 24;
    minutes %= 60;
    seconds %= 60;
    

    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;


    $(".days").textContent = days;
    $(".hours").textContent = hours;
    $(".minutes").textContent = minutes;
    $(".seconds").textContent = seconds;

  }

    countDown();
    setInterval(() => {
      countDown(yearInput, mounthInput, dayInput);
    }, 1000);

})();