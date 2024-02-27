$(document).ready(function() {
    $('.accordion a').click(function(){
      $(this).toggleClass('active');
      $(this).next('.FAQcontent').slideToggle(400);
     });
  });