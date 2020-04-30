
var hourPlanner= document.querySelectorAll(".hour");
var textPlanner=document.querySelectorAll(".planner");
var saveBtn =document.querySelectorAll(".saveBtn");

$(document).ready(function() {
  $("#currentDay").text(moment().format('dddd')+","+ moment().format('MMMM Do'));
  var getStorageList =["9","10","11","12","13","14","15","16","17"];


  $(".saveBtn").on("click",function(){
    var btnValue = $(this).attr('value');
    var textAreaValue = $('#planner-' + btnValue).val();
    
    console.log(btnValue + "----" + textAreaValue);
    var setStorage = localStorage.setItem(btnValue,textAreaValue);
  
  });

  
      
   
});
