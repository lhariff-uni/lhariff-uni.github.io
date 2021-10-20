/*
document.addEventListener('DOMContentLoaded', function() {
 var elems = document.querySelectorAll('.carousel');
 var instances = M.Carousel.init(elems, {
   indicators: true,
   padding: 0,
   fullWidth: true
 });
});
*/

let carousel_instance = null;
const carousel_delay = 120;
// CAROUSEL
$(document).ready(function(){
  //console.log("init");
  $('.carousel').carousel(
  {
    dist: 0,
    padding: 0,
    fullWidth: true,
    indicators: true,
    duration: 100,
    onCycleTo: function(data) {
      $('.carousel').data("index", $(data).index());
      //console.log("onCycleTo: " + $('.carousel').data("index"));
   }
  });
  carousel_instance = M.Carousel.getInstance(document.querySelector(".carousel"));
  setTimeout(a => {
    carousel_instance.next();
  },carousel_delay*1);
  setTimeout(a => {
    carousel_instance.next();
  },carousel_delay*2);
  setTimeout(a => {
    carousel_instance.next();
  },carousel_delay*3);
  setTimeout(a => {
    carousel_instance.next();
  },carousel_delay*4);
});

//setInterval(() => { $('.carousel').carousel('next'); }, 1000);


$(".front-label").on('click', function(event){
    event.stopPropagation();
    event.stopImmediatePropagation();
    //console.log("click");
    //console.log(carousel_instance.dragged);

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
