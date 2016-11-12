function fokusTab() {
    var win = window.open("/html/home.html");
    win.focus()
}

document.getElementById('tab').addEventListener('click', fokusTab);
