$(document).ready(function () {

  var currentHour = moment().hour();
  var currentDay = moment().day();
  var currentDate = moment(); // Today Date

  if (currentDay == 0) { // If Sunday
    currentDate = moment()
      .add(1, 'days')
      .hour(0)
      .minute(0)
      .second(0); // Monday's date
  } else if (currentDay == 6) { // If Saturday
    currentDate = moment() 
      .add(2, 'days')
      .hour(0)
      .minute(0)
      .second(0); // Monday's date
  } else if (currentDay == 5 && currentHour >= 18) { // If Friday after 6PM
    currentDate = moment() 
      .add(3, 'days')
      .hour(0)
      .minute(0)
      .second(0); // Monday's date
  }else if (currentHour >= 18) { // Past 6PM in business days
    currentDate = moment()
      .add(1, 'days')
      .hour(0)
      .minute(0)
      .second(0); //next business day
  }
  //Showing the Current day 
  $("#currentDay").text(currentDate.format('dddd') + "," + currentDate.format('MMMM Do'));
  // 24 hour format 'HH'
  var currentTime = parseInt(currentDate.format('HH'));
  console.log(currentTime);
  var workingHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  workingHours.forEach(workingHour => {
    workingHour = parseInt(workingHour);
    //Getting schedules from local storage
    var schedule = localStorage.getItem(currentDate.format('L') + "-" + workingHour);
    $('#planner-' + workingHour).val(schedule);
    if (workingHour < currentTime) { // If working hour is less than current time ,then disable the text area and buttons
      
      $('#planner-' + workingHour).prop('disabled', true);
      $('#btn-' + workingHour).prop('disabled', true);
      $('#planner-' + workingHour).addClass('past');
    } else if (workingHour === currentTime) { // If working hour equals to current time then display in red and editable
      $('#planner-' + workingHour).addClass('present');
    } else if (workingHour > currentTime) { // If working hour after current time then display in green and editable
      $('#planner-' + workingHour).addClass('future');
    }
  });
  $(".saveBtn").on("click", function () {
    var btnValue = $(this).attr('value');
    var schedule = $('#planner-' + btnValue).val();
    localStorage.setItem(currentDate.format('L') + "-" + btnValue, schedule);// Setting the schedules in local storage
  });
});