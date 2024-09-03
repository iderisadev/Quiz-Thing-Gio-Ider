$(document).ready(function(){
  $("#hide").click(function(){
    $("p").hide();
  });
  $("#show").toggle(function(){
    $("p").show();
  });
});
