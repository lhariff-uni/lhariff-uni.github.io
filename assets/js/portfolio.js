$(document).ready(function(){
    $('.collapsible').collapsible({
      inDuration: 200,
      outDuration:100
    });
    $('.collapsible.expandable').collapsible({
      accordion: false
    });
  });

  $(".card").on('click', function(event){
    console.log("card click");
    console.log($(this).attr('url'));
    window.location.href = $(this).attr('url');
  });
