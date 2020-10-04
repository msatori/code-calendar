//variables

var currentDayEl = document.getElementById("currentDay");
var saveButonEl = document.getElementById("button");
var textArea = document.getElementById("textInput");

//create a function to display current time
function updateTime() {
    var currentTime = moment().hours();
    console.log(currentTime);
};

$(document).ready(function (event) {
    
    //display current day-make function
    var displayDate = moment().format('MMMM Do YYYY');
    currentDayEl.textContent = displayDate;
    console.log(displayDate);


    $(".saveBtn").on("click", function () {
        //save text input to local storage
        var text = document.getElementById("textInput").value;
        var time = $(this).parent().attr("id")

        localStorage.setItem(text, time);
        event.preventDefault();
    });
    //call current time
    updateTime();


    //create a loop for the time blocks

    $(".time-block").on("click", function(text, time) {
        
    })

});




//save text in local storage--use seperate functions for each hour??





//

//bring saved data from localstorage