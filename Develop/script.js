// Displays current date and time under title
var currentDay = $('#currentDay');
currentDay.text(dayjs().format("dddd, MMM D h[:]mm"))

// saves current hour
var currentHour = dayjs().format("H");

// check to see if current hour logged is current
// console.log(currentHour);

$(document).ready(function () {
  //  Save button click listener
  $(".saveBtn").on("click", function () {

    var text = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");
    // checks to see if hour and text variable logs out
    // console.log(hour)
    // console.log(text)

    // Saves hour and description text to localStorage
    localStorage.setItem(hour, text);
  })


  function trackTime() {
    $(".time-block").each(function () {

      var timeBlock = parseInt($(this).attr('id').split("hour")[1]);

      // checks to see if currrent hour logs out
      // console.log(timeBlock);

      // Checks hour and adds past, present, or future class color background
      if (timeBlock < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      }
      else if (timeBlock == currentHour) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
      }
      else {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
      }
    })
  }

  trackTime();
})

// Gets item from localStorage
$("#hour9 .description").val(localStorage.getItem("hour9"))
$("#hour10 .description").val(localStorage.getItem("hour10"))
$("#hour11 .description").val(localStorage.getItem("hour11"))
$("#hour12 .description").val(localStorage.getItem("hour12"))
$("#hour13 .description").val(localStorage.getItem("hour13"))
$("#hour14 .description").val(localStorage.getItem("hour14"))
$("#hour15 .description").val(localStorage.getItem("hour15"))
$("#hour16 .description").val(localStorage.getItem("hour16"))
$("#hour17 .description").val(localStorage.getItem("hour17"))