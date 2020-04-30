
var hourPlanner= document.querySelectorAll(".hour");
var textPlanner=document.querySelectorAll(".planner");
var saveBtn =document.querySelectorAll(".saveBtn");

$(document).ready(function() {
  $("#currentDay").text(moment().format('dddd')+","+ moment().format('MMMM Do'));
  var todayTime =moment().format('HH'); 
  console.log(todayTime);
  var getStorageList =["09","10","11","12","13","14","15","16","17"];
  getStorageList.forEach(element => {
   var getStorage=localStorage.getItem(element);
   $('#planner-' + element).val(getStorage);
    if(element < todayTime )
    {
      $('#planner-' + element).prop('disabled', true);
      $('#btn-'+element).prop('disabled',true);
      $('#planner-' + element).addClass('past');
      
    }
    if(element == todayTime)
    {
      $('#planner-' + element).addClass('present');
    }
    if(element > todayTime)
    {
      $('#planner-' + element).addClass('future');
    }
  });
  $(".saveBtn").on("click",function(){
    var btnValue = $(this).attr('value');
    var textAreaValue = $('#planner-' + btnValue).val();
    var setStorage = localStorage.setItem(btnValue,textAreaValue);
  }); 
});
