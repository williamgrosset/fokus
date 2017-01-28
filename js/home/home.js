(function() {

    var seconds = 3;
    var timer;
    $("#stopwatchStop").hide();
    $("#stopwatchReset").hide();
    $("#stopwatchStart").bind("click", startCounter);
    $("#stopwatchStop").bind("click", stopCounter);
    $("#stopwatchReset").bind("click", resetCounter);

    document.addEventListener('DOMContentLoaded', function() {
          typeHeader();
    });

    /*
    *  typed.js: wwww.mattboldt.com
    *  Type out header on page load.
    */
    function typeHeader() {
        $("#center-above").typed({
            strings: ["Stay fokuse", "Stay focused."],
            contentType: "html",
            showCursor: false,
            typeSpeed: 50,
            backSpeed: 50,
        });
    }

    /*
    *  Begin decrementing counter and switch start button to
    *  stop.
    */
    function startCounter() {
        $("#stopwatchStart").hide();
        $("#stopwatchStop").show();
        $("#stopwatchReset").show();
        $("#reset").show();
        timer = setInterval(countDown, 1000);
    }

    /*
    *  Stop decrementing counter and switch stop button to
    *  start.
    */
    function stopCounter() {
        $("#stopwatchStop").hide();
        $("#stopwatchStart").show();
        $("#reset").show();
        clearInterval(timer);
    }

    /*
    *  Reset counter and start button.
    */
    function resetCounter() {
        clearInterval(timer);
        $("#stopwatchStop").hide();
        $("#stopwatchStart").show();
        $("#stopwatchReset").hide();
        seconds = 120;
        $("#clock").html(seconds);
    }

    /*
    *  Decrement counter and play audio file after full
    *  120 second meditation.
    */
    function countDown() {
        seconds--;
        $("#clock").html(seconds);
        if (seconds == 0) {
            document.getElementById("audio").play();
            resetCounter();
        }
    }
})();
