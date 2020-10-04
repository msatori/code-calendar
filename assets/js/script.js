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
    $(saveButonEl).on("click", function () {
        console.log(saveButonEl);
    });
});
//save text in local storage--use seperate functions for each hour??

//create schedule
    //first make the layout of the tasks-standard business hours




//display current date
    //use moments.js for date and time 


//save JSON