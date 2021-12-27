// Get today's date with Moment.js
var today = moment().format("dddd, MMMM Do");

// Set global variables
var timeArr = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var hourlyEvents;

// Color code past, present and future hours
var colorCheck = function() {
    $.each(timeArr, function(index, hour) {
        var minutesFrom = moment().diff(moment().hour(hour).minute(0), 'minutes');
        if (minutesFrom < 0) {
            $("." + hour + ".event").addClass("future");
        } else if (minutesFrom > 59) {
            $("." + hour + ".event").removeClass("present");
            $("." + hour + ".event").addClass("past");
        } else {
            $("." + hour + ".event").removeClass("future");
            $("." + hour + ".event").addClass("present");
        } 
    });
}
