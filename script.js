
$(".clickable").click(function(){
  $(".etana-hidden").toggle();
   $(".etana-showing").toggle();
   $("img").show();
});

$("button").click(function() {
  $("#first").fadeToggle(4000);
  $("#second").fadeToggle(4000);
  $(".test").show();
});


$("button#green").click(function(){
  $("body").removeClass();
  $("body").addClass("green-background");
});

$("button#red").click(function(){
  $("body").removeClass();
  $("body").addClass("red-background");
});

$("#trial").click(function() {
  $("body").addClass("trial");
});
