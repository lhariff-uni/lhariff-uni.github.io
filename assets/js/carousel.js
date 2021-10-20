let carousel_instance = null;
const carousel_delay = 120;
let carousel_size = 0;

$(document).ready(function(){
  carousel_size = document.querySelectorAll('.carousel-item').length;
  $('.carousel').carousel(
  {
    dist: 0,
    padding: 0,
    fullWidth: true,
    indicators: true,
    duration: 100,
    onCycleTo: function(data) {
      $('.carousel').data("index", $(data).index());
   }
  });
  carousel_instance = M.Carousel.getInstance(document.querySelector(".carousel"));
  for (var i = 1; i <= carousel_size; i++) {
    setTimeout(a => {
      carousel_instance.next();
    },carousel_delay*i);
  }
});
