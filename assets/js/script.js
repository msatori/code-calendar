//variables
var task = [];
var currentDayEl = document.getElementById("currentDay");
var saveButonEl = document.getElementById("button");



//display current day-make function
dateTime = function () {
    var displayDate = moment().format('MMMM Do YYYY');
    currentDayEl.textContent = displayDate;
    console.log(displayDate);
};
dateTime();

//use JQUERY to manipulate DOM
$(document).ready(function () {
    //listen for a save button click
    $(saveButonEl).on("click", function () {
       //get the value of the text input
       var event = $(this)
       .siblings(".description")
       .val();

       var time = $(this)
       .parent()
       .attr("id");

        //save value to local storage
    localStorage.setItem(event, time );
    });
});
//save text in local storage--use seperate functions for each hour??
//figure out how to get current hour 

//loop over current time blocks

//how to see if we've moved past current time

//bring saved data from localstorage