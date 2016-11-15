var stopwatchOn = false;
var seconds = 120;

$("#reset").hide();
$("#stopwatch").bind("click", startCounter);

/*
$("#center").typed({
        strings: ["Stay ^1000 fokused."],
        contentType: 'html' // or 'text'
});
*/

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
