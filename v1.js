$(document).ready(function(){

  $("#gopurpose").click(function(){
    $("#pages").load("purpose.htm");
    $("#lightsoff").prop('disabled', false);

  });

});
