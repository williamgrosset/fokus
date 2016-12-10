var React = require('react');
var $ = require('jQuery');

function fokusTab() {
    var win = window.open("/html/home.html");
    win.focus()
}

function documentEvents() {
    var input = $("input").val();
    // domainList does not need to be created for every function call
    var domainList = document.getElementById("domain");
    var domain = document.createElement("li"); 
    var button = document.createElement("button");
    button.innerHTML = "Delete";
    domain.innerHTML = input;
    domain.appendChild(button);
    domainList.appendChild(domain);
}

document.getElementById('add').addEventListener('click', documentEvents);
document.getElementById('tab').addEventListener('click', fokusTab);
