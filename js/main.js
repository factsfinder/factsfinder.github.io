$(document).ready(function($){
  $("body").addClass("animated zoomIn");
  $(".block, .proj_block").hover(function(){
    $(this).toggleClass("animated pulse");
  });
});
