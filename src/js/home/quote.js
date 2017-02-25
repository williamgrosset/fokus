(function() {

    document.addEventListener('DOMContentLoaded', function() {
          quoteReader();
    });
    
    /*
    *  Make AJAX request to read and retrieve a random
    *  quote from the text file.
    */
    function quoteReader() {
        jQuery.get("https://raw.githubusercontent.com/williamgrosset/fokus/master/quotes/short-and-shuffled-quotes.txt", function(data) {    
            var fileContentLines = data.split("\n");
            var randomLineIndex = Math.floor(Math.random() * fileContentLines.length);
            var randomLine = fileContentLines[randomLineIndex];
            $("#bottom-quote").html(randomLine);
        });
    }
})();
