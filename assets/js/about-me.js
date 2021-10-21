$(document).ready(function(){
    $('.collapsible').collapsible({
      inDuration: 200,
      outDuration:100
    });
    $('.collapsible.expandable').collapsible({
      accordion: false
    });
  });
