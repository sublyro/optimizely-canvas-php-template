
//$("#disable-toggle button").click(function(e) {alert('aaaa');e.stopPropagation();} );

$( document ).ready(function() {


$(".data-sidebar").on( "click", "button.enable", function(e) {
  $("#disable-app input:eq(0)").val("enable");
});

$(".data-sidebar").on( "click", "button.disable", function(e) {
  $("#disable-app input:eq(0)").val("disable");
});



});