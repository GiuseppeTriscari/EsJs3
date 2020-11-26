document.addEventListener("DOMContentLoaded", addButton);

var add1;
var add2;
var sott1;
var sott2;
var molt1;
var molt2;
var div1;
var div2;

var addButton = function(){
    var btn = document.createElement("button");
    btn.innerHTML = "GARPEZ";
    document.getElementById("body1").append(btn);
    btn.addEventListener("click", change)
}

var change=function (){
    console.log("SCISCO");
    document.getElementById('div1').setAttribute("style", "background-color: cyan");
    document.getElementById("span1").innerHTML = "<h1>CYAN SUS</h1>";

}