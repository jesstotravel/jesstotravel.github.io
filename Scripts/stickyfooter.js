$(document).ready(function () {
        
              // sticky footer scroll effect
              $(document).scroll(function() {
                if($('.nav__wrapper').offset().top + $('.nav__wrapper').height() >= $('footer').offset().top -10) {
                  $('.nav__wrapper').css({
                    'position': 'absolute',
                    'top': 0
                  });
                }
                  
                if($(document).scrollTop() + window.innerHeight < $('footer').offset().top) {
                  $('.nav__wrapper').css('position', 'fixed'); // restore when you scroll up
                }

              });
        });