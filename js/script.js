// Skills

(function() {

    var skills = ['HTML/CSS', 'SASS', 'JavaScript', 'jQuery'];
    var counter = 0;
    
    var skill = $('#skills');

    setInterval(function(){
        
        skill.text(skills[counter++]);
        
        if (counter >= skills.length){
            counter = 0;
        }
    }, 1000)
})();


// Cover changes as skills do

(function() {

  var backgrounds = [];
  backgrounds[0] = '../img/html.jpg';
  backgrounds[1] = '../img/scss.jpg';
  backgrounds[2] = '../img/javascript.jpg';
  backgrounds[3] = '../img/jquery.jpg';
  var counter = 0;

  var background = document.getElementById('intro');
  
  setInterval(function(){
    
    background.style.backgroundImage = 'url(' + backgrounds[counter++] + ')';

    if (counter >= backgrounds.length){
        counter = 0;
  }

  }, 1000)
})();


// Hover down

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