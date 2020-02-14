var d = new Date();
var hours = d.getHours();
console.log(hours);
console.log(Date())

// Set today's date and time to document
$(".date").text(Date())


var input09 = $("#toDo09").val();

var inputStrg09 = localStorage.getItem(inputStrg09);

localStorage.setItem(input09, inputStrg09);

// if hours > 9 then
// document.getElementById("toDo09").disabled = true;