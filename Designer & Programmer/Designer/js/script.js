//Smooth Scroll
$('.transition-btn').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });

// Transition on scroll
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.navbar').css({'background' : '#000', 'height' : '40px', 'border-bottom' : '0'});
    } else {
      $('.navbar').css({'background' : 'rgba(3, 3, 3, 0.01)', 'height' : '90px', 'border-bottom' : '1px solid rgb(75, 75, 75)'});
    }

    if ($(this).scrollTop() > 250) {
      $('.video-text').css({'opacity' : '0'});
    } else {
      $('.video-text').css({'opacity' : '1'});
    }
  });
});