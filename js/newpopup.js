function fokusTab() {
    var win = window.open("/html/home.html");
    win.focus()
}

function documentEvents() {
    var input = $("input").val();
    var domainList = document.getElementById("domain");
    var domain = document.createElement("li"); 
    domain.innerHTML = input;
    domainList.appendChild(domain);
}

document.getElementById('add').addEventListener('click', documentEvents);
document.getElementById('tab').addEventListener('click', fokusTab);
