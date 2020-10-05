//variables

var currentDayEl = document.getElementById("currentDay");
var saveButonEl = document.getElementById("button");

$(document).ready(function() {
const times = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
const arrayItems = [];

//create a function to display current time

 //display current day-make function
 var displayDate = moment().format('MMMM Do YYYY');
 currentDayEl.textContent = displayDate;
 console.log(displayDate);


//save description info to local storage 

  
    //empty array to house time
    $(".saveBtn").on("click", function () {
        //save text input to local storage
        var time = $(this).parent().attr("id");
        var text = $(this).siblings(".description").val();
        
        localStorage.setItem(text, time);
        
        arrayTime.push(time);
        console.log(arrayItems);
    });

 

   
updateTime();

function updateTime() {
    var currentTime = moment().hours(); 
    $(".description").each(function(){
        var timeSlot =  i = 0; times.length; i++
        if (timeSlot < currentTime) {
            $(this).addClass("past");
            $(this).removeClass ("present", "future");
        } else if (timeSlot === currentTime) {
            $(this).addClass("present");
            $(this).removeClass("past", "future");
        }else {
            $(this).addClass("present");
            $(this).removeClass("past", present);
        }
    });

}
});
//call items out of local storage






     
    


    
    







//save text in local storage--use seperate functions for each hour??

