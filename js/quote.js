/*
* onload tag not allowed with chrome extensions
*/
document.addEventListener('DOMContentLoaded', function() {
      quoteReader();
});

/*
* startCounter():
* <description here>
*/
function quoteReader() {
    console.log("We in here reading quotes and stuff...");
    var reader = new FileReader();
    reader.readAsText("/quotes/short-and-shuffled-quotes.txt");
    var fileContent = reader.result;
    var fileContentLines = fileContent.split("\n");
    var randomLineIndex = Math.floor(Math.random() * fileContentLines.length);
    var randomLine = fileContentLines[randomLineIndex];
    $("#bottom-quote").html(randomLine);
}
