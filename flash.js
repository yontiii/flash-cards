$(document).ready(function(){
  $("#themes").click(function(){
    $("body").addClass("light-bg");
  });

  $("#js").click(function() {
    $("#java").slideToggle(500);
  });

  $("#fun").click(function() {
    $("#function").slideToggle(500);
  });

  $("#var").click(function() {
    $("#vardef").slideToggle(500);
  });

  $("#str").click(function() {
    $("#stringsdef").slideToggle(500);
  });

  $("#try").click(function() {
    $("#trial").slideToggle(500);
  });

  $("#meth").click(function() {
    $("#methods").slideToggle(500);
  });
});
