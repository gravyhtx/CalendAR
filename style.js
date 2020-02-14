var time09 = 9
var d = new Date();
var hours = d.getHours();
console.log(hours);
console.log(Date())

// Set today's date and time to document
$(".date").text(Date())


var input09 = $("#toDo09").val();

var inputStrg09 = localStorage.getItem(inputStrg09);

localStorage.setItem(input09, inputStrg09);

function clickCounter() {
    if(typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("toDo").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
      document.getElementById("toDo").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }


$("#btn09").on("click", function(event) {

    event.preventDefault();

    // Here we grab the text from the input box
    var inp09 = $("#toDo09").val();
    console.log(inp09)
    $("#toDo10").append.input09
})




// disble 9am-5pm
if (hours > 9){
    document.getElementById("toDo09").disabled = true;
}
if (hours > 10){
    document.getElementById("toDo10").disabled = true;
}
if (hours > 11){
    document.getElementById("toDo11").disabled = true;
}
if (hours > 12){
    document.getElementById("toDo12").disabled = true;
}
if (hours > 13){
    document.getElementById("toDo13").disabled = true;
}
if (hours > 14){
    document.getElementById("toDo14").disabled = true;
}
if (hours > 15){
    document.getElementById("toDo15").disabled = true;
}
if (hours > 16){
    document.getElementById("toDo16").disabled = true;
}
if (hours > 17){
    document.getElementById("toDo17").disabled = true;
}

