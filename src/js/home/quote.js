(function() {

    var randomLine = ""; 
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
            randomLine = fileContentLines[randomLineIndex];
            typeFooter();
        });
    }

    /*
    *  typed.js: wwww.mattboldt.com
    *  Type out footer quote on page load.
    */
    function typeFooter() {
        $("#bottom-quote").typed({
            strings: ["Do what you love. ^2000", randomLine],
            contentType: "html",
            showCursor: false,
            typeSpeed: 10,
            backSpeed: 10
        });
    }
})();
