//variables

var currentDayEl = document.getElementById("currentDay");
var saveButonEl = document.getElementById("button");

$(document).ready(function (event) {
    const times = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
    const arrayItems = [];

    //create a function to display current time

    //display current day-make function
    var displayDate = moment().format('MMMM Do YYYY');
    currentDayEl.textContent = displayDate;
    console.log(displayDate);

    //empty array to house time
    $(".saveBtn").on("click", function (e) {
        e.preventDefault();
        //save text input to local storage
        var time = $(this).parent().attr("id");
        var text = $(this).siblings(".description").val();

        localStorage.setItem(text, time);
        localStorage.setItem(text, JSON.stringify(text));

        arrayItems.push(time);
        console.log(arrayItems);


    });

    //loop through times to set color
    function updateTime() {
        var currentTime = moment().hours();
        console.log(currentTime);
        $(".description").each(function () {
            var timeSlot = i = 0; times.length; i++
            if (timeSlot < currentTime) {
                $(this).addClass("past");
                $(this).removeClass("present", "future");
            } else if (timeSlot === currentTime) {
                $(this).addClass("present");
                $(this).removeClass("past", "future");
            } else {
                $(this).addClass("present");
                $(this).removeClass("past", present);
            }
        });

    };
    updateTime();
    //check to see if time needs to be update by checking time left until next hour
    var timeCheck = setInterval(updateTime, 15000);
    console.log(timeCheck);



});


