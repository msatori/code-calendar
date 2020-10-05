//variables

var currentDayEl = document.getElementById("currentDay");
var saveButonEl = document.getElementById("button");
var taskItems = [];

//create a function to display current time

 //display current day-make function
 var displayDate = moment().format('MMMM Do YYYY');
 currentDayEl.textContent = displayDate;
 console.log(displayDate);


//save description info to local storage 
$(document).ready(function(event) {
  
    //empty array to house time
    $(".saveBtn").on("click", function () {
        //prevent refresh from erasing data
        
        //save text input to local storage
        var time = $(this).parent().attr("id");
        var text = $(this).siblings(".description").val();
        
        localStorage.setItem(text, time);
    });

});



function updateTime() {
    var currentTime = moment().hours();
    $(".time-block").each(function(){
        var selectTime = parseInt($(this).attr("id").split("-")[1])
        if (selectTime < currentTime) {
            $(this).addClass("past");
            $(this).removeClass("present", "future");
        }
        else if (selectTime===currentTime) {
            $(this).addClass("present");
            $(this).removeClass("past", "future")
        }
        else {
            $(this).addClass("future");
            $(this).removeClass("past", "present");
        };
       

    })

     //call items out of local storage
     var storedTasks = JSON.parse(localStorage.getItem(".description"));

     if (storedTasks !=="") {
        taskItems = storedTasks;
     };
};
    
updateTime();





//save text in local storage--use seperate functions for each hour??




//bring saved data from localstorage