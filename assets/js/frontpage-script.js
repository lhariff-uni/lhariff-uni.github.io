let carousel_instance = null;
// Load and execute Carousel script
$.getScript( "assets/js/carousel.js" )
  .done(function( script, textStatus ) {
    console.log(textStatus);
  })
  .fail(function( jqxhr, settings, exception ) {
    console.error("fail: load carousel.js script");
});

$(document).keyup(e => {
  switch (e.keyCode) {
     case 40: // down
          break;
     case 38: // up
          break;
     case 37: // left
           carousel_instance.prev();
           break;
     case 39: // right
           carousel_instance.next();
           break;
     case 13: // enter
          $(".front-label").click(); // fires multiple times bc there are multiple front labels
          break;
     default:
         console.log(e.keyCode);
         }
});


$(".front-label").on('click', function(event){
    event.stopPropagation();
    event.stopImmediatePropagation();
    if(carousel_instance.dragged)
      return;

    switch($('.carousel').data("index")){
      case 0:
        console.log("portfolio");
        window.location.href = 'portfolio.html';
        break;
      case 1:
        console.log("contact");
        window.location.href = 'contact.html';
        break;
      case 2:
        console.log("bio");
        window.location.href = 'about-me.html';
        break;
      case 3:
        console.log("cv");
        window.location.href = 'files.html';
        break;
    }
});
