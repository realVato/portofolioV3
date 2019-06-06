const left = document.querySelector('.left');
const right = document.querySelector('.right');
const main = document.querySelector('.main');

function isWindowSmall()
{
  if (window.innerWidth > 800) {
    left.addEventListener('mouseenter', () => {
        main.classList.add('hover-left');
    });
    left.addEventListener('mouseleave', () => {
        main.classList.remove('hover-left');
    });
    right.addEventListener('mouseenter', () => {
        main.classList.add('hover-right');
    });
    right.addEventListener('mouseleave', () => {
        main.classList.remove('hover-right');
    });
    
  };
}

isWindowSmall();

window.onresize = function(){
    location.reload();
}
