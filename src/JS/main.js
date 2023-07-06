

$(document).ready(function() {
    //OPENING AND CLOSING NAVBAR ON SMALLER SCREENS
   $('.open-nav').click(function() {
    $('.navbar-nav').addClass('nav-close')
   })

   $('.nav-close-btn, .navbar-nav li a' ).click(function(){
    $('.navbar-nav').removeClass('nav-close')
   })

})


//CONVERTING SERVICES SECTION INTO CAROUSEL ON MOBILE SCREENS

let btnLeft = document.querySelector(".btn-right");
let btnRight = document.querySelector(".btn-left");

    btnLeft.addEventListener('click', function(e) {
        document.querySelector('.carousel').scrollLeft += 320;
    })

    btnRight.addEventListener('click', function (e) {
        document.querySelector('.carousel').scrollLeft += -320;

    })


