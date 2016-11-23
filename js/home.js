/*
* Global Variables (will be encapsulated eventually)
*/
var stopwatchOn = false;
var seconds = 10;
var timer;
$("#stopwatchStop").hide();
$("#stopwatchReset").hide();
$("#stopwatchStart").bind("click", startCounter);
$("#stopwatchStop").bind("click", stopCounter);
$("#stopwatchReset").bind("click", resetCounter);

/*
* onload tag not allowed with chrome extensions
*/
document.addEventListener('DOMContentLoaded', function() {
      typeHeader();
});

/*
* typeHeader():
* <description here>
* typed.js: wwww.mattboldt.com
*/
function typeHeader() {
    $("#center-above").typed({
        strings: ["Stay ^1000 fokused.", "Stay focused."],
        contentType: "html",
        showCursor: false,
        typeSpeed: 70,
        backSpeed: 40,
    });
}


/*
* startCounter():
* <description here>
*/
function startCounter() {
    console.log("We are in the startCounter() function trying to do things...");
    stopwatchOn = true;
    $("#stopwatchStart").hide();
    $("#stopwatchStop").show();
    $("#stopwatchReset").show();
    $("#reset").show();
    timer = setInterval(countDown, 1000);
}

/*
* stopCounter():
* <description here>
*/
function stopCounter() {
    console.log("We are in the stopCounter() function trying to do things...");
    stopwatchOn = false;
    $("#stopwatchStop").hide();
    $("#stopwatchStart").show();
    $("#reset").show();
    clearInterval(timer);
}

/*
* resetCounter():
* <description here>
*/
function resetCounter() {
    console.log("We are in the resetCounter() function trying to do things...");
    stopwatchOn = false;
    clearInterval(timer);
    $("#stopwatchStop").hide();
    $("#stopwatchStart").show();
    $("#stopwatchReset").hide();
    seconds = 120;
    $("#clock").html(seconds);
}

/*
* countDown():
* <description here>
*/
function countDown() {
    seconds--;
    $("#clock").html(seconds);
    if (seconds == 0) {
        resetCounter();
    }
}
