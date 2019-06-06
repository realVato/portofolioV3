$(function() {

    var skills = ['HTML/CSS', 'SASS', 'jQuery', 'Wordpress'];
    var counter = 0;
    
    var skill = $('#skills');

    setInterval(function(){
        
        skill.text(skills[counter++]);
        
        if(counter >= skills.length){
            counter = 0;
        }
    }, 800)
});

$('.about-me a').on('click', function(event) {
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