// Load and execute Carousel script
$.getScript( "assets/js/carousel.js" )
  .done(function( script, textStatus ) {
    console.log(textStatus);
  })
  .fail(function( jqxhr, settings, exception ) {
    console.error("fail: load carousel.js script");
});

$(".front-label").on('click', function(event){
    event.stopPropagation();
    event.stopImmediatePropagation();
    if(carousel_instance.dragged)
      return;

    switch($('.carousel').data("index")){
      case 0:
        console.log("portfolio");
        break;
      case 1:
        console.log("contact");
        break;
      case 2:
        console.log("bio");
        break;
      case 3:
        console.log("cv");
        break;
    }
});
