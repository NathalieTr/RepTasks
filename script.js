document.addEventListener("DOMContentLoaded", function(){
    var clock = document.getElementById("clock");
    setInterval(time, 1000);
});

//fetches current time
function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  clock.textContent =
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}

//read .md file
fetch('tasks.md')
  .then(response => response.text())
  .then(text => test(text));

//needs script to load parser as shown in index.html
//parse markdown format to html
function test(placeholder) {
    console.log("nicht gerendert " + placeholder);
    var md = window.markdownit();
    var result = md.render(placeholder);
    console.log("gerendert " + result);
}
