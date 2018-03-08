$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['hero', 'about', 'schedule', 'contact'],
    menu: '#menu',
    scrollingSpeed: 1000
  });
});

function makeTimer() {

  var endTime = new Date("Jan 20, 2017 14:00:00 PDT");            
  var endTime = (Date.parse(endTime)) / 1000;

  var now = new Date();
  var now = (Date.parse(now) / 1000);

  var timeLeft = endTime - now;

  var days = Math.floor(timeLeft / 86400); 
  var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
  var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
  var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

  if (hours < "10") { hours = "0" + hours; }
  if (minutes < "10") { minutes = "0" + minutes; }
  if (seconds < "10") { seconds = "0" + seconds; }

  $("#days").html(" " + days + "<span>&nbsp;Days,&nbsp;</span>");
  $("#hours").html(" " + hours + "<span>&nbsp;Hours,&nbsp;</span>");
  $("#minutes").html(" " + minutes + "<span>&nbsp;Minutes,&nbsp;</span>");
  $("#seconds").html(" " + seconds + "<span>&nbsp;Seconds</span>");     
}

setInterval(function() { makeTimer(); }, 1000)
