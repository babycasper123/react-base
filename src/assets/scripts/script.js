$(document).ready(function () {
    // Slick slider Loader
    $('.slider').slick({
       dots:true,
       responsive: [
        {
          breakpoint: 992,
          settings: {
            dots: false
          }
        }
      ]
          
    });
})