$(document).ready(function(){
    if(window.location.hash == "#contact") {
      $('#contact').addClass("active");
    } else {
      $('#intro').addClass("active");
    }

    $('.collapsible').collapsible({
      inDuration: 200,
      outDuration:100
    });
    $('.collapsible.expandable').collapsible({
      accordion: false
    });

  });
