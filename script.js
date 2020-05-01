$(document).ready(function() {
  $("#currentDay").text(moment().format('dddd')+","+ moment().format('MMMM Do'));
  var currentTime =parseInt(moment().format('HH')); 
  var getStorageList =[9,10,11,12,13,14,15,16,17];
  getStorageList.forEach(element => {
    element = parseInt(element);
    var getStorage=localStorage.getItem(element);
    $('#planner-' + element).val(getStorage);
     if(element < currentTime )
      {
        $('#planner-' + element).prop('disabled', true);
        $('#btn-'+element).prop('disabled',true);
        $('#planner-' + element).addClass('past');
      }
     if(element === currentTime)
      {
        $('#planner-' + element).addClass('present');
      }
     if(element > currentTime)
      {
        $('#planner-' + element).addClass('future');
        
      }
  });
  $(".saveBtn").on("click",function(){
    var btnValue = $(this).attr('value');
    var textAreaValue = $('#planner-' + btnValue).val();
    localStorage.setItem(btnValue,textAreaValue);
  }); 
});