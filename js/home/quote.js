/*
* onload tag not allowed with chrome extensions
*/
document.addEventListener('DOMContentLoaded', function() {
      quoteReader();
});

// https://www.sitepoint.com/jquery-read-text-file/
// typed.js: wwww.mattboldt.com
function quoteReader() {
    console.log("We in here reading quotes and stuff...");
    jQuery.get("https://raw.githubusercontent.com/williamgrosset/fokus/master/quotes/short-and-shuffled-quotes.txt", function(data) {    
        var fileContentLines = data.split("\n");
        var randomLineIndex = Math.floor(Math.random() * fileContentLines.length);
        var randomLine = fileContentLines[randomLineIndex];
        $("#bottom-quote").html(randomLine);
    });
}
