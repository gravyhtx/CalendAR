moment()
var d = new Date();
var hours = d.getHours();
var today = moment().format('LLLL');
console.log(hours);
console.log(today);
console.log(Date());

$("#clearAll").on("click", function(event) {
localStorage.clear();
document.getElementById('toDo09').innerHTML = "";
document.getElementById('toDo10').innerHTML = "";
document.getElementById('toDo11').innerHTML = "";
document.getElementById('toDo12').innerHTML = "";
document.getElementById('toDo13').innerHTML = "";
document.getElementById('toDo14').innerHTML = "";
document.getElementById('toDo15').innerHTML = "";
document.getElementById('toDo16').innerHTML = "";
document.getElementById('toDo17').innerHTML = "";
})
// Set today's date and time to document
$(".date").text(today);

if (localStorage.get09 !== undefined) {
var input09 = $("#toDo09");
var inputStr09 = localStorage.getItem('get09');
document.getElementById('toDo09').innerHTML = localStorage.get09;
}

if (localStorage.get10 !== undefined) {
var toDo10 = $("#toDo10")
$("#toDo10").innerHTML = localStorage.get10;
document.getElementById('toDo10').innerHTML = localStorage.get10;
}

if (localStorage.get11 !== undefined) {
var toDo011 = $("#toDo11")
$("#toDo11").innerHTML = localStorage.get11;
document.getElementById('toDo11').innerHTML = localStorage.get11;
}

if (localStorage.get12 !== undefined) {
var toDo12 = $("#toDo12")
$("#toDo12").innerHTML = localStorage.get12;
document.getElementById('toDo12').innerHTML = localStorage.get12;
}

if (localStorage.get13 !== undefined) {
var toDo13 = $("#toDo13")
$("#toDo13").innerHTML = localStorage.get13;
document.getElementById('toDo13').innerHTML = localStorage.get13;
}

if (localStorage.get14 !== undefined) {
var toDo14 = $("#toDo14")
$("#toDo14").innerHTML = localStorage.get14;
document.getElementById('toDo14').innerHTML = localStorage.get14;
}

if (localStorage.get15 !== undefined) {
var toDo15 = $("#toDo15")
$("#toDo15").innerHTML = localStorage.get15;
document.getElementById('toDo15').innerHTML = localStorage.get15;
}

if (localStorage.get16 !== undefined) {
var toDo16 = $("#toDo16")
$("#toDo16").innerHTML = localStorage.get16;
document.getElementById('toDo16').innerHTML = localStorage.get16;
}

if (localStorage.get17 !== undefined) {
var toDo17 = $("#toDo17")
$("#toDo17").innerHTML = localStorage.get17;
document.getElementById('toDo17').innerHTML = localStorage.get17;
}





$("#btn09").on("click", function(event) {
    event.preventDefault();
    var inp09 = $("#toDo09").val();
    console.log(inp09)
    localStorage.setItem("get09", inp09);
})

$("#btn10").on("click", function(event) {
    event.preventDefault();
    var inp10 = $("#toDo10").val();
    console.log(inp10)
    localStorage.setItem("get10", inp10);
})

$("#btn11").on("click", function(event) {
    event.preventDefault();
    var inp11 = $("#toDo11").val();
    console.log(inp11)
    localStorage.setItem("get11", inp11);
})

$("#btn12").on("click", function(event) {
    event.preventDefault();
    var inp12 = $("#toDo12").val();
    console.log(inp12)
    localStorage.setItem("get12", inp12);
})

$("#btn13").on("click", function(event) {
    event.preventDefault();
    var inp13 = $("#toDo13").val();
    console.log(inp13)
    localStorage.setItem("get13", inp13);
})

$("#btn14").on("click", function(event) {
    event.preventDefault();
    var inp14 = $("#toDo14").val();
    console.log(inp14)
    localStorage.setItem("get14", inp14);
})

$("#btn15").on("click", function(event) {
    event.preventDefault();
    var inp15 = $("#toDo15").val();
    console.log(inp15)
    localStorage.setItem("get15", inp15);
})

$("#btn16").on("click", function(event) {
    event.preventDefault();
    var inp16 = $("#toDo16").val();
    console.log(inp16)
    localStorage.setItem("get16", inp16);
})

$("#btn17").on("click", function(event) {
    event.preventDefault();
    var inp17 = $("#toDo17").val();
    console.log(inp17)
    localStorage.setItem("get17", inp17);
})


// document.getElementById("toDo09").disabled = true;

// disble 9am-5pm
if (hours > 9){
    document.getElementById("toDo09").disabled = true;
    document.getElementById("time09").style.backgroundColor = "rgba(228, 102, 102, 0.7)";
}
if (hours > 10){
    document.getElementById("toDo10").disabled = true;
    document.getElementById("time10").style.backgroundColor = "rgba(228, 102, 102, 0.7)";
}
if (hours > 11){
    document.getElementById("toDo11").disabled = true;
    document.getElementById("time11").style.backgroundColor = "rgba(228, 102, 102, 0.7)";
}
if (hours > 12){
    document.getElementById("toDo12").disabled = true;
    document.getElementById("time12").style.backgroundColor = "rgba(228, 102, 102, 0.7)";
}
if (hours > 09){
    document.getElementById("toDo13").disabled = true;
    document.getElementById("time13").style.backgroundColor = "rgba(228, 102, 102, 0.7)";
}
if (hours > 14){
    document.getElementById("toDo14").disabled = true;
    document.getElementById("time14").style.backgroundColor = "rgba(228, 102, 102, 0.7)";
}
if (hours > 15){
    document.getElementById("toDo15").disabled = true;
    document.getElementById("time15").style.backgroundColor = "rgba(228, 102, 102, 0.7)";
}
if (hours > 16){
    document.getElementById("toDo16").disabled = true;
    document.getElementById("time16").style.backgroundColor = "rgba(228, 102, 102, 0.7)";
}
if (hours > 17){
    document.getElementById("toDo17").disabled = true;
    document.getElementById("time17").style.backgroundColor = "rgba(228, 102, 102, 0.7)";
}

