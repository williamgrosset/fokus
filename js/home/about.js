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
        strings: ["Coming soon."],
        contentType: "html",
        showCursor: false,
        typeSpeed: 90,
        backSpeed: 90,
    });
}
