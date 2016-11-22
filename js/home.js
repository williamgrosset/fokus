var stopwatchOn = false;
var seconds = 120;

$("#reset").hide();
$("#stopwatch").bind("click", startCounter);

/*
* onload tag not allowed with chrome extensions
*/
document.addEventListener('DOMContentLoaded', function() {
      typeHeader();
});

/*
* typed.js: wwww.mattboldt.com
*/
function typeHeader() {
    $("#center-above").typed({
        strings: ["Stay ^1000 fokused.", "Stay focused."],
        contentType: "html",
        showCursor: false,
        typeSpeed: 80,
        backSpeed: 80,
    });
}

function startCounter() {
    stopwatchOn = true;
    $("#stopwatch").html("Stop");
    $("#reset").show();
    var timer = setInterval(setTime, 1000);
}

function setTime() {
    seconds--;
    $("#clock").html(seconds);
}
