/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '../particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});


$(document).ready(function(){
  $(".block, .proj_block").hover(function(){
    $(this).toggleClass("block-anim");
  });
});

